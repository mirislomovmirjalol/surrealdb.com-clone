"use client"
import {Button} from "@nextui-org/react";
import React from "react";


const variants: Record<string, string> = {
    default: "bg-gradient-to-r from-primary to-secondary hover:scale-105 transform-gpu hover:shadow-2xl hover:shadow-primary hover:ring-4 ring-primary-700 mx-2 font-semibold",
    outline: "bg-base-300 hover:bg-gradient-to-r from-primary to-secondary hover:scale-105 transform-gpu shadow-inner hover:shadow-2xl hover:shadow-primary hover:ring-4 ring-primary-700 mx-2 font-semibold ",
}

type NeonButtonProps = {
    title?: string
    href?: string
    children?: React.ReactNode
    onClick?: () => void
    variant?: keyof typeof variants | typeof variants.default
    size?: "sm" | "md" | "lg"
}

const NeonButton = (props: NeonButtonProps) => {
    return (
        <Button
            as={"button"}
            className={props.variant ? variants[props.variant] : variants.default}
            radius="full"
            variant="shadow"
            size={props.size ? props.size : "md"}
        >
            {props.title ? props.title : null}
                {props.children}
        </Button>
    )
}

export default NeonButton;
