import {
  ButtonGroup,
  Checkbox,
  Field,
  Grid,
  Heading,
  Input,
  Select,
  Separator,
  Text,
  Textarea,
  VStack,
} from "@yamada-ui/react"

export function PaymentMethod() {
  return (
    <VStack
      as="section"
      layerStyle="card"
      bg="bg.panel"
      mb="{space}"
      p="{space}"
    >
      <VStack gap="xs">
        <Heading as="h2" size="xl">
          Payment Method
        </Heading>

        <Text color="fg.muted" fontSize="sm">
          All transactions are secure and encrypted
        </Text>
      </VStack>

      <VStack gap="md">
        <Field.Root label="Name on Card">
          <Input bg="bg" placeholder="Hirotomo Yamada" />
        </Field.Root>

        <Grid alignItems="flex-start" gap="md" templateColumns="3fr 1fr">
          <Field.Root
            helperMessage="Enter your 16-digit number."
            label="Card number"
          >
            <Input bg="bg" placeholder="4242 4242 4242 4242" />
          </Field.Root>

          <Field.Root label="CVV">
            <Input bg="bg" placeholder="818" />
          </Field.Root>
        </Grid>

        <Grid alignItems="flex-start" gap="md" templateColumns="1fr 1fr">
          <Field.Root label="Month">
            <Select.Root
              items={[
                { label: "01", value: "01" },
                { label: "02", value: "02" },
                { label: "03", value: "03" },
                { label: "04", value: "04" },
                { label: "05", value: "05" },
                { label: "06", value: "06" },
                { label: "07", value: "07" },
                { label: "08", value: "08" },
                { label: "09", value: "09" },
                { label: "10", value: "10" },
                { label: "11", value: "11" },
                { label: "12", value: "12" },
              ]}
              placeholder="MM"
              rootProps={{ bg: "bg" }}
            />
          </Field.Root>

          <Field.Root label="Year">
            <Select.Root
              items={[
                { label: "2025", value: "2025" },
                { label: "2026", value: "2026" },
                { label: "2027", value: "2027" },
                { label: "2028", value: "2028" },
                { label: "2029", value: "2029" },
                { label: "2030", value: "2030" },
              ]}
              placeholder="YYYY"
              rootProps={{ bg: "bg" }}
            />
          </Field.Root>
        </Grid>
      </VStack>

      <Separator />

      <VStack gap="md">
        <VStack gap="sm">
          <Heading as="h3" size="lg">
            Billing Address
          </Heading>

          <Text color="fg.muted" fontSize="sm">
            The billing address associated with your payment method
          </Text>
        </VStack>

        <Checkbox
          colorScheme="primary"
          indicatorProps={{
            bg: { base: "bg", _checked: "colorScheme.solid" },
          }}
        >
          Same as shipping address
        </Checkbox>
      </VStack>

      <Separator />

      <Field.Root label="Comments">
        <Textarea
          bg="bg"
          placeholder="Add any additional comments"
          resize="vertical"
        />
      </Field.Root>

      <ButtonGroup.Root alignSelf="flex-end">
        <ButtonGroup.Item variant="ghost">Cancel</ButtonGroup.Item>
        <ButtonGroup.Item colorScheme="primary">Submit</ButtonGroup.Item>
      </ButtonGroup.Root>
    </VStack>
  )
}
