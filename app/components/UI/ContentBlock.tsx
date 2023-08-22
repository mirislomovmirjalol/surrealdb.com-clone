import React from "react";
import Image from "next/image";
import {TContentBlock} from "@/data";

type ContentBlockProps = {
    block: TContentBlock
}

const layout = (block: TContentBlock) => {
    if (block.imagePosition === "left") {
        return (
            <div className="flex flex-col md:flex-row w-full gap-8 justify-around items-center my-12">
                <Image width={610} height={610} src={block.image} className="w-full md:w-1/2"
                       alt={block.imageAlt}/>
                <div>
                    <h2 className="text-3xl">{block.title}</h2>
                    <p className="text-base-invert-2 my-8 font-light">{block.content}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="flex flex-col-reverse md:flex-row w-full gap-8 justify-around items-center my-12">
                <div>
                    <h2 className="text-3xl">{block.title}</h2>
                    <p className="text-base-invert-2 my-8 font-light">{block.content}</p>
                </div>
                <Image width={610} height={610} src={block.image} className="w-full md:w-1/2"
                       alt={block.imageAlt}/>
            </div>
        )
    }
}


const ContentBlock = (props: ContentBlockProps) => {
    return layout(props.block)
}

export default ContentBlock;
