"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FilePlay as OriginalFilePlayIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FilePlayIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FilePlayIcon = component(Icon)({
  as: OriginalFilePlayIcon,
}) as Component<"svg", IconProps>
