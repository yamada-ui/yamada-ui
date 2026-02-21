"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Signature as OriginalSignatureIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `SignatureIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const SignatureIcon = component(Icon)({
  as: OriginalSignatureIcon,
}) as Component<"svg", IconProps>
