import type { ButtonProps } from "@yamada-ui/react"
import {
  Button,
  CopyIcon,
  IconButton,
  Input,
  Popover,
  Text,
} from "@yamada-ui/react"
import { memo } from "react"

export interface ShareButtonProps extends ButtonProps {
  popoverContentProps?: Popover.ContentProps
  popoverProps?: Popover.RootProps
}

export const ShareButton = memo<ShareButtonProps>(
  ({ popoverContentProps, popoverProps, ...rest }) => {
    return (
      <Popover.Root
        // placement="bottom-start"
        {...popoverProps}
      >
        <Popover.Trigger>
          <Button minW="fit-content" {...rest}>
            Share
          </Button>
        </Popover.Trigger>

        <Popover.Content maxW="calc(100% - 32px)" {...popoverContentProps}>
          <Popover.Header
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
          </Popover.Header>

          <Popover.Body flexDirection="row" gap="sm">
            <Input defaultValue="https://platform.openai.com/playground/p/7bbKYQvsVkNmVb8NGcdUOLae?model=text-davinci-003" />

            <IconButton
              colorScheme="primary"
              icon={<CopyIcon fontSize="xl" />}
            />
          </Popover.Body>
        </Popover.Content>
      </Popover.Root>
    )
  },
)

ShareButton.displayName = "ShareButton"
