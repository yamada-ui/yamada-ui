import type { BoxProps } from "@yamada-ui/react"
import { Box, forwardRef, Tab, Tabs as UITabs } from "@yamada-ui/react"
import { usePage } from "contexts"
import { memo } from "react"
import { NextLink } from "./next-link"

export interface TabsProps extends BoxProps {}

export const Tabs = memo(
  forwardRef<TabsProps, "div">(({ ...rest }, ref) => {
    const { documentTabs, slug: currentSlug } = usePage()

    return documentTabs?.length ? (
      <Box ref={ref} as="nav" mt="normal" {...rest}>
        <UITabs
          as="ul"
          index={documentTabs.findIndex(({ slug }) => slug === currentSlug)}
        >
          {documentTabs.map(({ slug, title }) => (
            <Tab key={slug} as="li" p="0">
              <NextLink
                href={slug}
                color="inherit"
                px="md"
                py="sm"
                _hover={{
                  textDecoration: "inherit",
                }}
              >
                {title}
              </NextLink>
            </Tab>
          ))}
        </UITabs>
      </Box>
    ) : null
  }),
)
