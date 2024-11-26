import type { UseRadioGroupReturn } from "@yamada-ui/react"
import type { FC, ReactNode } from "react"
import { CreditCardIcon } from "@yamada-ui/lucide"
import {
  Autocomplete,
  AutocompleteOption,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  FormControl,
  Heading,
  HStack,
  Input,
  Text,
  ui,
  useRadio,
  useRadioGroup,
  VStack,
} from "@yamada-ui/react"
import { AppleIcon, PaypalIcon } from "components/media-and-icons"
import { memo } from "react"

export const PaymentMethodCard = memo(() => {
  const CustomRadio: FC<
    { icon: ReactNode } & ReturnType<UseRadioGroupReturn["getRadioProps"]>
  > = ({ icon, value, ...rest }) => {
    const { getIconProps, getInputProps } = useRadio({ value, ...rest })

    return (
      <Box as="label" w="full">
        <ui.input {...getInputProps()} />

        <Box
          as={VStack}
          {...getIconProps()}
          borderColor={["blackAlpha.200", "whiteAlpha.100"]}
          borderWidth="3px"
          cursor="pointer"
          gap="xs"
          px={{ base: "lg", sm: "md" }}
          py={{ base: "md", sm: "sm" }}
          rounded="md"
          transitionDuration="slow"
          transitionProperty="background"
          _checked={{
            borderColor: ["primary", "primary"],
          }}
          _hover={{
            bg: ["blackAlpha.50", "whiteAlpha.50"],
            _checked: {
              bg: ["transparent", "transparent"],
            },
          }}
        >
          <Center>{icon}</Center>

          <Text
            as="span"
            fontSize={{ base: "md", sm: "xs" }}
            textAlign="center"
          >
            {value}
          </Text>
        </Box>
      </Box>
    )
  }

  const { getContainerProps, getRadioProps } = useRadioGroup<string>({
    defaultValue: "Card",
  })

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
    <Card
      variant="outline"
      breakInside="avoid"
      mb={{ base: "lg", sm: "md" }}
      rounded="xl"
    >
      <CardHeader alignItems="flex-start" flexDirection="column" gap="0">
        <Heading as="h2" size="md">
          Payment method
        </Heading>

        <Text color="muted">Add a new payment method to your account.</Text>
      </CardHeader>

      <CardBody>
        <HStack gap="sm" w="full" {...getContainerProps()}>
          <CustomRadio
            {...getRadioProps({ value: "Card" })}
            icon={<CreditCardIcon boxSize={{ base: "8", sm: "6" }} />}
          />
          <CustomRadio
            {...getRadioProps({ value: "Paypal" })}
            icon={<PaypalIcon boxSize={{ base: "8", sm: "6" }} />}
          />
          <CustomRadio
            {...getRadioProps({ value: "Apple" })}
            icon={<AppleIcon boxSize={{ base: "8", sm: "6" }} />}
          />
        </HStack>

        <FormControl isRequired label="Name">
          <Input type="text" placeholder="First Last" />
        </FormControl>

        <FormControl isRequired label="Card number">
          <Input type="text" />
        </FormControl>

        <HStack
          flexDirection={{ base: "row", sm: "column" }}
          gap={{ base: "sm", sm: "md" }}
          w="full"
        >
          <FormControl isRequired label="Expires">
            <Autocomplete placeholder="Month">
              {months.map((month) => (
                <AutocompleteOption key={month} value={month}>
                  {month}
                </AutocompleteOption>
              ))}
            </Autocomplete>
          </FormControl>

          <FormControl isRequired label="Year">
            <Autocomplete placeholder="Year">
              {years.map((year) => (
                <AutocompleteOption key={year} value={year.toString()}>
                  {year.toString()}
                </AutocompleteOption>
              ))}
            </Autocomplete>
          </FormControl>

          <FormControl isRequired label="CVC">
            <Input type="text" placeholder="CVC" />
          </FormControl>
        </HStack>
      </CardBody>

      <CardFooter>
        <Button colorScheme="primary" w="full">
          Continue
        </Button>
      </CardFooter>
    </Card>
  )
})

PaymentMethodCard.displayName = "PaymentMethodCard"
