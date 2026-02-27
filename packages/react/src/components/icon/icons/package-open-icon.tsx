"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PackageOpen as OriginalPackageOpenIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PackageOpenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PackageOpenIcon = component(Icon)({
  as: OriginalPackageOpenIcon,
}) as Component<"svg", IconProps>
