"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Atom as OriginalAtomIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `AtomIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const AtomIcon = component(Icon)({ as: OriginalAtomIcon }) as Component<
  "svg",
  IconProps
>
