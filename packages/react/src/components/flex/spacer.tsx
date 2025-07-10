"use client"

import type { HTMLStyledProps } from "../../core"
import { styled } from "../../core"

export interface SpacerProps extends HTMLStyledProps {}

export const Spacer = styled("div", {
  name: "spacer",
  base: {
    alignSelf: "stretch",
    flex: 1,
    justifySelf: "stretch",
  },
})
