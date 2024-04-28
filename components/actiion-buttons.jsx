import Link from "next/link";

const ActionButtons = ({ formDetails }) => {
  return (
    <div className="w-full flex gap-4 mt-4">
      {/* <!-- bg-indigo-600 indicating Active --> */}
      <button className="w-full bg-indigo-600 hover:bg-indigo-800">
        Interested
      </button>

      {/* <!-- bg-green-600 indicating Active --> */}
      <Link
        href="/payment"
        className="w-full text-center p-2 rounded-md border border-[#5f5f5f] hover:bg-[#3c3d3d] transition duration-200"
      >
        Going
      </Link>
    </div>
  );
};

export default ActionButtons;
