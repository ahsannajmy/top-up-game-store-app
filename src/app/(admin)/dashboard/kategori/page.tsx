import { ModalAddCategory } from "@/components/modal/modal-add-category";
import { CategoryTable } from "@/components/table/category-table";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kategori",
};

export default function Category() {
  return (
    <div className="p-4">
      <div className="space-y-4">
        <ModalAddCategory />
        <CategoryTable />
      </div>
    </div>
  );
}
