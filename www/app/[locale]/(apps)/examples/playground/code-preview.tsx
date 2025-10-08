import type { BoxProps } from "@yamada-ui/react"
import type { Language, PrismTheme } from "prism-react-renderer"
import { Box, For, Text } from "@yamada-ui/react"
import { Highlight, themes } from "prism-react-renderer"

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

interface CodePreviewProps extends BoxProps {}

export function CodePreview({ ...rest }: CodePreviewProps) {
  return (
    <Box bg="black" p="md" rounded="l2" w="full" {...rest}>
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
}
