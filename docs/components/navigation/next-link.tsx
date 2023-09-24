import {
  Button,
  ButtonProps,
  IconButton,
  IconButtonProps,
  Link as UILink,
  LinkProps as UILinkProps,
} from '@yamada-ui/react'
import Link, { LinkProps } from 'next/link'
import { FC } from 'react'

export type NextLinkProps = UILinkProps

export const NextLink: FC<NextLinkProps> = ({ ...rest }) => {
  return <UILink as={Link} {...rest} />
}

export type NextLinkButtonProps = ButtonProps &
  Omit<LinkProps, 'as'> & {
    isExternal?: boolean
  }

export const NextLinkButton: FC<NextLinkButtonProps> = ({ isExternal, ...rest }) => {
  return (
    <Button
      as={Link}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener' : undefined}
      {...rest}
    />
  )
}

export type NextLinkIconButtonProps = IconButtonProps &
  Omit<LinkProps, 'as'> & {
    isExternal?: boolean
  }

export const NextLinkIconButton: FC<NextLinkIconButtonProps> = ({ isExternal, ...rest }) => {
  return (
    <IconButton
      as={Link}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener' : undefined}
      {...rest}
    />
  )
}
