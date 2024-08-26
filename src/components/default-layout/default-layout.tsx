import { ReactNode } from "react";
import { DefaultLayoutContainer } from "./default-layout.styles";
import { Header } from "../header/header";
import { Profile } from "../profile/profile";

interface DefaultLayoutProps {
    children: ReactNode
}

export function DefaultLayout({ children }: DefaultLayoutProps) {
    return (
        <DefaultLayoutContainer>
            <Header />
            <Profile />
            {children}
        </DefaultLayoutContainer>
    )
}
