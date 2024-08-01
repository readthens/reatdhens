/*
        ------ destructuring props

        -- no destructuring
            function Header(props) {
                // props.whatever
            }

        -- destructuring in function body
            function Header(props) {
                let { whatever } = props
            }

        -- destructuring in parameter list
            function Header({ whatever }) {
                
            }
*/

function Header(props) {
    let { name, gender,age } = props
    return(
        <>
            <header>
                <h1>Portfolio</h1>
                {/* <h1>name: {name}</h1>
                <h1>name: {gender}</h1>
                <h1>name: {age}</h1> */}
            </header>
        </>
    )
}

export default Header