"use server";

import EmailTemplate from "@/components/email-template";
import {
  createUser,
  foundUser,
  getEventById,
  updateGoing,
  updateInterested,
} from "@/database/queries";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { Resend } from "resend";

const resigterUser = async (formData) => {
  const user = Object.fromEntries(formData);
  await createUser(user);
  redirect("/signin");
};

const signinUser = async (formData) => {
  try {
    const user = {};
    user.email = formData.get("email");
    user.password = formData.get("password");
    const found = foundUser(user);
    return found;
  } catch (err) {
    throw err;
  }
};

const addInterestedEvent = async (eventId, userId) => {
  try {
    await updateInterested(eventId, userId);
  } catch (err) {
    throw new Error(err.message);
  }
};

const eventPayment = async (eventId, user) => {
  try {
    await updateGoing(eventId, user?._id);
  } catch (err) {
    throw err;
  }

  revalidatePath("/");
  redirect("/");
};

const sendEmail = async (eventId, user) => {
  try {
    const event = await getEventById(eventId);
    const resend = Resend(process.env.RESEND_API_KEY);
    const message = `Dear ${user?.name}, you have been successfully registered for the event`;

    const send = await resend.emails.send({
      from: "noreply",
      to: user?.email,
      subject: "Successfully registered for the event!",
      react: EmailTemplate({ message }),
    });
  } catch (err) {
    throw err;
  }
};

export {
  resigterUser,
  signinUser,
  addInterestedEvent,
  eventPayment,
  sendEmail,
};
