"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Loader as OriginalLoaderIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `LoaderIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const LoaderIcon = component(Icon)({
  as: OriginalLoaderIcon,
}) as Component<"svg", IconProps>
