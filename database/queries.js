import { eventModel } from "@/models/event-models";
import { userModel } from "@/models/users-model";

const getAllEvents = async () => {
  const allEvents = await eventModel.find().lean();
  return allEvents;
};

const getEventById = async (eventId) => {
  const event = await eventModel.findById(eventId);
  return event;
};

const createUser = async (user) => {
  return await userModel.create(user);
};

const foundUser = async (credentials) => {
  const user = await userModel.findOne(credentials).lean();
  return user;
};
export { getAllEvents, getEventById, createUser, foundUser };
