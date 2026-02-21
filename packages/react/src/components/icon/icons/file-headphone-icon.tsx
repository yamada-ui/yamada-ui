"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileHeadphone as OriginalFileHeadphoneIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileHeadphoneIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileHeadphoneIcon = component(Icon)({
  as: OriginalFileHeadphoneIcon,
}) as Component<"svg", IconProps>
