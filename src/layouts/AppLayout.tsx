import Head from "next/head"
import React, { ReactNode } from "react"
import metadata from "../utils/constants/metadata.json"

const AppLayout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <Head>
      <title>{metadata.title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <main className="section">{children}</main>
  </>
)

export default AppLayout
