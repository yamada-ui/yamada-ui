import { ui, ThemeConfig, LoadingComponentProps, CSSUIObject } from '@yamada-ui/core'
import { Loading } from '@yamada-ui/loading'
import { AnimatePresence, motion, MotionVariants } from '@yamada-ui/motion'
import { Portal } from '@yamada-ui/portal'
import { useTimeout } from '@yamada-ui/use-timeout'
import { isValidElement, assignRef, isUndefined } from '@yamada-ui/utils'
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
  useEffect,
  useRef,
  MutableRefObject,
} from 'react'
import { RemoveScroll } from 'react-remove-scroll'

type LoadingContextProps = {
  isLoading: () => boolean
  start: (props?: Partial<Pick<LoadingState, 'message' | 'timeout'>>) => void
  finish: () => void
  update: (props: Partial<LoadingState>) => void
}

type LoadingContext = {
  screen: LoadingContextProps
  page: LoadingContextProps
  background: LoadingContextProps
  custom: LoadingContextProps
}

type LoadingState = {
  isLoading: boolean
  message: ReactNode | undefined
  timeout: number | null
}

export type LoadingProviderProps = PropsWithChildren<ThemeConfig['loading']>

export const LoadingContext = createContext({} as LoadingContext)

export const LoadingProvider: FC<LoadingProviderProps> = ({
  screen,
  page,
  background,
  custom,
  children,
}) => {
  const screenLoadingFuncIsLoadingRef = useRef<LoadingContextProps['isLoading']>(() => false)
  const screenLoadingFuncStartRef = useRef<LoadingContextProps['start']>(() => {})
  const screenLoadingFuncFinishRef = useRef<LoadingContextProps['finish']>(() => {})
  const screenLoadingFuncUpdateRef = useRef<LoadingContextProps['update']>(() => {})

  const pageLoadingFuncIsLoadingRef = useRef<LoadingContextProps['isLoading']>(() => false)
  const pageLoadingFuncStartRef = useRef<LoadingContextProps['start']>(() => {})
  const pageLoadingFuncFinishRef = useRef<LoadingContextProps['finish']>(() => {})
  const pageLoadingFuncUpdateRef = useRef<LoadingContextProps['update']>(() => {})

  const backgroundLoadingFuncIsLoadingRef = useRef<LoadingContextProps['isLoading']>(() => false)
  const backgroundLoadingFuncStartRef = useRef<LoadingContextProps['start']>(() => {})
  const backgroundLoadingFuncFinishRef = useRef<LoadingContextProps['finish']>(() => {})
  const backgroundLoadingFuncUpdateRef = useRef<LoadingContextProps['update']>(() => {})

  const customLoadingFuncIsLoadingRef = useRef<LoadingContextProps['isLoading']>(() => false)
  const customLoadingFuncStartRef = useRef<LoadingContextProps['start']>(() => {})
  const customLoadingFuncFinishRef = useRef<LoadingContextProps['finish']>(() => {})
  const customLoadingFuncUpdateRef = useRef<LoadingContextProps['update']>(() => {})

  const screenLoadingFunc: LoadingContextProps = {
    isLoading: () => screenLoadingFuncIsLoadingRef.current(),
    start: (props) => screenLoadingFuncStartRef.current(props),
    finish: () => screenLoadingFuncFinishRef.current(),
    update: (props) => screenLoadingFuncUpdateRef.current(props),
  }

  const pageLoadingFunc: LoadingContextProps = {
    isLoading: () => pageLoadingFuncIsLoadingRef.current(),
    start: (props) => pageLoadingFuncStartRef.current(props),
    finish: () => pageLoadingFuncFinishRef.current(),
    update: (props) => pageLoadingFuncUpdateRef.current(props),
  }

  const backgroundLoadingFunc: LoadingContextProps = {
    isLoading: () => backgroundLoadingFuncIsLoadingRef.current(),
    start: (props) => backgroundLoadingFuncStartRef.current(props),
    finish: () => backgroundLoadingFuncFinishRef.current(),
    update: (props) => backgroundLoadingFuncUpdateRef.current(props),
  }

  const customLoadingFunc: LoadingContextProps = {
    isLoading: () => customLoadingFuncIsLoadingRef.current(),
    start: (props) => customLoadingFuncStartRef.current(props),
    finish: () => customLoadingFuncFinishRef.current(),
    update: (props) => customLoadingFuncUpdateRef.current(props),
  }

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
          screenLoadingFuncIsLoadingRef,
          screenLoadingFuncStartRef,
          screenLoadingFuncFinishRef,
          screenLoadingFuncUpdateRef,
          pageLoadingFuncIsLoadingRef,
          pageLoadingFuncStartRef,
          pageLoadingFuncFinishRef,
          pageLoadingFuncUpdateRef,
          backgroundLoadingFuncIsLoadingRef,
          backgroundLoadingFuncStartRef,
          backgroundLoadingFuncFinishRef,
          backgroundLoadingFuncUpdateRef,
          customLoadingFuncIsLoadingRef,
          customLoadingFuncStartRef,
          customLoadingFuncFinishRef,
          customLoadingFuncUpdateRef,
        }}
      />
    </LoadingContext.Provider>
  )
}

type LoadingControlProps = Required<ThemeConfig>['loading'] & {
  screenLoadingFuncIsLoadingRef: MutableRefObject<LoadingContextProps['isLoading']>
  screenLoadingFuncStartRef: MutableRefObject<LoadingContextProps['start']>
  screenLoadingFuncFinishRef: MutableRefObject<LoadingContextProps['finish']>
  screenLoadingFuncUpdateRef: MutableRefObject<LoadingContextProps['update']>
  pageLoadingFuncIsLoadingRef: MutableRefObject<LoadingContextProps['isLoading']>
  pageLoadingFuncStartRef: MutableRefObject<LoadingContextProps['start']>
  pageLoadingFuncFinishRef: MutableRefObject<LoadingContextProps['finish']>
  pageLoadingFuncUpdateRef: MutableRefObject<LoadingContextProps['update']>
  backgroundLoadingFuncIsLoadingRef: MutableRefObject<LoadingContextProps['isLoading']>
  backgroundLoadingFuncStartRef: MutableRefObject<LoadingContextProps['start']>
  backgroundLoadingFuncFinishRef: MutableRefObject<LoadingContextProps['finish']>
  backgroundLoadingFuncUpdateRef: MutableRefObject<LoadingContextProps['update']>
  customLoadingFuncIsLoadingRef: MutableRefObject<LoadingContextProps['isLoading']>
  customLoadingFuncStartRef: MutableRefObject<LoadingContextProps['start']>
  customLoadingFuncFinishRef: MutableRefObject<LoadingContextProps['finish']>
  customLoadingFuncUpdateRef: MutableRefObject<LoadingContextProps['update']>
}

const LoadingControl: FC<LoadingControlProps> = ({ screen, page, background, custom, ...refs }) => {
  const isScreenLoadingRef = useRef<boolean>(false)
  const [screenLoading, setScreenLoading] = useState<LoadingState>({
    isLoading: screen?.initialState ?? false,
    message: undefined,
    timeout: screen?.timeout ?? null,
  })
  const isPageLoadingRef = useRef<boolean>(false)
  const [pageLoading, setPageLoading] = useState<LoadingState>({
    isLoading: page?.initialState ?? false,
    message: undefined,
    timeout: page?.timeout ?? null,
  })
  const isBackgroundLoadingRef = useRef<boolean>(false)
  const [backgroundLoading, setBackgroundLoading] = useState<LoadingState>({
    isLoading: background?.initialState ?? false,
    message: undefined,
    timeout: background?.timeout ?? null,
  })
  const isCustomLoadingRef = useRef<boolean>(false)
  const [customLoading, setCustomLoading] = useState<LoadingState>({
    isLoading: custom?.initialState ?? false,
    message: undefined,
    timeout: custom?.timeout ?? null,
  })

  const screenLoadingFunc: LoadingContextProps = useMemo(
    () => ({
      isLoading: () => isScreenLoadingRef.current,
      start: ({ message, timeout = screenLoading.timeout ?? null } = {}) => {
        isScreenLoadingRef.current = true
        setScreenLoading({ isLoading: true, message, timeout })
      },
      update: (next) => {
        if (!isUndefined(next.isLoading)) isScreenLoadingRef.current = next.isLoading
        setScreenLoading((prev) => ({ ...prev, ...next }))
      },
      finish: () => {
        isScreenLoadingRef.current = false
        setScreenLoading({
          isLoading: false,
          message: undefined,
          timeout: screen?.timeout ?? null,
        })
      },
    }),
    [screenLoading, screen],
  )

  const pageLoadingFunc: LoadingContextProps = useMemo(
    () => ({
      isLoading: () => isPageLoadingRef.current,
      start: ({ message, timeout = pageLoading.timeout ?? null } = {}) => {
        isPageLoadingRef.current = true
        setPageLoading({ isLoading: true, message, timeout })
      },
      update: (next) => {
        if (!isUndefined(next.isLoading)) isPageLoadingRef.current = next.isLoading
        setPageLoading((prev) => ({ ...prev, ...next }))
      },
      finish: () => {
        isPageLoadingRef.current = false
        setPageLoading({
          isLoading: false,
          message: undefined,
          timeout: page?.timeout ?? null,
        })
      },
    }),
    [pageLoading, page],
  )

  const backgroundLoadingFunc: LoadingContextProps = useMemo(
    () => ({
      isLoading: () => isBackgroundLoadingRef.current,
      start: ({ message, timeout = backgroundLoading.timeout ?? null } = {}) => {
        isBackgroundLoadingRef.current = true
        setBackgroundLoading({ isLoading: true, message, timeout })
      },
      update: (next) => {
        if (!isUndefined(next.isLoading)) isBackgroundLoadingRef.current = next.isLoading
        setBackgroundLoading((prev) => ({ ...prev, ...next }))
      },
      finish: () => {
        isBackgroundLoadingRef.current = false
        setBackgroundLoading({
          isLoading: false,
          message: undefined,
          timeout: background?.timeout ?? null,
        })
      },
    }),
    [backgroundLoading, background],
  )

  const customLoadingFunc: LoadingContextProps = useMemo(
    () => ({
      isLoading: () => isCustomLoadingRef.current,
      start: ({ message, timeout = customLoading.timeout ?? null } = {}) => {
        isCustomLoadingRef.current = true
        setCustomLoading({ isLoading: true, message, timeout })
      },
      update: (next) => {
        if (!isUndefined(next.isLoading)) isCustomLoadingRef.current = next.isLoading
        setCustomLoading((prev) => ({ ...prev, ...next }))
      },
      finish: () => {
        isCustomLoadingRef.current = false
        setCustomLoading({
          isLoading: false,
          message: undefined,
          timeout: custom?.timeout ?? null,
        })
      },
    }),
    [customLoading, custom],
  )

  assignRef(refs.screenLoadingFuncIsLoadingRef, screenLoadingFunc.isLoading)
  assignRef(refs.screenLoadingFuncStartRef, screenLoadingFunc.start)
  assignRef(refs.screenLoadingFuncFinishRef, screenLoadingFunc.finish)
  assignRef(refs.screenLoadingFuncUpdateRef, screenLoadingFunc.update)

  assignRef(refs.pageLoadingFuncIsLoadingRef, pageLoadingFunc.isLoading)
  assignRef(refs.pageLoadingFuncStartRef, pageLoadingFunc.start)
  assignRef(refs.pageLoadingFuncFinishRef, pageLoadingFunc.finish)
  assignRef(refs.pageLoadingFuncUpdateRef, pageLoadingFunc.update)

  assignRef(refs.backgroundLoadingFuncIsLoadingRef, backgroundLoadingFunc.isLoading)
  assignRef(refs.backgroundLoadingFuncStartRef, backgroundLoadingFunc.start)
  assignRef(refs.backgroundLoadingFuncFinishRef, backgroundLoadingFunc.finish)
  assignRef(refs.backgroundLoadingFuncUpdateRef, backgroundLoadingFunc.update)

  assignRef(refs.customLoadingFuncIsLoadingRef, customLoadingFunc.isLoading)
  assignRef(refs.customLoadingFuncStartRef, customLoadingFunc.start)
  assignRef(refs.customLoadingFuncFinishRef, customLoadingFunc.finish)
  assignRef(refs.customLoadingFuncUpdateRef, customLoadingFunc.update)

  useEffect(() => {
    if (screen)
      setScreenLoading({
        isLoading: screen?.initialState ?? false,
        message: undefined,
        timeout: screen?.timeout ?? null,
      })

    if (page)
      setPageLoading({
        isLoading: page?.initialState ?? false,
        message: undefined,
        timeout: page?.timeout ?? null,
      })

    if (background)
      setBackgroundLoading({
        isLoading: background?.initialState ?? false,
        message: undefined,
        timeout: background?.timeout ?? null,
      })

    if (custom)
      setCustomLoading({
        isLoading: custom?.initialState ?? false,
        message: undefined,
        timeout: custom?.timeout ?? null,
      })
  }, [screen, page, background, custom])

  return (
    <>
      <AnimatePresence initial={false}>
        {screenLoading.isLoading ? (
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
                      timeout: screenLoading.timeout,
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
                      timeout: screenLoading.timeout,
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
        {pageLoading.isLoading ? (
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
                      timeout: pageLoading.timeout,
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
                      timeout: pageLoading.timeout,
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
        {backgroundLoading.isLoading ? (
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
                      timeout: backgroundLoading.timeout,
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
                      timeout: backgroundLoading.timeout,
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
        {customLoading.isLoading ? (
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
                  timeout: customLoading.timeout,
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

const getOverlayStyle = (type: 'fill' | 'transparent' = 'fill'): CSSUIObject => ({
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
  ({ initialState, icon, text, message, timeout, onFinish }: LoadingComponentProps) => {
    const css: CSSUIObject = {
      maxW: 'md',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 'sm',
    }

    useTimeout(onFinish, timeout)

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
  ({ initialState, icon, text, message, timeout, onFinish }: LoadingComponentProps) => {
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

    useTimeout(onFinish, timeout)

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
  ({ initialState, icon, text, message, timeout, onFinish }: LoadingComponentProps) => {
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

    useTimeout(onFinish, timeout)

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
