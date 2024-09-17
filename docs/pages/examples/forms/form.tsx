import { VStack, Text, Divider, Button, Heading } from "@yamada-ui/react"
import type { ButtonProps, StackProps } from "@yamada-ui/react"
import { memo } from "react"
import type { FC, ReactNode } from "react"

export interface FormProps extends Omit<StackProps, "title"> {
  title: ReactNode
  description: ReactNode
  submit: ReactNode
  containerProps?: StackProps
  buttonProps?: ButtonProps
}

export const Form: FC<FormProps> = memo(
  ({
    title,
    description,
    submit,
    containerProps,
    buttonProps,
    children,
    ...rest
  }) => {
    return (
      <VStack
        as="section"
        gap={{ base: "lg", sm: "md" }}
        divider={<Divider />}
        {...containerProps}
      >
        <VStack as="header" gap="xs">
          <Heading as="h3" size="md" fontWeight="semibold">
            {title}
          </Heading>

          <Text color="muted" fontSize="sm">
            {description}
          </Text>
        </VStack>

        <VStack as="form" gap={{ base: "lg", sm: "md" }} {...rest}>
          {children}

          <Button
            type="submit"
            alignSelf="flex-start"
            colorScheme="primary"
            {...buttonProps}
          >
            {submit}
          </Button>
        </VStack>
      </VStack>
    )
  },
)

Form.displayName = "Form"
