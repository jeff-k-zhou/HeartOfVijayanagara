import Container from "./elements/Container"
import { Dispatch, SetStateAction, useEffect, useRef } from "react"
import "../animations/Zoom.css"
import "../animations/FadeIn.css"
import "../animations/FadeOut.css"

interface Props {
    setStep: Dispatch<SetStateAction<number>>
}

export default function StepTwo(props: Props) {
    const bg = useRef<HTMLDivElement>(null)
    const card = useRef<HTMLDivElement>(null)
    useEffect(() => {
        bg.current?.addEventListener("animationend", () => {
            card.current?.classList.add("fadeIn")
            card.current?.removeAttribute("hidden")
        })
        
        return () => {
            bg.current?.removeEventListener("animationend", () => {
                
            })
        }
    })
    return (
        <Container>
            <div className="w-full h-full flex flex-col items-start justify-end bg-cover bg-center zoomIn" ref={bg} style={{ backgroundImage: "url(/IndiaPalace.jpg)" }}>
                <div className="ml-5 mb-5 rounded-md bg-white w-2/3 flex flex-row justify-center" hidden ref={card}>
                    <div className="w-5/6 py-5">
                        <h1 className="text-4xl">Vijayanagara Palace</h1>
                        <h2 className="mt-5">
                            This is a section of a Vijayanagara Palace located in Hampi, a village located inside the ruins of the capital city of the Vijayanagara Empire.
                            It was used to house ceremonial elephants that were used in festivities and celebrations for the royal family. Featuring arched gateways and domed roofs, the architecture of the stables display
                            a heavy Islamic influence originating from its close proximity to the Deccan Sultanates. These elephant stables highlight the diverse and
                            unique architectural styles that were present in the Vijayanagara Empire through syncretic blends of many different Hindu and Islamic styles.
                        </h2>
                        <button className="mt-5 uppercase border-y border-black pulse w-full rounded-md" onClick={() => {
                            card.current?.classList.add("fadeOut")
                            bg.current?.classList.add("fadeOutDelay")
                            card.current?.addEventListener("animationend", () => {
                                card.current?.setAttribute("hidden", "true")
                            })
                            bg.current?.addEventListener("animationend", () => {
                                props.setStep(4)
                            })
                        }}>next</button>
                    </div>
                </div>
            </div>
        </Container>
    )
}