"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Heading as OriginalHeadingIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HeadingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HeadingIcon = component(Icon)({
  as: OriginalHeadingIcon,
}) as Component<"svg", IconProps>
