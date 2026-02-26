"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { LoaderCircle as OriginalLoaderCircleIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LoaderCircleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LoaderCircleIcon = component(Icon)({
  as: OriginalLoaderCircleIcon,
}) as Component<"svg", IconProps>
