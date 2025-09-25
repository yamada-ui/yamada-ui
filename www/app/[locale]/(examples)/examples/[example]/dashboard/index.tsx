import type { StackProps } from "@yamada-ui/react"
import {
  Button,
  Card,
  ChevronDownIcon,
  For,
  Grid,
  Heading,
  HStack,
  IconButton,
  Menu,
  SegmentedControl,
  Spacer,
  VStack,
} from "@yamada-ui/react"
import { memo } from "react"
import { Cards } from "./cards"
import { Header } from "./header"
import { Overview } from "./overview"
import { RecentSales } from "./recent-sales"

const DASHBOARD_ITEMS: SegmentedControl.RootProps["items"] = [
  { label: "Overview", value: "Overview" },
  { disabled: true, label: "Analytics", value: "Analytics" },
  { disabled: true, label: "Reports", value: "Reports" },
  { disabled: true, label: "Notifications", value: "Notifications" },
]

export const Dashboard = memo(() => {
  return (
    <Card.Root bg="bg.float">
      <VStack as="section">
        <Header bg="bg.panel" />

        <Content>
          <Cards />

          <Grid
            gap="md"
            pb={{ base: "lg", sm: "md" }}
            templateColumns={{ base: "1.5fr 1fr", lg: "1fr" }}
          >
            <Overview />

            <RecentSales />
          </Grid>
        </Content>
      </VStack>
    </Card.Root>
  )
})

Dashboard.displayName = "Dashboard"

interface ContentProps extends StackProps {}

const Content = memo<ContentProps>(({ children, ...rest }) => {
  return (
    <VStack as="section" px={{ base: "lg", sm: "md" }} {...rest}>
      <VStack as="header">
        <HStack>
          <Heading as="h3" size="lg">
            Dashboard
          </Heading>

          <Spacer />

          {/* TODO */}
          {/* <RangeDatePicker
            amountOfMonths={2}
            display={{ base: "block", md: "none" }}
            maxW="sm"
            placeholder="YYYY/MM/DD"
          /> */}

          <Button colorScheme="primary" display={{ base: "flex", md: "none" }}>
            Download
          </Button>

          <Menu.Root>
            <Menu.Trigger
              as={IconButton}
              variant="ghost"
              display={{ base: "none", md: "flex" }}
            >
              <ChevronDownIcon fontSize="2xl" />
            </Menu.Trigger>

            <Menu.Content>
              <For each={DASHBOARD_ITEMS}>
                {({ label }, index) => (
                  <Menu.Item key={index}>{label}</Menu.Item>
                )}
              </For>
            </Menu.Content>
          </Menu.Root>
        </HStack>

        <SegmentedControl.Root
          alignSelf="flex-start"
          defaultValue="Overview"
          display={{ base: "block", md: "none" }}
          items={DASHBOARD_ITEMS}
        />
      </VStack>

      {children}
    </VStack>
  )
})

Content.displayName = "Content"
