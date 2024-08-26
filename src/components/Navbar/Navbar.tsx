import React from "react";
import {FaceHappy, GamepadIcon, HomeIcon, MedalIcon} from "@/components";

import {RouteIcon} from "@/components/Icons/Icons/RouteIcon";
import {cn} from "@/helpers/cn";
import {NavbarProps} from "@/components/Navbar/types";
import {NavbarList} from "@/components/Navbar/NavbarList";
import {NavbarListItemLink} from "@/components/Navbar/NavbarListItemLink";



export default function Navbar( { className, ...props}: NavbarProps ) {
    return (
        <nav
            className={cn(" flex flex-col  h-screen bg-slate-900 border-r border-indigo-400/20 hover:border-indigo-400/40 w-72 text-slate-300", className)} {...props}>
            <div className="flex items-center justify-center m-4">
                <img
                    src="https://emersonbroga.com/e/assets/emersonbroga-logo-name-pink.png" alt=""
                    className="w-auto h-12 p-2"
                />
            </div>


            <NavbarList className={"flex-grow"}>
                <NavbarListItemLink href="/">
                    <HomeIcon className=" w-4 h-4 "/> Home
                </NavbarListItemLink>

                <NavbarListItemLink href={"/games"}>
                    <GamepadIcon className="w-4 h-4"/> Games
                </NavbarListItemLink>

                <NavbarListItemLink href={"/top-10"}>
                    <MedalIcon className="w-4 h-4"/> Top 10
                </NavbarListItemLink>

                <NavbarListItemLink href={"/walkthroughs"}>
                    <RouteIcon className="w-4 h-4"/> Walkthroughs
                </NavbarListItemLink>

            </NavbarList>

            <NavbarList className={""}>
                <NavbarListItemLink href={"/user"}>
                    <FaceHappy className="w-4 h-4"/>User
                </NavbarListItemLink>
            </NavbarList>

        </nav>
    )
}