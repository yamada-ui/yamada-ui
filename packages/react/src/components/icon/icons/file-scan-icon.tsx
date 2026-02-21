"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileScan as OriginalFileScanIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileScanIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileScanIcon = component(Icon)({
  as: OriginalFileScanIcon,
}) as Component<"svg", IconProps>
