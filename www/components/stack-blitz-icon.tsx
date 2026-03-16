import type { IconProps } from "@yamada-ui/react"
import { Icon } from "@yamada-ui/react"

export interface StackblitzIconProps extends IconProps {}

export function StackblitzIcon(props: StackblitzIconProps) {
  return (
    <Icon fill="currentColor" viewBox="0 0 28 28" {...props}>
      <path d="M12.747 16.273h-7.46L18.925 1.5l-3.671 10.227h7.46L9.075 26.5l3.672-10.227z" />
    </Icon>
  )
}
