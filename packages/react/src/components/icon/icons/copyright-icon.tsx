"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Copyright as OriginalCopyrightIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CopyrightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CopyrightIcon = component(Icon)({
  as: OriginalCopyrightIcon,
}) as Component<"svg", IconProps>
