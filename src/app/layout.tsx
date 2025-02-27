import "@/app/globals.css";
import { AuthProvider } from "@/context/auth-context";
import { Toaster } from "sonner";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
        <Toaster position="top-center" richColors duration={1000} />
      </body>
    </html>
  );
}
