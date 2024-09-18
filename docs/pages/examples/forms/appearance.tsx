import {
  FormControl,
  Autocomplete,
  HelperMessage,
  useRadioGroup,
  HStack,
  Box,
  useRadio,
  ui,
  VStack,
  Text,
} from "@yamada-ui/react"
import type {
  CSSUIProps,
  StackProps,
  UseRadioGroupReturn,
} from "@yamada-ui/react"
import { memo } from "react"
import type { FC } from "react"
import { Controller, useForm } from "react-hook-form"
import type { SubmitHandler } from "react-hook-form"
import { Form } from "./form"

const FONT_ITEMS = [
  { label: "Inter", value: "Inter" },
  { label: "Manrope", value: "Manrope" },
  { label: "System", value: "System" },
]

interface Data {
  font: string
  theme: string
}

export interface AppearanceProps extends StackProps {}

export const Appearance: FC<AppearanceProps> = memo(({ ...rest }) => {
  const {
    control,
    formState: { errors },
    setValue,
    handleSubmit,
  } = useForm<Data>({ defaultValues: { font: "Inter" } })
  const { getContainerProps, getRadioProps } = useRadioGroup<string>({
    defaultValue: "light",
    onChange: (value) => setValue("theme", value),
  })

  const onSubmit: SubmitHandler<Data> = () => {}

  return (
    <Form
      title="Appearance"
      description="Customize the appearance of the app. Automatically switch between day and night themes."
      submit="Update appearance"
      onSubmit={handleSubmit(onSubmit)}
      {...rest}
    >
      <FormControl
        label="Font"
        helperMessage="This is the language that will be used in the dashboard."
        isReplace={false}
        isInvalid={!!errors.font?.message}
        errorMessage={errors.font?.message}
      >
        <Controller
          name="font"
          control={control}
          rules={{ required: { value: true, message: "This is required." } }}
          render={({ field }) => (
            <Autocomplete
              maxW="xs"
              placeholder="Select font"
              items={FONT_ITEMS}
              {...field}
            />
          )}
        />
      </FormControl>

      <FormControl
        label="Theme"
        isInvalid={!!errors.theme?.message}
        errorMessage={errors.theme?.message}
      >
        <HelperMessage mb="sm">
          Select the theme for the dashboard.
        </HelperMessage>

        <HStack gap={{ base: "md", sm: "sm" }} {...getContainerProps()}>
          <ThemeCard {...getRadioProps({ value: "light" })} />
          <ThemeCard {...getRadioProps({ value: "dark" })} />
        </HStack>
      </FormControl>
    </Form>
  )
})

Appearance.displayName = "Appearance"

type ThemeCardProps = ReturnType<UseRadioGroupReturn["getRadioProps"]>

const ThemeCard: FC<ThemeCardProps> = (props) => {
  const { value } = props
  const { getInputProps, getIconProps } = useRadio(props)
  const isLight = value === "light"
  const bgColor: CSSUIProps["bg"] = isLight
    ? ["blackAlpha.200", "whiteAlpha.800"]
    : ["blackAlpha.800", "whiteAlpha.200"]
  const containerColor: CSSUIProps["bg"] = isLight
    ? "whiteAlpha.900"
    : "whiteAlpha.200"
  const textColor: CSSUIProps["bg"] = isLight
    ? "blackAlpha.300"
    : "whiteAlpha.600"

  if (!value) return null

  return (
    <Box as="label" flex={{ base: undefined, md: "1" }}>
      <ui.input {...getInputProps()} aria-label={value} />

      <Box
        {...getIconProps()}
        cursor="pointer"
        _checked={{ "& > div": { borderColor: "primary" } }}
      >
        <Box p="1" rounded="10px" borderWidth="3px" borderColor="transparent">
          <VStack
            rounded="md"
            w={{ base: "52", md: "full" }}
            p={{ base: "3", sm: "2" }}
            gap={{ base: "3", sm: "2" }}
            bg={bgColor}
          >
            <VStack
              gap={{ base: "3", sm: "1" }}
              p={{ base: "3", sm: "2" }}
              bg={containerColor}
              rounded="4px"
            >
              <Box w="full" h="2" bg={textColor} rounded="full" />
              <Box w="full" h="2" bg={textColor} rounded="full" />
            </VStack>

            <HStack
              gap={{ base: "3", sm: "1" }}
              p={{ base: "3", sm: "2" }}
              bg={containerColor}
              rounded="4px"
            >
              <Box boxSize="4" bg={textColor} rounded="full" />
              <Box flex="1" h="2" bg={textColor} rounded="full" />
            </HStack>

            <HStack
              gap={{ base: "3", sm: "1" }}
              p={{ base: "3", sm: "2" }}
              bg={containerColor}
              rounded="4px"
            >
              <Box boxSize="4" bg={textColor} rounded="full" />
              <Box flex="1" h="2" bg={textColor} rounded="full" />
            </HStack>
          </VStack>
        </Box>

        <Text
          as="span"
          display="block"
          mt="sm"
          textAlign="center"
          fontSize="sm"
        >
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </Text>
      </Box>
    </Box>
  )
}
