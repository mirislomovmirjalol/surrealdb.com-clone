import React from "react";
import {SurrealLogo} from "@/app/components/UI/SurrealLogo";
import Image from "next/image";
import NeonButton from "@/app/components/UI/NeonButton";

export default async function Home() {
    await console.log("hello")
    return (
        <div>
            <div className="my-24 md:w-3/5">
                <h1 className="text-4xl lg:text-6xl font-semibold">
                    <SurrealLogo className="text-6xl"/>
                    is the <span className="text-gradient">ultimate</span> multi-model <span
                    className="text-gradient">database</span> for tomorrow's applications
                </h1>
                <h2 className="my-9 text-2xl font-semibold">Develop easier. Build faster. Scale quicker.</h2>
                <p className="text-base-invert-2">
                    With an SQL-style query language, real-time queries with highly-efficient related data retrieval,
                    advanced security permissions for multi-tenant access, and support for performant analytical
                    workloads,
                    SurrealDB is the next generation serverless database.
                </p>
                <Image className="-z-10 2xl:right-[10%] xl:right-[-10%] -top-16 hidden xl:flex absolute"
                       src="/surrealLogo.png" width={910} height={910}
                       alt="something"/>

                <div className="my-14 flex flex-col md:flex-row gap-4">
                    <NeonButton variant={"outline"} size={"lg"} title="Get Started">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="ml-4">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                        </svg>
                    </NeonButton>
                    <NeonButton variant={"outline"} size={"lg"}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>
                        </svg>
                        Documentation
                    </NeonButton>
                    <NeonButton size={"lg"}>
                        Join cloud waitlist
                    </NeonButton>
                </div>
            </div>

            <div className="md:text-center mx-auto mt-40 md:w-3/5">
                <h2 className="text-4xl font-semibold">Why use <SurrealLogo/>?</h2>
                <p className="text-base-invert-2 my-8">
                    SurrealDB is an innovative NewSQL cloud database designed for serverless applications, Jamstack applications, single-page applications, and traditional applications alike. Its unmatched versatility and exceptional cost-effectiveness make it suitable for deployment in the cloud, on-premise, in embedded systems, and in edge computing environments. For a quick start, check out our getting started guide!
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <NeonButton variant={"outline"} size={"lg"} title="Jamstack apps">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="ml-4">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                        </svg>
                    </NeonButton>
                    <NeonButton variant={"outline"} size={"lg"} title="Serverless apps">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="ml-4">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"/>
                        </svg>
                    </NeonButton>
                </div>
            </div>

            <div className="flex flex-col md:flex-row justify-center gap-5 my-20 pb-96">
                <div className="bg-base-300 p-12 rounded-xl shadow-inner shadow-base-200 w-full">
                    <h4 className="font-medium text-xl">
                        Develop easier
                    </h4>
                    <p className="text-base-invert-2 my-4">
                        There is no need for your team to learn new complicated database languages. Getting started with SurrealDB is as simple as one command - and advanced functionality is simple to understand, whilst still being fast and performant.
                    </p>
                </div>
                <div className="bg-base-300 p-12 rounded-xl shadow-inner shadow-base-200 w-full">
                    <h4 className="font-medium text-xl">
                        Build faster
                    </h4>
                    <p className="text-base-invert-2 my-4">
                        There is no need for your team to learn new complicated database languages. Getting started with SurrealDB is as simple as one command - and advanced functionality is simple to understand, whilst still being fast and performant.
                    </p>
                </div>
                <div className="bg-base-300 p-12 rounded-xl shadow-inner shadow-base-200 w-full">
                    <h4 className="font-medium text-xl">
                        Scale quicker
                    </h4>
                    <p className="text-base-invert-2 my-4">
                        There is no need for your team to learn new complicated database languages. Getting started with SurrealDB is as simple as one command - and advanced functionality is simple to understand, whilst still being fast and performant.
                    </p>
                </div>
            </div>
        </div>
    )
}
