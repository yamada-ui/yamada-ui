import type {
  ThemeConfig,
  LoadingComponentProps,
  CSSUIObject,
  LoadingConfigOptions,
  HTMLUIProps,
} from "@yamada-ui/core"
import { ui } from "@yamada-ui/core"
import type { MotionVariants } from "@yamada-ui/motion"
import { AnimatePresence, motion } from "@yamada-ui/motion"
import { Portal } from "@yamada-ui/portal"
import { useTimeout } from "@yamada-ui/use-timeout"
import {
  isValidElement,
  assignRef,
  useUpdateEffect,
  isNumber,
} from "@yamada-ui/utils"
import type {
  FC,
  PropsWithChildren,
  ReactNode,
  MutableRefObject,
  RefObject,
} from "react"
import {
  createContext,
  memo,
  useContext,
  useMemo,
  useState,
  Fragment,
  useRef,
  createRef,
} from "react"
import { RemoveScroll } from "react-remove-scroll"
import { Loading } from "./loading"

interface LoadingContextProps {
  /**
   * Returns a judgement on whether it is currently loading or not.
   */
  isLoading: () => boolean
  /**
   * Function to start loading.
   *
   * If you specify a `message` etc. as an argument, the loading will change accordingly.
   */
  start: (props?: Partial<LoadingProps>) => void
  /**
   * Function to finish loading.
   */
  finish: () => void
  /**
   * Function to update loading.
   *
   * If you specify a `message` etc. as an argument, the loading will change accordingly.
   */
  update: (props: Partial<LoadingProps>) => void
  /**
   * Function to forcefully update the loading state.
   *
   * Please be careful, as it will forcefully overwrite the state of the loading component.
   */
  force: (state: Partial<LoadingState>) => void
}

interface LoadingContext {
  /**
   * The screen loading animation.
   */
  screen: LoadingContextProps
  /**
   * The page loading animation.
   */
  page: LoadingContextProps
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
}

interface LoadingProps {
  message: ReactNode | undefined
  duration: number | null
}

interface LoadingState {
  loadingCount: number
  message: ReactNode | undefined
  duration: number | null
}

export interface LoadingProviderProps
  extends PropsWithChildren<ThemeConfig["loading"]> {}

const LoadingContext = createContext({} as LoadingContext)

interface Refs {
  isLoading: RefObject<LoadingContextProps["isLoading"]>
  start: RefObject<LoadingContextProps["start"]>
  finish: RefObject<LoadingContextProps["finish"]>
  update: RefObject<LoadingContextProps["update"]>
  force: RefObject<LoadingContextProps["force"]>
}

type ControlRefs = MutableRefObject<Refs>

const createLoadingRefs = (): Refs => ({
  isLoading: createRef<LoadingContextProps["isLoading"]>(),
  start: createRef<LoadingContextProps["start"]>(),
  finish: createRef<LoadingContextProps["finish"]>(),
  update: createRef<LoadingContextProps["update"]>(),
  force: createRef<LoadingContextProps["force"]>(),
})

const createLoadingFunc = (refs: ControlRefs): LoadingContextProps => ({
  isLoading: () => refs.current.isLoading.current?.() ?? false,
  start: (props) => refs.current.start.current?.(props),
  finish: () => refs.current.finish.current?.(),
  update: (props) => refs.current.update.current?.(props),
  force: (state) => refs.current.force.current?.(state),
})

const incrementCount = (prev: number) => prev + 1
const decrementCount = (prev: number) => (prev === 0 ? prev : prev - 1)

export const LoadingProvider: FC<LoadingProviderProps> = ({
  screen,
  page,
  background,
  custom,
  children,
}) => {
  const screenRefs = useRef(createLoadingRefs())
  const pageRefs = useRef(createLoadingRefs())
  const backgroundRefs = useRef(createLoadingRefs())
  const customRefs = useRef(createLoadingRefs())

  const screenLoadingFunc = createLoadingFunc(screenRefs)
  const pageLoadingFunc = createLoadingFunc(pageRefs)
  const backgroundLoadingFunc = createLoadingFunc(backgroundRefs)
  const customLoadingFunc = createLoadingFunc(customRefs)

  const value = {
    screen: screenLoadingFunc,
    page: pageLoadingFunc,
    background: backgroundLoadingFunc,
    custom: customLoadingFunc,
  }

  return (
    <LoadingContext.Provider value={value}>
      {children}

      <Controller
        controlRefs={screenRefs}
        {...screen}
        component={
          screen?.component ?? ((props) => <ScreenComponent {...props} />)
        }
      />

      <Controller
        controlRefs={pageRefs}
        {...page}
        component={page?.component ?? ((props) => <PageComponent {...props} />)}
      />

      <Controller
        controlRefs={backgroundRefs}
        {...background}
        blockScrollOnMount={background?.blockScrollOnMount ?? false}
        component={
          background?.component ??
          ((props) => <BackgroundComponent {...props} />)
        }
      />

      <Controller
        controlRefs={customRefs}
        blockScrollOnMount={background?.blockScrollOnMount ?? false}
        {...custom}
        component={custom?.component}
      />
    </LoadingContext.Provider>
  )
}

interface ControllerProps extends LoadingConfigOptions {
  controlRefs: ControlRefs
  render?: (props: LoadingComponentProps) => JSX.Element
}

const Controller: FC<ControllerProps> = ({
  controlRefs,
  appendToParentPortal,
  containerRef,
  allowPinchZoom = false,
  blockScrollOnMount = true,
  initialState,
  duration: durationProps = null,
  icon,
  text,
  component,
}) => {
  const isLoadingRef = useRef<boolean>(false)
  const [{ loadingCount, message, duration }, setState] =
    useState<LoadingState>({
      loadingCount: initialState ? 1 : 0,
      message: undefined,
      duration: durationProps,
    })

  const { isLoading, start, finish, update, force }: LoadingContextProps =
    useMemo(
      () => ({
        isLoading: () => isLoadingRef.current,

        start: ({ message, duration = durationProps } = {}) => {
          isLoadingRef.current = true

          setState(({ loadingCount }) => ({
            loadingCount: incrementCount(loadingCount),
            message,
            duration,
          }))
        },

        update: (next) => setState((prev) => ({ ...prev, ...next })),

        finish: () => {
          isLoadingRef.current = false

          setState(({ loadingCount }) => ({
            loadingCount: decrementCount(loadingCount),
            message: undefined,
            duration: durationProps,
          }))
        },

        force: ({ loadingCount = 0, message, duration = durationProps }) => {
          isLoadingRef.current = !!loadingCount

          setState({
            loadingCount,
            message,
            duration,
          })
        },
      }),
      [durationProps],
    )

  assignRef(controlRefs.current.isLoading, isLoading)
  assignRef(controlRefs.current.start, start)
  assignRef(controlRefs.current.finish, finish)
  assignRef(controlRefs.current.update, update)
  assignRef(controlRefs.current.force, force)

  const props: LoadingComponentProps = {
    initialState,
    icon,
    text,
    message,
    duration,
    onFinish: finish,
  }

  useUpdateEffect(() => {
    if (initialState || isNumber(durationProps))
      setState({
        loadingCount: initialState ? 1 : 0,
        message: undefined,
        duration: durationProps,
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
            <Fragment>
              <Render component={component} {...props} />
            </Fragment>
          </RemoveScroll>
        </Portal>
      ) : null}
    </AnimatePresence>
  )
}

interface RenderProps extends LoadingComponentProps {
  component?: (props: LoadingComponentProps) => ReactNode
}

const Render: FC<RenderProps> = ({ component, ...props }) => {
  if (typeof component === "function") {
    return component(props) as JSX.Element
  } else {
    return <></>
  }
}

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

const getVariants = (type: "fade" | "scaleFade" = "fade"): MotionVariants => ({
  initial: {
    opacity: 0,
    scale: type === "scaleFade" ? 0.95 : undefined,
  },
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
})

const getOverlayStyle = (
  type: "fill" | "transparent" = "fill",
): CSSUIObject => ({
  position: "fixed",
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: "fallback(beerus, 9999)",
  bg:
    type === "fill"
      ? ["fallback(white, #fbfbfb)", "fallback(black, #141414)"]
      : "fallback(blackAlpha.600, rgba(0, 0, 0, 0.48))",
  w: "100vw",
  h: "100dvh",
  p: "fallback(4, 1rem)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
})

const getMotionProps = (
  initialState: boolean | undefined,
  type: "fade" | "scaleFade" = "fade",
) => ({
  initial: initialState ? false : "initial",
  animate: "animate",
  exit: "exit",
  variants: getVariants(type),
})

const ScreenComponent: FC<LoadingComponentProps> = memo(
  ({ initialState, icon, text, message, duration, onFinish }) => {
    const css: CSSUIObject = {
      maxW: "24rem",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "fallback(2, 0.5rem)",
    }

    useTimeout(onFinish, duration)

    return (
      <motion.div
        className="ui-loading-screen"
        {...getMotionProps(initialState)}
        __css={getOverlayStyle()}
      >
        <ui.div __css={css}>
          <Loading fontSize="6xl" {...icon} />
          <Message message={message} lineClamp={3} {...text} />
        </ui.div>
      </motion.div>
    )
  },
)

ScreenComponent.displayName = "ScreenComponent"

const PageComponent: FC<LoadingComponentProps> = memo(
  ({ initialState, icon, text, message, duration, onFinish }) => {
    const css: CSSUIObject = {
      bg: ["fallback(white, #fbfbfb)", "fallback(black, #141414)"],
      maxW: "24rem",
      p: "fallback(4, 1rem)",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "fallback(2, 0.5rem)",
      rounded: "fallback(md, 0.375rem)",
      boxShadow: [
        "fallback(lg, 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05))",
        "fallback(dark-lg, 0px 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 5px 10px rgba(0, 0, 0, 0.2), 0px 15px 40px rgba(0, 0, 0, 0.4))",
      ],
    }

    useTimeout(onFinish, duration)

    return (
      <motion.div
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
          <Message message={message} lineClamp={3} {...text} />
        </motion.div>
      </motion.div>
    )
  },
)

PageComponent.displayName = "PageComponent"

const BackgroundComponent: FC<LoadingComponentProps> = memo(
  ({ initialState, icon, text, message, duration, onFinish }) => {
    const css: CSSUIObject = {
      position: "fixed",
      right: "fallback(4, 1rem)",
      bottom: "fallback(4, 1rem)",
      zIndex: "fallback(beerus, 9999)",
      bg: ["fallback(white, #fbfbfb)", "fallback(black, #141414)"],
      maxW: "20rem",
      p: "fallback(2, 0.5rem)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "fallback(2, 0.5rem)",
      rounded: "fallback(md, 0.375rem)",
      boxShadow: [
        "fallback(3xl, 0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 -25px 50px -12px rgba(0, 0, 0, 0.25))",
        "fallback(dark-lg, 0px 0px 0px 1px rgba(0, 0, 0, 0.1), 0px 5px 10px rgba(0, 0, 0, 0.2), 0px 15px 40px rgba(0, 0, 0, 0.4))",
      ],
    }

    useTimeout(onFinish, duration)

    return (
      <motion.div
        className="ui-loading-background"
        {...getMotionProps(initialState, "scaleFade")}
        __css={css}
      >
        <Loading fontSize="xl" {...icon} />
        <Message message={message} fontSize="sm" lineClamp={1} {...text} />
      </motion.div>
    )
  },
)

BackgroundComponent.displayName = "BackgroundComponent"

/**
 * `useLoading` is a custom hook for controlling the loading of the application.
 *
 * @see Docs https://yamada-ui.com/hooks/use-loading
 */
export const useLoading = (): LoadingContext => {
  const { screen, page, background, custom } = useContext(LoadingContext)

  return { screen, page, background, custom }
}
