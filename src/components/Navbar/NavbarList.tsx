import {cn} from "@/helpers/cn";
import React from "react";
import {NavbarListProps} from "@/components/Navbar/types";





export const NavbarList = ({children, className, ...props}: NavbarListProps) => {
    return (
        <ul className={ cn("my-4 border-t  border-indigo-400/20 hover:border-indigo-400/40", className)} {...props}>
            {children}
        </ul>
    )
}