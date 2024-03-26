import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  FormControl,
  HStack,
  Heading,
  Input,
  Text,
  Spacer,
  Select,
  Option,
  Textarea,
} from "@yamada-ui/react"
import { memo } from "react"

export const ReportIssueCard = memo(() => {
  return (
    <Card rounded="xl" variant="outline">
      <CardHeader>
        <Heading size="md">Report an issue</Heading>
      </CardHeader>
      <CardBody pt={0}>
        <Text color="muted">What area are you having problems with?</Text>
        <HStack w="full">
          <FormControl isRequired label="Area">
            <Select w="full" defaultValue="Billing">
              <Option value="Team">Team</Option>
              <Option value="Billing">Billing</Option>
              <Option value="Account">Account</Option>
              <Option value="Deployments">Deployments</Option>
              <Option value="Support">Support</Option>
            </Select>
          </FormControl>
          <FormControl isRequired label="Security Level">
            <Select w="full" defaultValue="Severity 2">
              <Option value="Severity 1 (Highest)">Severity 1 (Highest)</Option>
              <Option value="Severity 2">Severity 2</Option>
              <Option value="Severity 3">Severity 3</Option>
              <Option value="Severity 4 (Lowest)">Severity 4 (Lowest)</Option>
            </Select>
          </FormControl>
        </HStack>
        <FormControl isRequired label="Title">
          <Input type="text" placeholder="I need help with..." />
        </FormControl>
        <FormControl isRequired label="Description">
          <Textarea
            autosize
            minRows={2}
            placeholder="Please include all relevant information to your issue."
          />
        </FormControl>
      </CardBody>
      <CardFooter>
        <Button variant="ghost">Cancel</Button>
        <Spacer />
        <Button>Submit</Button>
      </CardFooter>
    </Card>
  )
})

ReportIssueCard.displayName = "ReportIssueCard"
