"use client"
import React from "react";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenu,
    NavbarMenuItem,
    NavbarMenuToggle
} from "@nextui-org/react";
import {SurrealLogo} from "@/app/components/UI/SurrealLogo";
import NavLink from "@/app/components/UI/NavLink";
import NeonButton from "@/app/components/UI/NeonButton";

type MenuListType = {
    title: string
    path: string
}

export default function NavigationBar() {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuItems: MenuListType[] = [
        {
            title: "Home",
            path: "/",
        },
        {
            title: "Install",
            path: "/install",
        },
        {
            title: "Community",
            path: "/community",
        },
        {
            title: "Product",
            path: "/product",
        },
        {
            title: "Docs",
            path: "/docs",
        },
        {
            title: "Blog",
            path: "/blog",
        }
    ];

    return (
        <Navbar maxWidth="xl" className="backdrop-blur-lg bg-base/30 h-24" isBlurred={false}
                onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
                <NavbarBrand>
                    <SurrealLogo/>
                </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden lg:flex gap-2" justify="end">
                {menuItems.map((item, index) => (
                    <NavbarItem key={index}>
                        <NavLink href={item.path}>
                            {item.title}
                        </NavLink>
                    </NavbarItem>
                ))}
                <NavbarItem>
                    <NeonButton variant={"outline"}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                            <path fillRule="evenodd"
                                  d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                  clipRule="evenodd"/>
                        </svg>
                        Star us on GitHub
                    </NeonButton>
                </NavbarItem>
                <NavbarItem>
                    <NeonButton>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                        </svg>
                        Get updates
                    </NeonButton>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify={"end"} className="lg:hidden">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                />
            </NavbarContent>
            <NavbarMenu className="backdrop-blur-lg bg-base/30 mt-8">
                {menuItems.map((item, index) => (
                    <NavbarMenuItem onClick={() => setIsMenuOpen(!isMenuOpen)} className="my-1 block" key={index}>
                        <NavLink
                            href={item.path}
                        >
                            {item.title}
                        </NavLink>
                    </NavbarMenuItem>
                ))}
            </NavbarMenu>
        </Navbar>
    );
}