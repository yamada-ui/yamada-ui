import type { PropsWithChildren, ReactNode } from "react"
import type {
  ComponentRenderOptions as OriginalComponentRenderOptions,
  RenderHookOptions as OriginalRenderHookOptions,
  RenderHookResult as OriginalRenderHookResult,
} from "vitest-browser-react"
import type { UIProviderProps } from "../../src"
import axe from "axe-core"
import {
  render as originalRender,
  renderHook as originalRenderHook,
} from "vitest-browser-react"
import { userEvent } from "vitest/browser"
import { UIProvider } from "../../src"

export interface ComponentRenderOptions extends OriginalComponentRenderOptions {
  withProvider?: boolean
  providerProps?: Omit<UIProviderProps, "children">
}

export interface BrowserRenderHookOptions<
  Y,
> extends OriginalRenderHookOptions<Y> {
  withProvider?: boolean
  providerProps?: Omit<UIProviderProps, "children">
}

export interface A11yOptions extends ComponentRenderOptions {
  axeOptions?: axe.RunOptions
}

export async function a11y(
  ui: ReactNode,
  { axeOptions = {}, ...options }: A11yOptions = {},
): Promise<void> {
  const { container } = await render(ui, options)
  const results = await axe.run(container, axeOptions)

  expect(results.violations).toStrictEqual([])
}

export async function render(
  ui: ReactNode,
  {
    withProvider = true,
    providerProps,
    ...options
  }: ComponentRenderOptions = {},
) {
  const user = userEvent.setup()

  if (withProvider) {
    options.wrapper ??= (props: PropsWithChildren) => (
      <UIProvider {...props} {...providerProps} />
    )
  }

  const result = await originalRender(ui, options)

  return { user, ...result }
}

export function renderHook<Y, M>(
  renderCallback: (initialProps?: M) => Y,
  {
    withProvider = true,
    providerProps,
    ...options
  }: BrowserRenderHookOptions<M> = {},
): Promise<OriginalRenderHookResult<Y, M>> {
  if (withProvider) {
    options.wrapper ??= (props: PropsWithChildren) => (
      <UIProvider {...props} {...providerProps} />
    )
  }

  return originalRenderHook(renderCallback, options)
}
