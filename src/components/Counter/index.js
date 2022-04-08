import { useState } from "react";
import PropTypes from 'prop-types'

const Counter = ( {step, startValue} ) => {

    const [count, setCount] = useState(startValue)
    const [historic, setHistoric] = useState({
        decremented: [],
        incremented:[]
    })

    const decrement = () => {
        setHistoric({
            ...historic,
            decremented: [...historic.decremented, count]
        })
        setCount(count - step)
    }
    const increment = () => {
        setHistoric({
            ...historic,
            incremented: [...historic.incremented, count]
        })
        setCount(count + step)
    }

    

    return (
        <div>
            <button onClick={decrement}>-</button>
            <div>Contador: {count}</div>
            <div>Decremented: {historic.decremented.join(', ')} </div>
            <div>Incremented: {historic.incremented.join(', ')} </div>
            <button onClick={increment}>+</button>
        </div>
    )
}

Counter.defaultProps = {
    startValue: 0,
    step: 1,
}

Counter.propTypes = {
    startValue: PropTypes.number
}

export default Counter