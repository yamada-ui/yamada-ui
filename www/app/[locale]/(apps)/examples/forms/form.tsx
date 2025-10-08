import type { ButtonProps, StackProps } from "@yamada-ui/react"
import type { ReactNode } from "react"
import { Button, Heading, Separator, Text, VStack } from "@yamada-ui/react"

export interface FormProps extends Omit<StackProps, "title"> {
  description: ReactNode
  submit: ReactNode
  title: ReactNode
  buttonProps?: ButtonProps
  containerProps?: StackProps
}

export function Form({
  children,
  description,
  submit,
  title,
  buttonProps,
  containerProps,
  ...rest
}: FormProps) {
  return (
    <VStack
      as="section"
      gap="{space}"
      separator={<Separator />}
      {...containerProps}
    >
      <VStack as="header" gap="xs">
        <Heading as="h3" size="xl" fontWeight="semibold">
          {title}
        </Heading>

        <Text color="fg.muted" fontSize="xs">
          {description}
        </Text>
      </VStack>

      <VStack as="form" gap="{space}" {...rest}>
        {children}

        <Button type="submit" alignSelf="flex-start" {...buttonProps}>
          {submit}
        </Button>
      </VStack>
    </VStack>
  )
}
