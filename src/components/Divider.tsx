import React from "react"

interface IDivider {
  isVertical?: boolean
  isHideMobile?: boolean
  isHideDesktop?: boolean
}
const Divider: React.FC<IDivider> = ({
  isVertical,
  isHideMobile,
  isHideDesktop,
}) => (
  <div
    className={`divider ${isVertical ? "is-vertical" : ""} ${
      isHideMobile ? "is-hidden-mobile" : ""
    } ${isHideDesktop ? "is-hidden-desktop" : ""}`}>
    ~
  </div>
)

export default Divider
