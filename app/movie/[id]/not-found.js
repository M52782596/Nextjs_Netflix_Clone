import Link from 'next/link'
import React from 'react'

const Movie404 = () => {
  return (
    <div
    style={{
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
    }}
  >
    <h1>We could'nt movie which you want </h1>
    <Link
      href="/"
      style={{ textDecoration: "underline", fontSize: 20, marginTop: 8 }}
    >
      Go home
    </Link>
  </div>
  )
}

export default Movie404