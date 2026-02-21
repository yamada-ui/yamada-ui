"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Plus as OriginalPlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PlusIcon = component(Icon)({ as: OriginalPlusIcon }) as Component<
  "svg",
  IconProps
>
