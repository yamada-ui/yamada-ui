"use client"

import type { GridProps } from "@yamada-ui/react"
import {
  ArrowDownToLineIcon,
  Autocomplete,
  Field,
  Grid,
  PencilLineIcon,
  SegmentedControl,
  TextAlignStartIcon,
  Textarea,
  VStack,
} from "@yamada-ui/react"
import { useState } from "react"
import { Parameter } from "./parameter"

type Mode = "complete" | "edit" | "insert"

const MODE_ITEMS = [
  { label: <TextAlignStartIcon />, value: "complete" },
  { label: <ArrowDownToLineIcon />, value: "insert" },
  { label: <PencilLineIcon />, value: "edit" },
]

const MODEL_ITEMS = [
  {
    items: [
      { label: "gpt-4-0125-preview", value: "gpt-4-0125-preview" },
      { label: "gpt-4-turbo-preview", value: "gpt-4-turbo-preview" },
      { label: "gpt-4-1106-preview", value: "gpt-4-1106-preview" },
      { label: "gpt-4-vision-preview", value: "gpt-4-vision-preview" },
      {
        label: "gpt-4-1106-vision-preview",
        value: "gpt-4-1106-vision-preview",
      },
      { label: "gpt-4", value: "gpt-4" },
      { label: "gpt-4-0613", value: "gpt-4-0613" },
      { label: "gpt-4-32k", value: "gpt-4-32k" },
      { label: "gpt-4-32k-0613", value: "gpt-4-32k-0613" },
    ],
    label: "GPT-4 and GPT-4 Turbo",
  },
  {
    items: [
      { label: "gpt-3.5-turbo-0125", value: "gpt-3.5-turbo-0125" },
      { label: "gpt-3.5-turbo", value: "gpt-3.5-turbo" },
      { label: "gpt-3.5-turbo-1106", value: "gpt-3.5-turbo-1106" },
      { label: "gpt-3.5-turbo-instruct", value: "gpt-3.5-turbo-instruct" },
    ],
    label: "GPT-3.5 Turbo",
  },
  {
    items: [
      { label: "dall-e-3", value: "dall-e-3" },
      { label: "dall-e-2", value: "dall-e-2" },
    ],
    label: "DALL·E",
  },
  {
    items: [
      { label: "code-davinci-002", value: "code-davinci-002" },
      { label: "code-davinci-001", value: "code-davinci-001" },
      { label: "code-cushman-002", value: "code-cushman-002" },
      { label: "code-cushman-001", value: "code-cushman-001" },
    ],
    label: "Codex",
  },
]

export interface EditProps extends GridProps {}

export function Edit({ ...rest }: EditProps) {
  const [mode, setMode] = useState<Mode>("complete")
  const edit = mode === "edit"
  const insert = mode === "insert"
  const placeholder = edit
    ? "We is going to the market."
    : insert
      ? "We're writing to [inset]. Congrats from OpenAI!"
      : "Write a tagline for an ice cream shop."

  return (
    <Grid
      gap="lg"
      p="{space}"
      templateColumns={{ base: "1fr auto", lg: "1fr" }}
      {...rest}
    >
      <Grid
        gap={{ base: "lg", sm: "md" }}
        templateColumns={
          edit
            ? { base: "repeat(2, 1fr)", xl: "1fr" }
            : insert
              ? { base: "repeat(2, 1fr)", xl: "1fr" }
              : { base: "1fr" }
        }
        templateRows="repeat(3, auto-fit)"
        {...rest}
      >
        <Field.Root label={edit ? "Input" : undefined}>
          <Textarea
            minH={{ base: edit ? "2xl" : "4xl", xl: "md" }}
            placeholder={placeholder}
            resize="vertical"
          />
        </Field.Root>

        {edit ? (
          <Field.Root label="Instructions">
            <Textarea placeholder="Fix the grammar." resize="vertical" />
          </Field.Root>
        ) : null}

        {insert || edit ? (
          <Textarea
            bg="bg.panel"
            gridColumn={edit ? { base: "2 / 3", xl: "inherit" } : undefined}
            gridRow={edit ? { base: "1 / 3", xl: "inherit" } : undefined}
            minH={{
              base: edit ? "calc(full - {spaces.lg})" : "4xl",
              xl: "md",
            }}
            mt={{ base: edit ? "lg" : undefined, xl: "0" }}
            readOnly
          />
        ) : null}
      </Grid>

      <VStack gridRow={{ base: "inherit", lg: "1 / 2" }} minW="xs">
        <SegmentedControl.Root
          items={MODE_ITEMS}
          minW="auto"
          value={mode}
          onChange={setMode}
        />

        <Field.Root label="Model">
          <Autocomplete.Root
            defaultValue="gpt-4-0125-preview"
            items={MODEL_ITEMS}
          />
        </Field.Root>

        <Parameter
          defaultValue={0.56}
          description={`Controls randomness: lowering results in less random completions.\n\nAs the temperature approaches zero, the model will become deterministic and repetitive.`}
          label="Temperature"
          max={1}
          min={0}
          step={0.01}
        />
        <Parameter
          defaultValue={256}
          description={`The maximum number of tokens to generate.\n\nRequests can use up to 2,048 or 4,000 tokens, shared between prompt and completion.\n\nThe exact limit varies by model.`}
          label="Maximum Length"
          max={4000}
          min={0}
        />
        <Parameter
          defaultValue={0.9}
          description="Control diversity via nucleus sampling: 0.5 means half of all likelihood-weighted options are considered."
          label="Top P"
          max={1}
          min={0}
          step={0.1}
        />
      </VStack>
    </Grid>
  )
}
