import type { BoxProps, ModalProps } from "@yamada-ui/react"
import type { FC, MutableRefObject } from "react"
import {
  assignRef,
  Box,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Text,
  useDisclosure,
} from "@yamada-ui/react"
import { Highlight, themes } from "prism-react-renderer"
import { memo } from "react"

const LANGUAGE = "py"
const THEME = themes.oneDark

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
  extends Omit<ModalProps, "isOpen" | "onClose"> {
  onOpenRef: MutableRefObject<() => void>
}

export const ViewCodeModal: FC<ViewCodeModalProps> = memo(
  ({ onOpenRef, ...rest }) => {
    const { isOpen, onClose, onOpen } = useDisclosure()

    assignRef(onOpenRef, onOpen)

    return (
      <Modal size="xl" isOpen={isOpen} onClose={onClose} {...rest}>
        <ModalHeader alignItems="flex-start" flexDirection="column" gap="sm">
          <Text as="h3">Save preset</Text>

          <Text color="muted" fontSize="md" fontWeight="normal">
            You can use the following code to start integrating your current
            prompt and settings into your application.
          </Text>
        </ModalHeader>

        <ModalBody>
          <CodeBlock />
        </ModalBody>

        <ModalFooter>
          <Text color="muted" fontSize="md">
            Your API Key can be found here. You should use environment variables
            or a secret management tool to expose your key to your applications.
          </Text>
        </ModalFooter>
      </Modal>
    )
  },
)

ViewCodeModal.displayName = "ViewCodeModal"

interface CodeBlockProps extends BoxProps {}

const CodeBlock: FC<CodeBlockProps> = memo(({ ...rest }) => {
  return (
    <Box bg="blackAlpha.950" p="md" rounded="md" w="full" {...rest}>
      <Highlight code={CODE} language={LANGUAGE} theme={THEME}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Box data-language={LANGUAGE} fontSize="sm" overflowX="auto">
            <Box
              as="pre"
              className={className}
              style={{ ...style, backgroundColor: "inherit" }}
              minW="fit-content"
            >
              {tokens.map((line, index) => (
                <Box
                  key={index}
                  minW="fit-content"
                  {...getLineProps({ key: index, line })}
                >
                  {line.map((token, index) => (
                    <Text
                      key={index}
                      as="span"
                      {...getTokenProps({ key: index, token })}
                    />
                  ))}
                </Box>
              ))}
            </Box>
          </Box>
        )}
      </Highlight>
    </Box>
  )
})

CodeBlock.displayName = "CodeBlock"
