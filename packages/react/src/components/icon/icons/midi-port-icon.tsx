"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { MidiPort as OriginalMidiPortIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `MidiPortIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const MidiPortIcon = component(Icon)({
  as: OriginalMidiPortIcon,
}) as Component<"svg", IconProps>
