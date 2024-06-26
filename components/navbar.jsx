import Image from "next/image";
import lwsLogo from "@/public/logo.svg";
import Link from "next/link";
import SigninOut from "./signin-out";

const Navbar = () => {
  return (
    <nav>
      <div className="container flex justify-between items-center py-4">
        <div className="nav-brand">
          <Link href="/">
            <Image src={lwsLogo} alt="Eventry" className="h-[45px]" />
          </Link>
        </div>

        <ul className="flex gap-4 text-[#9C9C9C]">
          <SigninOut />
          <li>About</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
