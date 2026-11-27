"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { PackageQuestionMark as OriginalPackageQuestionMarkIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `PackageQuestionMarkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const PackageQuestionMarkIcon = component(Icon)({
  as: OriginalPackageQuestionMarkIcon,
}) as Component<"svg", IconProps>
