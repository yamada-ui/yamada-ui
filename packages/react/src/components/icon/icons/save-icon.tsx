"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Save as OriginalSaveIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SaveIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SaveIcon = component(Icon)({ as: OriginalSaveIcon }) as Component<
  "svg",
  IconProps
>
