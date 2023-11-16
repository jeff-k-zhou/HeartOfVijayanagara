import Container from "./elements/Container"
import { Dispatch, SetStateAction, useEffect, useRef } from "react"
import "../animations/ZoomSlide.css"
import "../animations/Pulse.css"

interface Props {
    setStep: Dispatch<SetStateAction<number>>
}

export default function StepOne(props: Props) {
    const section = useRef<HTMLDivElement>(null)
    const info = useRef<HTMLDivElement>(null)
    useEffect(() => {
        section.current?.addEventListener("animationend", () => {
            info.current?.classList.add("fadeIn")
            info.current?.classList.remove("invisible")
            console.log("hi")
        })

        return () => {
            section.current?.removeEventListener("animationend", () => {
                console.log("hi")
            })
        }
    })
    return (
        <Container>
            <div className="w-full h-full flex flex-row items-center justify-center">
                <div className="zoomSlide" ref={section}>
                    <img src="/IndiaTemple.jpg" width={400} />
                </div>
                <div ref={info} className="w-1/3 invisible select-none">
                    <h1 className="text-4xl w-full">Welcome to the Heart of Vijayanagara!</h1>
                    <h2 className="mt-5">
                        The all new digital experience to explore the architectural wonders of the
                        Vijayanagara Empire. Witness the grandiose structures that ancient Southern India has to offer
                        and learn about its history and culture.
                    </h2>
                    <button className="mt-5 uppercase border-y border-black pulse w-full rounded-md" onClick={() => {
                        section.current?.classList.add("reverseZoomSlide")
                        info.current?.setAttribute("hidden", "true")
                        section.current?.addEventListener("animationend", () => {
                            props.setStep(2)
                        })
                    }}>next</button>
                </div>
            </div>
        </Container>
    )
}