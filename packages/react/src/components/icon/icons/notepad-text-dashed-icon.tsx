"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { NotepadTextDashed as OriginalNotepadTextDashedIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `NotepadTextDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const NotepadTextDashedIcon = component(Icon)({
  as: OriginalNotepadTextDashedIcon,
}) as Component<"svg", IconProps>
