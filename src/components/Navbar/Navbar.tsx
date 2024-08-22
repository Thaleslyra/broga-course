import React from "react";
import {FaceHappy, GamepadIcon, HomeIcon, MedalIcon} from "@/components";
import {green} from "next/dist/lib/picocolors";
import {RouteIcon} from "@/components/Icons/Icons/RouteIcon";

const NavBarList = ({children, className}) => {
    return (
        <ul className={`my-4 border-t  border-indigo-400/20 hover:border-indigo-400/40 ${className}`}>
            {children}
        </ul>
    )
}

const NavBarLisItem = ({children}) => {
    return (
        <li className="my-2 p-2 rounded-lg bg-transparent hover:bg-indigo-400/40 cursor-pointer flex gap-2 items-center hover:text-slate-100">
            {children}
        </li>

    )
}

export default function Navbar() {
    return (
        <nav
            className=" flex flex-col  h-screen bg-slate-900 border-r border-indigo-400/20 hover:border-indigo-400/40 w-72 text-slate-300">
            <div className="flex items-center justify-center m-4"><img
                src="https://emersonbroga.com/e/assets/emersonbroga-logo-name-pink.png" alt=""
                className="w-auto h-12 p-2"/></div>


            <NavBarList className="flex-grow">
                <NavBarLisItem>
                    <HomeIcon className=" w-4 h-4 "/> Home
                </NavBarLisItem>

                <NavBarLisItem>
                    <GamepadIcon className="w-4 h-4"/> Games
                </NavBarLisItem>

                <NavBarLisItem>
                    <MedalIcon className="w-4 h-4"/> Top 10
                </NavBarLisItem>

                <NavBarLisItem>
                    <RouteIcon className="w-4 h-4"/> Walkthroughs
                </NavBarLisItem>

            </NavBarList>

            <NavBarList className={""}>
                <NavBarLisItem>
                    <FaceHappy className="w-4 h-4"/>User
                </NavBarLisItem>

            </NavBarList>

        </nav>
    )
}