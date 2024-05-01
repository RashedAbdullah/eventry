import { eventModel } from "@/models/event-models";
import { userModel } from "@/models/users-model";
import mongoose from "mongoose";

const getAllEvents = async (query) => {
  let allEvents = [];

  if (query) {
    const regExp = new RegExp(query, "i");
    allEvents = await eventModel.find({ name: { $regex: regExp } }).lean();
  } else {
    allEvents = await eventModel.find().lean();
  }
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

const updateInterested = async (eventId, userId) => {
  const eventById = await eventModel.findById(eventId);

  if (eventById) {
    const foundUsers = eventById.interested_ids.find((id) => id === userId);
    if (foundUsers) {
      eventById.interested_ids.pull(new mongoose.Types.ObjectId(userId));
    } else {
      eventById.interested_ids.push(new mongoose.Types.ObjectId(userId));
    }

    eventById.save();
  }
};

async function updateGoing(eventId, authId) {
  const event = await eventModel.findById(eventId);
  event.going_ids.push(new mongoose.Types.ObjectId(authId));
  event.save();
}

export {
  getAllEvents,
  getEventById,
  createUser,
  foundUser,
  updateInterested,
  updateGoing,
};
