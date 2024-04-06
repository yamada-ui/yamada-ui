import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  FormControl,
  Heading,
  Input,
  Text,
  Select,
  Option,
  Textarea,
  Grid,
} from "@yamada-ui/react"
import { memo } from "react"

export const ReportIssueCard = memo(() => {
  return (
    <Card
      breakInside="avoid"
      mb={{ base: "lg", sm: "md" }}
      rounded="xl"
      variant="outline"
    >
      <CardHeader flexDirection="column" alignItems="flex-start" gap="0">
        <Heading as="h2" size="md">
          Report an issue
        </Heading>

        <Text color="muted">What area are you having problems with?</Text>
      </CardHeader>

      <CardBody>
        <Grid
          w="full"
          templateColumns={{ base: "repeat(2, 1fr)", md: "1fr" }}
          gap="md"
        >
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
        </Grid>

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

      <CardFooter justifyContent="flex-end">
        <Button variant="ghost">Cancel</Button>

        <Button colorScheme="primary">Submit</Button>
      </CardFooter>
    </Card>
  )
})

ReportIssueCard.displayName = "ReportIssueCard"
