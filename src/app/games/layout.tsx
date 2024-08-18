import {ReactNode} from "react";

export  default function GamesLayout({children}: {children: ReactNode}) {
    return (
        <div>
            <h1>Games Layout</h1>
            {children}

        </div>
    )
}