import React from "react";
import {FaceHappy, GamepadIcon, HomeIcon, MedalIcon} from "@/components";
import {green} from "next/dist/lib/picocolors";
import {RouteIcon} from "@/components/Icons/Icons/RouteIcon";
import {cn} from "@/helpers/cn";

type NavbarProps = React.ComponentProps<'nav'>;
type NavbarListProps = React.ComponentProps<'ul'>;
type NavbarItemProps = React.ComponentProps<'li'>;



const NavbarList = ({children, className, ...props}: NavbarListProps) => {
    return (
        <ul className={ cn("my-4 border-t  border-indigo-400/20 hover:border-indigo-400/40", className)} {...props}>
            {children}
        </ul>
    )
}

const NavbarLisItem = ({children, className, ...props}:NavbarItemProps) => {
    return (
        <li className={ cn("my-2 p-2 rounded-lg bg-transparent hover:bg-indigo-400/40 cursor-pointer flex gap-2 items-center hover:text-slate-100", className)} {...props}>
            {children}
        </li>

    )
}

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
                <NavbarLisItem>
                    <HomeIcon className=" w-4 h-4 "/> Home
                </NavbarLisItem>

                <NavbarLisItem>
                    <GamepadIcon className="w-4 h-4"/> Games
                </NavbarLisItem>

                <NavbarLisItem>
                    <MedalIcon className="w-4 h-4"/> Top 10
                </NavbarLisItem>

                <NavbarLisItem>
                    <RouteIcon className="w-4 h-4"/> Walkthroughs
                </NavbarLisItem>

            </NavbarList>

            <NavbarList className={""}>
                <NavbarLisItem>
                    <FaceHappy className="w-4 h-4"/>User
                </NavbarLisItem>

            </NavbarList>

        </nav>
    )
}