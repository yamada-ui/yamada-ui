import {
  assignRef,
  Center,
  CloseButton,
  Grid,
  Heading,
  HStack,
  Icon,
  Slide,
  useDisclosure,
  VStack,
} from "@yamada-ui/react"
import type { IconProps } from "@yamada-ui/react"
import { memo, useState } from "react"
import type { FC, MutableRefObject } from "react"
import type { IconNames } from "@yamada-ui/lucide"
import { icons } from "@yamada-ui/lucide"
import { CodeBlock } from "components/mdx/code-block"

export type IconDrawerProps = {
  openRef: MutableRefObject<(name: IconNames) => void>
}

export const IconDrawer: FC<IconDrawerProps> = memo(({ openRef }) => {
  const [name, setIconName] = useState<IconNames | undefined>(undefined)
  const Icon = name ? icons[name] : () => null
  const { isOpen, onOpen, onClose } = useDisclosure()

  assignRef(openRef, (name) => {
    setIconName(name)
    onOpen()
  })

  return (
    <Slide isOpen={isOpen} placement="bottom" boxShadow={["lg", "dark-lg"]}>
      <Grid
        templateColumns={{ base: "auto 1fr", lg: "1fr" }}
        alignItems="stretch"
        w="full"
        bg={["white", "black"]}
        p={{ base: "lg", md: "md" }}
        columnGap="lg"
        rowGap="md"
      >
        <Center
          mx="auto"
          boxSize={{ base: "auto", md: "xs" }}
          gridRow={{ base: "1 / 3", md: "2 / 3" }}
          position="relative"
          bg={["blackAlpha.50", "whiteAlpha.50"]}
          p="md"
          rounded="xl"
        >
          <Icon size="12rem" zIndex="1" />

          <IconGrid position="absolute" top="0" left="0" />
        </Center>

        <HStack w="full" minW="0" alignItems="flex-start">
          <Heading as="h3" flex="1" lineClamp={1}>
            {name}
          </Heading>

          <CloseButton onClick={onClose} />
        </HStack>

        <VStack minW="0">
          <CodeBlock
            language="tsx"
            code={`import { ${name} } from "@yamada-ui/lucide"`}
            my="0"
            innerProps={{ h: "full", rounded: "xl" }}
          />

          <CodeBlock
            language="tsx"
            code={`<${name} />`}
            my="0"
            innerProps={{ h: "full", rounded: "xl" }}
          />
        </VStack>
      </Grid>
    </Slide>
  )
})

IconDrawer.displayName = "IconDrawer"

const IconGrid: FC<IconProps> = (props) => {
  return (
    <Icon
      boxSize="full"
      className="icon-grid"
      viewBox="0 0 24 24"
      fill="none"
      stroke={["blackAlpha.300", "whiteAlpha.200"]}
      strokeWidth="0.1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g>
        <line x1="0" y1="1" x2="24" y2="1" />
        <line x1="1" y1="0" x2="1" y2="24" />
      </g>
      <g>
        <line x1="0" y1="2" x2="24" y2="2" />
        <line x1="2" y1="0" x2="2" y2="24" />
      </g>
      <g>
        <line x1="0" y1="3" x2="24" y2="3" />
        <line x1="3" y1="0" x2="3" y2="24" />
      </g>
      <g>
        <line x1="0" y1="4" x2="24" y2="4" />
        <line x1="4" y1="0" x2="4" y2="24" />
      </g>
      <g>
        <line x1="0" y1="5" x2="24" y2="5" />
        <line x1="5" y1="0" x2="5" y2="24" />
      </g>
      <g>
        <line x1="0" y1="6" x2="24" y2="6" />
        <line x1="6" y1="0" x2="6" y2="24" />
      </g>
      <g>
        <line x1="0" y1="7" x2="24" y2="7" />
        <line x1="7" y1="0" x2="7" y2="24" />
      </g>
      <g>
        <line x1="0" y1="8" x2="24" y2="8" />
        <line x1="8" y1="0" x2="8" y2="24" />
      </g>
      <g>
        <line x1="0" y1="9" x2="24" y2="9" />
        <line x1="9" y1="0" x2="9" y2="24" />
      </g>
      <g>
        <line x1="0" y1="10" x2="24" y2="10" />
        <line x1="10" y1="0" x2="10" y2="24" />
      </g>
      <g>
        <line x1="0" y1="11" x2="24" y2="11" />
        <line x1="11" y1="0" x2="11" y2="24" />
      </g>
      <g>
        <line x1="0" y1="12" x2="24" y2="12" />
        <line x1="12" y1="0" x2="12" y2="24" />
      </g>
      <g>
        <line x1="0" y1="13" x2="24" y2="13" />
        <line x1="13" y1="0" x2="13" y2="24" />
      </g>
      <g>
        <line x1="0" y1="14" x2="24" y2="14" />
        <line x1="14" y1="0" x2="14" y2="24" />
      </g>
      <g>
        <line x1="0" y1="15" x2="24" y2="15" />
        <line x1="15" y1="0" x2="15" y2="24" />
      </g>
      <g>
        <line x1="0" y1="16" x2="24" y2="16" />
        <line x1="16" y1="0" x2="16" y2="24" />
      </g>
      <g>
        <line x1="0" y1="17" x2="24" y2="17" />
        <line x1="17" y1="0" x2="17" y2="24" />
      </g>
      <g>
        <line x1="0" y1="18" x2="24" y2="18" />
        <line x1="18" y1="0" x2="18" y2="24" />
      </g>
      <g>
        <line x1="0" y1="19" x2="24" y2="19" />
        <line x1="19" y1="0" x2="19" y2="24" />
      </g>
      <g>
        <line x1="0" y1="20" x2="24" y2="20" />
        <line x1="20" y1="0" x2="20" y2="24" />
      </g>
      <g>
        <line x1="0" y1="21" x2="24" y2="21" />
        <line x1="21" y1="0" x2="21" y2="24" />
      </g>
      <g>
        <line x1="0" y1="22" x2="24" y2="22" />
        <line x1="22" y1="0" x2="22" y2="24" />
      </g>
      <g>
        <line x1="0" y1="23" x2="24" y2="23" />
        <line x1="23" y1="0" x2="23" y2="24" />
      </g>
    </Icon>
  )
}
