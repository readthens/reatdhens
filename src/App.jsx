import Header from "./Header"
import Nav from "./Nav"
import List from "./List"
import Calculator from "./Calculator"
import { Routes, Route } from "react-router-dom"
import Home from "./Home"


// This is a react functional component (or just component)
function App() {


  return (
    <>
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculator/>} />
      </Routes>
    </>
  )
}

export default App

/*
    react component is a function that returns JSX
    JSX is a language that looks like a cross between HTML+JS

    function Example() {
      return <h1>Hello World</h1>
    }

    function Example() {
      return (
        <h1>Hello World</h1>
      )
    }

    const Example = () => <h1>Hello World</h1>

    let Example = () => {
      return <h1>Hello World</h1>
    }

    const Example = () => {
      return (
        <h1>Hello World</h1>
      )
    }

    A component file should be PascalCase.jsx

    ------ exporting

      export default function Example() {
      
      }


      OR

      funciton Example() {
      
      }

      export default Example

    -------- 

      Component without child JSX
        <Header />

      Component WITH child JSX
        <ProductCard>
           JSX goes here
        </ProductCard>

    ---------- PROPS

      <Header name="Matthew" apple="banana" isMale={true} />

      in the Header.jsx...
        export default function Header(props) {
            now we have props.name, props.banana, etc...
        }
*/
