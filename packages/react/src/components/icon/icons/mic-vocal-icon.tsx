"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MicVocal as OriginalMicVocalIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MicVocalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MicVocalIcon = component(Icon)({
  as: OriginalMicVocalIcon,
}) as Component<"svg", IconProps>
