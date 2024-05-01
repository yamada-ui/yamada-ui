import {
  Box,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Text,
  assignRef,
  useDisclosure,
} from "@yamada-ui/react"
import type { BoxProps, ModalProps } from "@yamada-ui/react"
import { Highlight, themes } from "prism-react-renderer"
import { memo } from "react"
import type { FC, MutableRefObject } from "react"

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

export type ViewCodeModalProps = Omit<ModalProps, "isOpen" | "onClose"> & {
  onOpenRef: MutableRefObject<() => void>
}

export const ViewCodeModal: FC<ViewCodeModalProps> = memo(
  ({ onOpenRef, ...rest }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    assignRef(onOpenRef, onOpen)

    return (
      <Modal size="xl" isOpen={isOpen} onClose={onClose} {...rest}>
        <ModalHeader flexDirection="column" gap="sm" alignItems="flex-start">
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

type CodeBlockProps = BoxProps

const CodeBlock: FC<CodeBlockProps> = memo(({ ...rest }) => {
  return (
    <Box w="full" rounded="md" p="md" bg="blackAlpha.950" {...rest}>
      <Highlight language={LANGUAGE} theme={THEME} code={CODE}>
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <Box fontSize="sm" overflowX="auto" data-language={LANGUAGE}>
            <Box
              as="pre"
              className={className}
              minW="fit-content"
              style={{ ...style, backgroundColor: "inherit" }}
            >
              {tokens.map((line, index) => (
                <Box
                  key={index}
                  minW="fit-content"
                  {...getLineProps({ line, key: index })}
                >
                  {line.map((token, index) => (
                    <Text
                      key={index}
                      as="span"
                      {...getTokenProps({ token, key: index })}
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
