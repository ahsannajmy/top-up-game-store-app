import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { DialogFooter, DialogHeader } from "../ui/dialog";
import { Button } from "../ui/button";
import { DialogContent, DialogDescription, DialogTitle } from "../ui/dialog";
import { toast } from "sonner";
import { createCategoryHandler } from "@/lib/service/category-admin";

const formSchema = z.object({
  categoryName: z.string().trim().min(1, {
    message: "Nama kategori tidak bisa kosong",
  }),
});

export function AddCategoryForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      categoryName: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const data = await createCategoryHandler(values);
      toast.success(data.message);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unknown error");
    }
  }

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Tambah Kategori Baru</DialogTitle>
        <DialogDescription>
          Kategori berupa generalisasi beberapa layanan
        </DialogDescription>
      </DialogHeader>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="p-4 space-y-4">
          <FormField
            control={form.control}
            name="categoryName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="block w-full">Nama Kategori</FormLabel>
                <FormControl>
                  <Input
                    placeholder="Nama kategori"
                    {...field}
                    onClick={() => form.clearErrors("categoryName")}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <DialogFooter>
            <DialogFooter>
              <Button type="submit" variant="brutal">
                Simpan Kategori
              </Button>
            </DialogFooter>
          </DialogFooter>
        </form>
      </Form>
    </DialogContent>
  );
}
