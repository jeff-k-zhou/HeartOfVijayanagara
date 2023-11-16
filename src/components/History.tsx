import Container from "./elements/Container"
import { Dispatch, SetStateAction, useRef } from "react"
import "../animations/SlideIn.css"
import "../animations/Pulse.css"

interface Props {
    setStep: Dispatch<SetStateAction<number>>
}

export default function History(props: Props) {
    const section = useRef<HTMLDivElement>(null)
    return (
        <Container>
            <div className="w-full h-full flex flex-col items-center justify-center slideIn" ref={section}>
                <div className="w-2/3">
                    <h1 className="text-4xl">A Brief History Before We Begin...</h1>
                    <p className="text-xl mt-3">
                        The Vijayanagara Empire was an empire based in South India that covered modern-day Karnataka, Andhra Pradesh, Tamil Nadu, Kerala, Goa, and some parts of Telangana and Maharashtra.
                        The empire was founded in 1336 by Harihara I and his brother Bukka Raya I of the Sangama Dynasty in a response to the increasingly aggressive attacks from neighboring Sultanates.
                        Elite patrons from all across the empire would fund many architecture projects to display their power and assert dominance on others, leading to the creation of many grandiose structures
                        and unique architectural styles caused by the blend of different ideas.
                    </p>
                    <button className="w-full border-y border-black uppercase rounded-md pulse mt-5" onClick={() => {
                        section.current?.classList.add("slideOut")
                        section.current?.addEventListener("animationend", () => {
                            props.setStep(3)
                        })
                    }}>next</button>
                </div>
            </div>
        </Container>
    )
}