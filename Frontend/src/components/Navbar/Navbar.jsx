import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="menu">
          <img
            src="https://cdn-icons-png.flaticon.com/128/5259/5259008.png"
            alt="menu"
            style={{ height: 20, paddingRight: 5 }}
          ></img>
          <span>Menu</span>
        </div>

        <div className="logo">
          <img
            src="https://cdn-icons-png.flaticon.com/128/566/566983.png"
            alt="logo"
            style={{ height: 50, paddingRight: 10 }}
          ></img>
          <h1>Wait Here</h1>
        </div>

        <div>
          <a href="/login.html" className="Login">
            Login
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
