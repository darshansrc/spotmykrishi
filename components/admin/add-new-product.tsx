"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { addProduct } from "@/actions/supabase";
import { IconSpinner } from "./submit-form";
import toast from "react-hot-toast";
import { Cross, CrossIcon, X } from "lucide-react";

export interface NewProductFormData {
  product_name: string;
  product_description: string;
  product_price: string;
  product_category: string;
  product_images: File[];
}

interface Errors {
  product_name?: string;
  product_description?: string;
  product_price?: string;
  product_category?: string;
}

const Text: React.FC<{ children: React.ReactNode; className?: string }> = ({
  children,
  className,
}) => <p className={`text-[12px] ${className}`}>{children}</p>;

export function AddNewProduct() {
  const [formData, setFormData] = useState<NewProductFormData>({
    product_name: "",
    product_description: "",
    product_price: "",
    product_category: "",
    product_images: [],
  });

  const [errors, setErrors] = useState<Errors>({});
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const validate = (): Errors => {
    const newErrors: Errors = {};
    if (!formData.product_name)
      newErrors.product_name = "Product name is required";
    if (!formData.product_description)
      newErrors.product_description = "Product description is required";
    if (!formData.product_price)
      newErrors.product_price = "Product price must be greater than 0";
    if (!formData.product_category)
      newErrors.product_category = "Product category is required";
    return newErrors;
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setLoading(true);
      console.log(formData);
      const { error } = await addProduct(formData);
      if (error) {
        toast.error(error.message);
      } else {
        toast.success("Product added successfully");
        setOpen(false);
        setFormData({
          product_name: "",
          product_description: "",
          product_price: "",
          product_category: "",
          product_images: [],
        });
      }
      setLoading(false);
      setErrors({});
    }
  };

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setFormData((prevData) => ({
        ...prevData,
        product_images: [
          ...prevData.product_images,
          ...Array.from(event.target.files),
        ],
      }));
    }
  };

  const handleRemoveImage = (index: number) => {
    setFormData((prevData) => {
      const updatedImages = prevData.product_images.filter(
        (_, i) => i !== index
      );
      return { ...prevData, product_images: updatedImages };
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          onClick={() => {
            setOpen(true);
          }}
          className="bg-green-700 hover:bg-green-800 rounded-lg py-1"
        >
          Add New Product
        </Button>
      </DialogTrigger>
      <DialogContent>
        <form
          onSubmit={handleSubmit}
          className="overflow-y-auto px-2 max-h-[80vh]"
        >
          <DialogHeader>
            <DialogTitle>Add New Product</DialogTitle>
            <DialogDescription>
              Fill in the form below to add a new product to Spotmykrishi.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4 w-full">
            <div className="flex flex-col gap-2 text-left">
              <Label htmlFor="product_name">Product Name</Label>
              <Input
                id="product_name"
                name="product_name"
                placeholder="Enter product name here..."
                value={formData.product_name}
                onChange={handleChange}
                autoComplete="off"
              />
              {errors.product_name && (
                <Text className="text-destructive">{errors.product_name}</Text>
              )}
            </div>
            <div className="flex flex-col gap-2 text-left">
              <Label htmlFor="product_description">Product Description</Label>
              <Textarea
                id="product_description"
                name="product_description"
                placeholder="Enter product description here..."
                value={formData.product_description}
                onChange={handleChange}
              />
              {errors.product_description && (
                <Text className="text-destructive">
                  {errors.product_description}
                </Text>
              )}
            </div>
            <div className="flex flex-col gap-2 text-left">
              <Label htmlFor="product_price">Product Price (In Rupees)</Label>
              <Input
                id="product_price"
                name="product_price"
                type="number"
                placeholder="Enter product price here..."
                value={formData.product_price}
                onChange={handleChange}
              />
              {errors.product_price && (
                <Text className="text-destructive">{errors.product_price}</Text>
              )}
            </div>
            <div className="flex flex-col gap-2 text-left">
              <Label htmlFor="product_category">Product Category</Label>
              <Select
                name="product_category"
                value={formData.product_category}
                onValueChange={(value) =>
                  setFormData((prevData) => ({
                    ...prevData,
                    product_category: value,
                  }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select product category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Plants</SelectLabel>
                    <SelectItem value="commercial-plants">
                      Commercial plants
                    </SelectItem>
                    <SelectItem value="exotic-plants">Exotic plants</SelectItem>
                    <SelectItem value="flowery-plants">
                      Flowery plants
                    </SelectItem>
                    <SelectItem value="forestry-plants">
                      Forestry plants
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              {errors.product_category && (
                <Text className="text-destructive">
                  {errors.product_category}
                </Text>
              )}
            </div>
            <div className="flex flex-col gap-2 text-left">
              <Label>Product Images</Label>
              <Input
                type="file"
                accept="image/*"
                multiple
                onChange={handleImageChange}
                className="mb-2"
              />
              <div className="grid grid-cols-2 gap-2  overflow-x-auto">
                {formData.product_images.map((image, index) => (
                  <div key={index} className="relative">
                    <img
                      src={URL.createObjectURL(image)}
                      alt={`Product image ${index + 1}`}
                      className=" w-full h-48 p-2 object-cover cursor-pointer rounded-lg border"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                      className="absolute top-1 right-1 bg-red-600 text-white size-6 rounded-full p-1"
                    >
                      <X className="size-4" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <DialogFooter>
            <Button
              variant="outline"
              className="rounded-lg py-1"
              disabled={loading}
              onClick={() => {
                setOpen(false);
                setFormData({
                  product_name: "",
                  product_description: "",
                  product_price: "",
                  product_category: "",
                  product_images: [],
                });
                setErrors({});
              }}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              className="bg-green-700 hover:bg-green-800 rounded-lg py-1"
              disabled={loading}
            >
              {loading ? (
                <>
                  <IconSpinner className="animate-spin h-5 w-5 mr-2" />
                  Saving...
                </>
              ) : (
                "Save Product"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
