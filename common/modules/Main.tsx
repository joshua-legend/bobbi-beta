import {DashBoardLayout} from "../layouts/DashBoardLayout";
import {RootLayout} from "../layouts/RootLayout";
import {Sidebar} from "../components/Sidebar/Sidebar";
import {Navbar} from "../components/Navbar/Navbar";
import React from "react";

type DashboardLayoutProps = {
    children: React.ReactNode,
};

export default function Main({ children }: DashboardLayoutProps) {

    return (
        <RootLayout>
            <Sidebar />
            <DashBoardLayout>
                <Navbar />
                {children}
            </DashBoardLayout>
        </RootLayout>
    );
}