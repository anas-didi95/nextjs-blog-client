import React from "react"
import { IoMail, IoLogoLinkedin, IoLogoGithub } from "react-icons/io5"

interface IIcon {
  type: "email" | "linkedin" | "github"
}
const Icon: React.FC<IIcon> = ({ type }) => (
  <>
    {
      {
        email: <IoMail />,
        linkedin: <IoLogoLinkedin />,
        github: <IoLogoGithub />,
      }[type]
    }
  </>
)

export default Icon
