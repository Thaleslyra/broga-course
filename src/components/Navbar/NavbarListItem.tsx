import {cn} from "@/helpers/cn";
import React from "react";
import {NavbarItemProps} from "@/components/Navbar/types";




export const NavbarLisItem = ({children, className, ...props}:NavbarItemProps) => {
    return (
        <li className={ cn("my-2 p-2 rounded-lg bg-transparent hover:bg-indigo-400/40 cursor-pointer flex gap-2 items-center hover:text-slate-100", className)} {...props}>
            {children}
        </li>

    )
}