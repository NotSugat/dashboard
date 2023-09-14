"use client";
import React from "react";
import { HiOutlineSwitchVertical } from "@react-icons/all-files/hi/HiOutlineSwitchVertical";
import Image from "next/image";

const DataTable = () => {
  const data = [
    {
      image: "https://phoneaqua.com/products/samsung-galaxy-s21-5g-.jpg",
      name: "Samsung Galaxy S21 Ultra 5G",
      price: 1200,
      status: "Active",
      sell: 120,
      earning: 12000,
    },
    {
      image: "https://m.media-amazon.com/images/I/71cSV-RTBSL._AC_UY218_.jpg",
      name: "Apple iPhone 12 Pro Max",
      price: 1200,
      status: "Active",
      sell: 120,
      earning: 12000,
    },
    {
      image: "https://m.media-amazon.com/images/I/71MHTD3uL4L._AC_UY218_.jpg",
      name: "OnePlus 9 Pro 5G",
      price: 1200,
      status: "Active",
      sell: 120,
      earning: 12000,
    },
    {
      image: "https://m.media-amazon.com/images/I/71MHTD3uL4L._AC_UY218_.jpg",
      name: "OnePlus 9 Pro 5G",
      price: 1200,
      status: "Active",
      sell: 120,
      earning: 12000,
    },
  ];

  // return (
  //   <div className="data-table ">
  //     {/* SN number */}
  //     {/* Image */}
  //     {/* Product name */}
  //     <span className="table-heading">
  //       <h3>Product Name</h3>
  //       <HiOutlineSwitchVertical className="rounded-icon h-8 w-8 p-1" />
  //     </span>
  //     {/* Price section */}
  //     <span className="table-heading">
  //       <h3>Price</h3>
  //       <HiOutlineSwitchVertical className="rounded-icon h-8 w-8 p-1" />
  //     </span>
  //     {/* Status */}
  //     <h3 className="text-lg font-semibold">Status</h3>
  //     {/* Sell quantity */}
  //     <span className="table-heading">
  //       <h3>Sell</h3>
  //       <HiOutlineSwitchVertical className="rounded-icon h-8 w-8 p-1" />
  //     </span>
  //     {/* Earning section */}
  //     <span className="table-heading">
  //       <h3>Earning</h3>
  //       <HiOutlineSwitchVertical className="rounded-icon h-8 w-8 p-1" />
  //     </span>
  //
  //     {/* Data */}
  //
  //     {data.map((item, index) => {
  //       return (
  //         <>
  //           <h3>{index + 1}</h3>
  //           <img src={item.image} alt="" className="h-12 w-12 rounded-full" />
  //           <h3>{item.name}</h3>
  //           <h3>{item.price}</h3>
  //           <h3>{item.status}</h3>
  //           <h3>{item.sell}</h3>
  //           <h3>{item.earning}</h3>
  //         </>
  //       );
  //     })}
  //   </div>
  // );

  return (
    <table>
      <thead>
        <tr className="data-table">
          <th>
            <h3 className="text-lg font-semibold">No</h3>
          </th>

          <th>
            <h3 className="text-lg font-semibold">Image</h3>
          </th>

          <th>
            <span className="table-heading">
              <h3>Product Name</h3>
              <HiOutlineSwitchVertical className="rounded-icon h-8 w-8 p-1" />
            </span>
          </th>

          <th>
            <span className="table-heading">
              <h3>Price</h3>
              <HiOutlineSwitchVertical className="rounded-icon h-8 w-8 p-1" />
            </span>
          </th>

          <th>
            <h3 className="text-lg font-semibold">Status</h3>
          </th>

          <th>
            <span className="table-heading">
              <h3>Sell</h3>
              <HiOutlineSwitchVertical className="rounded-icon h-8 w-8 p-1" />
            </span>
          </th>

          <th>
            <span className="table-heading">
              <h3>Earning</h3>
              <HiOutlineSwitchVertical className="rounded-icon h-8 w-8 p-1" />
            </span>
          </th>
        </tr>
      </thead>
    </table>
  );
};

export default DataTable;
