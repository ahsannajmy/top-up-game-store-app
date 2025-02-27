import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "Arthur Leywin's Store | %s",
    default: "Arthur Leywin's Store",
  },
};

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex justify-center h-screen items-center">{children}</div>
  );
}
