"use client"

import type { Relations } from "@/data"
import { Text } from "@yamada-ui/react"
import { getDocs } from "@/data"
import data from "@/data/relations.json"
import { useLocale } from "@/i18n"
import { mdToHtml } from "../../utils/string"
import { Card, CardGroup } from "./card"

const relations = data as Relations

export interface SimilarProps {
  name: string
}

export function Similar({ name }: SimilarProps) {
  const data = relations[name]
  const { locale } = useLocale()
  const docs = getDocs(locale)

  if (!data?.resembles?.length) return null

  return (
    <CardGroup>
      {data.resembles.map((name) => {
        const doc = docs.find(
          ({ pathname }) => pathname === `/docs/components/${name}`,
        )

        if (!doc) return null

        return (
          <Card key={name} href={doc.pathname} title={doc.title}>
            <Text color="fg.emphasized" fontSize="sm" lineHeight="1.8">
              {mdToHtml(doc.description)}
            </Text>
          </Card>
        )
      })}
    </CardGroup>
  )
}

interface LinkListProps {
  data:
    | NonNullable<Relations[string]["dependencies"]>
    | NonNullable<Relations[string]["dependents"]>
}

function LinkList({ data }: LinkListProps) {
  const { locale } = useLocale()
  const docs = getDocs(locale)

  return (
    <>
      {data.components.length ? (
        <CardGroup>
          {data.components.map((name) => {
            const doc = docs.find(
              ({ pathname }) => pathname === `/docs/components/${name}`,
            )

            if (!doc) return null

            return (
              <Card key={name} href={doc.pathname} title={doc.title}>
                <Text color="fg.emphasized" fontSize="sm" lineHeight="1.8">
                  {mdToHtml(doc.description)}
                </Text>
              </Card>
            )
          })}
        </CardGroup>
      ) : null}

      {data.hooks.length ? (
        <CardGroup>
          {data.hooks.map((name) => {
            const doc = docs.find(
              ({ pathname }) => pathname === `/docs/hooks/${name}`,
            )

            if (!doc) return null

            return (
              <Card key={name} href={doc.pathname} title={doc.title}>
                <Text color="fg.emphasized" fontSize="sm" lineHeight="1.8">
                  {mdToHtml(doc.description)}
                </Text>
              </Card>
            )
          })}
        </CardGroup>
      ) : null}
    </>
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
