"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { TagX as OriginalTagXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TagXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TagXIcon = component(Icon)({ as: OriginalTagXIcon }) as Component<
  "svg",
  IconProps
>
