import type { ButtonProps } from "@yamada-ui/react"
import { Check, Copy } from "@yamada-ui/lucide"
import { forwardRef, IconButton, Tooltip, useClipboard } from "@yamada-ui/react"
import { memo } from "react"

export interface CopyButtonProps extends Omit<ButtonProps, "value"> {
  value: string
}

export const CopyButton = memo(
  forwardRef<CopyButtonProps, "button">(({ value, ...rest }, ref) => {
    const { hasCopied, onCopy } = useClipboard(value)

    return (
      <Tooltip
        alignItems="center"
        bg="success"
        display="inline-flex"
        h="8"
        label="Copied!"
        open={hasCopied}
        placement="left"
        zIndex="auto"
      >
        <IconButton
          ref={ref}
          size="sm"
          variant="unstyled"
          aria-label="Copy the code"
          alignItems="center"
          bg={["neutral.800", "neutral.900"]}
          border="1px solid"
          borderColor={hasCopied ? "success" : "whiteAlpha.600"}
          color={hasCopied ? "success" : "whiteAlpha.600"}
          display="flex"
          icon={hasCopied ? <Check fontSize="lg" /> : <Copy fontSize="md" />}
          justifyContent="center"
          _hover={{
            borderColor: hasCopied ? "success" : "whiteAlpha.800",
            color: hasCopied ? "success" : "whiteAlpha.800",
          }}
          {...rest}
          onClick={onCopy}
        />
      </Tooltip>
    )
  }),
)
