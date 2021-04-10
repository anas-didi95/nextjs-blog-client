import React from "react"
import routeJson from "../utils/constants/route.json"

interface INavMenu {
  active: "articles" | "projects" | "aboutMe"
}
const NavMenu: React.FC<INavMenu> = ({ active }) => (
  <aside className="menu">
    <ul className="menu-list">
      <li>
        <ul>
          {Object.keys(routeJson).map((key) => (
            <li key={key}>
              <a className={`${active === key ? "is-active" : ""}`}>
                {routeJson[key].label}
              </a>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  </aside>
)

export default NavMenu
