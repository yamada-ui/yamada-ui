import {
  ui,
  ThemeConfig,
  LoadingComponentProps,
  CSSUIObject,
} from '@yamada-ui/core'
import { Loading } from '@yamada-ui/loading'
import { AnimatePresence, motion, MotionVariants } from '@yamada-ui/motion'
import { Portal } from '@yamada-ui/portal'
import { useTimeout } from '@yamada-ui/use-timeout'
import { isValidElement, assignRef, useUpdateEffect } from '@yamada-ui/utils'
import {
  createContext,
  FC,
  memo,
  PropsWithChildren,
  ReactNode,
  useContext,
  useMemo,
  useState,
  Fragment,
  useRef,
  MutableRefObject,
  createRef,
  RefObject,
} from 'react'
import { RemoveScroll } from 'react-remove-scroll'

type LoadingContextProps = {
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
}

type LoadingContext = {
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

type LoadingProps = {
  message: ReactNode | undefined
  duration: number | null
}

type LoadingState = {
  loadingCount: number
  message: ReactNode | undefined
  duration: number | null
}

export type LoadingProviderProps = PropsWithChildren<ThemeConfig['loading']>

export const LoadingContext = createContext({} as LoadingContext)

type LoadingRef = MutableRefObject<{
  isLoading: RefObject<LoadingContextProps['isLoading']>
  start: RefObject<LoadingContextProps['start']>
  finish: RefObject<LoadingContextProps['finish']>
  update: RefObject<LoadingContextProps['update']>
}>

const generateFunc = (ref: LoadingRef): LoadingContextProps => ({
  isLoading: () => ref.current.isLoading.current?.() ?? false,
  start: (props) => ref.current.start.current?.(props),
  finish: () => ref.current.finish.current?.(),
  update: (props) => ref.current.update.current?.(props),
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
  const screenLoadingRef = useRef({
    isLoading: createRef<LoadingContextProps['isLoading']>(),
    start: createRef<LoadingContextProps['start']>(),
    finish: createRef<LoadingContextProps['finish']>(),
    update: createRef<LoadingContextProps['update']>(),
  })
  const pageLoadingRef = useRef({
    isLoading: createRef<LoadingContextProps['isLoading']>(),
    start: createRef<LoadingContextProps['start']>(),
    finish: createRef<LoadingContextProps['finish']>(),
    update: createRef<LoadingContextProps['update']>(),
  })
  const backgroundLoadingRef = useRef({
    isLoading: createRef<LoadingContextProps['isLoading']>(),
    start: createRef<LoadingContextProps['start']>(),
    finish: createRef<LoadingContextProps['finish']>(),
    update: createRef<LoadingContextProps['update']>(),
  })
  const customLoadingRef = useRef({
    isLoading: createRef<LoadingContextProps['isLoading']>(),
    start: createRef<LoadingContextProps['start']>(),
    finish: createRef<LoadingContextProps['finish']>(),
    update: createRef<LoadingContextProps['update']>(),
  })

  const screenLoadingFunc = generateFunc(screenLoadingRef)
  const pageLoadingFunc = generateFunc(pageLoadingRef)
  const backgroundLoadingFunc = generateFunc(backgroundLoadingRef)
  const customLoadingFunc = generateFunc(customLoadingRef)

  const value = {
    screen: screenLoadingFunc,
    page: pageLoadingFunc,
    background: backgroundLoadingFunc,
    custom: customLoadingFunc,
  }

  return (
    <LoadingContext.Provider value={value}>
      {children}
      <LoadingControl
        {...{
          screen,
          page,
          background,
          custom,
          screenLoadingRef,
          pageLoadingRef,
          backgroundLoadingRef,
          customLoadingRef,
        }}
      />
    </LoadingContext.Provider>
  )
}

type LoadingControlProps = Required<ThemeConfig>['loading'] & {
  screenLoadingRef: LoadingRef
  pageLoadingRef: LoadingRef
  backgroundLoadingRef: LoadingRef
  customLoadingRef: LoadingRef
}

const LoadingControl: FC<LoadingControlProps> = ({
  screen,
  page,
  background,
  custom,
  ...refs
}) => {
  const isScreenLoadingRef = useRef<boolean>(false)
  const [screenLoading, setScreenLoading] = useState<LoadingState>({
    loadingCount: screen?.initialState ? 1 : 0,
    message: undefined,
    duration: screen?.duration ?? null,
  })
  const isPageLoadingRef = useRef<boolean>(false)
  const [pageLoading, setPageLoading] = useState<LoadingState>({
    loadingCount: page?.initialState ? 1 : 0,
    message: undefined,
    duration: page?.duration ?? null,
  })
  const isBackgroundLoadingRef = useRef<boolean>(false)
  const [backgroundLoading, setBackgroundLoading] = useState<LoadingState>({
    loadingCount: background?.initialState ? 1 : 0,
    message: undefined,
    duration: background?.duration ?? null,
  })
  const isCustomLoadingRef = useRef<boolean>(false)
  const [customLoading, setCustomLoading] = useState<LoadingState>({
    loadingCount: custom?.initialState ? 1 : 0,
    message: undefined,
    duration: custom?.duration ?? null,
  })

  const screenLoadingFunc: LoadingContextProps = useMemo(
    () => ({
      isLoading: () => isScreenLoadingRef.current,
      start: ({ message, duration = screenLoading.duration ?? null } = {}) => {
        isScreenLoadingRef.current = true
        setScreenLoading(({ loadingCount }) => ({
          loadingCount: incrementCount(loadingCount),
          message,
          duration,
        }))
      },
      update: (next) => setScreenLoading((prev) => ({ ...prev, ...next })),
      finish: () => {
        isScreenLoadingRef.current = false
        setScreenLoading(({ loadingCount }) => ({
          loadingCount: decrementCount(loadingCount),
          message: undefined,
          duration: screen?.duration ?? null,
        }))
      },
    }),
    [screenLoading, screen],
  )

  const pageLoadingFunc: LoadingContextProps = useMemo(
    () => ({
      isLoading: () => isPageLoadingRef.current,
      start: ({ message, duration = pageLoading.duration ?? null } = {}) => {
        isPageLoadingRef.current = true
        setPageLoading(({ loadingCount }) => ({
          loadingCount: incrementCount(loadingCount),
          message,
          duration,
        }))
      },
      update: (next) => setPageLoading((prev) => ({ ...prev, ...next })),
      finish: () => {
        isPageLoadingRef.current = false
        setPageLoading(({ loadingCount }) => ({
          loadingCount: decrementCount(loadingCount),
          message: undefined,
          duration: page?.duration ?? null,
        }))
      },
    }),
    [pageLoading, page],
  )

  const backgroundLoadingFunc: LoadingContextProps = useMemo(
    () => ({
      isLoading: () => isBackgroundLoadingRef.current,
      start: ({
        message,
        duration = backgroundLoading.duration ?? null,
      } = {}) => {
        isBackgroundLoadingRef.current = true
        setBackgroundLoading(({ loadingCount }) => ({
          loadingCount: incrementCount(loadingCount),
          message,
          duration,
        }))
      },
      update: (next) => setBackgroundLoading((prev) => ({ ...prev, ...next })),
      finish: () => {
        isBackgroundLoadingRef.current = false
        setBackgroundLoading(({ loadingCount }) => ({
          loadingCount: decrementCount(loadingCount),
          message: undefined,
          duration: background?.duration ?? null,
        }))
      },
    }),
    [backgroundLoading, background],
  )

  const customLoadingFunc: LoadingContextProps = useMemo(
    () => ({
      isLoading: () => isCustomLoadingRef.current,
      start: ({ message, duration = customLoading.duration ?? null } = {}) => {
        isCustomLoadingRef.current = true
        setCustomLoading(({ loadingCount }) => ({
          loadingCount: incrementCount(loadingCount),
          message,
          duration,
        }))
      },
      update: (next) => setCustomLoading((prev) => ({ ...prev, ...next })),
      finish: () => {
        isCustomLoadingRef.current = false
        setCustomLoading(({ loadingCount }) => ({
          loadingCount: decrementCount(loadingCount),
          message: undefined,
          duration: custom?.duration ?? null,
        }))
      },
    }),
    [customLoading, custom],
  )

  assignRef(
    refs.screenLoadingRef.current.isLoading,
    screenLoadingFunc.isLoading,
  )
  assignRef(refs.screenLoadingRef.current.start, screenLoadingFunc.start)
  assignRef(refs.screenLoadingRef.current.finish, screenLoadingFunc.finish)
  assignRef(refs.screenLoadingRef.current.update, screenLoadingFunc.update)
  assignRef(refs.pageLoadingRef.current.isLoading, pageLoadingFunc.isLoading)
  assignRef(refs.pageLoadingRef.current.start, pageLoadingFunc.start)
  assignRef(refs.pageLoadingRef.current.finish, pageLoadingFunc.finish)
  assignRef(refs.pageLoadingRef.current.update, pageLoadingFunc.update)
  assignRef(
    refs.backgroundLoadingRef.current.isLoading,
    backgroundLoadingFunc.isLoading,
  )
  assignRef(
    refs.backgroundLoadingRef.current.start,
    backgroundLoadingFunc.start,
  )
  assignRef(
    refs.backgroundLoadingRef.current.finish,
    backgroundLoadingFunc.finish,
  )
  assignRef(
    refs.backgroundLoadingRef.current.update,
    backgroundLoadingFunc.update,
  )
  assignRef(
    refs.customLoadingRef.current.isLoading,
    customLoadingFunc.isLoading,
  )
  assignRef(refs.customLoadingRef.current.start, customLoadingFunc.start)
  assignRef(refs.customLoadingRef.current.finish, customLoadingFunc.finish)
  assignRef(refs.customLoadingRef.current.update, customLoadingFunc.update)

  useUpdateEffect(() => {
    if (screen)
      setScreenLoading({
        loadingCount: screen?.initialState ? 1 : 0,
        message: undefined,
        duration: screen?.duration ?? null,
      })

    if (page)
      setPageLoading({
        loadingCount: page?.initialState ? 1 : 0,
        message: undefined,
        duration: page?.duration ?? null,
      })

    if (background)
      setBackgroundLoading({
        loadingCount: background?.initialState ? 1 : 0,
        message: undefined,
        duration: background?.duration ?? null,
      })

    if (custom)
      setCustomLoading({
        loadingCount: custom?.initialState ? 1 : 0,
        message: undefined,
        duration: custom?.duration ?? null,
      })
  }, [screen, page, background, custom])

  return (
    <>
      <AnimatePresence initial={false}>
        {screenLoading.loadingCount ? (
          <Portal
            appendToParentPortal={screen?.appendToParentPortal}
            containerRef={screen?.containerRef}
          >
            <RemoveScroll
              allowPinchZoom={screen?.allowPinchZoom ?? false}
              enabled={screen?.blockScrollOnMount ?? true}
              forwardProps
            >
              <Fragment>
                {screen?.component ? (
                  <CustomComponent
                    component={screen.component}
                    {...{
                      initialState: screen?.initialState,
                      icon: screen?.icon,
                      text: screen?.text,
                      message: screenLoading.message,
                      duration: screenLoading.duration,
                      onFinish: screenLoadingFunc.finish,
                    }}
                  />
                ) : (
                  <LoadingScreenComponent
                    {...{
                      initialState: screen?.initialState,
                      icon: screen?.icon,
                      text: screen?.text,
                      message: screenLoading.message,
                      duration: screenLoading.duration,
                      onFinish: screenLoadingFunc.finish,
                    }}
                  />
                )}
              </Fragment>
            </RemoveScroll>
          </Portal>
        ) : null}
      </AnimatePresence>

      <AnimatePresence initial={false}>
        {pageLoading.loadingCount ? (
          <Portal
            appendToParentPortal={page?.appendToParentPortal}
            containerRef={page?.containerRef}
          >
            <RemoveScroll
              allowPinchZoom={page?.allowPinchZoom ?? false}
              enabled={page?.blockScrollOnMount ?? true}
              forwardProps
            >
              <Fragment>
                {page?.component ? (
                  <CustomComponent
                    component={page.component}
                    {...{
                      initialState: page?.initialState,
                      icon: page?.icon,
                      text: page?.text,
                      message: pageLoading.message,
                      duration: pageLoading.duration,
                      onFinish: pageLoadingFunc.finish,
                    }}
                  />
                ) : (
                  <LoadingPageComponent
                    {...{
                      initialState: page?.initialState,
                      icon: page?.icon,
                      text: page?.text,
                      message: pageLoading.message,
                      duration: pageLoading.duration,
                      onFinish: pageLoadingFunc.finish,
                    }}
                  />
                )}
              </Fragment>
            </RemoveScroll>
          </Portal>
        ) : null}
      </AnimatePresence>

      <AnimatePresence initial={false}>
        {backgroundLoading.loadingCount ? (
          <Portal
            appendToParentPortal={background?.appendToParentPortal}
            containerRef={background?.containerRef}
          >
            <RemoveScroll
              allowPinchZoom={page?.allowPinchZoom ?? false}
              enabled={page?.blockScrollOnMount ?? false}
              forwardProps
            >
              <Fragment>
                {background?.component ? (
                  <CustomComponent
                    component={background.component}
                    {...{
                      initialState: background?.initialState,
                      icon: background?.icon,
                      text: background?.text,
                      message: backgroundLoading.message,
                      duration: backgroundLoading.duration,
                      onFinish: backgroundLoadingFunc.finish,
                    }}
                  />
                ) : (
                  <LoadingBackgroundComponent
                    {...{
                      initialState: background?.initialState,
                      icon: background?.icon,
                      text: background?.text,
                      message: backgroundLoading.message,
                      duration: backgroundLoading.duration,
                      onFinish: backgroundLoadingFunc.finish,
                    }}
                  />
                )}
              </Fragment>
            </RemoveScroll>
          </Portal>
        ) : null}
      </AnimatePresence>

      <AnimatePresence initial={false}>
        {customLoading.loadingCount ? (
          <Portal
            appendToParentPortal={custom?.appendToParentPortal}
            containerRef={custom?.containerRef}
          >
            {custom?.component ? (
              <CustomComponent
                component={custom.component}
                {...{
                  initialState: custom?.initialState,
                  icon: custom?.icon,
                  text: custom?.text,
                  message: customLoading.message,
                  duration: customLoading.duration,
                  onFinish: customLoadingFunc.finish,
                }}
              />
            ) : null}
          </Portal>
        ) : null}
      </AnimatePresence>
    </>
  )
}

type CustomComponentProps = {
  component: (props: LoadingComponentProps) => ReactNode
} & LoadingComponentProps

const CustomComponent: FC<CustomComponentProps> = ({ component, ...props }) => {
  if (typeof component === 'function') {
    return component(props) as JSX.Element
  } else {
    return <></>
  }
}

const getVariants = (type: 'fade' | 'scaleFade' = 'fade'): MotionVariants => ({
  initial: {
    opacity: 0,
    scale: type === 'scaleFade' ? 0.95 : undefined,
  },
  animate: {
    opacity: 1,
    scale: type === 'scaleFade' ? 1 : undefined,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: type === 'scaleFade' ? 0.95 : undefined,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 1, 1],
    },
  },
})

const getOverlayStyle = (
  type: 'fill' | 'transparent' = 'fill',
): CSSUIObject => ({
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  zIndex: 9999,
  bg: type === 'fill' ? ['white', 'black'] : 'blackAlpha.600',
  w: '100vw',
  h: '100vh',
  p: 'md',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
})

const getMotionProps = (
  initialState: boolean | undefined,
  type: 'fade' | 'scaleFade' = 'fade',
) => ({
  initial: initialState ? false : 'initial',
  animate: 'animate',
  exit: 'exit',
  variants: getVariants(type),
})

const LoadingScreenComponent = memo(
  ({
    initialState,
    icon,
    text,
    message,
    duration,
    onFinish,
  }: LoadingComponentProps) => {
    const css: CSSUIObject = {
      maxW: 'md',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 'sm',
    }

    useTimeout(onFinish, duration)

    return (
      <ui.div
        as={motion.div}
        className='ui-loading-screen'
        {...getMotionProps(initialState)}
        __css={getOverlayStyle()}
      >
        <ui.div __css={css}>
          <Loading size='6xl' {...icon} />
          {message ? (
            isValidElement(message) ? (
              message
            ) : (
              <ui.p noOfLines={3} {...text}>
                {message}
              </ui.p>
            )
          ) : null}
        </ui.div>
      </ui.div>
    )
  },
)

LoadingScreenComponent.displayName = 'LoadingScreenComponent'

const LoadingPageComponent = memo(
  ({
    initialState,
    icon,
    text,
    message,
    duration,
    onFinish,
  }: LoadingComponentProps) => {
    const css: CSSUIObject = {
      bg: ['white', 'black'],
      maxW: 'md',
      p: 'md',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 'sm',
      rounded: 'md',
      boxShadow: ['lg', 'dark-lg'],
    }

    useTimeout(onFinish, duration)

    return (
      <ui.div
        as={motion.div}
        className='ui-loading-page'
        {...getMotionProps(initialState)}
        __css={getOverlayStyle('transparent')}
      >
        <ui.div
          as={motion.div}
          className='ui-loading-page-container'
          {...getMotionProps(initialState, 'scaleFade')}
          __css={css}
        >
          <Loading size='6xl' {...icon} />
          {message ? (
            isValidElement(message) ? (
              message
            ) : (
              <ui.p noOfLines={3} {...text}>
                {message}
              </ui.p>
            )
          ) : null}
        </ui.div>
      </ui.div>
    )
  },
)

LoadingPageComponent.displayName = 'LoadingPageComponent'

const LoadingBackgroundComponent = memo(
  ({
    initialState,
    icon,
    text,
    message,
    duration,
    onFinish,
  }: LoadingComponentProps) => {
    const css: CSSUIObject = {
      position: 'fixed',
      right: 'md',
      bottom: 'md',
      zIndex: 'beerus',
      bg: ['white', 'black'],
      maxW: 'sm',
      p: 'sm',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 'sm',
      rounded: 'md',
      boxShadow: ['3xl', 'dark-lg'],
    }

    useTimeout(onFinish, duration)

    return (
      <ui.div
        as={motion.div}
        className='ui-loading-page-container'
        {...getMotionProps(initialState, 'scaleFade')}
        __css={css}
      >
        <Loading size='xl' {...icon} />
        {message ? (
          isValidElement(message) ? (
            message
          ) : (
            <ui.p fontSize='sm' noOfLines={1} {...text}>
              {message}
            </ui.p>
          )
        ) : null}
      </ui.div>
    )
  },
)

LoadingBackgroundComponent.displayName = 'LoadingBackgroundComponent'

export const useLoading = (): LoadingContext => {
  const { screen, page, background, custom } = useContext(LoadingContext)

  return { screen, page, background, custom }
}
