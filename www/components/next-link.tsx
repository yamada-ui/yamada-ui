import type {
  ButtonProps,
  HTMLRefAttributes,
  IconButtonProps,
  LinkProps as LinkProps,
  Merge,
} from "@yamada-ui/react"
import type { LinkProps as OriginalLinkProps } from "next/link"
import type { FC } from "react"
import { Button, IconButton, Link } from "@yamada-ui/react"
import OriginalLink from "next/link"

export interface NextLinkProps extends LinkProps {}

export const NextLink: FC<NextLinkProps> = ({ ...rest }) => {
  return <Link as={OriginalLink} {...rest} />
}

export interface NextLinkButtonProps
  extends Omit<Merge<OriginalLinkProps, ButtonProps>, "as" | "ref">,
    HTMLRefAttributes<"a"> {
  external?: boolean
}

export const NextLinkButton: FC<NextLinkButtonProps> = ({
  external,
  ...rest
}) => {
  return (
    <Button
      as={OriginalLink}
      rel={external ? "noopener" : undefined}
      target={external ? "_blank" : undefined}
      {...rest}
    />
  )
}

export interface NextLinkIconButtonProps
  extends Omit<Merge<OriginalLinkProps, IconButtonProps>, "as" | "ref">,
    HTMLRefAttributes<"a"> {
  external?: boolean
}

export const NextLinkIconButton: FC<NextLinkIconButtonProps> = ({
  external,
  ...rest
}) => {
  return (
    <IconButton
      as={OriginalLink}
      rel={external ? "noopener" : undefined}
      target={external ? "_blank" : undefined}
      {...rest}
    />
  )
}
