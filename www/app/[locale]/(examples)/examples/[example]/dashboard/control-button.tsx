"use client"

import type { ButtonProps } from "@yamada-ui/react"
import { styled, useBoolean } from "@yamada-ui/react"
import { memo } from "react"

interface ControlButtonProps extends ButtonProps {
  defaultIsSelected?: boolean
}

export const ControlButton = memo<ControlButtonProps>(
  ({ defaultIsSelected, ...rest }) => {
    const [isSelected] = useBoolean(defaultIsSelected)
    return (
      <styled.button
        color={isSelected ? ["black", "white"] : "muted"}
        fontWeight="normal"
        _hover={isSelected ? {} : { color: ["black", "white"] }}
        {...rest}
      />
    )
  },
)

ControlButton.displayName = "ControlButton"
