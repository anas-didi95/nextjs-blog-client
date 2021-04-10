import React from "react"

const NavMenu: React.FC<{}> = () => (
  <aside className="menu">
    <ul className="menu-list">
      <li>
        <ul>
          <li>
            <a className="is-active">Articles</a>
          </li>
          <li>
            <a>Projects</a>
          </li>
          <li>
            <a>About Me</a>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
)

export default NavMenu
