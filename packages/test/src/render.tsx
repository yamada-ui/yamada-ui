import type {
  Queries,
  queries,
  RenderHookOptions as ReactRenderHookOptions,
  RenderOptions as ReactRenderOptions,
} from "@testing-library/react"
import type { ReactElement } from "react"
import type * as ReactDOMClient from "react-dom/client"
import {
  render as reactRender,
  renderHook as reactRenderHook,
} from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { UIProvider } from "@yamada-ui/providers"
import theme from "@yamada-ui/theme"
import "@testing-library/jest-dom/vitest"

export type RenderOptions = {
  withProvider?: boolean
} & ReactRenderOptions

export type RenderReturn = {
  user: ReturnType<typeof userEvent.setup>
} & ReturnType<typeof reactRender>

export function render(
  ui: ReactElement,
  { withProvider = true, ...rest }: RenderOptions = {},
): RenderReturn {
  const user = userEvent.setup()

  if (withProvider)
    rest.wrapper ??= (props: any) => <UIProvider {...props} theme={theme} />

  const result = reactRender(ui, rest)

  return { user, ...result }
}

type RendererableContainer = ReactDOMClient.Container
type HydrateableContainer = Parameters<
  (typeof ReactDOMClient)["hydrateRoot"]
>[0]

export type RenderHookOptions<
  Y,
  M extends Queries = typeof queries,
  D extends HydrateableContainer | RendererableContainer = HTMLElement,
  H extends HydrateableContainer | RendererableContainer = D,
> = {
  withProvider?: boolean
} & ReactRenderHookOptions<Y, M, D, H>

export function renderHook<
  Y,
  M,
  D extends Queries = typeof queries,
  H extends HydrateableContainer | RendererableContainer = HTMLElement,
  R extends HydrateableContainer | RendererableContainer = H,
>(
  render: (props: M) => Y,
  { withProvider = true, ...rest }: RenderHookOptions<M, D, H, R> = {},
) {
  if (withProvider)
    rest.wrapper ??= (props: any) => <UIProvider {...props} theme={theme} />

  return reactRenderHook<Y, M, D, H, R>(render, rest)
}
