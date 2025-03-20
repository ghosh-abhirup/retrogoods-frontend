"use client";

import Link from "next/link";
import { IoIosMenu, IoIosSearch } from "react-icons/io";
import { IoBagOutline } from "react-icons/io5";
import UserLogProcess from "./UserLogProcess";
import { useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "@/services/UserServices";
import useUserStore from "@/store/UserStore";
import { User } from "@/utility/types";
import Cookies from "js-cookie";

const Navbar = () => {
  const { user, setUser } = useUserStore();
  const accessToken = Cookies.get("accessToken");

  const { data, isPending } = useQuery<User>({
    queryKey: ["profile"],
    queryFn: getUser,
    enabled: !!accessToken && !user,
  });

  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data]);

  return (
    <>
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
        <div className="w-full flex items-center justify-center gap-4 mt-4">
          <Link href={"/"}>Home</Link>
          <p>Shop</p>
          <Link href={"/profile"}>Profile</Link>
          <p>Orders</p>
          <p>Support</p>
        </div>
      </div>

      <UserLogProcess />
    </>
  );
};

export default Navbar;
