import {
  Button,
  IconButton,
  Input,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Text,
} from "@yamada-ui/react"
import type {
  ButtonProps,
  PopoverContentProps,
  PopoverProps,
} from "@yamada-ui/react"
import { memo } from "react"
import type { FC } from "react"
import { Copy } from "components/media-and-icons"

export type ShareButtonProps = ButtonProps & {
  popoverProps?: PopoverProps
  popoverContentProps?: PopoverContentProps
}

export const ShareButton: FC<ShareButtonProps> = memo(
  ({ popoverProps, popoverContentProps, ...rest }) => {
    return (
      <Popover
        placement="bottom-end"
        modifiers={[
          {
            name: "preventOverflow",
            options: {
              padding: {
                top: 16,
                bottom: 16,
                left: 16,
                right: 16,
              },
            },
          },
        ]}
        {...popoverProps}
      >
        <PopoverTrigger>
          <Button minW="fit-content" {...rest}>
            Share
          </Button>
        </PopoverTrigger>

        <PopoverContent maxW="calc(100% - 32px)" {...popoverContentProps}>
          <PopoverHeader
            flexDirection="column"
            alignItems="flex-start"
            gap="xs"
            borderBottom="none"
          >
            <Text as="h3" fontSize="lg">
              Share preset
            </Text>

            <Text color="muted" fontWeight="normal" fontSize="sm">
              Anyone who has this link and an OpenAI account will be able to
              view this.
            </Text>
          </PopoverHeader>

          <PopoverBody flexDirection="row" gap="sm">
            <Input defaultValue="https://platform.openai.com/playground/p/7bbKYQvsVkNmVb8NGcdUOLae?model=text-davinci-003" />

            <IconButton colorScheme="primary" icon={<Copy />} />
          </PopoverBody>
        </PopoverContent>
      </Popover>
    )
  },
)

ShareButton.displayName = "ShareButton"
