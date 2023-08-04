import { Text, Link as UILink, LinkProps as UILinkProps } from '@yamada-ui/react'
import NextLink from 'next/link'
import { FC } from 'react'
import { ExternalLink } from 'components/media-and-icons'

export type LinkProps = UILinkProps

export const Link: FC<LinkProps> = ({ href, children, ...rest }) => {
  const isExternal = !(href.startsWith('/') || href.startsWith('#'))

  return (
    <UILink as={NextLink} href={href} isExternal={isExternal} {...rest}>
      <Text as='span'>{children}</Text>
      {isExternal ? <ExternalLink ms='0.25em' /> : null}
    </UILink>
  )
}
