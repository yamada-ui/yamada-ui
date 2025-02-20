import type {
  Queries,
  queries,
  RenderHookOptions as ReactRenderHookOptions,
  RenderOptions as ReactRenderOptions,
} from "@testing-library/react"
import type { ReactElement } from "react"
import type * as ReactDOMClient from "react-dom/client"
import type { UIProviderProps } from "../src"
import {
  render as reactRender,
  renderHook as reactRenderHook,
} from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { defaultTheme, UIProvider } from "../src"
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
    rest.wrapper ??= (props: any) => (
      <UIProvider {...props} theme={defaultTheme} />
    )

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
> = ReactRenderHookOptions<Y, M, D, H> & {
  withProvider?: boolean
  providerProps?: Omit<UIProviderProps, "children">
}

export function renderHook<
  Y,
  M,
  D extends Queries = typeof queries,
  H extends HydrateableContainer | RendererableContainer = HTMLElement,
  R extends HydrateableContainer | RendererableContainer = H,
>(
  render: (props: M) => Y,
  {
    withProvider = true,
    providerProps,
    ...rest
  }: RenderHookOptions<M, D, H, R> = {},
) {
  if (withProvider)
    rest.wrapper ??= (props: any) => (
      <UIProvider {...props} theme={defaultTheme} {...providerProps} />
    )

  return reactRenderHook<Y, M, D, H, R>(render, rest)
}
