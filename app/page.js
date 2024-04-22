import Header from "@/components/header";
import BookingSection from "@/components/booking-section";

const Home = () => {
  return (
    <main className="py-8">
      <section className="container">
        <Header />
        <BookingSection />
      </section>
    </main>
  );
};

export default Home;
