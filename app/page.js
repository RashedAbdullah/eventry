import Header from "@/components/header";
import BookingSection from "@/components/booking-section";
import Details from "@/components/details";

const Home = () => {
  return (
    <main className="py-8">
      <section className="container">
        <Header />
        <BookingSection />
        {/* <Details/> */}
      </section>
    </main>
  );
};

export default Home;
