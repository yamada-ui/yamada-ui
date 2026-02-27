"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Film as OriginalFilmIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FilmIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FilmIcon = component(Icon)({ as: OriginalFilmIcon }) as Component<
  "svg",
  IconProps
>
