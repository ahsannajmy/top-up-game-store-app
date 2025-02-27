"use server";
import { cookies } from "next/headers";

export async function deleteToken() {
  const cookie = await cookies();
  cookie.delete("token");
}

export async function getToken() {
  const cookie = await cookies();
  return cookie.get("token")?.value;
}
