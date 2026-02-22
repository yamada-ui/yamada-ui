"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { File as OriginalFileIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileIcon = component(Icon)({ as: OriginalFileIcon }) as Component<
  "svg",
  IconProps
>
