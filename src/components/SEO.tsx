import React from "react"
import Head from "next/head"
import metadata from "../utils/constants/metadata.json"

const SEO: React.FC<{}> = () => (
  <Head>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" />
    <meta name="description" content={metadata.description} />
    <title>{metadata.title}</title>
  </Head>
)

export default SEO
