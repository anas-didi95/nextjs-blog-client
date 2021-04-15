import React from "react"
import Icon from "./Icon"

const SocialLink: React.FC<{}> = () => (
  <div className="buttons">
    <a className="button is-light is-outlined is-inverted is-rounded is-size-6 p-3" href="https://github.com"><Icon type="email" /></a>
    <a className="button is-light is-outlined is-inverted is-rounded is-size-6 p-3" href="https://github.com"><Icon type="linkedin" /></a>
    <a className="button is-light is-outlined is-inverted is-rounded is-size-6 p-3" href="https://github.com"><Icon type="github" /></a>
  </div>
)

export default SocialLink
