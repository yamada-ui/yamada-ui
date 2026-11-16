"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { OctagonExclamationPoint as OriginalOctagonExclamationPointIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `OctagonExclamationPointIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const OctagonExclamationPointIcon = component(Icon)({
  as: OriginalOctagonExclamationPointIcon,
}) as Component<"svg", IconProps>
