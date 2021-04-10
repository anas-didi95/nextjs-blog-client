import React from "react"

interface INavMenu {
  active: "articles" | "projects" | "about-me"
}
const NavMenu: React.FC<INavMenu> = ({ active }) => (
  <aside className="menu">
    <ul className="menu-list">
      <li>
        <ul>
          <li>
            <a className={`${active === "articles" ? "is-active" : ""}`}>Articles</a>
          </li>
          <li>
            <a className={`${active === "projects" ? "is-active" : ""}`}>Projects</a>
          </li>
          <li>
            <a className={`${active === "about-me" ? "is-active" : ""}`}>About Me</a>
          </li>
        </ul>
      </li>
    </ul>
  </aside>
)

export default NavMenu
