import React from 'react'

const Navbar = () => {
    const menu = ["Home" , "Products" , "Cart" , "Profile"]
  return (
    <div id="navbar">
        <ul id="menu-list">
            {
              menu.map((menu) => <li key={menu} className={menu === "Cart" ? "active": ""}>{menu}</li>)
            }
        </ul>
    </div>
  )
}

export default Navbar