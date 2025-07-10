import type { Meta, StoryFn } from "@storybook/react-vite"
import { faker } from "@faker-js/faker"
import { useMemo } from "react"
import { For } from "."
import { Card } from "../../components/card"
import { VStack } from "../../components/stack"
import { Text } from "../../components/text"
import { EmptyState } from "../empty-state"
import { BoxIcon } from "../icon"

type Story = StoryFn<typeof For>

const meta: Meta<typeof For> = {
  component: For,
  title: "Components / For",
}

export default meta

export const Basic: Story = () => {
  const items = useMemo(
    () =>
      Array.from({ length: 10 }, (_, index) => ({
        id: index,
        name: `${faker.person.firstName()} ${faker.person.lastName()}`,
        email: faker.internet.email(),
      })),
    [],
  )

  return (
    <VStack>
      <For each={items}>
        {({ id, name, email }) => (
          <Card.Root key={id} size="md" variant="outline">
            <Card.Header>
              <Text as="h1" fontSize="lg">
                {name}
              </Text>
            </Card.Header>

            <Card.Body pt="sm">
              <Text color="muted">Id (Index): {id}</Text>
              <Text color="muted">Email: {email}</Text>
            </Card.Body>
          </Card.Root>
        )}
      </For>
    </VStack>
  )
}

export const FallBack: Story = () => {
  return (
    <VStack>
      <For
        each={[]}
        fallback={
          <EmptyState.Root
            description="There are no items to show"
            indicator={<BoxIcon />}
          />
        }
      >
        {(item, index) => <Text key={index}>{item}</Text>}
      </For>
    </VStack>
  )
}

export const Filter: Story = () => {
  const items = useMemo(
    () =>
      Array.from({ length: 10 }, (_, index) => ({
        id: index,
        name: `${faker.person.firstName()} ${faker.person.lastName()}`,
        email: faker.internet.email(),
      })),
    [],
  )

  return (
    <VStack>
      <For each={items} filter={({ email }) => email.includes("gmail")}>
        {({ id, name, email }) => (
          <Card.Root key={id} size="md" variant="outline">
            <Card.Header>
              <Text as="h1" fontSize="lg">
                {name}
              </Text>
            </Card.Header>

            <Card.Body pt="sm">
              <Text color="muted">Id (Index): {id}</Text>
              <Text color="muted">Email: {email}</Text>
            </Card.Body>
          </Card.Root>
        )}
      </For>
    </VStack>
  )
}

export const Sort: Story = () => {
  const items = useMemo(
    () =>
      Array.from({ length: 10 }, (_, index) => ({
        id: index,
        name: `${faker.person.firstName()} ${faker.person.lastName()}`,
        email: faker.internet.email(),
      })),
    [],
  )

  return (
    <VStack>
      <For each={items} sort={(a, b) => a.name.localeCompare(b.name)}>
        {({ id, name, email }) => (
          <Card.Root key={id} size="md" variant="outline">
            <Card.Header>
              <Text as="h1" fontSize="lg">
                {name}
              </Text>
            </Card.Header>

            <Card.Body pt="sm">
              <Text color="muted">Id (Index): {id}</Text>
              <Text color="muted">Email: {email}</Text>
            </Card.Body>
          </Card.Root>
        )}
      </For>
    </VStack>
  )
}

export const Offset: Story = () => {
  const items = useMemo(
    () =>
      Array.from({ length: 10 }, (_, index) => ({
        id: index,
        name: `${faker.person.firstName()} ${faker.person.lastName()}`,
        email: faker.internet.email(),
      })),
    [],
  )

  return (
    <VStack>
      <For each={items} offset={5}>
        {({ id, name, email }) => (
          <Card.Root key={id} size="md" variant="outline">
            <Card.Header>
              <Text as="h1" fontSize="lg">
                {name}
              </Text>
            </Card.Header>

            <Card.Body pt="sm">
              <Text color="muted">Id (Index): {id}</Text>
              <Text color="muted">Email: {email}</Text>
            </Card.Body>
          </Card.Root>
        )}
      </For>
    </VStack>
  )
}

export const Limit: Story = () => {
  const items = useMemo(
    () =>
      Array.from({ length: 10 }, (_, index) => ({
        id: index,
        name: `${faker.person.firstName()} ${faker.person.lastName()}`,
        email: faker.internet.email(),
      })),
    [],
  )

  return (
    <VStack>
      <For each={items} limit={5}>
        {({ id, name, email }) => (
          <Card.Root key={id} size="md" variant="outline">
            <Card.Header>
              <Text as="h1" fontSize="lg">
                {name}
              </Text>
            </Card.Header>

            <Card.Body pt="sm">
              <Text color="muted">Id (Index): {id}</Text>
              <Text color="muted">Email: {email}</Text>
            </Card.Body>
          </Card.Root>
        )}
      </For>
    </VStack>
  )
}

export const Reverse: Story = () => {
  const items = useMemo(
    () =>
      Array.from({ length: 10 }, (_, index) => ({
        id: index,
        name: `${faker.person.firstName()} ${faker.person.lastName()}`,
        email: faker.internet.email(),
      })),
    [],
  )

  return (
    <VStack>
      <For each={items} reverse>
        {({ id, name, email }) => (
          <Card.Root key={id} size="md" variant="outline">
            <Card.Header>
              <Text as="h1" fontSize="lg">
                {name}
              </Text>
            </Card.Header>

            <Card.Body pt="sm">
              <Text color="muted">Id (Index): {id}</Text>
              <Text color="muted">Email: {email}</Text>
            </Card.Body>
          </Card.Root>
        )}
      </For>
    </VStack>
  )
}
