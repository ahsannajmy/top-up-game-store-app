import { Pencil } from "lucide-react";
import { GlobalModal } from "../global-modal";
import { EditCategoryForm } from "../form/edit-category-form";

export const ModalEditCategory = () => {
  return (
    <GlobalModal icon={Pencil} buttonVariant="warning">
      <EditCategoryForm />
    </GlobalModal>
  );
};
