import Details from "@/components/details";
import { getEventById } from "@/database/queries";

export const generateMetadata = async ({ params: { id } }) => {
  const eventById = await getEventById(id);
  return {
    title: `Eventry - ${eventById?.name}`,
    description: eventById?.details,
    openGraph: {
      images: [eventById?.imageUrl]
    }
  };
};

const DetailsPage = ({ params: { id } }) => {
  return <Details id={id} />;
};

export default DetailsPage;
