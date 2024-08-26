"use client"

import {cn} from "@/helpers/cn";
import React from "react";
import {NavbarItemButtonProps} from "@/components/Navbar/types";
import {NavbarLisItem} from "@/components/Navbar/NavbarListItem";



export const NavbarListItemButton = ({children, className, ...props}: NavbarItemButtonProps) => {
    return (
        <NavbarLisItem className={cn("p-0",className)}>
            <button  className={"flex items-center gap-2 rounded-lg p-2 w-full "} {...props}>
                {children}
            </button>
        </NavbarLisItem>
    )
}