"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PackageMinus as OriginalPackageMinusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PackageMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PackageMinusIcon = component(Icon)({
  as: OriginalPackageMinusIcon,
}) as Component<"svg", IconProps>
