import { ReactNode } from "react"

interface Props {
    children: ReactNode
}

export default function Container(props: Props) {
  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden">
      {props.children}
    </div>
  )
}