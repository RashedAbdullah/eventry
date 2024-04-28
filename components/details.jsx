import EventDetails from "./event-detalis";
import Location from "./location";
import HeroSection from "./hero-section";
const Details = () => {
  return (
    <main>
      <HeroSection />

      <section className="container">
        <div className="grid grid-cols-5 gap-12 my-12">
          <EventDetails />
          <Location />
        </div>
      </section>
    </main>
  );
};

export default Details;
