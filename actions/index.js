"use server";

import { createUser, foundUser } from "@/database/queries";
import { redirect } from "next/navigation";

const resigterUser = async (formData) => {
  const user = Object.fromEntries(formData);
  await createUser(user);
  redirect("/signin");
};

const signinUser = async (formData) => {
  const user = {};
  user.email = formData.get("email");
  user.password = formData.get("password");
  const found = foundUser(user);

  if (found) {
    redirect("/");
  } else {
    throw new Error(`User with ${formData.get("email")} not found`);
  }
};

export { resigterUser, signinUser };
