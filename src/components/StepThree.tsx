import Container from "./elements/Container"
import { Dispatch, SetStateAction, useRef } from "react"
import "../animations/FadeIn.css"
import "../animations/SlideIn.css"
import "../animations/FadeOut.css"

interface Props {
    setStep: Dispatch<SetStateAction<number>>
}

export default function StepThree(props: Props) {
    const bg = useRef<HTMLDivElement>(null)
    return (
        <Container>
            <div className="w-full h-full flex flex-col items-start justify-end bg-cover bg-center fadeIn" ref={bg} style={{ backgroundImage: "url(/Religion.jpg)" }}>
                <div className="ml-5 mb-5 rounded-md bg-white w-2/3 flex flex-row justify-center slideIn">
                    <div className="w-5/6 py-5">
                        <h1 className="text-4xl">Religious Temple</h1>
                        <h2 className="mt-5">
                            This temple from the Vijayanagara Empire is a prime example of the religious architecture that was present in the empire.
                            Like many other temples, it features a tall, elaborate Gopuram (tower) that is the main entrance to the temple. This is an image of
                            the mandapa, a pillared hall that is used for religious rituals and ceremonies. The mandapa is supported by many pillars that are intricately
                            carved with images of deities and other religious figures, most notably mythological creatures such as the Yali. The temple is a 
                            nice mix of the Chalukya, Hoysala, Rashtrakuta, Pandya and Chola styles from earlier empires, giving it a simplistic and peaceful feel.
                        </h2>
                        <button className="mt-5 uppercase border-y border-black pulse w-full rounded-md" onClick={() => {
                            bg.current?.classList.add("fadeOutTop")
                            bg.current?.addEventListener("animationend", () => {
                                bg.current?.setAttribute("hidden", "true")
                                props.setStep(5)
                            })
                        }}>next</button>
                    </div>
                </div>
            </div>
        </Container>
    )
}