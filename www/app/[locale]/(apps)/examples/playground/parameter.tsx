import type { ReactNode } from "react"
import { HStack, Slider, Text, Tooltip, VStack } from "@yamada-ui/react"
import { useState } from "react"

export interface ParameterProps extends Omit<Slider.RootProps, "children"> {
  description: ReactNode
  label: ReactNode
}

export function Parameter({
  defaultValue,
  description,
  label,
  ...rest
}: ParameterProps) {
  const [value, setValue] = useState(defaultValue)

  return (
    <Tooltip content={description}>
      <VStack gap="3">
        <HStack fontSize="sm">
          <Text>{label}</Text>

          <Text color="fg.muted" ms="auto">
            {value}
          </Text>
        </HStack>

        <Slider.Root value={value} onChange={setValue} {...rest} />
      </VStack>
    </Tooltip>
  )
}
