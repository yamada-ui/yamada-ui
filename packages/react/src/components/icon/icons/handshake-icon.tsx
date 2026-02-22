"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Handshake as OriginalHandshakeIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `HandshakeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const HandshakeIcon = component(Icon)({
  as: OriginalHandshakeIcon,
}) as Component<"svg", IconProps>
