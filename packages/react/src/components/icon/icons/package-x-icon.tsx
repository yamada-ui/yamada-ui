"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PackageX as OriginalPackageXIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PackageXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PackageXIcon = component(Icon)({
  as: OriginalPackageXIcon,
}) as Component<"svg", IconProps>
