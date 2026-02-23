"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileDigit as OriginalFileDigitIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileDigitIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileDigitIcon = component(Icon)({
  as: OriginalFileDigitIcon,
}) as Component<"svg", IconProps>
