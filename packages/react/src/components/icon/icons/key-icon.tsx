"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Key as OriginalKeyIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `KeyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const KeyIcon = component(Icon)({ as: OriginalKeyIcon }) as Component<
  "svg",
  IconProps
>
