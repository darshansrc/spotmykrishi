import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getProducts } from "@/actions/supabase";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import Image from "next/image";

export default async function Landing() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);
  const { products } = await getProducts();

  const whatsappLink = (product) => {
    const message = encodeURIComponent(
      `I'm interested in buying ${product.product_name}. Can you provide more information?`
    );
    return `https://wa.me/+917022472627?text=${message}`;
  };

  return (
    <div
      className="flex min-w-full flex-col p-12 pt-4 items-center"
      suppressHydrationWarning
    >
      <h1 className="text-3xl font-bold mb-8 text-green-800">Our Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12">
        {products.map((product) => (
          <Card
            key={product.product_id}
            className="w-full"
            suppressHydrationWarning
          >
            <CardHeader className="flex flex-row justify-between items-center">
              <CardTitle className="line-clamp-1">
                {product.product_name}
              </CardTitle>
              <Badge variant="outline" className="line-clamp-1">
                {product.product_category}
              </Badge>
            </CardHeader>
            <CardContent>
              {product.product_images && product.product_images.length > 0 ? (
                <Carousel className="w-full max-w-xs mx-auto mb-4">
                  <CarouselContent>
                    {product.product_images.map((image, index) => (
                      <CarouselItem key={index}>
                        <img
                          src={`${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/product_images/${image}`}
                          alt={`Product Image ${index + 1}`}
                          className="w-full h-64 object-cover rounded-lg border bg-primary-foreground"
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious />
                  <CarouselNext />
                </Carousel>
              ) : (
                <div className="w-full mb-4 h-64 object-cover rounded-lg border bg-primary-foreground" />
              )}
              <p className="text-sm text-gray-600 mb-2 line-clamp-4">
                {product.product_description}
              </p>
            </CardContent>
            <CardFooter className="flex border-t pt-4 justify-between items-center">
              <p className="font-semibold">₹{product.product_price}</p>
              <a
                href={whatsappLink(product)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-green-800 hover:bg-green-900">
                  Buy Now
                </Button>
              </a>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
