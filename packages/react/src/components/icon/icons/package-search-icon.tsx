"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PackageSearch as OriginalPackageSearchIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PackageSearchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PackageSearchIcon = component(Icon)({
  as: OriginalPackageSearchIcon,
}) as Component<"svg", IconProps>
