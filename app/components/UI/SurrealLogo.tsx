import React from "react";

type SurrealLogoProps = {
    className?: string
}
export const SurrealLogo = (props: SurrealLogoProps) => (
    <span className={(props.className ? props.className : "text-4xl ") + "font-medium inline" }>
        Surreal
    <span className="font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">DB </span>
    </span>
);
