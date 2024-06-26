import Image from "next/image";
import ActionButtons from "./actiion-buttons";
import Link from "next/link";
import EventScheamScript from "./meta/event-schema-script";

const BookingCard = ({ event }) => {
  return (
    <div className="overflow-hidden rounded-md bg-[#242526]">
      <EventScheamScript event={event} />
      <Image
        src={event.imageUrl}
        alt={event.name}
        className="w-full"
        width={500}
        height={500}
      />

      <div className="p-3">
        <Link href={`/details/${event._id}`} className="font-bold text-lg">
          {event.name}
        </Link>
        <p className="text-[#9C9C9C] text-sm mt-1">{event.location}</p>
        <div className="text-[#737373] text-sm mt-1">
          <span>{event.interested_ids.length} Interested</span>
          <span> | </span>
          <span>{event.going_ids.length} Going</span>
        </div>

        {/* <!-- Buttons --> */}
        <ActionButtons
          eventId={event._id.toString()}
          interestedUserIds={event.interested_ids}
          goingUserId={event?.going_ids}
          formDetails={true}
        />
      </div>
    </div>
  );
};

export default BookingCard;
