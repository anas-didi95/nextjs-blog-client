import Head from "next/head"
import React, { ReactNode } from "react"

const AppLayout: React.FC<{ children: ReactNode }> = ({ children }) => (
  <>
    <Head>
      <title>My page title</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <main>{children}</main>
  </>
)

export default AppLayout
