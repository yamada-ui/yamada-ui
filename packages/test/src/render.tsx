import type {
  RenderOptions as ReactRenderOptions,
  RenderHookOptions as ReactRenderHookOptions,
  Queries,
  queries,
} from "@testing-library/react"
import {
  render as reactRender,
  renderHook as reactRenderHook,
} from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { UIProvider } from "@yamada-ui/providers"
import theme from "@yamada-ui/theme"
import type { ReactElement } from "react"
import type * as ReactDOMClient from "react-dom/client"
import "@testing-library/jest-dom/vitest"

export type RenderOptions = ReactRenderOptions & {
  withProvider?: boolean
}

export type RenderReturn = ReturnType<typeof reactRender> & {
  user: ReturnType<typeof userEvent.setup>
}

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
  D extends RendererableContainer | HydrateableContainer = HTMLElement,
  H extends RendererableContainer | HydrateableContainer = D,
> = ReactRenderHookOptions<Y, M, D, H> & {
  withProvider?: boolean
}

export function renderHook<
  Y,
  M,
  D extends Queries = typeof queries,
  H extends RendererableContainer | HydrateableContainer = HTMLElement,
  R extends RendererableContainer | HydrateableContainer = H,
>(
  render: (props: M) => Y,
  { withProvider = true, ...rest }: RenderHookOptions<M, D, H, R> = {},
) {
  if (withProvider)
    rest.wrapper ??= (props: any) => <UIProvider {...props} theme={theme} />

  return reactRenderHook<Y, M, D, H, R>(render, rest)
}
