import { eventModel } from "@/models/event-models";

const getAllEvents = async () => {
  const allEvents = await eventModel.find();
  return allEvents;
};
export { getAllEvents };
