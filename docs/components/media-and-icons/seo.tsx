import type { NextSeoProps } from "next-seo"
import { CONSTANT } from "constant"
import { NextSeo } from "next-seo"
import React from "react"

export type SEOProps = {
  disableTitleTemplate?: boolean
} & Pick<NextSeoProps, "description" | "title">

export const SEO = ({
  description,
  disableTitleTemplate = false,
  title,
}: SEOProps) => (
  <NextSeo
    description={description}
    title={title}
    {...CONSTANT.SEO.NEXT_SEO_PROPS}
    {...(disableTitleTemplate ? { titleTemplate: "" } : {})}
  />
)
