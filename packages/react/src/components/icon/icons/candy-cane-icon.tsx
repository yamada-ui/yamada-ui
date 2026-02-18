"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CandyCane as OriginalCandyCaneIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CandyCaneIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CandyCaneIcon = component(Icon)({
  as: OriginalCandyCaneIcon,
}) as Component<"svg", IconProps>
