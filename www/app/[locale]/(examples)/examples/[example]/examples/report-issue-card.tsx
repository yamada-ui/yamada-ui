import {
  Button,
  Card,
  Field,
  Grid,
  Heading,
  Input,
  Select,
  Text,
  Textarea,
} from "@yamada-ui/react"
import { memo } from "react"

export const ReportIssueCard = memo(() => {
  return (
    <Card.Root
      variant="outline"
      breakInside="avoid"
      mb={{ base: "lg", sm: "md" }}
      rounded="xl"
    >
      <Card.Header alignItems="flex-start" flexDirection="column" gap="0">
        <Heading as="h2" size="md">
          Report an issue
        </Heading>

        <Text color="muted">What area are you having problems with?</Text>
      </Card.Header>

      <Card.Body>
        <Grid
          gap="md"
          templateColumns={{ base: "repeat(2, 1fr)", md: "1fr" }}
          w="full"
        >
          <Field.Root label="Area" required>
            <Select.Root defaultValue="Billing" w="full">
              <Select.Option value="Team">Team</Select.Option>
              <Select.Option value="Billing">Billing</Select.Option>
              <Select.Option value="Account">Account</Select.Option>
              <Select.Option value="Deployments">Deployments</Select.Option>
              <Select.Option value="Support">Support</Select.Option>
            </Select.Root>
          </Field.Root>

          <Field.Root label="Security Level" required>
            <Select.Root defaultValue="Severity 2" w="full">
              <Select.Option value="Severity 1 (Highest)">
                Severity 1 (Highest)
              </Select.Option>
              <Select.Option value="Severity 2">Severity 2</Select.Option>
              <Select.Option value="Severity 3">Severity 3</Select.Option>
              <Select.Option value="Severity 4 (Lowest)">
                Severity 4 (Lowest)
              </Select.Option>
            </Select.Root>
          </Field.Root>
        </Grid>

        <Field.Root label="Title" required>
          <Input type="text" placeholder="I need help with..." />
        </Field.Root>

        <Field.Root label="Description" required>
          <Textarea
            autosize
            minRows={2}
            placeholder="Please include all relevant information to your issue."
          />
        </Field.Root>
      </Card.Body>

      <Card.Footer justifyContent="flex-end">
        <Button variant="ghost">Cancel</Button>

        <Button colorScheme="primary">Submit</Button>
      </Card.Footer>
    </Card.Root>
  )
})

ReportIssueCard.displayName = "ReportIssueCard"
