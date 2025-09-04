"use client"

import { Image } from "lucide-react"
import { component, Icon } from "../icon"

/**
 * `ImageIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const ImageIcon = component(Icon)({ as: Image })
