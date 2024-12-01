import type {
  ButtonProps,
  PopoverContentProps,
  PopoverProps,
} from "@yamada-ui/react"
import type { FC } from "react"
import { CopyIcon } from "@yamada-ui/lucide"
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
import { memo } from "react"

export interface ShareButtonProps extends ButtonProps {
  popoverContentProps?: PopoverContentProps
  popoverProps?: PopoverProps
}

export const ShareButton: FC<ShareButtonProps> = memo(
  ({ popoverContentProps, popoverProps, ...rest }) => {
    return (
      <Popover
        modifiers={[
          {
            name: "preventOverflow",
            options: {
              padding: {
                bottom: 16,
                left: 16,
                right: 16,
                top: 16,
              },
            },
          },
        ]}
        placement="bottom-end"
        {...popoverProps}
      >
        <PopoverTrigger>
          <Button minW="fit-content" {...rest}>
            Share
          </Button>
        </PopoverTrigger>

        <PopoverContent maxW="calc(100% - 32px)" {...popoverContentProps}>
          <PopoverHeader
            alignItems="flex-start"
            borderBottom="none"
            flexDirection="column"
            gap="xs"
          >
            <Text as="h3" fontSize="lg">
              Share preset
            </Text>

            <Text color="muted" fontSize="sm" fontWeight="normal">
              Anyone who has this link and an OpenAI account will be able to
              view this.
            </Text>
          </PopoverHeader>

          <PopoverBody flexDirection="row" gap="sm">
            <Input defaultValue="https://platform.openai.com/playground/p/7bbKYQvsVkNmVb8NGcdUOLae?model=text-davinci-003" />

            <IconButton
              colorScheme="primary"
              icon={<CopyIcon fontSize="xl" />}
            />
          </PopoverBody>
        </PopoverContent>
      </Popover>
    )
  },
)

ShareButton.displayName = "ShareButton"
