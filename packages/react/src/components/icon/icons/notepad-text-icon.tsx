"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { NotepadText as OriginalNotepadTextIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `NotepadTextIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const NotepadTextIcon = component(Icon)({
  as: OriginalNotepadTextIcon,
}) as Component<"svg", IconProps>
