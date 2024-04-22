import BookingCard from "./booking-card";

const BookingSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      <BookingCard />
      <BookingCard />
      <BookingCard />
      <BookingCard />
      <BookingCard />
      <BookingCard />
    </div>
  );
};

export default BookingSection;
