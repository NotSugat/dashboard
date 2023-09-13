import Image from "next/image";
import { DatePicker } from "./DatePicker";
import SearchBar from "./SearchBar";
import { BiMessageAlt } from "@react-icons/all-files/bi/BiMessageAlt";
import { IoIosNotificationsOutline } from "@react-icons/all-files/io/IoIosNotificationsOutline";

const Navbar = () => {
  return (
    <div className="flex h-14 items-center justify-between bg-background px-2">
      <div className="flex items-center gap-4">
        <SearchBar />
        <DatePicker />
      </div>

      <div className="flex items-center gap-2">
        <BiMessageAlt className="rounded-icon h-10 w-10 " />
        <IoIosNotificationsOutline className="rounded-icon h-10 w-10" />

        <Image
          alt="Store Logo"
          src="/assets/store-logo.png"
          height={1000}
          width={1000}
          className="h-12 w-12 rounded-full bg-[#E6E9E3] p-1"
        />
        <p className="text-xl">Super Store</p>
      </div>
    </div>
  );
};

export default Navbar;
