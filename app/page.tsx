import React from "react";
import {SurrealLogo} from "@/app/components/UI/SurrealLogo";
import Image from "next/image";
import NeonButton from "@/app/components/UI/NeonButton";
import InfoCard from "@/app/components/UI/InfoCard";
import {contentBlocks} from "@/data";
import ContentBlock from "@/app/components/UI/ContentBlock";
import WaitingListModal from "@/app/components/UI/WaitingListModal";

export type TInfoCard = {
    headerText?: string,
    content?: string,
    icon?: React.ReactNode
}

export default function Home() {
    const infoCards: TInfoCard[] = [
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                       className="w-6 h-6 text-primary">
                <path fillRule="evenodd"
                      d="M9 1.5H5.625c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5zm6.61 10.936a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 14.47a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"/>
                <path
                    d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z"/>
            </svg>,
            headerText: "Develop easier",
            content: "There is no need for your team to learn new complicated database languages. Getting started with SurrealDB is as simple as one command - and advanced functionality is simple to understand, whilst still being fast and performant."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                       className="w-6 h-6 text-primary">
                <path fillRule="evenodd"
                      d="M9 1.5H5.625c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5zm6.61 10.936a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 14.47a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"/>
                <path
                    d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z"/>
            </svg>
            ,
            headerText: "Build faster",
            content: "SurrealDB simplifies your database and API stack, removing the need for most server-side components. As a web database, client-side applications can be built with direct connections to SurrealDB, while traditional server-side development techniques can still leverage the powerful but simple querying and analytics abilities."
        },
        {
            icon: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                       className="w-6 h-6 text-primary">
                <path fillRule="evenodd"
                      d="M9 1.5H5.625c-1.036 0-1.875.84-1.875 1.875v17.25c0 1.035.84 1.875 1.875 1.875h12.75c1.035 0 1.875-.84 1.875-1.875V12.75A3.75 3.75 0 0016.5 9h-1.875a1.875 1.875 0 01-1.875-1.875V5.25A3.75 3.75 0 009 1.5zm6.61 10.936a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 14.47a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z"
                      clipRule="evenodd"/>
                <path
                    d="M12.971 1.816A5.23 5.23 0 0114.25 5.25v1.875c0 .207.168.375.375.375H16.5a5.23 5.23 0 013.434 1.279 9.768 9.768 0 00-6.963-6.963z"/>
            </svg>
            ,
            headerText: "Scale quicker",
            content: "Forget about scaling databases, servers, loadbalancers, and API endpoints. SurrealDB takes the hassle out of your stack, enabling you to grow and operate at scale with a highly-available, highly-scalable distributed platform. Deploy anywhere, or keep it simple with SurrealDB Cloud."
        }
    ]
    return (
        <div>
            <div className="my-24 lg:w-3/5">
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
                       src="/surrealLogo.png" width={910} height={910} priority={true}
                       alt="something"/>

                <div className="my-14 flex flex-col lg:flex-row gap-4">
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
                    <WaitingListModal title={"Join cloud waitlist"}/>
                </div>
            </div>

            <div className="md:text-center mx-auto mt-40 md:w-3/5">
                <h2 className="text-4xl font-semibold">Why use <SurrealLogo/>?</h2>
                <p className="text-base-invert-2 my-8">
                    SurrealDB is an innovative NewSQL cloud database designed for serverless applications, Jamstack
                    applications, single-page applications, and traditional applications alike. Its unmatched
                    versatility and exceptional cost-effectiveness make it suitable for deployment in the cloud,
                    on-premise, in embedded systems, and in edge computing environments. For a quick start, check out
                    our getting started guide!
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

            <div className="flex flex-col md:flex-row justify-center gap-5 my-20">
                {infoCards.map((card, index) => (
                    <InfoCard headerText={card.headerText} content={card.content} icon={card.icon}/>
                ))}
            </div>

            <div>
                {contentBlocks.map((block, index) => (
                    <ContentBlock block={block} />
                ))}
            </div>

        </div>
    )
}
