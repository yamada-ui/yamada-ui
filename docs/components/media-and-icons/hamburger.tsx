import { Icon, IconProps } from '@yamada-ui/react'
import { forwardRef } from 'react'

export const Hamburger = forwardRef<SVGSVGElement, IconProps>(
  ({ boxSize = '1.3em', ...rest }, ref) => {
    return (
      <Icon
        ref={ref}
        boxSize={boxSize}
        stroke='currentColor'
        fill='currentColor'
        strokeWidth='0'
        viewBox='0 0 1024 1024'
        aria-hidden='true'
        focusable='false'
        xmlns='http://www.w3.org/2000/svg'
        {...rest}
      >
        <path d='M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z'></path>
      </Icon>
    )
  },
)

Hamburger.displayName = 'Hamburger'
