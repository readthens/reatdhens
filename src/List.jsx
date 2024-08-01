import { useState } from "react"

const initialList = [
    'tomatoes',
    'corn',
    'bread',
    'eggs',
    'toothpaste'
]

// document.addEventListener('click', e => {
//     console.log(e.target)
// })

/*
        useState returns 2 things:  state, state updating function

        Two ways of updating state

            1. simply pass in the next value
                setCount(count + 1)
            2. pass it a callback which takes in the current value, and returns the new value
                setCount(currentCount => {
                    return currentCount + 1
                })
*/

export default function List() {
    const [list, setList] = useState(initialList)

    function handleSubmit(e) {
        e.preventDefault()

        // let form = e.target
        // let input = form.item
        // let newItem = input.value
        let newItem = e.target.item.value

        // setList(currentList => {
        //     let newList = [...currentList]
        //     newList.push(newItem)
        //     return newList
        // })

        let newList = [...list]
        newList.push(newItem)
        setList(newList)
    }

    function deleteItem(i) {
        setList(currentList => {
            let newList = [...currentList]
            newList.splice(i, 1)
            return newList
        })
    }

    return (
        <>
            <ul>
                {list.map((item, i) => {
                    return(
                        <li key={item + i}>
                            {item}
                            <button onClick={()=>deleteItem(i)}>x</button>
                        </li>
                    )
                })}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text" name="item" placeholder="New item" />
                <button>Add</button>
            </form>
        </>
    )
}