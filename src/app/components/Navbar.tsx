import Image from "next/image";
import { DatePicker } from "./DatePicker";
import SearchBar from "./SearchBar";
import { BiMessageAlt } from "@react-icons/all-files/bi/BiMessageAlt";
import { IoIosNotificationsOutline } from "@react-icons/all-files/io/IoIosNotificationsOutline";
import { UserButton } from "@clerk/nextjs";

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

        <UserButton
          afterSignOutUrl="/sign-in"
          appearance={{
            elements: {
              avatarBox: "h-10 w-10",
            },
          }}
        />
        <p className="text-xl">Super Store</p>
      </div>
    </div>
  );
};

export default Navbar;
