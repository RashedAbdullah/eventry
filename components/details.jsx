/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import google from "@/public/google-io-2023-1.png";
import EventDetails from "./event-detalis";
import Location from "./location";
const Details = () => {
  return (
    <main>
      <section className="container">
        <div className="bg-gradient-to-b from-slate-200/20 to-slate-800/30">
          <Image src={google} alt="Event 1" className="h-[450px] mx-auto" />
        </div>

        {/* <!-- Details --> */}
        <div className="flex items-end">
          <div className="flex-auto py-4">
            <h1 className="font-bold text-2xl">Google I/O Extended</h1>
            <p className="text-[#9C9C9C] text-base mt-1">
              Rangpur, Dhaka, Bangladesh, Rangpur, Bangladesh
            </p>
            <div className="text-[#737373] text-sm mt-1">
              <span>1k Interested</span>
              <span>|</span>
              <span>40K Going</span>
            </div>
          </div>

          <div className="w-full flex gap-4 mt-4 flex-1 ">
            <button className="w-full">Interested</button>
            <button className="w-full">Going</button>
          </div>
        </div>
      </section>

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
