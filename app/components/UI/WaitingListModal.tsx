"use client"

import {Modal, ModalContent, ModalFooter, ModalHeader, useDisclosure} from "@nextui-org/react";
import React from "react";
import {SurrealLogo} from "@/app/components/UI/SurrealLogo";
import {Input} from "@nextui-org/input";
import NeonButton from "@/app/components/UI/NeonButton";

type TWaitingListModalProps = {
    title?: string,
}

const WaitingListModal = (props: TWaitingListModalProps) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [modalPlacement, setModalPlacement] = React.useState("auto");
    return (
        <>
            <NeonButton onClick={onOpen}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                     stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"/>
                </svg>
                {props.title ? props.title : "Get updates"}
            </NeonButton>
            <Modal
                backdrop={"blur"}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                size={"3xl"}
                motionProps={{
                    variants: {
                        enter: {
                            y: 0,
                            opacity: 1,
                            transition: {
                                duration: 0.3,
                                ease: "easeOut",
                            },
                        },
                        exit: {
                            y: -20,
                            opacity: 0,
                            transition: {
                                duration: 0,
                                ease: "easeIn",
                            },
                        }
                    }
                }}
                className="backdrop-blur-lg bg-base-300 p-3 m-8"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>
                                <div className="flex flex-col font-light divide-y-2 divide-base-invert-2-700">
                                    <h4 className="pb-5">
                                        Enter your email below to join the <SurrealLogo
                                        className="font-bold"/> newsletter and stay updated on new product releases,
                                        features, and updates to our documentation. We promise we won't spam you!
                                    </h4>
                                    <div className="pt-5 flex flex-col gap-4">
                                        <Input variant="bordered" className="bg-base-200 rounded-xl text-white"
                                               type="text" label="First Name"/>
                                        <Input variant="bordered" className="bg-base-200 rounded-xl text-white"
                                               type="text" label="Last Name"/>
                                        <Input variant="bordered" className="bg-base-200 rounded-xl text-white"
                                               type="email" label="Email"/>
                                    </div>
                                </div>
                            </ModalHeader>
                            <ModalFooter className="flex flex-col  mb-4">
                                <NeonButton onClick={onClose} title="Kepp me updated" size="lg"/>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}

export default WaitingListModal
