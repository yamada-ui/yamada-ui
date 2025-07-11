import type {
  CSSUIProps,
  StackProps,
  UseRadioGroupReturn,
} from "@yamada-ui/react"
import type { FC } from "react"
import type { SubmitHandler } from "react-hook-form"
import {
  Autocomplete,
  Box,
  FormControl,
  HelperMessage,
  HStack,
  noop,
  Text,
  ui,
  useRadio,
  useRadioGroup,
  VStack,
} from "@yamada-ui/react"
import { memo } from "react"
import { Controller, useForm } from "react-hook-form"
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
    handleSubmit,
    setValue,
  } = useForm<Data>({ defaultValues: { font: "Inter" } })
  const { getContainerProps, getRadioProps } = useRadioGroup<string>({
    defaultValue: "light",
    onChange: (value) => setValue("theme", value),
  })

  const onSubmit: SubmitHandler<Data> = noop

  return (
    <Form
      description="Customize the appearance of the app. Automatically switch between day and night themes."
      submit="Update appearance"
      title="Appearance"
      onSubmit={handleSubmit(onSubmit)}
      {...rest}
    >
      <FormControl
        errorMessage={errors.font?.message}
        helperMessage="This is the language that will be used in the dashboard."
        isInvalid={!!errors.font?.message}
        isReplace={false}
        label="Font"
      >
        <Controller
          name="font"
          control={control}
          render={({ field }) => (
            <Autocomplete
              items={FONT_ITEMS}
              maxW="xs"
              placeholder="Select font"
              {...field}
            />
          )}
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </FormControl>

      <FormControl
        errorMessage={errors.theme?.message}
        isInvalid={!!errors.theme?.message}
        label="Theme"
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
  const { getIconProps, getInputProps } = useRadio(props)
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
        <Box borderColor="transparent" borderWidth="3px" p="1" rounded="10px">
          <VStack
            bg={bgColor}
            gap={{ base: "3", sm: "2" }}
            p={{ base: "3", sm: "2" }}
            rounded="md"
            w={{ base: "52", md: "full" }}
          >
            <VStack
              bg={containerColor}
              gap={{ base: "3", sm: "1" }}
              p={{ base: "3", sm: "2" }}
              rounded="4px"
            >
              <Box bg={textColor} h="2" rounded="full" w="full" />
              <Box bg={textColor} h="2" rounded="full" w="full" />
            </VStack>

            <HStack
              bg={containerColor}
              gap={{ base: "3", sm: "1" }}
              p={{ base: "3", sm: "2" }}
              rounded="4px"
            >
              <Box bg={textColor} boxSize="4" rounded="full" />
              <Box bg={textColor} flex="1" h="2" rounded="full" />
            </HStack>

            <HStack
              bg={containerColor}
              gap={{ base: "3", sm: "1" }}
              p={{ base: "3", sm: "2" }}
              rounded="4px"
            >
              <Box bg={textColor} boxSize="4" rounded="full" />
              <Box bg={textColor} flex="1" h="2" rounded="full" />
            </HStack>
          </VStack>
        </Box>

        <Text
          as="span"
          display="block"
          fontSize="sm"
          mt="sm"
          textAlign="center"
        >
          {value.charAt(0).toUpperCase() + value.slice(1)}
        </Text>
      </Box>
    </Box>
  )
}
