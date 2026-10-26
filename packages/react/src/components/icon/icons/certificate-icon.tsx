"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Certificate as OriginalCertificateIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CertificateIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CertificateIcon = component(Icon)({
  as: OriginalCertificateIcon,
}) as Component<"svg", IconProps>
