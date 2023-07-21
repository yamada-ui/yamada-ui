import {
  ui,
  ThemeConfig,
  LoadingComponentProps,
  CSSUIObject,
  LoadingConfigOptions,
  HTMLUIProps,
} from '@yamada-ui/core'
import { Loading } from '@yamada-ui/loading/src/loading'
import {
  AnimatePresence,
  Motion,
  motion,
  MotionVariants,
} from '@yamada-ui/motion'
import { Portal } from '@yamada-ui/portal'
import { useTimeout } from '@yamada-ui/use-timeout'
import {
  isValidElement,
  assignRef,
  useUpdateEffect,
  isNumber,
} from '@yamada-ui/utils'
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
  /**
   * Function to forcefully update the loading state.
   *
   * Please be careful, as it will forcefully overwrite the state of the loading component.
   */
  force: (state: Partial<LoadingState>) => void
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

type Refs = {
  isLoading: RefObject<LoadingContextProps['isLoading']>
  start: RefObject<LoadingContextProps['start']>
  finish: RefObject<LoadingContextProps['finish']>
  update: RefObject<LoadingContextProps['update']>
  force: RefObject<LoadingContextProps['force']>
}

type FuncRefs = MutableRefObject<Refs>

const createLoadingRefs = (): Refs => ({
  isLoading: createRef<LoadingContextProps['isLoading']>(),
  start: createRef<LoadingContextProps['start']>(),
  finish: createRef<LoadingContextProps['finish']>(),
  update: createRef<LoadingContextProps['update']>(),
  force: createRef<LoadingContextProps['force']>(),
})

const createLoadingFunc = (refs: FuncRefs): LoadingContextProps => ({
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
        funcRefs={screenRefs}
        {...screen}
        component={
          screen?.component ?? ((props) => <ScreenComponent {...props} />)
        }
      />

      <Controller
        funcRefs={pageRefs}
        {...page}
        component={page?.component ?? ((props) => <PageComponent {...props} />)}
      />

      <Controller
        funcRefs={backgroundRefs}
        {...background}
        blockScrollOnMount={background?.blockScrollOnMount ?? false}
        component={
          background?.component ??
          ((props) => <BackgroundComponent {...props} />)
        }
      />

      <Controller
        funcRefs={customRefs}
        blockScrollOnMount={background?.blockScrollOnMount ?? false}
        {...custom}
        component={custom?.component}
      />
    </LoadingContext.Provider>
  )
}

type ControllerProps = {
  funcRefs: FuncRefs
  render?: (props: LoadingComponentProps) => JSX.Element
} & LoadingConfigOptions

const Controller: FC<ControllerProps> = ({
  funcRefs,
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

  assignRef(funcRefs.current.isLoading, isLoading)
  assignRef(funcRefs.current.start, start)
  assignRef(funcRefs.current.finish, finish)
  assignRef(funcRefs.current.update, update)
  assignRef(funcRefs.current.force, force)

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

type RenderProps = {
  component?: (props: LoadingComponentProps) => ReactNode
} & LoadingComponentProps

const Render: FC<RenderProps> = ({ component, ...props }) => {
  if (typeof component === 'function') {
    return component(props) as JSX.Element
  } else {
    return <></>
  }
}

type MessageProps = { message: ReactNode } & HTMLUIProps<'p'>

const Message: FC<MessageProps> = ({ message, ...rest }) => {
  return message ? (
    isValidElement(message) ? (
      message
    ) : (
      <ui.p {...rest}>{message}</ui.p>
    )
  ) : null
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

const ScreenComponent = memo(
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
      <Motion
        className='ui-loading-screen'
        {...getMotionProps(initialState)}
        __css={getOverlayStyle()}
      >
        <ui.div __css={css}>
          <Loading size='6xl' {...icon} />
          <Message message={message} noOfLines={3} {...text} />
        </ui.div>
      </Motion>
    )
  },
)

ScreenComponent.displayName = 'ScreenComponent'

const PageComponent = memo(
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
      <Motion
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
          <Message message={message} noOfLines={3} {...text} />
        </ui.div>
      </Motion>
    )
  },
)

PageComponent.displayName = 'PageComponent'

const BackgroundComponent = memo(
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
      <Motion
        className='ui-loading-page-container'
        {...getMotionProps(initialState, 'scaleFade')}
        __css={css}
      >
        <Loading size='xl' {...icon} />
        <Message message={message} fontSize='sm' noOfLines={1} {...text} />
      </Motion>
    )
  },
)

BackgroundComponent.displayName = 'BackgroundComponent'

export const useLoading = (): LoadingContext => {
  const { screen, page, background, custom } = useContext(LoadingContext)

  return { screen, page, background, custom }
}
