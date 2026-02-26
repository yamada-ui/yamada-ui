"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Github as OriginalGithubIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `GithubIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const GithubIcon = component(Icon)({
  as: OriginalGithubIcon,
}) as Component<"svg", IconProps>
