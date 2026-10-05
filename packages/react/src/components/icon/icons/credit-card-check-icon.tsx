"use client"

import type { Component } from "../../../core"
import type { IconProps } from "../icon"
import { CreditCardCheck as OriginalCreditCardCheckIcon } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `CreditCardCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const CreditCardCheckIcon = component(Icon)({
  as: OriginalCreditCardCheckIcon,
}) as Component<"svg", IconProps>
