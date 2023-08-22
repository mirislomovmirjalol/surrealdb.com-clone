"use client"

import React from "react";
import Link from 'next/link'
import {usePathname} from "next/navigation"; // usePathname is a hook now imported from navigation

type NarLinkProps = {
    children: React.ReactNode
    href: string
    className?: string
}

const defaultStyle: string = "hover:border-b-3 border-primary h-auto p-3 text-sm"
const activeStyle: string = "border-b-3 text-base-invert hover:base-invert " + defaultStyle
const inactiveStyle: string = "hover:text-primary text-base-invert-2 " + defaultStyle

const NavLink = (props: NarLinkProps) => {
    const pathName = usePathname();
    const isActive = pathName == props.href;
    return (
        <Link href={props.href}
              className={isActive ? activeStyle : inactiveStyle}>
            {props.children}
        </Link>
    );
}
NavLink.displayName = "NavLink";

export default NavLink;

