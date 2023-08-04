import { Heading, HeadingProps, Link } from '@yamada-ui/react'
import { FC } from 'react'
import { Link as LinkIcon } from 'components/media-and-icons'

export type LinkedHeadingProps = HeadingProps

export const LinkedHeading: FC<LinkedHeadingProps> = ({ id, children, ...rest }) => {
  return (
    <Heading
      id={id}
      position='relative'
      css={{ scrollMarginBlock: '5rem' }}
      _hover={{ '& > a': { opacity: 1 } }}
      {...rest}
    >
      {id ? (
        <Link
          href={`#${id}`}
          pe='2'
          position='absolute'
          top='0'
          left='-1em'
          color='link'
          opacity='0'
          _hover={{ opacity: 1 }}
          _focus={{ outline: 'none' }}
          _focusVisible={{ boxShadow: 'none' }}
          tabIndex={-1}
        >
          <LinkIcon />
        </Link>
      ) : null}
      {children}
    </Heading>
  )
}
