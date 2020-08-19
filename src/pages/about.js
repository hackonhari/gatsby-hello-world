import React from "react"
import Header from "../components/header"
import { Link } from "gatsby"

export default function About() {
  return (
    <div>
      <div style={{ color: `teal` }}>
        <Link to="/">Home</Link>
        <Header headerText="About Gatsby" />
        <p>Such wow. Very React.</p>
      </div>
    </div>
  )
}
