"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { HdmiPort as OriginalHdmiPortIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HdmiPortIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HdmiPortIcon = component(Icon)({
  as: OriginalHdmiPortIcon,
}) as Component<"svg", IconProps>
