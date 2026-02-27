"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Sofa as OriginalSofaIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SofaIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SofaIcon = component(Icon)({ as: OriginalSofaIcon }) as Component<
  "svg",
  IconProps
>
