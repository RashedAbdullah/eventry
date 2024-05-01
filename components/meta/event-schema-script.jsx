const EventScheamScript = ({ event }) => {
  const eventName = encodeURIComponent(event?.name);
  const formattedData = {
    "@contenxt": "https://schema.org",
    "@type": "EducationEvent",
    name: eventName,
    startDate: new Date(),
    endDate: new Date(),
    description: event?.details,
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    eventStatus: "https://schema.org/EventScheduled",
    location: {
      "@type": "Place",
      name: event?.location,
    },
    image: [event?.imageUrl],
    organizer: {
      "@type": "Organization",
      name: "Ahlam Group",
      url: "https://rashed-abdullah.vercel.app/",
    },
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(formattedData) }}
    />
  );
};

export default EventScheamScript;
