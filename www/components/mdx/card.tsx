import type { As } from "@yamada-ui/react"
import {
  ChevronRightIcon,
  Heading,
  Card as OriginalCard,
  SimpleGrid,
} from "@yamada-ui/react"
import { Link } from "@/i18n"

export interface CardGroupProps {}

export function CardGroup(props: CardGroupProps) {
  return <SimpleGrid gap="lg" minChildWidth="sm" my="lg" {...props} />
}

export interface CardProps extends OriginalCard.RootProps {
  href: string
  depth: string
  title: string
}

export function Card({ href, children, depth, title }: CardProps) {
  return (
    <OriginalCard.Root
      as={Link}
      href={href}
      variant="outline"
      data-group
      transitionDuration="moderate"
      transitionProperty="backgrounds"
      _hover={{ bg: "bg.panel" }}
    >
      <OriginalCard.Header gap="xs" pt="{space}" px="{space}">
        <Heading as={`h${depth}` as As} size="md">
          {title}
        </Heading>

        <ChevronRightIcon
          fontSize="lg"
          opacity={{ base: 0, _groupFocusVisible: 1, _groupHover: 1 }}
          transform={{
            base: "translateX(-4px)",
            _groupFocusVisible: "translateX(0)",
            _groupHover: "translateX(0)",
          }}
          transitionDuration="moderate"
        />
      </OriginalCard.Header>

      <OriginalCard.Body
        css={{ "& p": { m: 0 } }}
        pb="{space}"
        pt="xs"
        px="{space}"
      >
        {children}
      </OriginalCard.Body>
    </OriginalCard.Root>
  )
}
