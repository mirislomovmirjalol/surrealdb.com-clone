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

type MenuListType = {
    title: string
    path?: string
    menuItems?: MenuListType[]
    description?: string,
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
                    >
                        {item.title}
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
                    title: "Community",
                    path: "/community",
                    description: "Join the community and get help from other users.",
                },
                {
                    title: "product",
                    path: "/product",
                    description: "bla kjsadjfla klsdjfj asjljsdkf"
                },
                {
                    title: "Community",
                    path: "/community",
                    description: "Join the community and get help from other users.",
                },
                {
                    title: "product",
                    path: "/product",
                    description: "bla kjsadjfla klsdjfj asjljsdkf"
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
                        <NavDropdownMenu key={index} menuItems={item.menuItems} item={item}/>
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
