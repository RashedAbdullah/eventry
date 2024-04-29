import { getAllEvents } from "@/database/queries";
import BookingCard from "./booking-card";

const BookingSection = async () => {
  const allEvents = await getAllEvents();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {allEvents.map((event) => (
        <BookingCard key={event._id} event={event} />
      ))}
    </div>
  );
};

export default BookingSection;
