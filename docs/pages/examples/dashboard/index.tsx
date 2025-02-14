import type { SegmentedControlItem, StackProps } from "@yamada-ui/react"
import type { FC } from "react"
import { RangeDatePicker } from "@yamada-ui/calendar"
import { ChevronDownIcon } from "@yamada-ui/lucide"
import {
  Button,
  Grid,
  Heading,
  HStack,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  SegmentedControl,
  Spacer,
  VStack,
} from "@yamada-ui/react"
import { memo } from "react"
import { Cards } from "./cards"
import { Header } from "./header"
import { Overview } from "./overview"
import { RecentSales } from "./recent-sales"

const DASHBOARD_ITEMS: SegmentedControlItem[] = [
  { label: "Overview", value: "Overview" },
  { disabled: true, label: "Analytics", value: "Analytics" },
  { disabled: true, label: "Reports", value: "Reports" },
  { disabled: true, label: "Notifications", value: "Notifications" },
]

export const Dashboard = memo(() => {
  return (
    <VStack as="section">
      <Header />

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
  )
})

Dashboard.displayName = "Dashboard"

interface ContentProps extends StackProps {}

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
            amountOfMonths={2}
            display={{ base: "block", md: "none" }}
            maxW="sm"
            placeholder="YYYY/MM/DD"
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
              <ChevronDownIcon fontSize="2xl" />
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
          display={{ base: "block", md: "none" }}
          items={DASHBOARD_ITEMS}
        />
      </VStack>

      {children}
    </VStack>
  )
})

Content.displayName = "Content"
