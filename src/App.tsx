import { useState } from 'react'
import Landing from './components/Landing'
import StepOne from './components/StepOne'
import StepTwo from './components/StepTwo'
import StepThree from './components/StepThree'
import History from './components/History'
import Final from './components/Final'

function App() {
  const [step, setStep] = useState(0)

  if (step === 0) {
    return <Landing setStep={setStep} />
  } else if (step === 1) {
    return <StepOne setStep={setStep} />
  } else if (step === 2) {
    return <History setStep={setStep} />
  } else if (step === 3) {
    return <StepTwo setStep={setStep} />
  } else if (step === 4) {
    return <StepThree setStep={setStep} />
  } else if (step === 5) {
    return <Final setStep={setStep} />
  }
}

export default App
