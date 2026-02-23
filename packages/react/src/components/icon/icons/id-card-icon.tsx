"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { IdCard as OriginalIdCardIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `IdCardIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const IdCardIcon = component(Icon)({
  as: OriginalIdCardIcon,
}) as Component<"svg", IconProps>
