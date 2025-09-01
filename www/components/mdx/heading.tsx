import type { HeadingProps } from "@yamada-ui/react"
import { Heading } from "@yamada-ui/react"

export function H1(props: HeadingProps) {
  return (
    <Heading
      as="h1"
      size="5xl"
      color="fg"
      mb="md"
      mt="xl"
      scrollMarginTop="{header-height}"
      {...props}
    />
  )
}

export function H2(props: HeadingProps) {
  return (
    <Heading
      as="h2"
      size="3xl"
      color="fg"
      mb="md"
      mt="xl"
      scrollMarginTop="{header-height}"
      {...props}
    />
  )
}

export function H3(props: HeadingProps) {
  return (
    <Heading
      as="h3"
      size="2xl"
      color="fg"
      mb="md"
      mt="lg"
      scrollMarginTop="{header-height}"
      {...props}
    />
  )
}

export function H4(props: HeadingProps) {
  return (
    <Heading
      as="h4"
      size="xl"
      color="fg"
      mb="md"
      mt="lg"
      scrollMarginTop="{header-height}"
      {...props}
    />
  )
}

export function H5(props: HeadingProps) {
  return (
    <Heading
      as="h5"
      size="lg"
      color="fg"
      my="md"
      scrollMarginTop="{header-height}"
      {...props}
    />
  )
}

export function H6(props: HeadingProps) {
  return (
    <Heading
      as="h6"
      size="md"
      color="fg"
      my="md"
      scrollMarginTop="{header-height}"
      {...props}
    />
  )
}
