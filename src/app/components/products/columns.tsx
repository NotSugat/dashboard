"use client";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

export type Product = {
  id: number;
  image: string;
  name: string;
  price: string;
  availability: string;
  sell: number;
  earning: number;
};

export const colums: ColumnDef<Product>[] = [
  {
    accessorKey: "id",
    header: "SN",
  },
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => (
      <Image
        src={row.original.image}
        alt=""
        height={1000}
        width={1000}
        className="h-12 w-12 object-contain"
      />
    ),
  },
  {
    accessorKey: "name",
    header: "Product Name",
    cell: ({ row }) => (
      <p className="text-base font-medium">{row.original.name}</p>
    ),
  },
  {
    accessorKey: "price",
    header: "Price",
    cell: ({ row }) => <div className="">Rs. {row.getValue("price")}</div>,
  },
  {
    accessorKey: "availability",
    header: "Availability",
    cell: ({ row }) => (
      <div
        className={`w-[100px] cursor-pointer  rounded-full p-1 text-center ${row.getValue("availability").toLowerCase() === "in stock"
            ? "bg-green-800"
            : "bg-red-700"
          }`}
      >
        {row.getValue("availability")}
      </div>
    ),
  },
  {
    accessorKey: "sell",
    header: () => <div className=" ">Sell</div>,
    cell: ({ row }) => (
      <div className="  font-semibold">{row.getValue("sell")}</div>
    ),
  },
  {
    accessorKey: "earning",
    header: "Earning",
  },
];
