import React from 'react'
import {Link} from "react-router-dom"

function Home() {
  return (
    <>
    <Link to="/buttons">
    <button>Buttons</button>
    </Link>
    <Link to="/headings">
    <button>Headings</button>
    </Link>
    <Link to="/input">
    <button>Input tags</button>
    </Link>
    <Link to="lists">
    <button>Lists</button>
    </Link>
    <Link to="/mapping">
    <button>Mapping</button>
    </Link>
    </>
  )
}

export default Home