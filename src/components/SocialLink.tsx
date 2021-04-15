import React, { ReactNode } from "react"
import Icon from "./Icon"

const SocialLink: React.FC<{}> = () => (
  <div className="buttons">
    <_Link><Icon type="email" /></_Link>
    <_Link><Icon type="linkedin" /></_Link>
    <_Link><Icon type="github" /></_Link>
  </div>
)

const _Link: React.FC<{ children: ReactNode }> = ({ children }) => (
  <a className="button is-light is-outlined is-inverted is-rounded is-size-6 p-3" href="https://github.com">
    {children}
  </a>
)

export default SocialLink
