"use client"

import type { StackProps } from "@yamada-ui/react"
import {
  Autocomplete,
  Button,
  CopyIcon,
  Field,
  Heading,
  HStack,
  IconButton,
  Input,
  Modal,
  Popover,
  Text,
} from "@yamada-ui/react"
import { CodePreview } from "./code-preview"

const PRESET_ITEMS = [
  {
    label: "Grammatical Standard English",
    value: "Grammatical Standard English",
  },
  { label: "Summarize for a 2nd grader", value: "Summarize for a 2nd grader" },
  { label: "Text to command", value: "Text to command" },
  { label: "Q&A", value: "Q&A" },
  { label: "English to other languages", value: "English to other languages" },
  { label: "Parse unstructured data", value: "Parse unstructured data" },
  { label: "Classification", value: "Classification" },
  { label: "Natural language to Python", value: "Natural language to Python" },
  { label: "Explain code", value: "Explain code" },
  { label: "Chat", value: "Chat" },
]

export interface HeaderProps extends StackProps {}

export function Header({ ...rest }: HeaderProps) {
  return (
    <HStack borderBottomWidth="1px" px="{space}" py="md" {...rest}>
      <Heading as="h2" size="2xl" flex="1" lineClamp={1}>
        Playground
      </Heading>

      <HStack gap="sm">
        <Autocomplete.Root
          items={PRESET_ITEMS}
          placeholder="Search presets…"
          rootProps={{
            display: { base: "flex", md: "none" },
            minW: "xs",
          }}
        />

        <Modal.Root
          body={
            <>
              <Text color="fg.muted" fontSize="sm">
                This will save the current playground state as a preset which
                you can access later or share with others.
              </Text>

              <Field.Root label="Name">
                <Input />
              </Field.Root>

              <Field.Root label="Description">
                <Input />
              </Field.Root>
            </>
          }
          cancel="Cancel"
          success="Save"
          title="Save preset"
          trigger={
            <Button size={{ base: "md", sm: "sm" }} minW="fit-content">
              Save
            </Button>
          }
        />

        <Modal.Root
          size="xl"
          body={
            <>
              <Text color="fg.muted" fontSize="sm">
                You can use the following code to start integrating your current
                prompt and settings into your application.
              </Text>

              <CodePreview />

              <Text color="fg.muted" fontSize="sm">
                Your API Key can be found here. You should use environment
                variables or a secret management tool to expose your key to your
                applications.
              </Text>
            </>
          }
          title="View code"
          trigger={
            <Button size={{ base: "md", sm: "sm" }} minW="fit-content">
              View code
            </Button>
          }
        />

        <Popover.Root>
          <Popover.Trigger>
            <Button size={{ base: "md", sm: "sm" }} minW="fit-content">
              Share
            </Button>
          </Popover.Trigger>

          <Popover.Content>
            <Popover.Header>Share preset</Popover.Header>

            <Popover.Body>
              <Text color="fg.muted" fontSize="sm" wordBreak="break-word">
                Anyone who has this link and an OpenAI account will be able to
                view this.
              </Text>

              <HStack w="full">
                <Input
                  defaultValue="https://platform.openai.com/playground/p/7bbKYQvsVkNmVb8NGcdUOLae?model=text-davinci-003"
                  flex="1"
                />

                <IconButton icon={<CopyIcon fontSize="lg" />} />
              </HStack>
            </Popover.Body>
          </Popover.Content>
        </Popover.Root>
      </HStack>
    </HStack>
  )
}
