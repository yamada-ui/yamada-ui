"use client"

import type { FC, PropsWithChildren, ReactNode, RefObject } from "react"
import type { LoadingConfig, LoadingScheme, ThemeConfig } from "../../core"
import { AnimatePresence } from "motion/react"
import { createContext, createRef, use, useMemo, useRef, useState } from "react"
import { RemoveScroll } from "react-remove-scroll"
import { assignRef, isNumber, useUpdateEffect } from "../../utils"
import { Portal } from "../portal"
import { Background } from "./background"
import { Page } from "./page"
import { Screen } from "./screen"

interface LoadingMethods {
  /**
   * Function to finish loading.
   */
  finish: () => void
  /**
   * Function to forcefully update the loading state.
   *
   * Please be careful, as it will forcefully overwrite the state of the loading component.
   */
  force: (state: Partial<LoadingState>) => void
  /**
   * Function to start loading.
   *
   * If you specify a `message` etc. as an argument, the loading will change accordingly.
   */
  start: (options?: LoadingOptions) => void
  /**
   * Function to update loading.
   *
   * If you specify a `message` etc. as an argument, the loading will change accordingly.
   */
  update: (options: LoadingOptions) => void
}

export interface LoadingOptions {
  duration?: null | number
  loadingScheme?: LoadingScheme
  message?: ReactNode
}

interface LoadingState {
  duration: null | number
  loadingCount: number
  loadingScheme: LoadingScheme
  message: ReactNode | undefined
}

interface LoadingContext {
  /**
   * The background loading methods.
   */
  background: LoadingMethods
  /**
   * The page loading methods.
   */
  page: LoadingMethods
  /**
   * The screen loading methods.
   */
  screen: LoadingMethods
}

const LoadingContext = createContext({} as LoadingContext)

const createController = () => ({
  finish: createRef<LoadingMethods["finish"]>(),
  force: createRef<LoadingMethods["force"]>(),
  start: createRef<LoadingMethods["start"]>(),
  update: createRef<LoadingMethods["update"]>(),
})

type Controller = ReturnType<typeof createController>

const createMethods = (refs: RefObject<Controller>): LoadingMethods => ({
  finish: () => refs.current.finish.current?.(),
  force: (state) => refs.current.force.current?.(state),
  start: (props) => refs.current.start.current?.(props),
  update: (props) => refs.current.update.current?.(props),
})

const incrementCount = (prev: number) => prev + 1
const decrementCount = (prev: number) => (prev === 0 ? prev : prev - 1)

export interface LoadingProviderProps extends PropsWithChildren<
  ThemeConfig["loading"]
> {}

export const LoadingProvider: FC<LoadingProviderProps> = ({
  background: backgroundConfig,
  children,
  page: pageConfig,
  screen: screenConfig,
}) => {
  const screen = useRef(createController())
  const page = useRef(createController())
  const background = useRef(createController())

  const value = useMemo(
    () => ({
      background: createMethods(background),
      page: createMethods(page),
      screen: createMethods(screen),
    }),
    [],
  )

  return (
    <LoadingContext value={value}>
      {children}

      <Controller ref={screen} {...screenConfig} component={Screen} />

      <Controller ref={page} {...pageConfig} component={Page} />

      <Controller
        ref={background}
        {...backgroundConfig}
        blockScrollOnMount={backgroundConfig?.blockScrollOnMount ?? false}
        component={Background}
      />
    </LoadingContext>
  )
}

export interface LoadingSharedProps {
  duration: null | number
  initial?: boolean | string
  loadingScheme: LoadingScheme
  message: ReactNode | undefined
  onFinish: () => void
}

interface ControllerProps extends LoadingConfig {
  ref: RefObject<Controller>
  component: FC<LoadingSharedProps>
}

const Controller: FC<ControllerProps> = ({
  ref,
  allowPinchZoom = false,
  blockScrollOnMount = true,
  component: Component,
  duration: durationProp = null,
  loadingCount: loadingCountProp = 0,
  loadingScheme: loadingSchemeProp = "oval",
}) => {
  const loading = useRef<boolean>(false)
  const [{ duration, loadingCount, loadingScheme, message }, setState] =
    useState<LoadingState>({
      duration: durationProp,
      loadingCount: loadingCountProp,
      loadingScheme: loadingSchemeProp,
      message: undefined,
    })

  const { finish, force, start, update } = useMemo<LoadingMethods>(
    () => ({
      finish: () => {
        loading.current = false

        setState(({ loadingCount }) => ({
          duration: durationProp,
          loadingCount: decrementCount(loadingCount),
          loadingScheme: loadingSchemeProp,
          message: undefined,
        }))
      },

      force: ({
        duration = durationProp,
        loadingCount = 0,
        loadingScheme = loadingSchemeProp,
        message,
      }) => {
        loading.current = !!loadingCount

        setState({
          duration,
          loadingCount,
          loadingScheme,
          message,
        })
      },

      start: ({
        duration = durationProp,
        loadingScheme = loadingSchemeProp,
        message,
      } = {}) => {
        loading.current = true

        setState(({ loadingCount }) => ({
          duration,
          loadingCount: incrementCount(loadingCount),
          loadingScheme,
          message,
        }))
      },

      update: (next) => setState((prev) => ({ ...prev, ...next })),
    }),
    [durationProp, loadingSchemeProp],
  )

  assignRef(ref.current.start, start)
  assignRef(ref.current.finish, finish)
  assignRef(ref.current.update, update)
  assignRef(ref.current.force, force)

  const props: LoadingSharedProps = {
    duration,
    initial: loadingCountProp > 0 ? false : "initial",
    loadingScheme,
    message,
    onFinish: finish,
  }

  useUpdateEffect(() => {
    if (loadingCountProp > 0 || isNumber(durationProp))
      setState({
        duration: durationProp,
        loadingCount: loadingCountProp,
        loadingScheme: loadingSchemeProp,
        message: undefined,
      })
  }, [loadingCountProp, durationProp, loadingSchemeProp])

  return (
    <AnimatePresence initial={false}>
      {loadingCount ? (
        <Portal>
          <RemoveScroll
            allowPinchZoom={allowPinchZoom}
            enabled={blockScrollOnMount}
            forwardProps
          >
            <Component {...props} />
          </RemoveScroll>
        </Portal>
      ) : null}
    </AnimatePresence>
  )
}

/**
 * `useLoading` is a custom hook for controlling the loading of the application.
 *
 * @see https://yamada-ui.com/docs/hooks/use-loading
 */
export const useLoading = (): LoadingContext => {
  const { background, page, screen } = use(LoadingContext)

  const context = useMemo(
    () => ({ background, page, screen }),
    [background, page, screen],
  )

  return context
}
