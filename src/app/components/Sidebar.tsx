"use client";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineDown, AiOutlineHome, AiOutlineSetting } from "react-icons/ai";
import { BiPackage } from "react-icons/bi";
import { GiMoneyStack } from "react-icons/gi";
import { BiNotepad } from "react-icons/bi";
import { ImStatsDots } from "react-icons/im";
import { BsPeople } from "react-icons/bs";
import { IoExitOutline } from "react-icons/io5";

import { Button } from "@/components/ui/button";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className="relative h-[100dvh] w-[var(--sidebar-width)]  px-6">
      <div className="flex items-center gap-4 pt-4">
        <Image
          alt="LogiSync Logo"
          src="/assets/logo.png"
          height={1000}
          width={1000}
          className="h-12 w-12"
        />
        <p className="text-2xl font-semibold tracking-wider ">LogiSync</p>
      </div>

      <ul className="mt-8 space-y-4">
        <li>
          <Link href="/" className="link">
            <AiOutlineHome className="h-6 w-6" />
            Home
          </Link>
        </li>
        <li>
          <Link href="/sales" className="link">
            <GiMoneyStack className="h-7 w-7 " />
            Sales
          </Link>
        </li>
        <li>
          <Link href="/orders" className="link">
            <BiNotepad className="h-7 w-7" />
            Orders
          </Link>
        </li>
        <li>
          <div
            className="link flex w-full items-center justify-between  "
            onClick={() => setIsOpen(!isOpen)}
          >
            <Link
              href="/products"
              className="flex items-center gap-2 text-xl font-semibold"
            >
              <BiPackage className="h-7 w-7" />
              <h4 className=" ">Products</h4>
            </Link>
            <button>
              <AiOutlineDown className="rounded-icon h-8 w-8  font-semibold" />
              <span className="sr-only">Toggle</span>
            </button>
          </div>

          {isOpen && (
            <section className="mt-2">
              <div className="rounded-md  px-4 py-1 font-mono text-sm shadow-sm">
                T-shirts
              </div>
              <div className="rounded-md  px-4 py-1 font-mono text-sm shadow-sm">
                Jackets
              </div>
            </section>
          )}
        </li>
        <li>
          <Link href="/records" className="link">
            <ImStatsDots className="h-7 w-7" />
            Records
          </Link>
        </li>

        <li>
          <Link href="/customers" className="link">
            <BsPeople className="h-7 w-7" />
            Customers
          </Link>
        </li>
      </ul>

      <footer className="absolute bottom-12 w-[calc(var(--sidebar-width)_-_6rem)] space-y-4 ">
        <Link href="/settings" className="link">
          <AiOutlineSetting className="h-7 w-7" />
          Settings
        </Link>

        <Link href="/sign-in" className="link">
          <IoExitOutline className="h-7 w-7" />
          Log Out
        </Link>
      </footer>
    </aside>
  );
};

export default Sidebar;
