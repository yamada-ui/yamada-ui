import { Link, Text } from "@yamada-ui/react"
import type { HeadingProps } from "@yamada-ui/react"
import { Link as LinkIcon } from "@yamada-ui/lucide"
import type { FC } from "react"

export type LinkedHeadingProps = HeadingProps

export const LinkedHeading: FC<LinkedHeadingProps> = ({
  id,
  children,
  ...rest
}) => {
  return (
    <Text
      id={id}
      css={{ scrollMarginBlock: "6rem" }}
      _hover={{
        base: { "& > a": { opacity: 1 } },
        md: { "& > a": { opacity: 0 } },
      }}
      {...rest}
    >
      {children}

      {id ? (
        <Link
          href={`#${id}`}
          aria-label="anchor"
          display={{ base: "inline-block", md: "none" }}
          ps="2"
          color="link"
          opacity="0"
          _hover={{ opacity: 1 }}
          _focus={{ outline: "none" }}
          _focusVisible={{ boxShadow: "none" }}
          tabIndex={-1}
        >
          <LinkIcon fontSize="0.875em" />
        </Link>
      ) : null}
    </Text>
  )
}
