"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { FileQuestionMark as OriginalFileQuestionMarkIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `FileQuestionMarkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const FileQuestionMarkIcon = component(Icon)({
  as: OriginalFileQuestionMarkIcon,
}) as Component<"svg", IconProps>
