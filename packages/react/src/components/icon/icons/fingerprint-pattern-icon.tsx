"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FingerprintPattern as OriginalFingerprintPatternIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FingerprintPatternIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FingerprintPatternIcon = component(Icon)({
  as: OriginalFingerprintPatternIcon,
}) as Component<"svg", IconProps>
