"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PackageCheck as OriginalPackageCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PackageCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PackageCheckIcon = component(Icon)({
  as: OriginalPackageCheckIcon,
}) as Component<"svg", IconProps>
