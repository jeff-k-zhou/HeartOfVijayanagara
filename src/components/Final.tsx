import Container from "./elements/Container"
import { Dispatch, SetStateAction } from "react"

interface Props {
    setStep: Dispatch<SetStateAction<number>>
}

export default function Final(props: Props) {
    return (
        <Container>
            <div className="w-full h-full flex flex-col items-center justify-center">
                <h1 className="text-4xl">Thank you for visiting!</h1>
                <h2 className="mt-5 w-1/2 text-center">
                    Thank you for visiting the Heart of Vijayanagara! We hope you enjoyed your time here and learned
                    something new about the Vijayanagara Empire. If you would like to learn more, please visit the rest of our
                    exhibit.
                </h2>
                <button className="border-y w-1/2 border-black rounded-md uppercase mt-5" onClick={() => {
                    props.setStep(0)
                }}>restart experience</button>
            </div>
        </Container>
    )
}