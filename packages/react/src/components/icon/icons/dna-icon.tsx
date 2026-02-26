"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Dna as OriginalDnaIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `DnaIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DnaIcon = component(Icon)({ as: OriginalDnaIcon }) as Component<
  "svg",
  IconProps
>
