"use client";

import { Plus } from "lucide-react";
import { GlobalModal } from "../global-modal";

import { AddCategoryForm } from "../form/add-category.form";

export const ModalAddCategory = () => {
  return (
    <GlobalModal openModalButtonTitle="Tambah Kategori" icon={Plus}>
      <AddCategoryForm />
    </GlobalModal>
  );
};
