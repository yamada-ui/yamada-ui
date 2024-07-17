import { RangeDatePicker } from "@yamada-ui/calendar"
import { ChevronDown } from "@yamada-ui/lucide"
import {
  Button,
  Grid,
  HStack,
  Heading,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SegmentedControl,
  Spacer,
  VStack,
} from "@yamada-ui/react"
import type { SegmentedControlItem, StackProps } from "@yamada-ui/react"
import { memo } from "react"
import type { FC } from "react"
import { Cards } from "./cards"
import { Header } from "./header"
import { Overview } from "./overview"
import { RecentSales } from "./recent-sales"

const DASHBOARD_ITEMS: SegmentedControlItem[] = [
  { label: "Overview", value: "Overview" },
  { label: "Analytics", value: "Analytics", isDisabled: true },
  { label: "Reports", value: "Reports", isDisabled: true },
  { label: "Notifications", value: "Notifications", isDisabled: true },
]

export const Dashboard = memo(() => {
  return (
    <VStack as="section">
      <Header />

      <Content>
        <Cards />

        <Grid
          templateColumns={{ base: "1.5fr 1fr", lg: "1fr" }}
          gap="md"
          pb={{ base: "lg", sm: "md" }}
        >
          <Overview />

          <RecentSales />
        </Grid>
      </Content>
    </VStack>
  )
})

Dashboard.displayName = "Dashboard"

type ContentProps = StackProps & {}

const Content: FC<ContentProps> = memo(({ children, ...rest }) => {
  return (
    <VStack as="section" px={{ base: "lg", sm: "md" }} {...rest}>
      <VStack as="header">
        <HStack>
          <Heading as="h3" size="lg">
            Dashboard
          </Heading>

          <Spacer />

          <RangeDatePicker
            display={{ base: "block", md: "none" }}
            maxW="sm"
            placeholder="YYYY/MM/DD"
            amountOfMonths={2}
          />

          <Button colorScheme="primary" display={{ base: "flex", md: "none" }}>
            Download
          </Button>

          <Menu>
            <MenuButton
              as={IconButton}
              variant="ghost"
              display={{ base: "none", md: "flex" }}
            >
              <ChevronDown fontSize="2xl" />
            </MenuButton>

            <MenuList>
              {DASHBOARD_ITEMS.map(({ label }, index) => (
                <MenuItem key={index}>{label}</MenuItem>
              ))}
            </MenuList>
          </Menu>
        </HStack>

        <SegmentedControl
          alignSelf="flex-start"
          items={DASHBOARD_ITEMS}
          display={{ base: "block", md: "none" }}
        />
      </VStack>

      {children}
    </VStack>
  )
})

Content.displayName = "Content"
