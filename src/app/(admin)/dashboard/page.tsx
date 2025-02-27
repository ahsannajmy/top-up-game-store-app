import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Halaman Utama",
};

export default function MainDashboard() {
  return (
    <>
      <div className="p-4">
        <span>Ini main dashboard</span>
      </div>
    </>
  );
}
