import { Icon, IconProps } from '@yamada-ui/react'
import { forwardRef } from 'react'

export const List = forwardRef<SVGSVGElement, IconProps>(({ boxSize = '1.3em', ...rest }, ref) => {
  return (
    <Icon ref={ref} boxSize={boxSize} {...rest}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='1.5'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M9 6l11 0'></path>
        <path d='M9 12l11 0'></path>
        <path d='M9 18l11 0'></path>
        <path d='M5 6l0 .01'></path>
        <path d='M5 12l0 .01'></path>
        <path d='M5 18l0 .01'></path>
      </svg>
    </Icon>
  )
})

List.displayName = 'List'
