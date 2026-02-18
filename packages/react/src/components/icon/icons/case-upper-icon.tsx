"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CaseUpper as OriginalCaseUpperIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CaseUpperIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CaseUpperIcon = component(Icon)({
  as: OriginalCaseUpperIcon,
}) as Component<"svg", IconProps>
