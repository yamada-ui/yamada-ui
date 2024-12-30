import type { Variants } from "motion/react"
import type {
  PropsWithChildren,
  ReactElement,
  ReactNode,
  RefObject,
} from "react"
import type {
  CSSUIObject,
  FC,
  HTMLUIProps,
  LoadingComponentProps,
  LoadingConfigOptions,
  ThemeConfig,
} from "../../core"
import { AnimatePresence } from "motion/react"
import { createContext, createRef, use, useMemo, useRef, useState } from "react"
import { RemoveScroll } from "react-remove-scroll"
import { ui } from "../../core"
import { useTimeout } from "../../hooks/use-timeout"
import {
  assignRef,
  isFunction,
  isNumber,
  isValidElement,
  useUpdateEffect,
} from "../../utils"
import { motion } from "../motion"
import { Portal } from "../portal"
import { Loading } from "./loading"

interface LoadingContextProps {
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
   * Returns a judgement on whether it is currently loading or not.
   */
  isLoading: () => boolean
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

interface LoadingContext {
  /**
   * The background loading animation.
   */
  background: LoadingContextProps
  /**
   * The custom loading animation.
   *
   * This cannot be used unless a component is defined at `config/loading/custom.`
   */
  custom: LoadingContextProps
  /**
   * The page loading animation.
   */
  page: LoadingContextProps
  /**
   * The screen loading animation.
   */
  screen: LoadingContextProps
}

export interface LoadingOptions {
  duration?: null | number
  message?: ReactNode | undefined
}

interface LoadingState {
  duration: null | number
  loadingCount: number
  message: ReactNode | undefined
}

export interface LoadingProviderProps
  extends PropsWithChildren<ThemeConfig["loading"]> {}

const LoadingContext = createContext({} as LoadingContext)

const createController = () => ({
  finish: createRef<LoadingContextProps["finish"]>(),
  force: createRef<LoadingContextProps["force"]>(),
  isLoading: createRef<LoadingContextProps["isLoading"]>(),
  start: createRef<LoadingContextProps["start"]>(),
  update: createRef<LoadingContextProps["update"]>(),
})

type Controller = ReturnType<typeof createController>

const createLoadingFunc = (
  refs: RefObject<Controller>,
): LoadingContextProps => ({
  finish: () => refs.current.finish.current?.(),
  force: (state) => refs.current.force.current?.(state),
  isLoading: () => refs.current.isLoading.current?.() ?? false,
  start: (props) => refs.current.start.current?.(props),
  update: (props) => refs.current.update.current?.(props),
})

const incrementCount = (prev: number) => prev + 1
const decrementCount = (prev: number) => (prev === 0 ? prev : prev - 1)

export const LoadingProvider: FC<LoadingProviderProps> = ({
  background: backgroundProps,
  children,
  custom: customProps,
  page: pageProps,
  screen: screenProps,
}) => {
  const screenController = useRef(createController())
  const pageController = useRef(createController())
  const backgroundController = useRef(createController())
  const customController = useRef(createController())

  const value = useMemo(
    () => ({
      background: createLoadingFunc(backgroundController),
      custom: createLoadingFunc(customController),
      page: createLoadingFunc(pageController),
      screen: createLoadingFunc(screenController),
    }),
    [],
  )

  return (
    <LoadingContext.Provider value={value}>
      {children}

      <Controller
        ref={screenController}
        {...screenProps}
        component={screenProps?.component ?? ScreenComponent}
      />

      <Controller
        ref={pageController}
        {...pageProps}
        component={pageProps?.component ?? PageComponent}
      />

      <Controller
        ref={backgroundController}
        {...backgroundProps}
        blockScrollOnMount={backgroundProps?.blockScrollOnMount ?? false}
        component={backgroundProps?.component ?? BackgroundComponent}
      />

      <Controller
        ref={customController}
        blockScrollOnMount={customProps?.blockScrollOnMount ?? false}
        {...customProps}
        component={customProps?.component}
      />
    </LoadingContext.Provider>
  )
}

interface ControllerProps extends LoadingConfigOptions {
  ref: RefObject<Controller>
  render?: (props: LoadingComponentProps) => ReactElement
}

const Controller: FC<ControllerProps> = ({
  ref,
  allowPinchZoom = false,
  appendToParentPortal,
  blockScrollOnMount = true,
  component,
  containerRef,
  duration: durationProps = null,
  icon,
  initialState,
  text,
}) => {
  const loading = useRef<boolean>(false)
  const [{ duration, loadingCount, message }, setState] =
    useState<LoadingState>({
      duration: durationProps,
      loadingCount: initialState ? 1 : 0,
      message: undefined,
    })

  const { finish, force, isLoading, start, update }: LoadingContextProps =
    useMemo(
      () => ({
        finish: () => {
          loading.current = false

          setState(({ loadingCount }) => ({
            duration: durationProps,
            loadingCount: decrementCount(loadingCount),
            message: undefined,
          }))
        },

        force: ({ duration = durationProps, loadingCount = 0, message }) => {
          loading.current = !!loadingCount

          setState({
            duration,
            loadingCount,
            message,
          })
        },

        isLoading: () => loading.current,

        start: ({ duration = durationProps, message } = {}) => {
          loading.current = true

          setState(({ loadingCount }) => ({
            duration,
            loadingCount: incrementCount(loadingCount),
            message,
          }))
        },

        update: (next) => setState((prev) => ({ ...prev, ...next })),
      }),
      [durationProps],
    )

  assignRef(ref.current.isLoading, isLoading)
  assignRef(ref.current.start, start)
  assignRef(ref.current.finish, finish)
  assignRef(ref.current.update, update)
  assignRef(ref.current.force, force)

  const props: LoadingComponentProps = {
    duration,
    icon,
    initialState,
    message,
    text,
    onFinish: finish,
  }

  useUpdateEffect(() => {
    if (initialState || isNumber(durationProps))
      setState({
        duration: durationProps,
        loadingCount: initialState ? 1 : 0,
        message: undefined,
      })
  }, [initialState, durationProps])

  return (
    <AnimatePresence initial={false}>
      {loadingCount ? (
        <Portal
          appendToParentPortal={appendToParentPortal}
          containerRef={containerRef}
        >
          <RemoveScroll
            allowPinchZoom={allowPinchZoom}
            enabled={blockScrollOnMount}
            forwardProps
          >
            <Render component={component} {...props} />
          </RemoveScroll>
        </Portal>
      ) : null}
    </AnimatePresence>
  )
}

Controller.__ui__ = "Controller"

interface RenderProps extends LoadingComponentProps {
  component?: (props: LoadingComponentProps) => ReactNode
}

const Render: FC<RenderProps> = ({ component, ...props }) => {
  if (isFunction(component)) {
    return component(props)
  } else {
    return null
  }
}

Render.__ui__ = "Render"

interface MessageProps extends HTMLUIProps<"p"> {
  message: ReactNode
}

const Message: FC<MessageProps> = ({ message, ...rest }) => {
  return message ? (
    isValidElement(message) ? (
      message
    ) : (
      <ui.p {...rest}>{message}</ui.p>
    )
  ) : null
}

const getVariants = (type: "fade" | "scaleFade" = "fade"): Variants => ({
  animate: {
    opacity: 1,
    scale: type === "scaleFade" ? 1 : undefined,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: type === "scaleFade" ? 0.95 : undefined,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 1, 1],
    },
  },
  initial: {
    opacity: 0,
    scale: type === "scaleFade" ? 0.95 : undefined,
  },
})

const getOverlayStyle = (
  type: "fill" | "transparent" = "fill",
): CSSUIObject => ({
  alignItems: "center",
  bg:
    type === "fill"
      ? ["fallback(white, #fbfbfb)", "fallback(black, #141414)"]
      : "fallback(blackAlpha.600, rgba(0, 0, 0, 0.48))",
  bottom: 0,
  display: "flex",
  h: "100dvh",
  justifyContent: "center",
  left: 0,
  p: "fallback(4, 1rem)",
  position: "fixed",
  right: 0,
  top: 0,
  w: "100vw",
  zIndex: "fallback(beerus, 9999)",
})

const getMotionProps = (
  initialState: boolean | undefined,
  type: "fade" | "scaleFade" = "fade",
) => ({
  animate: "animate",
  exit: "exit",
  initial: initialState ? false : "initial",
  variants: getVariants(type),
})

const ScreenComponent: FC<LoadingComponentProps> = ({
  ref,
  duration,
  icon,
  initialState,
  message,
  text,
  onFinish,
}) => {
  const css: CSSUIObject = {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    gap: "fallback(2, 0.5rem)",
    justifyContent: "center",
    maxW: "24rem",
  }

  useTimeout(onFinish, duration)

  return (
    <motion.div
      ref={ref}
      className="ui-loading-screen"
      {...getMotionProps(initialState)}
      __css={getOverlayStyle()}
    >
      <ui.div __css={css}>
        <Loading fontSize="6xl" {...icon} />
        <Message lineClamp={3} message={message} {...text} />
      </ui.div>
    </motion.div>
  )
}

ScreenComponent.__ui__ = "ScreenComponent"

const PageComponent: FC<LoadingComponentProps> = ({
  ref,
  duration,
  icon,
  initialState,
  message,
  text,
  onFinish,
}) => {
  const css: CSSUIObject = {
    alignItems: "center",
    bg: ["fallback(white, #fbfbfb)", "fallback(black, #141414)"],
    boxShadow: [
      "fallback(lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05))",
      "fallback(dark-lg, 0px 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 5px 10px rgba(0, 0, 0, 0.2), 0px 15px 40px rgba(0, 0, 0, 0.4))",
    ],
    display: "flex",
    flexDirection: "column",
    gap: "fallback(2, 0.5rem)",
    justifyContent: "center",
    maxW: "24rem",
    p: "fallback(4, 1rem)",
    rounded: "fallback(md, 0.375rem)",
  }

  useTimeout(onFinish, duration)

  return (
    <motion.div
      ref={ref}
      className="ui-loading-page"
      {...getMotionProps(initialState)}
      __css={getOverlayStyle("transparent")}
    >
      <motion.div
        className="ui-loading-page__inner"
        {...getMotionProps(initialState, "scaleFade")}
        __css={css}
      >
        <Loading fontSize="6xl" {...icon} />
        <Message lineClamp={3} message={message} {...text} />
      </motion.div>
    </motion.div>
  )
}

PageComponent.__ui__ = "PageComponent"

const BackgroundComponent: FC<LoadingComponentProps> = ({
  ref,
  duration,
  icon,
  initialState,
  message,
  text,
  onFinish,
}) => {
  const css: CSSUIObject = {
    alignItems: "center",
    bg: ["fallback(white, #fbfbfb)", "fallback(black, #141414)"],
    bottom: "fallback(4, 1rem)",
    boxShadow: [
      "fallback(3xl, 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 -25px 50px -12px rgba(0, 0, 0, 0.25))",
      "fallback(dark-lg, 0px 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 5px 10px rgba(0, 0, 0, 0.2), 0px 15px 40px rgba(0, 0, 0, 0.4))",
    ],
    display: "flex",
    gap: "fallback(2, 0.5rem)",
    justifyContent: "center",
    maxW: "20rem",
    p: "fallback(2, 0.5rem)",
    position: "fixed",
    right: "fallback(4, 1rem)",
    rounded: "fallback(md, 0.375rem)",
    zIndex: "fallback(beerus, 9999)",
  }

  useTimeout(onFinish, duration)

  return (
    <motion.div
      ref={ref}
      className="ui-loading-background"
      {...getMotionProps(initialState, "scaleFade")}
      __css={css}
    >
      <Loading fontSize="xl" {...icon} />
      <Message fontSize="sm" lineClamp={1} message={message} {...text} />
    </motion.div>
  )
}

BackgroundComponent.__ui__ = "BackgroundComponent"

/**
 * `useLoading` is a custom hook for controlling the loading of the application.
 *
 * @see Docs https://yamada-ui.com/hooks/use-loading
 */
export const useLoading = (): LoadingContext => {
  const { background, custom, page, screen } = use(LoadingContext)

  const context = useMemo(
    () => ({ background, custom, page, screen }),
    [background, custom, page, screen],
  )

  return context
}
