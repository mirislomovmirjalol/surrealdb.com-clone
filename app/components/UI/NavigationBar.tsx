"use client"
import React from "react";
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
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
import WaitingListModal from "@/app/components/UI/WaitingListModal";
import Link from "next/link";

type MenuListType = {
    title: string
    path?: string
    menuItems?: MenuListType[]
    description?: string,
    icon?: React.ReactNode
}

type NavDropdownMenuProps = {
    menuItems: MenuListType[]
    item: MenuListType
}

const NavDropdownMenu = (props: NavDropdownMenuProps) => {
    return (
        <Dropdown
            backdrop="blur"
        >
            <DropdownTrigger>
                <NavbarItem>
                    {props.item.title &&
                        <NavLink href={"#"}>
                            {props.item.title}
                        </NavLink>
                    }
                </NavbarItem>
            </DropdownTrigger>
            <DropdownMenu
                variant="faded" aria-label="Dropdown menu with description"
                className="md:w-[600px] bg-base-200 rounded-xl p-2 grid grid-cols-2 gap-2"
                itemClasses={{
                    base: "gap-4",
                }}
            >
                {props.menuItems.map((item, index) => (
                    <DropdownItem
                        className="p-4"
                        key={index}
                        description={item.description}
                        startContent={item.icon}
                    >
                        {item.path &&
                            <Link href={item.path}>
                                {item.title}
                            </Link>
                        }
                    </DropdownItem>
                ))}
            </DropdownMenu>
        </Dropdown>
    )
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
            menuItems: [
                {
                    title: "Why SurrealDB?",
                    path: "/about",
                    description: "Understand why SurrealDB is the ultimate cloud database.",
                    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
                    </svg>,
                },
                {
                    title: "Features",
                    path: "/features",
                    description: "Get a detailed overview of all of SurrealDB's technical features.",
                    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                    </svg>

                },
                {
                    title: "Release ",
                    path: "/release",
                    description: "Keep track of the notable updates and improvements for every\n" +
                        "SurrealDB product release in chronological order.",
                    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                    </svg>
                },
                {
                    title: "Roadmap",
                    path: "/roadmap",
                    description: "See what we have planned for SurrealDB, and see the features and functionality which has already been implemented.",
                    icon: <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
                    </svg>
                },
            ]
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
                    item.menuItems ?
                        <NavDropdownMenu menuItems={item.menuItems} item={item} key={index}/>
                        :
                        <NavbarItem key={index}>
                            {item.path &&
                                <NavLink
                                    href={item.path}
                                >
                                    {item.title}
                                </NavLink>
                            }
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
                    <WaitingListModal/>
                </NavbarItem>
            </NavbarContent>
            <NavbarContent justify={"end"} className="lg:hidden">
                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                />
            </NavbarContent>
            <NavbarMenu className="backdrop-blur-lg bg-base/30 mt-8">
                {menuItems.map((item, index) => (
                    item.menuItems ?
                        <NavDropdownMenu menuItems={item.menuItems} item={item} key={index}/>
                        :
                        (item.path &&
                            <NavbarMenuItem key={index} onClick={() => setIsMenuOpen(!isMenuOpen)}
                                            className="my-1 block">
                                <NavLink
                                    href={item.path}
                                >
                                    {item.title}
                                </NavLink>
                            </NavbarMenuItem>
                        )
                ))}
            </NavbarMenu>
        </Navbar>
    );
}
