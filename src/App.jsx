import { useState } from 'react'
import './App.css'
import Quote from './compounents/Quote'
import BtnQuote from './compounents/BtnQuote'
import phrases from './utils/phrases.json'
import getRandomElemArray from './utils/getRandomElemArray'

function App() {

 const phrasesRandom = getRandomElemArray(phrases)
 const numberRandom = getRandomElemArray([1,2,3,4])

 const [quote, setQuote] = useState(phrasesRandom)
 const [numberBg, setNumberBg] = useState(numberRandom)
 const bgStyle = {
  backgroundImage: `url(/fondo${numberBg}.jpg)`
 }

  return (
    <div className='conteiner' style = {bgStyle}>
      <h1 className='conteiner_title'>galleta de la fortuna</h1>
      <Quote phrase={quote} />
      <BtnQuote 
        setQuote={setQuote}
        phrases={phrases} 
        setNumberBg ={setNumberBg}
      />
    </div>
  )
}

export default App
