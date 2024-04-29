import { getAllEvents } from "@/database/queries";
import BookingCard from "./booking-card";

const BookingSection = async () => {
  const allEvents = await getAllEvents();
  console.log(allEvents)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      <BookingCard />
    </div>
  );
};

export default BookingSection;
