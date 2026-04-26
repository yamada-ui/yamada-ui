"use client"

import type { ComponentType } from "react"
import { For, Grid, useBreakpointValue, VStack } from "@yamada-ui/react"
import { Appearance } from "./appearance"
import { Bookmark } from "./bookmark"
import { Calendar } from "./calendar"
import { CreateAccount } from "./create-account"
import { Notifications } from "./notifications"
import { PaymentMethod } from "./payment-method"
import { Processing } from "./processing"
import { QAndA } from "./q-and-a"
import { Roadmap } from "./roadmap"
import { Role } from "./role"
import { SocialMedia } from "./social-media"

const THREE_COLUMN_GROUPS = [
  [PaymentMethod, CreateAccount, Role],
  [SocialMedia, Appearance, Bookmark, Calendar],
  [Processing, Notifications, Roadmap, QAndA],
] as const satisfies readonly (readonly ComponentType[])[]

const TWO_COLUMN_GROUPS = [
  [PaymentMethod, Role, Appearance, Calendar, Notifications],
  [CreateAccount, SocialMedia, Bookmark, Processing, Roadmap, QAndA],
] as const satisfies readonly (readonly ComponentType[])[]

const SINGLE_COLUMN_GROUPS = [
  [
    PaymentMethod,
    CreateAccount,
    Role,
    SocialMedia,
    Appearance,
    Bookmark,
    Calendar,
    Processing,
    Notifications,
    Roadmap,
    QAndA,
  ],
] as const satisfies readonly (readonly ComponentType[])[]

export function Examples() {
  const columns = useBreakpointValue<readonly (readonly ComponentType[])[]>({
    base: THREE_COLUMN_GROUPS,
    md: SINGLE_COLUMN_GROUPS,
    xl: TWO_COLUMN_GROUPS,
  })

  return (
    <Grid
      as="section"
      gap="{space}"
      templateColumns={{
        base: "repeat(3, minmax(0, 1fr))",
        md: "1fr",
        xl: "repeat(2, minmax(0, 1fr))",
      }}
    >
      <For each={columns}>
        {(column, index) => (
          <VStack key={index} alignItems="stretch" gap="{space}">
            <For each={column}>
              {(Component, index) => <Component key={index} />}
            </For>
          </VStack>
        )}
      </For>
    </Grid>
  )
}
