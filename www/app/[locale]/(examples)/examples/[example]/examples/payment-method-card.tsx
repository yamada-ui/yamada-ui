import {
  Autocomplete,
  Button,
  Card,
  Center,
  CreditCardIcon,
  Field,
  For,
  Heading,
  HStack,
  Input,
  RadioCardGroup,
  Text,
} from "@yamada-ui/react"
import { memo } from "react"
import { AppleIcon } from "@/components/apple-icon"
import { PaypalIcon } from "@/components/paypal-icon"

export const PaymentMethodCard = memo(() => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 10 }, (_, i) => currentYear + i)

  return (
    <Card.Root
      variant="outline"
      breakInside="avoid"
      mb={{ base: "lg", sm: "md" }}
      rounded="xl"
    >
      <Card.Header alignItems="flex-start" flexDirection="column" gap="0">
        <Heading as="h2" size="md">
          Payment method
        </Heading>

        <Text color="muted">Add a new payment method to your account.</Text>
      </Card.Header>

      <Card.Body>
        <RadioCardGroup.Root
          defaultValue="Card"
          gap="sm"
          w="full"
          withIndicator={false}
        >
          <For
            each={[
              { icon: CreditCardIcon, method: "Card" },
              { icon: PaypalIcon, method: "Paypal" },
              { icon: AppleIcon, method: "Apple" },
            ]}
          >
            {({ icon: Icon, method }) => (
              <RadioCardGroup.Item.Root
                key={method}
                borderColor={["blackAlpha.200", "whiteAlpha.100"]}
                borderWidth="3px"
                cursor="pointer"
                flex={1}
                gap="xs"
                px={{ base: "lg", sm: "md" }}
                py={{ base: "md", sm: "sm" }}
                transitionDuration="slow"
                transitionProperty="background"
                value={method}
                _checked={{ borderColor: ["primary", "primary"] }}
                _hover={{
                  bg: ["blackAlpha.50", "whiteAlpha.50"],
                  _checked: { bg: ["transparent", "transparent"] },
                }}
              >
                <Center>
                  <Icon boxSize={{ base: "8", sm: "6" }} />
                </Center>
                <Text
                  as="span"
                  fontSize={{ base: "md", sm: "xs" }}
                  textAlign="center"
                >
                  {method}
                </Text>
              </RadioCardGroup.Item.Root>
            )}
          </For>
        </RadioCardGroup.Root>

        <Field.Root label="Name" required>
          <Input type="text" placeholder="First Last" />
        </Field.Root>

        <Field.Root label="Card number" required>
          <Input type="text" />
        </Field.Root>

        <HStack
          flexDirection={{ base: "row", sm: "column" }}
          gap={{ base: "sm", sm: "md" }}
          w="full"
        >
          <Field.Root label="Expires" required>
            <Autocomplete.Root placeholder="Month">
              <For each={months}>
                {(month) => (
                  <Autocomplete.Option key={month} value={month}>
                    {month}
                  </Autocomplete.Option>
                )}
              </For>
            </Autocomplete.Root>
          </Field.Root>

          <Field.Root label="Year" required>
            <Autocomplete.Root placeholder="Year">
              <For each={years}>
                {(year) => (
                  <Autocomplete.Option key={year} value={year.toString()}>
                    {year.toString()}
                  </Autocomplete.Option>
                )}
              </For>
            </Autocomplete.Root>
          </Field.Root>

          <Field.Root label="CVC" required>
            <Input type="text" placeholder="CVC" />
          </Field.Root>
        </HStack>
      </Card.Body>

      <Card.Footer>
        <Button colorScheme="primary" w="full">
          Continue
        </Button>
      </Card.Footer>
    </Card.Root>
  )
})

PaymentMethodCard.displayName = "PaymentMethodCard"
