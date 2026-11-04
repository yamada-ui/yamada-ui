"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Lens as OriginalLensIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LensIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LensIcon = component(Icon)({ as: OriginalLensIcon }) as Component<
  "svg",
  IconProps
>
