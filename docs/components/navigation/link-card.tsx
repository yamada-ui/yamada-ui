import type { CardProps, StringLiteral } from "@yamada-ui/react"
import type { ReactNode } from "react"
import {
  Card,
  CardBody,
  CardHeader,
  forwardRef,
  Heading,
  Ripple,
  useRipple,
} from "@yamada-ui/react"
import { Label } from "components/data-display"
import { TextWithCode } from "components/typography"
import { usePage } from "contexts"
import Link from "next/link"
import { memo } from "react"

export interface LinkCardProps extends Omit<CardProps, "title"> {
  description: ReactNode
  href: string
  title: ReactNode
  label?: null | StringLiteral
  with_description?: boolean
}

export const LinkCard = memo(
  forwardRef<LinkCardProps, "div">(
    (
      { description, href, label, title, with_description = true, ...rest },
      ref,
    ) => {
      const { documentMap } = usePage()
      const { onPointerDown, ...rippleProps } = useRipple(rest)

      if (href.startsWith("/")) {
        const document = documentMap.find(({ slug }) => slug === href)

        if (document) {
          title ??= document.title
          label ??= document.label
          description ??= document.description
        }
      }

      return (
        <Card
          ref={ref}
          as={Link}
          _active={{ bg: ["blackAlpha.200", "whiteAlpha.200"] }}
          _focus={{ outline: "none" }}
          _focusVisible={{ boxShadow: "outline" }}
          _hover={{ bg: ["blackAlpha.100", "whiteAlpha.100"] }}
          bg={["blackAlpha.50", "whiteAlpha.50"]}
          h={with_description ? { base: "40", md: "auto" } : "auto"}
          href={href}
          overflow="hidden"
          position="relative"
          size="normal"
          transitionDuration="normal"
          transitionProperty="colors"
          variant="outline"
          {...rest}
          onPointerDown={onPointerDown}
        >
          <CardHeader
            as="div"
            gap="sm"
            pb={!with_description ? "md" : undefined}
            pt="md"
          >
            <Heading lineClamp={1} size="md">
              {title}
            </Heading>

            {label ? <Label>{label}</Label> : null}
          </CardHeader>

          {with_description ? (
            <CardBody as="div" pt="md">
              <TextWithCode color="muted" lineClamp={3}>
                {description}
              </TextWithCode>
            </CardBody>
          ) : null}

          <Ripple {...rippleProps} />
        </Card>
      )
    },
  ),
)
