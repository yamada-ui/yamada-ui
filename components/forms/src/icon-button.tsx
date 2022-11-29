import { forwardRef } from '@yamada-ui/core'
import { ReactElement } from 'react'
import { Button, ButtonProps } from '.'

type IconButtonOptions = {
  icon?: ReactElement
  isRound?: boolean
}

export type IconButtonProps = Omit<
  ButtonProps,
  'leftIcon' | 'rightIcon' | 'loadingIcon' | 'loadingText' | 'loadingPlacement'
> &
  IconButtonOptions

export const IconButton = forwardRef<IconButtonProps, 'button'>(
  ({ icon, isRound, children, ...rest }, ref) => {
    return (
      <Button ref={ref} p={0} rounded={isRound ? 'full' : undefined} {...rest}>
        {icon || children}
      </Button>
    )
  },
)
