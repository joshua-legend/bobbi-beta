import {Layout} from "../layouts/Layout";
import {RootLayout} from "../layouts/RootLayout";
import SidebarComp from "../components/Sidebar/SidebarComp";
import {NavbarComp} from "../components/Navbar/NavbarComp";
import React from "react";

type DashboardLayoutProps = {
    children: React.ReactNode,
};

export default function Main({ children }: DashboardLayoutProps) {

    return (
        <RootLayout>
            <SidebarComp />
            <Layout>
                <NavbarComp />
                {children}
            </Layout>
        </RootLayout>
    );
}