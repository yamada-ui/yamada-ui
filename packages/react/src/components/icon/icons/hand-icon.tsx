"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Hand as OriginalHandIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HandIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HandIcon = component(Icon)({ as: OriginalHandIcon }) as Component<
  "svg",
  IconProps
>
