"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Tags as OriginalTagsIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `TagsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const TagsIcon = component(Icon)({ as: OriginalTagsIcon }) as Component<
  "svg",
  IconProps
>
