import BookingCard from "./booking-card";
import Header from "./header";

const BookingSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
      {/* <Header/> */}
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
