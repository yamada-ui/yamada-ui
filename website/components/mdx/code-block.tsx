import type { BoxProps, GridProps } from "@yamada-ui/react"

import { Box, Grid, Text } from "@yamada-ui/react"

export interface CodeBlockProps extends GridProps {
  lang?: string
  title?: string
}

export function CodeBlock({ lang, children, title, ...rest }: BoxProps) {
  return (
    <Grid
      css={{
        "& > div": { m: "0" },
        "& pre": { m: "0", roundedTop: "0" },
      }}
      data-lang={lang}
      my="lg"
      {...rest}
    >
      <Box
        bg="bg.panel"
        borderBottomWidth="1px"
        borderColor="border.subtle"
        color="fg.emphasized"
        p="2"
        px="4"
        py="3"
        roundedTop="l2"
      >
        <Text fontFamily="mono" fontSize="sm">
          {title}
        </Text>
      </Box>
      {children}
    </Grid>
  )
}
