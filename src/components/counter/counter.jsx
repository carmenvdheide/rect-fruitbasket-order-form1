import {useState} from "react";
import './counter.css'

function Counter({text, name}) {

    const [numberOfFruits, setNumberOfFruits] = useState({
        strawberries: 0,
        bananas: 0,
        apples: 0,
        kiwis: 0,
    })

    const incrementFruitCount = (fruitName) => {
        setNumberOfFruits(prevState => ({
            ...prevState,
            [fruitName]: prevState[fruitName] + 1
        }))
    }

    const decrementFruitCount = (fruitName) => {
        setNumberOfFruits(prevState => ({
            ...prevState,
            [fruitName]: prevState[fruitName] - 1
        }))
    }

    return (
        <section className="fruitcounter">
            <p>{text}</p>
            <div className="buttons">
                <button
                    type="button"
                    onClick={() => {numberOfFruits[name] !== 0 ? decrementFruitCount(name) : ""}}
                >-</button>
                <p>{numberOfFruits[name]}</p>
                <button
                    type="button"
                    onClick={() => {incrementFruitCount(name)}}
                >+</button>
            </div>

        </section>
    )
}

export default Counter