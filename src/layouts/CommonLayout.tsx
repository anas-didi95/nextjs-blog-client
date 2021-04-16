import React from "react"
import Divider from "../components/Divider"
import NavMenu from "../components/NavMenu"
import ProfileInfo from "../components/ProfileInfo"
import SocialLink from "../components/SocialLink"

const CommonLayout: React.FC<{}> = () => (
  <div className="container">
    <div className="columns">
      <div className="column is-1 is-hidden-mobile" />
      <div className="column is-3">
        <_InfoColumn />
      </div>
      <div className="column is-1">
        <_DividerColumn />
      </div>
      <div className="column">
      </div>
      <div className="column is-1" />
    </div>
  </div>
)

const _InfoColumn: React.FC<{}> = () => (
  <>
    <ProfileInfo />
    <NavMenu active="articles" />
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
