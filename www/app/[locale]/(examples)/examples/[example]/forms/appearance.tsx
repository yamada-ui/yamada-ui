import type { PropGetter, StackProps, StyleProps } from "@yamada-ui/react"
import type { SubmitHandler } from "react-hook-form"
import {
  Autocomplete,
  Box,
  Field,
  For,
  HStack,
  noop,
  Text,
  toTitleCase,
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

export const Appearance = memo<AppearanceProps>(({ ...rest }) => {
  const {
    control,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm<Data>({ defaultValues: { font: "Inter" } })
  const { getInputProps, getLabelProps, getRootProps } = useRadioGroup({
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
      <Field.Root
        errorMessage={errors.font?.message}
        helperMessage="This is the language that will be used in the dashboard."
        invalid={!!errors.font?.message}
        label="Font"
        maxW="xs"
        replace={false}
      >
        <Controller
          name="font"
          control={control}
          render={({ field }) => (
            <Autocomplete.Root
              items={FONT_ITEMS}
              placeholder="Select font"
              {...field}
            />
          )}
          rules={{ required: { message: "This is required.", value: true } }}
        />
      </Field.Root>

      <Field.Root
        errorMessage={errors.theme?.message}
        invalid={!!errors.theme?.message}
        label="Theme"
      >
        <Field.HelperMessage mb="sm">
          Select the theme for the dashboard.
        </Field.HelperMessage>

        <HStack gap={{ base: "md", sm: "sm" }} {...getRootProps()}>
          <For each={["light", "dark"]}>
            {(value) => (
              <ThemeCard
                key={value}
                value={value}
                getInputProps={getInputProps}
                getLabelProps={getLabelProps}
              />
            )}
          </For>
        </HStack>
      </Field.Root>
    </Form>
  )
})

Appearance.displayName = "Appearance"

interface ThemeCardProps {
  value: string
  getInputProps: PropGetter<"input">
  getLabelProps: PropGetter<"label">
}

const ThemeCard = memo<ThemeCardProps>(
  ({ value, getInputProps, getLabelProps }) => {
    const { checked, ...inputProps } = getInputProps({ value })
    const isLight = value === "light"
    const bgColor: StyleProps["bg"] = isLight
      ? ["blackAlpha.200", "whiteAlpha.800"]
      : ["blackAlpha.800", "whiteAlpha.200"]
    const containerColor: StyleProps["bg"] = isLight
      ? "whiteAlpha.900"
      : "whiteAlpha.200"
    const textColor: StyleProps["bg"] = isLight
      ? "blackAlpha.300"
      : "whiteAlpha.600"

    return (
      <Box as="label" flex={{ base: undefined, md: "1" }} {...getLabelProps()}>
        <Box as="input" {...inputProps} checked={checked} />

        <Box
          aria-checked={checked}
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
            {toTitleCase(value)}
          </Text>
        </Box>
      </Box>
    )
  },
)

ThemeCard.displayName = "ThemeCard"
