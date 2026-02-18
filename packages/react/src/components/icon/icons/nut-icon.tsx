"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Nut as OriginalNutIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `NutIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const NutIcon = component(Icon)({ as: OriginalNutIcon }) as Component<
  "svg",
  IconProps
>
