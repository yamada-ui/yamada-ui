import {
  Card,
  CardBody,
  CardHeader,
  forwardRef,
  Heading,
  Ripple,
  useRipple,
} from "@yamada-ui/react"
import type { CardProps, StringLiteral } from "@yamada-ui/react"
import { Label } from "components/data-display"
import { TextWithCode } from "components/typography"
import { usePage } from "contexts/page-context"
import Link from "next/link"
import { memo } from "react"
import type { ReactNode } from "react"

export type LinkCardProps = CardProps & {
  href: string
  title: ReactNode
  label?: StringLiteral | null
  description: ReactNode
  with_description?: boolean
}

export const LinkCard = memo(
  forwardRef<LinkCardProps, "div">(
    (
      { title, label, description, href, with_description = true, ...rest },
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
          as={Link}
          ref={ref}
          href={href}
          variant="outline"
          h={with_description ? { base: "40", md: "auto" } : "auto"}
          size="normal"
          bg={["blackAlpha.50", "whiteAlpha.50"]}
          _focus={{ outline: "none" }}
          _focusVisible={{ boxShadow: "outline" }}
          _hover={{ bg: ["blackAlpha.100", "whiteAlpha.100"] }}
          _active={{ bg: ["blackAlpha.200", "whiteAlpha.200"] }}
          transitionProperty="colors"
          transitionDuration="normal"
          position="relative"
          overflow="hidden"
          {...rest}
          onPointerDown={onPointerDown}
        >
          <CardHeader
            as="div"
            pt="md"
            pb={!with_description ? "md" : undefined}
            gap="sm"
          >
            <Heading size="md" lineClamp={1}>
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
