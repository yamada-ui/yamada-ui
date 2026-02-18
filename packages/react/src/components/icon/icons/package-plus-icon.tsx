"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PackagePlus as OriginalPackagePlusIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PackagePlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PackagePlusIcon = component(Icon)({
  as: OriginalPackagePlusIcon,
}) as Component<"svg", IconProps>
