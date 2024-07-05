import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { getProducts } from "@/actions/supabase";
import { AddNewProduct } from "@/components/admin/add-new-product";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { products } = await getProducts();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return redirect("/login");
  }

  return (
    <div className="flex w-full flex-col p-12 pt-4 items-center">
      <div className="flex w-full items-center py-6 flex-row justify-between">
        <h4 className="text-xl font-semibold">Manage Products</h4>
        <AddNewProduct />
      </div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Product ID</TableHead>
            <TableHead>Product Name</TableHead>
            <TableHead>Product Category</TableHead>
            <TableHead>Product Description</TableHead>
            <TableHead>Product Price</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {products.map((product) => (
            <TableRow key={product.product_id}>
              <TableCell>{product.product_id}</TableCell>
              <TableCell>{product.product_name}</TableCell>
              <TableCell>
                <Badge variant="outline">{product.product_category}</Badge>
              </TableCell>
              <TableCell>{product.product_description}</TableCell>
              <TableCell>₹{product.product_price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
