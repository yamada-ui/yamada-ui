"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Voicemail as OriginalVoicemailIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `VoicemailIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const VoicemailIcon = component(Icon)({
  as: OriginalVoicemailIcon,
}) as Component<"svg", IconProps>
