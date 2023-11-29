
import './App.css'
import {useState} from "react";

function App() {
const [numberStrawberries, setNumberStrawberries] = useState(0)
const [numberBananas, setNumberBananas] = useState(0)
const [numberApples, setNumberApples] = useState(0)
const [numberKiwis, setNumberKiwis] = useState(0)

function reset() {
    setNumberStrawberries(0)
    setNumberBananas(0)
    setNumberApples(0)
    setNumberKiwis(0)
}

  return (
    <>
        <h1>Fruitmand bezorgservice</h1>
        <section className="add-fruit">
            <p>Aardbeien</p>
            <button type="button" onClick={() => numberStrawberries > 0 ? setNumberStrawberries(numberStrawberries - 1) : setNumberStrawberries(numberStrawberries)}>-</button>
            <p>{numberStrawberries}</p>
            <button type="button" onClick={() => setNumberStrawberries(numberStrawberries + 1)}>+</button>
        </section>
        <section className="add-fruit">
            <p>Bananen</p>
            <button type="button" onClick={() => numberBananas > 0 ? setNumberBananas(numberBananas - 1) : setNumberBananas(numberBananas)}>-</button>
            <p>{numberBananas}</p>
            <button type="button" onClick={() => setNumberBananas(numberBananas + 1)}>+</button>
        </section>
        <section className="add-fruit">
            <p>Appels</p>
            <button type="button" onClick={() => numberApples > 0 ? setNumberApples(numberApples - 1) : setNumberApples(numberApples)}>-</button>
            <p>{numberApples}</p>
            <button type="button" onClick={() => setNumberApples(numberApples + 1)}>+</button>
        </section>
        <section className="add-fruit">
            <p>Kiwi's</p>
            <button type="button" onClick={() => numberKiwis > 0 ? setNumberKiwis(numberKiwis - 1) : setNumberKiwis(numberKiwis)}>-</button>
            <p>{numberKiwis}</p>
            <button type="button" onClick={() => setNumberKiwis(numberKiwis + 1)}>+</button>
        </section>
        <button type="button" onClick={reset}>Reset</button>
    </>
  )
}

export default App
