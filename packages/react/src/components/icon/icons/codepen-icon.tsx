"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Codepen as OriginalCodepenIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CodepenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CodepenIcon = component(Icon)({
  as: OriginalCodepenIcon,
}) as Component<"svg", IconProps>
