import React from "react"
import { IoMail, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5"

const SocialLink: React.FC<{}> = () => (
  <div className="buttons">
    <a className="button is-light is-outlined is-inverted is-rounded is-size-6 p-3" href="https://github.com"><IoLogoGithub /></a>
    <a className="button is-light is-outlined is-inverted is-rounded is-size-6 p-3" href="https://github.com"><IoLogoLinkedin /></a>
    <a className="button is-light is-outlined is-inverted is-rounded is-size-6 p-3" href="https://github.com"><IoMail /></a>
  </div>
)

export default SocialLink
