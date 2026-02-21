"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LoaderPinwheel as OriginalLoaderPinwheelIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LoaderPinwheelIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LoaderPinwheelIcon = component(Icon)({
  as: OriginalLoaderPinwheelIcon,
}) as Component<"svg", IconProps>
