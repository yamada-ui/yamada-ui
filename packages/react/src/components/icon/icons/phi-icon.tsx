"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Phi as OriginalPhiIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PhiIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PhiIcon = component(Icon)({ as: OriginalPhiIcon }) as Component<
  "svg",
  IconProps
>
