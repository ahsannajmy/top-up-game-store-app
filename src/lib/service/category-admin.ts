"use server";
import { TPCategoryPayload } from "@/interface/category-interface";
import { getToken } from "../cookie-handler";

export async function createCategoryHandler(value: TPCategoryPayload) {
  const token = await getToken();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/tp-category`,
    {
      method: "POST",
      body: JSON.stringify(value),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );

  const data = await response.json();
  if (data.success) {
    return data;
  } else {
    throw new Error(data.message);
  }
}

export async function getCategory(page: number) {
  const token = await getToken();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/admin/tp-category?page=${page}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = await response.json();
  if (data.success) {
    return data;
  } else {
    throw new Error(data.message);
  }
}
