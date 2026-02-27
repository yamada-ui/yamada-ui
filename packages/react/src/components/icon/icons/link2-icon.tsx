"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Link2 as OriginalLink2Icon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Link2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Link2Icon = component(Icon)({
  as: OriginalLink2Icon,
}) as Component<"svg", IconProps>
