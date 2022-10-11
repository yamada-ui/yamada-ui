import { ReactElement } from 'react'
import { forwardRef } from '../../system'
import { Button, ButtonProps } from './'

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
      // @ts-ignore
      <Button ref={ref} p={0} rounded={isRound ? 'full' : undefined} {...rest}>
        {icon || children}
      </Button>
    )
  },
)
