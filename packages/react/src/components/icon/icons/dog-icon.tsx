"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Dog as OriginalDogIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DogIcon = component(Icon)({ as: OriginalDogIcon }) as Component<
  "svg",
  IconProps
>
