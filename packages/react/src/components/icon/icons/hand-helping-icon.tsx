"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { HandHelping as OriginalHandHelpingIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HandHelpingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HandHelpingIcon = component(Icon)({
  as: OriginalHandHelpingIcon,
}) as Component<"svg", IconProps>
