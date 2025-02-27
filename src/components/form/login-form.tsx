"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { loginApiHandler } from "@/lib/service/auth";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "@/context/auth-context";
import { JWTPayload } from "@/interface/auth-interface";

const formSchema = z.object({
  username: z.string().trim().min(1, "Username tidak bisa kosong"),
  password: z.string().trim().min(1, "Password tidak bisa kosong"),
});

export function LoginForm() {
  const router = useRouter();
  const { updatePayload } = useAuth();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const data = await loginApiHandler(values.username, values.password);
      const payload = jwtDecode<JWTPayload>(data.data.token);
      updatePayload(payload);
      toast.success(data.message, {
        onAutoClose: () => {
          router.push("/dashboard");
        },
      });
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unknown error");
      console.log(error);
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-2 p-4"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="w-full block">Username</FormLabel>
              <FormControl>
                <Input
                  className="h-auto py-2 px-4"
                  placeholder="Username"
                  {...field}
                  onClick={() => form.clearErrors("username")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="w-full block">Password</FormLabel>
              <FormControl>
                <Input
                  type="password"
                  className="h-auto py-2 px-4"
                  placeholder="Password"
                  {...field}
                  onClick={() => form.clearErrors("password")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" variant="brutal" className="w-full mt-2">
          Login
        </Button>
      </form>
    </Form>
  );
}
