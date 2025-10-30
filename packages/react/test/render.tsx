import type {
  RenderHookOptions as OriginalRenderHookOptions,
  RenderOptions as OriginalRenderOptions,
  Queries,
  queries,
} from "@testing-library/react"
import type { PropsWithChildren, ReactNode } from "react"
import type { Container } from "react-dom/client"
import type { AxeCore } from "vitest-axe"
import type { UIProviderProps } from "../src"
import {
  render as originalRender,
  renderHook as originalRenderHook,
} from "@testing-library/react"
import { userEvent } from "@testing-library/user-event"
import { isValidElement } from "react"
import { UIProvider } from "../src"
import "@testing-library/jest-dom/vitest"

export interface RenderOptions extends OriginalRenderOptions {
  withProvider?: boolean
  providerProps?: Omit<UIProviderProps, "children">
}

export interface RenderReturn extends ReturnType<typeof originalRender> {
  user: ReturnType<typeof userEvent.setup>
}

export function render(
  ui: ReactNode,
  { withProvider = true, providerProps, ...options }: RenderOptions = {},
): RenderReturn {
  const user = userEvent.setup()

  if (withProvider)
    options.wrapper ??= (props: PropsWithChildren) => (
      <UIProvider {...props} {...providerProps} />
    )

  const result = originalRender(ui, options)

  return { user, ...result }
}

export interface A11yOptions extends RenderOptions {
  axeOptions?: AxeCore.RunOptions
}

export async function a11y(
  ui: ReactNode,
  { axeOptions, ...options }: A11yOptions = {},
): Promise<void> {
  const { axe } = await import("vitest-axe")
  const container = isValidElement(ui) ? render(ui, options).container : ui
  const results = await axe(container as HTMLElement, axeOptions)

  // @ts-ignore
  expect(results).toHaveNoViolations()
}

export interface RenderHookOptions<
  Y,
  M extends Queries = typeof queries,
  D extends Container | Document | Element = HTMLElement,
  H extends Container | Document | Element = D,
> extends OriginalRenderHookOptions<Y, M, D, H> {
  withProvider?: boolean
  providerProps?: Omit<UIProviderProps, "children">
}

export function renderHook<
  Y,
  M,
  D extends Queries = typeof queries,
  H extends Container | Document | Element = HTMLElement,
  R extends Container | Document | Element = H,
>(
  render: (props: M) => Y,
  {
    withProvider = true,
    providerProps,
    ...options
  }: RenderHookOptions<M, D, H, R> = {},
) {
  if (withProvider)
    options.wrapper ??= (props: PropsWithChildren) => (
      <UIProvider {...props} {...providerProps} />
    )

  return originalRenderHook<Y, M, D, H, R>(render, options)
}
