"use client"

import type { IconName } from "lucide-react/dynamic"
import type { ComponentProps } from "react"
import type { IconProps } from "../icon"
import { DynamicIcon as OriginalDynamicIcon } from "lucide-react/dynamic"
import { Icon, withContext } from "../icon"

export interface DynamicIconProps extends IconProps {
  /**
   * The name of the Lucide icon to load.
   */
  name: IconName
  /**
   * The component rendered while the icon is loading.
   */
  fallback?: ComponentProps<typeof OriginalDynamicIcon>["fallback"]
}

/**
 * `DynamicIcon` dynamically loads a Lucide icon by name.
 *
 * @see https://yamada-ui.com/docs/components/icon
 */
export const DynamicIcon = withContext<"svg", DynamicIconProps>((props) => (
  <Icon as={OriginalDynamicIcon} {...props} />
))()
