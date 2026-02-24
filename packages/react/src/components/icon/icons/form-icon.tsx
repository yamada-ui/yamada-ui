"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Form as OriginalFormIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FormIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FormIcon = component(Icon)({ as: OriginalFormIcon }) as Component<
  "svg",
  IconProps
>
