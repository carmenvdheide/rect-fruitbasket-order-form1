
import './App.css'
import {useState} from "react";

function App() {
const [numberStrawberries, setNumberStrawberries] = useState(0)
const [numberBananas, setNumberBananas] = useState(0)
const [numberApples, setNumberApples] = useState(0)
const [numberKiwis, setNumberKiwis] = useState(0)

const [formState, setFormState] = useState({
    firstname: ' ',
    lastname: ' ',
    age: ' ',
    zipcode: ' ',
    deliverfrequency: ' ',
    moment: ' ',
    comments: ' ',
    conditions: ' ',
})

function reset() {
    setNumberStrawberries(0)
    setNumberBananas(0)
    setNumberApples(0)
    setNumberKiwis(0)
}

function handleChange(e) {
    const changedFieldName = e.target.name
    const newValue = e.target.type === "checkbox" ? e.target.checked : e.target.value
    setFormState(
        {
            ...formState,
            [changedFieldName]: newValue
        })

}

function submit(e) {
    e.preventDefault()

    console.log(`
    aantal aardbeien: ${numberStrawberries}
    aantal bananen: ${numberBananas}
    aantal appels: ${numberApples}
    aantal kiwi's: ${numberKiwis}`)
    console.log(formState)
}

  return (
    <>
        <div>
            <h1>Fruitmand bezorgservice</h1>
            <section className="add-fruit">
                <p>Aardbeien</p>
                <button type="button" onClick={() => numberStrawberries > 0 ? setNumberStrawberries(numberStrawberries - 1) : setNumberStrawberries(0)}>-</button>
                <p>{numberStrawberries}</p>
                <button type="button" onClick={() => setNumberStrawberries(numberStrawberries + 1)}>+</button>
            </section>
            <section className="add-fruit">
                <p>Bananen</p>
                <button type="button" onClick={() => numberBananas > 0 ? setNumberBananas(numberBananas - 1) : setNumberBananas(0)}>-</button>
                <p>{numberBananas}</p>
                <button type="button" onClick={() => setNumberBananas(numberBananas + 1)}>+</button>
            </section>
            <section className="add-fruit">
                <p>Appels</p>
                <button type="button" onClick={() => numberApples > 0 ? setNumberApples(numberApples - 1) : setNumberApples(0)}>-</button>
                <p>{numberApples}</p>
                <button type="button" onClick={() => setNumberApples(numberApples + 1)}>+</button>
            </section>
            <section className="add-fruit">
                <p>Kiwi's</p>
                <button type="button" onClick={() => numberKiwis > 0 ? setNumberKiwis(numberKiwis - 1) : setNumberKiwis(0)}>-</button>
                <p>{numberKiwis}</p>
                <button type="button" onClick={() => setNumberKiwis(numberKiwis + 1)}>+</button>
            </section>
            <button type="button" onClick={reset}>Reset</button>
        </div>
        <div>
            <form>
                <div>
                    <label htmlFor="firstname">Voornaam </label>
                    <input
                        type="text"
                        id="firstname"
                        name="firstname"
                        value={formState.firstname}
                        onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="lastname">Achternaam </label>
                    <input
                        type="text"
                        id="lastname"
                        name="lastname"
                        value={formState.lastname}
                        onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="age">Leeftijd</label>
                    <input
                        type="text"
                        id="age"
                        name="age"
                        value={formState.age}
                        onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="zipcode">Postcode </label>
                    <input
                        type="text"
                        id="zipcode"
                        name="zipcode"
                        value={formState.zipcode}
                        onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="deliverfrequency">Bezorgfrequentie</label>
                    <select
                        id="deliverfrequency"
                        name="deliverfrequency"
                        value={formState.deliverfrequency}
                        onChange={handleChange}>
                        <option value="every week">Elke week</option>
                        <option value="every other week">Om de week</option>
                        <option value="every month">Elke maand</option>
                    </select>
                </div>
                <div>
                    <input
                        type="radio"
                        id="day"
                        name="moment"
                        value="day"
                        checked={formState.moment === "day"}
                        onChange={handleChange}
                    />
                    <label htmlFor="day">Overdag</label>
                    <input
                        type="radio"
                        id="evening"
                        name="moment"
                        value="evening"
                        checked={formState.moment === "evening"}
                        onChange={handleChange}
                    />
                    <label htmlFor="evening">'s Avonds</label>
                </div>
                <div>
                    <label htmlFor="comments">Opmerking</label>
                    <textarea
                        id="comments"
                        rows="5" cols="30"
                        name="comments"
                        value={formState.comments}
                        onChange={handleChange}>
                    </textarea>
                </div>
                <div>
                    <input
                        type="checkbox"
                        id="conditions"
                        name="conditions"
                        value={formState.conditions}
                        onChange={handleChange}
                    />
                    <label htmlFor="termsandconditions">Ik ga akkoord met de voorwaarden</label>
                </div>
                <div>
                    <button
                        type="submit"
                        onClick={submit}>Verzend</button>
                </div>

            </form>
        </div>

    </>
  )
}

export default App
