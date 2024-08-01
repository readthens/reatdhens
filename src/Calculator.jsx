import "./Calculator.css"
import { useState } from "react"

const operators = "+-÷×.^"



function Calculator() {
    /* */
    let [expression, setExpression] = useState("")

    function clearExpression() {
        setExpression("")
    }
    function backspaceExpression() {
        setExpression(expression.slice(0,-1))
    }
    function addToExpression(e) {
        let prev = expression[expression.length-1]
        let next = e.target.value
        if (operators.includes(prev) && operators.includes(next)) {
            return
        }
        setExpression(expression + next)
    }
    function solveExpression(){
        expression = expression.replaceAll('×','*').replaceAll('÷','/').replaceAll('^','**')
        setExpression(eval(expression))
    }
    
    const rows = [
        [
            {value: 'AC', fn: clearExpression},
            {value: 'DE', fn: backspaceExpression},
            ".",
            "÷"
        ],
        [7, 8, 9, '×'],
        [4, 5, 6, '-'],
        [1, 2, 3, '+'],
        ['00', 0, '^', {value: '=', fn: solveExpression}]
    ]

    return (
        <>
            <div className="container">
                <div className="calculator">
                    <form action="">
                        <div>
                            <input type="text" name="display" id="display" placeholder="Enter a number" value={expression} />
                        </div>
                        {rows.map( row => {
                            return(
                                <div>
                                    {row.map(item => {
                                        return typeof item === 'object' ? (
                                            <input type="button" value={item.value} onClick={item.fn} />
                                        ) : (
                                            <input type="button" value={item} onClick={addToExpression} />
                                        )
                                    })}
                                </div>
                            )
                        })}
                    </form>
                </div>
            </div>
        </>
    )
}

export default Calculator