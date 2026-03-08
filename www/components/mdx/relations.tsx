import type { Relations } from "@/data"
import { List, toCamelCase, toPascalCase, VStack } from "@yamada-ui/react"
import data from "@/data/relations.json"
import { NextLink } from "../next-link"

const relations = data as Relations

interface LinkListProps {
  data:
    | NonNullable<Relations[string]["dependencies"]>
    | NonNullable<Relations[string]["dependents"]>
}

function LinkList({ data }: LinkListProps) {
  return (
    <VStack>
      {data.components.length ? (
        <List.Root styleType="disc">
          {data.components.map((name) => (
            <List.Item key={name} color="fg.emphasized">
              <NextLink
                href={`/docs/components/${name}`}
                color="fg.emphasized"
                fontSize="sm"
              >
                {toPascalCase(name)}
              </NextLink>
            </List.Item>
          ))}
        </List.Root>
      ) : null}

      {data.hooks.length ? (
        <List.Root styleType="disc">
          {data.hooks.map((name) => (
            <List.Item key={name} color="fg.emphasized">
              <NextLink
                href={`/docs/hooks/${name}`}
                color="fg.emphasized"
                fontSize="sm"
              >
                {toCamelCase(name)}
              </NextLink>
            </List.Item>
          ))}
        </List.Root>
      ) : null}
    </VStack>
  )
}

export interface UsesProps {
  name: string
}

export function Uses({ name }: UsesProps) {
  const data = relations[name]

  if (
    !data?.dependencies?.components.length &&
    !data?.dependencies?.hooks.length
  )
    return null

  return <LinkList data={data.dependencies} />
}

export interface UsedByProps {
  name: string
}

export function UsedBy({ name }: UsedByProps) {
  const data = relations[name]

  if (!data?.dependents?.components.length && !data?.dependents?.hooks.length)
    return null

  return <LinkList data={data.dependents} />
}
