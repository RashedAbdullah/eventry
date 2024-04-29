import EventDetails from "./event-detalis";
import Location from "./location";
import HeroSection from "./hero-section";
import { getEventById } from "@/database/queries";
const Details = async ({ id }) => {
  const eventById = await getEventById(id);

  return (
    <main>
      <HeroSection event={eventById} />
      <section className="container">
        <div className="grid grid-cols-5 gap-12 my-12">
          <EventDetails event={eventById}/>
          <Location event={eventById}/>
        </div>
      </section>
    </main>
  );
};

export default Details;
