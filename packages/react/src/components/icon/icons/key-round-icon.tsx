"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { KeyRound as OriginalKeyRoundIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `KeyRoundIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const KeyRoundIcon = component(Icon)({
  as: OriginalKeyRoundIcon,
}) as Component<"svg", IconProps>
