"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CaseLower as OriginalCaseLowerIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CaseLowerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CaseLowerIcon = component(Icon)({
  as: OriginalCaseLowerIcon,
}) as Component<"svg", IconProps>
