"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Link2Off as OriginalLink2OffIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `Link2OffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const Link2OffIcon = component(Icon)({
  as: OriginalLink2OffIcon,
}) as Component<"svg", IconProps>
