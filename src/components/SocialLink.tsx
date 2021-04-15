import React, { ReactNode } from "react"
import Icon from "./Icon"
import metadataJson from "../utils/constants/metadata.json"

const SocialLink: React.FC<{}> = () => (
  <div className="buttons">
    <_Link href={`mailto:${metadataJson.social.email}`}><Icon type="email" /></_Link>
    <_Link href={metadataJson.social.linkedin}><Icon type="linkedin" /></_Link>
    <_Link href={metadataJson.social.github}><Icon type="github" /></_Link>
  </div>
)

const _Link: React.FC<{ children: ReactNode, href: string }> = ({ children, href }) => (
  <a className="button is-light is-outlined is-inverted is-rounded is-size-6 p-3" href={href}>
    {children}
  </a>
)

export default SocialLink
