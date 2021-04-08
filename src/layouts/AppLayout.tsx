import React, { ReactNode } from "react"
import SEO from "../components/SEO"

const AppLayout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <SEO />
    <main className="section">{children}</main>
  </>
)

export default AppLayout
