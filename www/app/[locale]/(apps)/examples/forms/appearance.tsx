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

export function Appearance({ ...rest }: AppearanceProps) {
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
        maxW="sm"
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

        <HStack {...getRootProps()}>
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
}

interface ThemeCardProps {
  value: string
  getInputProps: PropGetter<"input">
  getLabelProps: PropGetter<"label">
}

function ThemeCard({ value, getInputProps, getLabelProps }: ThemeCardProps) {
  const { checked, ...inputProps } = getInputProps({ value })
  const light = value === "light"
  const bgColor: StyleProps["bg"] = light
    ? ["blackAlpha.200", "whiteAlpha.800"]
    : ["blackAlpha.900", "whiteAlpha.200"]
  const containerColor: StyleProps["bg"] = light
    ? "whiteAlpha.900"
    : "whiteAlpha.400"
  const textColor: StyleProps["bg"] = light
    ? "blackAlpha.500"
    : "whiteAlpha.700"

  return (
    <Box as="label" flex={{ base: undefined, md: "1" }} {...getLabelProps()}>
      <Box as="input" {...inputProps} checked={checked} />

      <Box
        aria-checked={checked}
        cursor="pointer"
        _checked={{ "& > div": { borderColor: "mono" } }}
      >
        <Box borderColor="transparent" borderWidth="3px" p="1" rounded="l4">
          <VStack
            bg={bgColor}
            gap={{ base: "3", sm: "2" }}
            p={{ base: "3", sm: "2" }}
            rounded="l2"
            w={{ base: "52", md: "full" }}
          >
            <VStack
              bg={containerColor}
              gap={{ base: "3", sm: "1" }}
              p={{ base: "3", sm: "2" }}
              rounded="l1"
            >
              <Box bg={textColor} h="2" rounded="full" w="full" />
              <Box bg={textColor} h="2" rounded="full" w="full" />
            </VStack>

            <HStack
              bg={containerColor}
              gap={{ base: "3", sm: "1" }}
              p={{ base: "3", sm: "2" }}
              rounded="l1"
            >
              <Box bg={textColor} boxSize="4" rounded="full" />
              <Box bg={textColor} flex="1" h="2" rounded="full" />
            </HStack>

            <HStack
              bg={containerColor}
              gap={{ base: "3", sm: "1" }}
              p={{ base: "3", sm: "2" }}
              rounded="l1"
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
}
