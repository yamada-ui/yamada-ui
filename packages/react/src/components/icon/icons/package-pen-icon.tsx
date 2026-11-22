"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PackagePen as OriginalPackagePenIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PackagePenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PackagePenIcon = component(Icon)({
  as: OriginalPackagePenIcon,
}) as Component<"svg", IconProps>
