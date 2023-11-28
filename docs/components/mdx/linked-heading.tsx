import type { HeadingProps } from "@yamada-ui/react"
import { Heading, Link } from "@yamada-ui/react"
import type { FC } from "react"
import { Link as LinkIcon } from "components/media-and-icons"

export type LinkedHeadingProps = HeadingProps

export const LinkedHeading: FC<LinkedHeadingProps> = ({
  id,
  children,
  ...rest
}) => {
  return (
    <Heading
      id={id}
      position="relative"
      css={{ scrollMarginBlock: "6rem" }}
      _hover={{
        base: { "& > a": { opacity: 1 } },
        md: { "& > a": { opacity: 0 } },
      }}
      {...rest}
    >
      {id ? (
        <Link
          href={`#${id}`}
          aria-label="anchor"
          display={{ base: "inline-block", md: "none" }}
          position="absolute"
          top="0"
          left="-1em"
          pe="2"
          color="link"
          opacity="0"
          _hover={{ opacity: 1 }}
          _focus={{ outline: "none" }}
          _focusVisible={{ boxShadow: "none" }}
          tabIndex={-1}
        >
          <LinkIcon />
        </Link>
      ) : null}
      {children}
    </Heading>
  )
}
