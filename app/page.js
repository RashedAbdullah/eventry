import Header from "@/components/header";
import BookingSection from "@/components/booking-section";

const Home = ({searchParams: {query}}) => {
  return (
    <main className="py-8">
      <section className="container">
        <Header />
        <BookingSection query={query} />
      </section>
    </main>
  );
};

export default Home;
