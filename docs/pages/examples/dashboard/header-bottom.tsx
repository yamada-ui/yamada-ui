import { RangeDatePicker } from "@yamada-ui/calendar"
import {
  Heading,
  HStack,
  VStack,
  Button,
  SegmentedControl,
  SegmentedControlButton,
} from "@yamada-ui/react"
import { memo } from "react"

export const HeaderBottom = memo(() => {
  return (
    <VStack px={{ base: "lg", sm: "md" }} py="md">
      <HStack>
        <VStack>
          <Heading as="h2" size="lg">
            Dashboard
          </Heading>
          <SegmentedControl size="xs">
            <SegmentedControlButton value="Overview">
              Overview
            </SegmentedControlButton>
            <SegmentedControlButton value="Analytics" isDisabled>
              Analytics
            </SegmentedControlButton>
            <SegmentedControlButton value="Reports" isDisabled>
              Reports
            </SegmentedControlButton>
            <SegmentedControlButton value="Notifications" isDisabled>
              Notifications
            </SegmentedControlButton>
          </SegmentedControl>
        </VStack>
        <RangeDatePicker placeholder="YYYY/MM/DD" />
        <Button size="md" colorScheme="primary" style={{ width: "200px" }}>
          Download
        </Button>
      </HStack>
    </VStack>
  )
})

HeaderBottom.displayName = "HeaderBottom"
