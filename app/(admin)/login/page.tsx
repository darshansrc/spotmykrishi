import { login } from "@/actions/supabase";
import { SubmitForm } from "@/components/admin/submit-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import ErrorMessage from "./_components/error-message";
import { createClient } from "@/utils/supabase/server";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function LoginForm() {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    redirect("/admin");
  }

  return (
    <div className="w-full h-screen flex bg-secondary items-center justify-center">
      <form className="w-full max-w-sm" action={login}>
        <Card className="w-full max-w-sm ">
          <CardHeader>
            <CardTitle className="text-2xl">Login</CardTitle>
            <CardDescription>Login to your admin dashboard.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                name="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                name="password"
                type="password"
                placeholder="******"
                required
              />
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-6">
            <ErrorMessage />
            <SubmitForm className="w-full bg-green-700 hover:bg-green-800">
              Sign In
            </SubmitForm>
          </CardFooter>
        </Card>
      </form>
    </div>
  );
}
