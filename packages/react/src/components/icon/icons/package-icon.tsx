"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Package as OriginalPackageIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PackageIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PackageIcon = component(Icon)({
  as: OriginalPackageIcon,
}) as Component<"svg", IconProps>
