import type { ButtonProps, StackProps } from "@yamada-ui/react"
import type { FC, ReactNode } from "react"
import { Button, Heading, Separator, Text, VStack } from "@yamada-ui/react"
import { memo } from "react"

export interface FormProps extends Omit<StackProps, "title"> {
  description: ReactNode
  submit: ReactNode
  title: ReactNode
  buttonProps?: ButtonProps
  containerProps?: StackProps
}

export const Form: FC<FormProps> = memo(
  ({
    children,
    description,
    submit,
    title,
    buttonProps,
    containerProps,
    ...rest
  }) => {
    return (
      <VStack
        as="section"
        gap={{ base: "lg", sm: "md" }}
        separator={<Separator />}
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
            colorScheme="primary"
            alignSelf="flex-start"
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
