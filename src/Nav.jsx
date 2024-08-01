/*
        react-router-dom    is the official package for creating a SPA with react
            SPA = single page application

        Setting up:
            1.      install with npm i react-router-dom
            2.      in main.jsx, wrap your app in a BrowserRouter or HashRouter
            3.      use Link components instead of anchors (with "to" instead of "href")
            4.      use the Routes and Route components

        neocities.org

        Publishing to git
            Only once, when you first create it
                git init
                git remote add origin REPOSITORY-URL-GOES-HERE
            Every time you update
                git add .
                git commit -m "YOUR-MESSAGE-HERE"
                git push origin NAME-OF-BRANCH
*/

import { Link } from "react-router-dom"


const links = [
    {
        name: "Home",
        href: "/"
    },
    {
        name: "Calculator",
        href: "/calculator"
    }
]

/*
    ---- rendering content from an array
        React
            arr.map(item => {
                return (
                    <li>
                        <a href={link.href}>{link.name}</a>
                    </li>
                )
            })

        Vue
            <li v-for="link in links">
                <a href={link.href}>{link.name}</a>
            </li>

        Svelte
            {#each links as link}
                <li>
                    <a href={link.href}>{link.name}</a>
                </li>
            {/each}

    ----- Creating state

        React   2011
            DEFINING:       const [count, setCount] = useState(4)
            UPDATING:       setCount(count + 1)

        Vue     2014
            DEFINING:       let count = ref(4)
            UPDATING:       count++

        Svelte  2016
            DEFINING:       let count = 4
            UPDATING:       count++
*/

function Nav() {
    return (
        <>
            <nav>
                <ul>
                    {links.map((link)=>{
                        return (
                            <li key={link.name}>
                                <Link to={link.href}>{link.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        </>
    )
}

export default Nav