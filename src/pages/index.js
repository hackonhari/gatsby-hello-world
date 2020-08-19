import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

const Home = () => {
  return (
    <div style={{ color: "purple" }}>
      <Header headerText="hello gatsby" />
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia ex
        eos, beatae quisquam libero omnis sit magni rem culpa repudiandae,
        labore voluptatem? Perspiciatis expedita natus cupiditate ratione.
        Omnis, praesentium modi!
      </p>
      <img
        src="https://source.unsplash.com/random/400x200"
        alt="random image"
      />
    </div>
  )
}
export default Home
