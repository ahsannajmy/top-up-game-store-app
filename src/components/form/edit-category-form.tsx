import { DialogTitle } from "@radix-ui/react-dialog";
import { DialogContent, DialogDescription, DialogHeader } from "../ui/dialog";

export function EditCategoryForm() {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Ubah Kategori</DialogTitle>
        <DialogDescription>
          Kategori berupa generalisasi beberapa layanan
        </DialogDescription>
      </DialogHeader>
    </DialogContent>
  );
}
