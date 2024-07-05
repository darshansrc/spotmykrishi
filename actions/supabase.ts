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

export async function deleteProduct(productId: string) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const { error } = await supabase
    .from("products")
    .delete()
    .eq("product_id", productId);

  console.error("Error deleting product", error);

  revalidatePath("/admin", "layout");

  return { error };
}

export async function addProduct() {
  revalidatePath("/admin", "layout");
  return;
}
