import getRandomElemArray from "../utils/getRandomElemArray"


const BtnQuote = ( {setQuote, phrases, setNumberBg} ) => {

    const handleRandomPhrase = () => {
        setQuote(getRandomElemArray(phrases))
        setNumberBg(getRandomElemArray([1,2,3,4,5,6]))
    }

  return (
   <button className="conteiner_btn" onClick={handleRandomPhrase}>other phrase</button>
  )
}

export default BtnQuote