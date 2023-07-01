import { forwardRef } from '@yamada-ui/core'
import { ReactElement } from 'react'
import { Button, ButtonProps } from './button'

type IconButtonOptions = {
  /**
   * The icon to be used in the button.
   */
  icon?: ReactElement
  /**
   * If `true`, the button will be perfectly round. Else, it'll be slightly round.
   *
   * @default false
   */
  isRounded?: boolean
}

export type IconButtonProps = Omit<
  ButtonProps,
  'leftIcon' | 'rightIcon' | 'loadingIcon' | 'loadingText' | 'loadingPlacement'
> &
  IconButtonOptions

export const IconButton = forwardRef<IconButtonProps, 'button'>(
  ({ icon, isRounded, children, ...rest }, ref) => {
    return (
      <Button ref={ref} p={0} {...(isRounded ? { rounded: 'full' } : {})} {...rest}>
        {icon || children}
      </Button>
    )
  },
)
