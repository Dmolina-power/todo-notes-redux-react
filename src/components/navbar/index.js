import React from "react";

const Nav = () => {
    return(
<nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand mb-0 h1" href="/">Counter and ToDo's</a>
    <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link"  href="/counter">Counter</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/todos">ToDo's</a>
        </li>
        </ul>
  </div>
</nav>
    )
}

export default Nav;