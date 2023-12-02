import type { StackProps } from "@yamada-ui/react"
import { forwardRef, HStack, dataAttr, Box, Center } from "@yamada-ui/react"
import Link from "next/link"
import { useRouter } from "next/router"
import { memo } from "react"
import { usePage } from "contexts/page-context"

export type TabsProps = StackProps

export const Tabs = memo(
  forwardRef<TabsProps, "div">(({ ...rest }, ref) => {
    const { documentTabs } = usePage()
    const { asPath } = useRouter()

    return documentTabs.length ? (
      <Box as="nav" overflowX="auto" mt="normal">
        <HStack
          ref={ref}
          as="ul"
          index={documentTabs.findIndex(({ slug }) => slug === asPath)}
          gap="0"
          borderColor="inherit"
          borderBottomWidth="1px"
          {...rest}
        >
          {documentTabs.map(({ title, slug }) => (
            <Box as="li" key={slug}>
              <Center
                as={Link}
                href={slug}
                data-selected={dataAttr(asPath === slug)}
                py="2"
                px="4"
                borderColor="transparent"
                borderBottomWidth="1px"
                borderBottomStyle="solid"
                marginBottom="-1px"
                whiteSpace="nowrap"
                transitionProperty="common"
                transitionDuration="normal"
                _hover={{ opacity: 0.7 }}
                _focus={{ outline: "none" }}
                _focusVisible={{ zIndex: 1, boxShadow: "outline" }}
                _selected={{
                  color: [`primary.600`, `primary.300`],

                  borderColor: "currentColor",
                  _hover: { opacity: 1 },
                }}
              >
                {title}
              </Center>
            </Box>
          ))}
        </HStack>
      </Box>
    ) : null
  }),
)
