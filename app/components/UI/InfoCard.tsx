import React from "react";
import {TInfoCard} from "@/app/page";

const InfoCard = (props: TInfoCard) => {
    return (
        <div className="bg-base-300 p-12 rounded-xl shadow-inner shadow-base-200 w-full">
            <div className="flex flex-row justify-start gap-2">
                {props.icon &&
                    props.icon
                }
                {props.headerText &&
                    <h4 className="font-medium text-xl">
                        {props.headerText}
                    </h4>
                }
            </div>
            <p className="text-base-invert-2 my-4">
                {props.content || "No content provided."}
            </p>
        </div>
    )
}

export default InfoCard;
