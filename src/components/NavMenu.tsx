import Link from "next/link"
import React from "react"
import routeJson from "../utils/constants/route.json"
import { TNavMenu } from "../utils/types"

interface INavMenu {
  active: TNavMenu
}
const NavMenu: React.FC<INavMenu> = ({ active }) => (
  <aside className="menu">
    <ul className="menu-list">
      <li>
        <ul>
          {Object.keys(routeJson).map((key) => (
            <li key={key}>
              <Link href={routeJson[key].path}>
                <a
                  className={`${active === key ? "is-active" : ""}`}
                  href={routeJson[key].path}>
                  {routeJson[key].label}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </li>
    </ul>
  </aside>
)

export default NavMenu
