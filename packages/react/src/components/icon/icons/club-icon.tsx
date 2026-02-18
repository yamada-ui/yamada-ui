"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Club as OriginalClubIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ClubIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ClubIcon = component(Icon)({ as: OriginalClubIcon }) as Component<
  "svg",
  IconProps
>
