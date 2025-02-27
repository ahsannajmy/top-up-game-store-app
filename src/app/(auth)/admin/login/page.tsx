import { LoginForm } from "@/components/form/login-form";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Admin Dashboard Login",
};

export default function LoginDashboard() {
  return (
    <Card className="overflow-y-auto max-h-[90vh]">
      <CardContent>
        <CardHeader className="p-2">
          <Image
            src={"/arthur-leywin-logo-admin.png"}
            className="w-full h-full"
            width={300}
            height={300}
            alt="arthur-leywin-store-logo"
          />
          <div className="flex flex-col gap-2 items-center">
            <span className="font-extrabold text-xl">Sign In</span>
            <span className="text-sm">Masukkan Kredensial Admin Anda</span>
          </div>
        </CardHeader>

        <LoginForm />
      </CardContent>
    </Card>
  );
}
