import Container from "./elements/Container"
import { Dispatch, SetStateAction, useRef } from "react"
import "../animations/FadeIn.css"
import "../animations/Pulse.css"
import "../animations/Zoom.css"

interface Props {
    setStep: Dispatch<SetStateAction<number>>
}

export default function Landing(props: Props) {
    const map = useRef<HTMLImageElement>(null)
    const button = useRef<HTMLButtonElement>(null)
    return (
        <Container>
            <div className="w-full h-full flex flex-col items-center justify-center fadeIn" onClick={() => {
                console.log("clicked")
                button.current?.setAttribute("hidden", "true")
                map.current?.classList.add("zoom")
                map.current?.addEventListener("animationend", () => {
                    props.setStep(1)
                })
            }}>
                <img src="/IndiaMap.jpg" ref={map} width={400} />
                <button ref={button} className="uppercase mt-5 pulse cursor-default border-y border-black">click anywhere to begin</button>
            </div>
        </Container>
    )
}