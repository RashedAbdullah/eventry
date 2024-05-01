"use client";

import { addInterestedEvent } from "@/actions";
import { useAuth } from "@/hooks/use-auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

const ActionButtons = ({
  eventId,
  interestedUserIds,
  goingUserId,
  formDetails,
}) => {
  const { auth } = useAuth();
  const router = useRouter();
  const isInterested = interestedUserIds?.find((id) => id === auth?._id);
  const isGoing = goingUserId?.find((id) => id === auth?._id);

  const [interested, setInterested] = useState(isInterested);
  const [going, setGoing] = useState(isGoing);
  const [isPending, startTransition] = useTransition();

  const toggleInterested = async () => {
    if (auth) {
      await addInterestedEvent(eventId, auth?._id);
      setInterested(!interested);
    } else {
      router.push("/signin");
    }
  };

  const handleGoing = () => {
    // if (auth) {
    router.push(`/payment/${eventId}`);
    // } else {
    //   router.push("/signin");
    // }
  };

  return (
    <div className="w-full flex gap-4 mt-4">
      <button
        onClick={() => {
          startTransition(() => toggleInterested());
        }}
        className={`w-full ${
          interested && "bg-indigo-600 hover:bg-indigo-800"
        }`}
      >
        Interested
      </button>
      <button
        disabled={auth && going}
        onClick={handleGoing}
        className="w-full text-center p-2 rounded-md border border-[#5f5f5f] hover:bg-[#3c3d3d] transition duration-200"
      >
        Going
      </button>
    </div>
  );
};

export default ActionButtons;
