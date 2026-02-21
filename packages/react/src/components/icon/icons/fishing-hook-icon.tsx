"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FishingHook as OriginalFishingHookIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FishingHookIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FishingHookIcon = component(Icon)({
  as: OriginalFishingHookIcon,
}) as Component<"svg", IconProps>
