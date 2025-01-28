import Link from "next/link";
import { IoIosMenu, IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";

const Navbar = () => {
  return (
    <div className="w-full sticky z-50 bg-off_white top-0 left-0 py-4 px-3">
      <div className="w-full flex items-center justify-between">
        <IoIosMenu className="block md:hidden" />
        <IoIosSearch className="text-2xl" />
        <Link href={"/"} className="w-1/2 flex flex-col items-center gap-2 cursor-pointer">
          <p className="text-[3rem] font-bold font-kaoly">RetroGoods</p>
          <p className="uppercase text-xs tracking-[4px]">Your Happiness First</p>
        </Link>
        <IoBagOutline className="text-2xl" />
      </div>
      <div className="w-full flex items-center justify-center gap-4 mt-6">
        <p>Home</p>
        <p>Shop</p>
        <p>Profile</p>
        <p>Orders</p>
        <p>Support</p>
      </div>
    </div>
  );
};

export default Navbar;
