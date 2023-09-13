"use client";

import * as React from "react";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu";
import { BsChevronDown } from "react-icons/bs";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ComboBox() {
  const [position, setPosition] = React.useState("popularity");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="space-x-2">
          <span>Sort by popularity</span>
          <span>
            <BsChevronDown />
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-44">
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="popularity">
            Popularity
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="lowest">
            Lowest price
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="highest">
            Highest price
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="rating">Rating</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
