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
  Icon,
} from "@yamada-ui/react"
import type { FC, ReactNode } from "react"
import { memo } from "react"
import { FaApple, FaCreditCard, FaPaypal } from "react-icons/fa"

export const PaymentMethodCard = memo(() => {
  const CustomRadio: FC<
    ReturnType<UseRadioGroupReturn["getRadioProps"]> & { icon: ReactNode }
  > = ({ icon, value, ...rest }) => {
    const { getInputProps, getIconProps } = useRadio({ value, ...rest })

    return (
      <Box as="label" w="full">
        <ui.input {...getInputProps()} />

        <Box
          as={VStack}
          {...getIconProps()}
          cursor="pointer"
          py={{ base: "md", sm: "sm" }}
          px={{ base: "lg", sm: "md" }}
          rounded="md"
          gap="xs"
          borderWidth="3px"
          borderColor={["blackAlpha.200", "whiteAlpha.100"]}
          _checked={{
            borderColor: ["primary", "primary"],
          }}
          _hover={{
            bg: ["blackAlpha.50", "whiteAlpha.50"],
            _checked: {
              bg: ["transparent", "transparent"],
            },
          }}
          transitionProperty="background"
          transitionDuration="slow"
        >
          <Center>{icon}</Center>

          <Text
            as="span"
            textAlign="center"
            fontSize={{ base: "md", sm: "xs" }}
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
      breakInside="avoid"
      mb={{ base: "lg", sm: "md" }}
      rounded="xl"
      variant="outline"
    >
      <CardHeader flexDirection="column" alignItems="flex-start" gap="0">
        <Heading as="h2" size="md">
          Payment method
        </Heading>

        <Text color="muted">Add a new payment method to your account.</Text>
      </CardHeader>

      <CardBody>
        <HStack gap="sm" w="full" {...getContainerProps()}>
          <CustomRadio
            {...getRadioProps({ value: "Card" })}
            icon={<Icon as={FaCreditCard} boxSize={{ base: "8", sm: "6" }} />}
          />
          <CustomRadio
            {...getRadioProps({ value: "Paypal" })}
            icon={<Icon as={FaPaypal} boxSize={{ base: "8", sm: "6" }} />}
          />
          <CustomRadio
            {...getRadioProps({ value: "Apple" })}
            icon={<Icon as={FaApple} boxSize={{ base: "8", sm: "6" }} />}
          />
        </HStack>

        <FormControl isRequired label="Name">
          <Input type="text" placeholder="First Last" />
        </FormControl>

        <FormControl isRequired label="Card number">
          <Input type="text" />
        </FormControl>

        <HStack
          w="full"
          flexDirection={{ base: "row", sm: "column" }}
          gap={{ base: "sm", sm: "md" }}
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
        <Button w="full" colorScheme="primary">
          Continue
        </Button>
      </CardFooter>
    </Card>
  )
})

PaymentMethodCard.displayName = "PaymentMethodCard"
