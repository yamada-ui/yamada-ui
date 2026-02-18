"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Omega as OriginalOmegaIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `OmegaIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const OmegaIcon = component(Icon)({
  as: OriginalOmegaIcon,
}) as Component<"svg", IconProps>
