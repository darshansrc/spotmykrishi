"use client";
import { deleteProduct } from "@/actions/supabase";
import { Button } from "@/components/ui/button";
import React from "react";
import toast from "react-hot-toast";

export default function DeleteProduct(props: { productId: string }) {
  console.log("productId", props.productId);
  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this product?")) return;
    const { error } = await deleteProduct(props.productId);
    if (error) {
      return toast.error("Failed to delete product");
    }
    toast.success("Product deleted successfully");
  };
  return (
    <Button variant="destructive" onClick={handleDelete}>
      Delete
    </Button>
  );
}
