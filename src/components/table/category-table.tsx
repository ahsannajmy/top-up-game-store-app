"use client";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../ui/table";
import { getCategory } from "@/lib/service/category-admin";
import { TPCategory } from "@/interface/category-interface";
import { getDayMonthYear } from "@/lib/utils/date-formatter";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight, LoaderCircle, Trash } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "../ui/pagination";
import { ModalEditCategory } from "../modal/modal-edit-category";

export const CategoryTable = () => {
  const [categoryData, setCategoryData] = useState<TPCategory[]>([]);
  const [loadingState, setLoadingState] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(0);
  const [totalPage, setTotalPage] = useState(0);
  const rows = [
    "No",
    "Nama Kategori",
    "Dibuat pada",
    "Diubah pada",
    "Dihapus pada",
    "Aksi",
  ];

  const nextPage = () => {
    if (page + 1 <= totalPage) {
      setPage(page + 1);
    }
  };

  const previousPage = () => {
    if (page - 1 >= 1) {
      setPage(page - 1);
    }
  };

  useEffect(() => {
    async function getCategoryData() {
      try {
        setLoadingState(true);
        const data = await getCategory(page);
        setCategoryData(data.data);
        setPage(data.pagination.page);
        setTotalPage(data.pagination.totalPages);
        setPerPage(data.pagination.limit);
        setLoadingState(false);
      } catch (error) {
        setLoadingState(false);
        console.log(error);
      }
    }
    getCategoryData();
  }, [page]);

  return (
    <>
      <div className="space-y-4">
        <Table>
          <TableHeader>
            <TableRow>
              {rows.map((row, index) => (
                <TableCell key={index}>{row}</TableCell>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {loadingState ? (
              <TableRow>
                <TableCell colSpan={rows.length}>
                  <div className="flex justify-center">
                    <LoaderCircle className="animate-spin self-center" />
                  </div>
                </TableCell>
              </TableRow>
            ) : categoryData.length !== 0 ? (
              categoryData.map((category, index) => (
                <TableRow key={category.id}>
                  <TableCell>{perPage * (page - 1) + index + 1}</TableCell>
                  <TableCell>{category.categoryName}</TableCell>
                  <TableCell>
                    {getDayMonthYear(new Date(category.createdAt))}
                  </TableCell>
                  <TableCell>
                    {getDayMonthYear(new Date(category.updatedAt))}
                  </TableCell>
                  <TableCell>
                    {category.deletedAt
                      ? getDayMonthYear(new Date(category.deletedAt))
                      : "-"}
                  </TableCell>
                  <TableCell>
                    <div className="flex flex-row items-center justify-center gap-2">
                      <ModalEditCategory />
                      <Button variant="destructive">
                        <Trash />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={rows.length} className="text-center">
                  Data kategori tidak ditemukan
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div className="justify-self-end">
          <Pagination>
            <PaginationContent>
              <PaginationItem className="mr-2">
                <Button
                  variant="default"
                  onClick={previousPage}
                  disabled={page === 1}
                >
                  <div className="flex flex-row items-center gap-2">
                    <ChevronLeft />
                    <span>Previous</span>
                  </div>
                </Button>
              </PaginationItem>
              {Array.from({ length: totalPage }, (_, index) => (
                <PaginationItem
                  key={index + 1}
                  onClick={() => setPage(index + 1)}
                >
                  <PaginationLink isActive={page === index + 1}>
                    {index + 1}
                  </PaginationLink>
                </PaginationItem>
              ))}
              <PaginationItem className="ml-2">
                <Button
                  variant="default"
                  onClick={nextPage}
                  disabled={page === totalPage}
                >
                  <div className="flex flex-row items-center gap-2">
                    <span>Next</span>
                    <ChevronRight />
                  </div>
                </Button>
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </div>
    </>
  );
};
