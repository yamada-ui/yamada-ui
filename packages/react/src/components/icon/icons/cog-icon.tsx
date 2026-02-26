"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Cog as OriginalCogIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CogIcon = component(Icon)({ as: OriginalCogIcon }) as Component<
  "svg",
  IconProps
>
