"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Bolt as OriginalBoltIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `BoltIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const BoltIcon = component(Icon)({ as: OriginalBoltIcon }) as Component<
  "svg",
  IconProps
>
