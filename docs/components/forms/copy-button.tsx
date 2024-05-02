import { forwardRef, IconButton, useClipboard, Tooltip } from "@yamada-ui/react"
import type { ButtonProps } from "@yamada-ui/react"
import { Check, Copy } from "components/media-and-icons"
import { memo } from "react"

export type CopyButtonProps = Omit<ButtonProps, "value"> & { value: string }

export const CopyButton = memo(
  forwardRef<CopyButtonProps, "button">(({ value, ...rest }, ref) => {
    const { hasCopied, onCopy } = useClipboard(value)

    return (
      <>
        <Tooltip
          label="Copied!"
          placement="left"
          isOpen={hasCopied}
          bg="success"
          h="8"
          display="inline-flex"
          alignItems="center"
        >
          <IconButton
            ref={ref}
            size="sm"
            aria-label="Copy the code"
            variant="unstyled"
            color={hasCopied ? "success" : "whiteAlpha.600"}
            border="1px solid"
            borderColor={hasCopied ? "success" : "whiteAlpha.600"}
            bg={["neutral.800", "neutral.900"]}
            _hover={{
              color: hasCopied ? "success" : "whiteAlpha.800",
              borderColor: hasCopied ? "success" : "whiteAlpha.800",
            }}
            display="flex"
            justifyContent="center"
            alignItems="center"
            icon={hasCopied ? <Check /> : <Copy />}
            {...rest}
            onClick={onCopy}
          />
        </Tooltip>
      </>
    )
  }),
)
