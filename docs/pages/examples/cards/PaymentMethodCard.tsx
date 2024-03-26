import type { UseRadioGroupReturn } from "@yamada-ui/react"
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
  VStack,
  ui,
  useRadio,
  Box,
  useRadioGroup,
  Center,
  Autocomplete,
  AutocompleteOption,
} from "@yamada-ui/react"
import type { FC, ReactNode } from "react"
import { memo } from "react"
import { FaApple, FaCreditCard, FaPaypal } from "react-icons/fa"

export const PaymentMethodCard = memo(() => {
  const CustomRadio: FC<
    ReturnType<UseRadioGroupReturn["getRadioProps"]> & { icon: ReactNode }
  > = (props) => {
    const { getInputProps, getIconProps } = useRadio(props)

    return (
      <Box as="label" w="full">
        <ui.input {...getInputProps()} />

        <Box
          {...getIconProps()}
          cursor="pointer"
          borderWidth="1px"
          py="md"
          px="lg"
          rounded="md"
          as={VStack}
          gap={1}
          _checked={{
            borderColor: "primary",
          }}
          _hover={{
            bg: ["gray.50", "gray.800"],
          }}
        >
          <Center>{props.icon}</Center>
          <Center>{props.value}</Center>
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
    <Card rounded="xl" variant="outline">
      <CardHeader>
        <Heading size="md">Payment method</Heading>
      </CardHeader>
      <CardBody pt={0}>
        <Text color="muted">Add a new payment method to your account.</Text>
        <HStack gap="sm" w="full" {...getContainerProps()}>
          <CustomRadio
            {...getRadioProps({ value: "Card" })}
            icon={<FaCreditCard size={30} />}
          />
          <CustomRadio
            {...getRadioProps({ value: "Paypal" })}
            icon={<FaPaypal size={30} />}
          />
          <CustomRadio
            {...getRadioProps({ value: "Apple" })}
            icon={<FaApple size={30} />}
          />
        </HStack>
        <FormControl isRequired label="Name">
          <Input type="text" placeholder="First Last" />
        </FormControl>
        <FormControl isRequired label="Card number">
          <Input type="text" />
        </FormControl>
        <HStack>
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
        <Button w="full">Continue</Button>
      </CardFooter>
    </Card>
  )
})

PaymentMethodCard.displayName = "PaymentMethodCard"
