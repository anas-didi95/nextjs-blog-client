import React, { ReactNode } from "react"
import Divider from "../components/Divider"
import NavMenu from "../components/NavMenu"
import ProfileInfo from "../components/ProfileInfo"
import SocialLink from "../components/SocialLink"
import { TNavMenu } from "../utils/types"

const CommonLayout: React.FC<{ children: ReactNode, active: TNavMenu }> = ({ children, active }) => (
  <div className="container">
    <div className="columns">
      <div className="column is-1 is-hidden-mobile" />
      <div className="column is-3">
        <_InfoColumn active={active} />
      </div>
      <div className="column is-1">
        <_DividerColumn />
      </div>
      <div className="column">
        {children}
      </div>
      <div className="column is-1" />
    </div>
  </div>
)

const _InfoColumn: React.FC<{ active: TNavMenu }> = ({ active }) => (
  <>
    <ProfileInfo />
    <NavMenu active={active} />
    <br />
    <SocialLink />
  </>
)

const _DividerColumn: React.FC<{}> = () => (
  <>
    <div
      style={{ display: "flex", height: "75vh" }}
      className="is-hidden-mobile">
      <div style={{ flex: 1, height: "75vh" }}></div>
      <Divider isVertical isHideMobile />
      <div style={{ flex: 1, height: "75vh" }}></div>
    </div>
    <Divider isHideDesktop />
  </>
)

export default CommonLayout
