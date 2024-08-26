import {cn} from "@/helpers/cn";
import Link from "next/link";
import React from "react";
import {NavbarItemLinkProps} from "@/components/Navbar/types";
import {NavbarLisItem} from "@/components/Navbar/NavbarListItem";


export const NavbarListItemLink = ({children, className, href,...props}: NavbarItemLinkProps) => {
    return (
        <NavbarLisItem className={cn("p-0",className)}>
            <Link href={href} className={"flex items-center gap-2 rounded-lg p-2 w-full "} {...props}>
                {children}
            </Link>
        </NavbarLisItem>
    )
}