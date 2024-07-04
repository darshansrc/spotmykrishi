"use server";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { NewProductFormData } from "@/components/admin/add-new-product";

export async function login(formData: FormData) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const data = {
    email: formData.get("email") as string,
    password: formData.get("password") as string,
  };

  const { error } = await supabase.auth.signInWithPassword(data);

  if (error) {
    redirect(`/login?error=${error.message}`);
  }

  revalidatePath("/admin", "layout");
  redirect("/admin");
}

export async function logout() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  await supabase.auth.signOut();

  revalidatePath("/login", "layout");
  redirect("/login");
}

export async function getProducts() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { data: products, error } = await supabase.from("products").select();

  return { products, error };
}

export async function addProduct(formData: NewProductFormData) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const data = {
    product_name: formData.product_name,
    product_description: formData.product_description,
    product_price: formData.product_price,
    product_category: formData.product_category,
  };

  const { error } = await supabase.from("products").insert(data);
  revalidatePath("/admin", "layout");

  return { error };
}
