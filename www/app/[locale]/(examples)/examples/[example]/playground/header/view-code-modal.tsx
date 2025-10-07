import type { BoxProps } from "@yamada-ui/react"
import type { Language, PrismTheme } from "prism-react-renderer"
import type { RefObject } from "react"
import {
  assignRef,
  Box,
  For,
  Heading,
  Modal,
  Text,
  useDisclosure,
} from "@yamada-ui/react"
import { Highlight, themes } from "prism-react-renderer"
import { memo } from "react"

const LANGUAGE: Language = "py"
const THEME: PrismTheme = themes.oneDark

const CODE = `import os
import openai

openai.api_key = os.getenv("OPENAI_API_KEY")

response = openai.Completion.create(
  model="davinci",
  prompt="",
  temperature=0.9,
  max_tokens=5,
  top_p=1,
  frequency_penalty=0,
  presence_penalty=0,
)`

export interface ViewCodeModalProps
  extends Omit<Modal.RootProps, "onClose" | "open"> {
  onOpenRef: RefObject<() => void>
}

export const ViewCodeModal = memo<ViewCodeModalProps>(
  ({ onOpenRef, ...rest }) => {
    const { open, onClose, onOpen } = useDisclosure()

    assignRef(onOpenRef, onOpen)

    return (
      <Modal.Root size="xl" open={open} onClose={onClose} {...rest}>
        <Modal.Content>
          <Modal.Header alignItems="flex-start" flexDirection="column" gap="sm">
            <Heading as="h3" size="xl" fontWeight="bold">
              Save preset
            </Heading>

            <Text color="muted" fontSize="md">
              You can use the following code to start integrating your current
              prompt and settings into your application.
            </Text>
          </Modal.Header>

          <Modal.Body>
            <CodeBlock />
          </Modal.Body>

          <Modal.Footer>
            <Text color="muted" fontSize="md">
              Your API Key can be found here. You should use environment
              variables or a secret management tool to expose your key to your
              applications.
            </Text>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Root>
    )
  },
)

ViewCodeModal.displayName = "ViewCodeModal"

interface CodeBlockProps extends BoxProps {}

const CodeBlock = memo<CodeBlockProps>(({ ...rest }) => {
  return (
    <Box bg="bg.contrast" p="md" rounded="md" w="full" {...rest}>
      <Highlight code={CODE} language={LANGUAGE} theme={THEME}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Box data-language={LANGUAGE} fontSize="sm" overflowX="auto">
            <Box
              as="pre"
              className={className}
              style={{ ...style, backgroundColor: "inherit" }}
              minW="fit-content"
            >
              <For each={tokens}>
                {(line, index) => (
                  <Box
                    key={index}
                    minW="fit-content"
                    {...getLineProps({ key: index, line })}
                  >
                    <For each={line}>
                      {(token, index) => (
                        <Text
                          key={index}
                          as="span"
                          {...getTokenProps({ key: index, token })}
                        />
                      )}
                    </For>
                  </Box>
                )}
              </For>
            </Box>
          </Box>
        )}
      </Highlight>
    </Box>
  )
})

CodeBlock.displayName = "CodeBlock"
