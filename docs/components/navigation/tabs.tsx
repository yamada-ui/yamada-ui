import type { BoxProps } from "@yamada-ui/react"
import { forwardRef, Box, Tabs as UITabs, Tab } from "@yamada-ui/react"
import { useRouter } from "next/router"
import { memo } from "react"
import { NextLink } from "./next-link"
import { usePage } from "contexts/page-context"

export type TabsProps = BoxProps

export const Tabs = memo(
  forwardRef<TabsProps, "div">(({ ...rest }, ref) => {
    const { documentTabs } = usePage()
    const { asPath } = useRouter()

    return documentTabs.length ? (
      <Box ref={ref} as="nav" mt="normal" {...rest}>
        <UITabs
          as="ul"
          index={documentTabs.findIndex(({ slug }) => slug === asPath)}
        >
          {documentTabs.map(({ title, slug }) => (
            <Tab as="li" key={slug} p="0">
              <NextLink
                color="inherit"
                _hover={{
                  textDecoration: "inherit",
                }}
                href={slug}
                py="sm"
                px="md"
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
