"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { Nfc as OriginalNfcIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `NfcIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const NfcIcon = component(Icon)({ as: OriginalNfcIcon }) as Component<
  "svg",
  IconProps
>
