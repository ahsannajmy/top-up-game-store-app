"use server";
import { cookies } from "next/headers";

export async function loginApiHandler(username: string, password: string) {
  const cookieStore = await cookies();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth/login`,
    {
      method: "POST",
      body: JSON.stringify({
        username: username,
        password: password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  if (data && data.success) {
    console.log(data);
    cookieStore.set("token", data.data.token);
    return data;
  } else {
    throw new Error(data.message);
  }
}
