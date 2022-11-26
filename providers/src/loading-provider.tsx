import { Loading } from '@yamada-ui/feedback'
import { ui, ThemeConfig, LoadingComponentProps, CSSUIObject, useTimeout } from '@yamada-ui/system'
import { Portal, runIfFunc, isUndefined } from '@yamada-ui/utils'
import { AnimatePresence, motion, Variants } from 'framer-motion'
import {
  createContext,
  FC,
  isValidElement,
  memo,
  PropsWithChildren,
  ReactNode,
  useContext,
  useMemo,
  useState,
} from 'react'

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
  const [screenLoading, setScreenLoading] = useState<LoadingState>({
    isLoading: screen?.initialState ?? false,
    message: undefined,
    timeout: screen?.timeout ?? null,
  })
  const [pageLoading, setPageLoading] = useState<LoadingState>({
    isLoading: page?.initialState ?? false,
    message: undefined,
    timeout: page?.timeout ?? null,
  })
  const [backgroundLoading, setBackgroundLoading] = useState<LoadingState>({
    isLoading: background?.initialState ?? false,
    message: undefined,
    timeout: background?.timeout ?? null,
  })
  const [customLoading, setCustomLoading] = useState<LoadingState>({
    isLoading: custom?.initialState ?? false,
    message: undefined,
    timeout: custom?.timeout ?? null,
  })

  const screenLoadingFunc: LoadingContextProps = useMemo(
    () => ({
      isLoading: () => screenLoading.isLoading,
      start: ({ message, timeout = null } = {}) =>
        setScreenLoading({ isLoading: true, message, timeout }),
      update: (next) => setScreenLoading((prev) => ({ ...prev, ...next })),
      finish: () =>
        setScreenLoading({
          isLoading: false,
          message: undefined,
          timeout: screen?.timeout ?? null,
        }),
    }),
    [screenLoading.isLoading, screen?.timeout],
  )

  const pageLoadingFunc: LoadingContextProps = useMemo(
    () => ({
      isLoading: () => pageLoading.isLoading,
      start: ({ message, timeout = null } = {}) =>
        setPageLoading({ isLoading: true, message, timeout }),
      update: (next) => setPageLoading((prev) => ({ ...prev, ...next })),
      finish: () =>
        setPageLoading({
          isLoading: false,
          message: undefined,
          timeout: page?.timeout ?? null,
        }),
    }),
    [pageLoading.isLoading, page?.timeout],
  )

  const backgroundLoadingFunc: LoadingContextProps = useMemo(
    () => ({
      isLoading: () => backgroundLoading.isLoading,
      start: ({ message, timeout = null } = {}) =>
        setBackgroundLoading({ isLoading: true, message, timeout }),
      update: (next) => setBackgroundLoading((prev) => ({ ...prev, ...next })),
      finish: () =>
        setBackgroundLoading({
          isLoading: false,
          message: undefined,
          timeout: background?.timeout ?? null,
        }),
    }),
    [backgroundLoading.isLoading, background?.timeout],
  )

  const customLoadingFunc: LoadingContextProps = useMemo(
    () => ({
      isLoading: () => customLoading.isLoading,
      start: ({ message, timeout = null } = {}) =>
        setCustomLoading({ isLoading: true, message, timeout }),
      update: (next) => setCustomLoading((prev) => ({ ...prev, ...next })),
      finish: () =>
        setCustomLoading({
          isLoading: false,
          message: undefined,
          timeout: custom?.timeout ?? null,
        }),
    }),
    [customLoading.isLoading, custom?.timeout],
  )

  const value = useMemo(
    () => ({
      screen: screenLoadingFunc,
      page: pageLoadingFunc,
      background: backgroundLoadingFunc,
      custom: customLoadingFunc,
    }),
    [screenLoadingFunc, pageLoadingFunc, backgroundLoadingFunc, customLoadingFunc],
  )

  return (
    <LoadingContext.Provider value={value}>
      {children}

      <AnimatePresence initial={false}>
        {screenLoading.isLoading ? (
          <Portal
            appendToParentPortal={screen?.appendToParentPortal}
            containerRef={screen?.containerRef}
          >
            {!isUndefined(screen?.component) ? (
              runIfFunc(screen?.component, {
                icon: screen?.icon,
                text: screen?.text,
                message: screenLoading.message,
                timeout: screenLoading.timeout,
                onFinish: screenLoadingFunc.finish,
              })
            ) : (
              <LoadingScreenComponent
                {...{
                  icon: screen?.icon,
                  text: screen?.text,
                  message: screenLoading.message,
                  timeout: screenLoading.timeout,
                  onFinish: screenLoadingFunc.finish,
                }}
              />
            )}
          </Portal>
        ) : null}
      </AnimatePresence>

      <AnimatePresence initial={false}>
        {pageLoading.isLoading ? (
          <Portal
            appendToParentPortal={page?.appendToParentPortal}
            containerRef={page?.containerRef}
          >
            {!isUndefined(page?.component) ? (
              runIfFunc(page?.component, {
                icon: page?.icon,
                text: page?.text,
                message: pageLoading.message,
                timeout: pageLoading.timeout,
                onFinish: pageLoadingFunc.finish,
              })
            ) : (
              <LoadingPageComponent
                {...{
                  icon: page?.icon,
                  text: page?.text,
                  message: pageLoading.message,
                  timeout: pageLoading.timeout,
                  onFinish: pageLoadingFunc.finish,
                }}
              />
            )}
          </Portal>
        ) : null}
      </AnimatePresence>

      <AnimatePresence initial={false}>
        {backgroundLoading.isLoading ? (
          <Portal
            appendToParentPortal={background?.appendToParentPortal}
            containerRef={background?.containerRef}
          >
            {!isUndefined(background?.component) ? (
              runIfFunc(background?.component, {
                icon: background?.icon,
                text: background?.text,
                message: backgroundLoading.message,
                timeout: backgroundLoading.timeout,
                onFinish: backgroundLoadingFunc.finish,
              })
            ) : (
              <LoadingBackgroundComponent
                {...{
                  icon: background?.icon,
                  text: background?.text,
                  message: backgroundLoading.message,
                  timeout: backgroundLoading.timeout,
                  onFinish: backgroundLoadingFunc.finish,
                }}
              />
            )}
          </Portal>
        ) : null}
      </AnimatePresence>

      <AnimatePresence initial={false}>
        {customLoading.isLoading ? (
          <Portal
            appendToParentPortal={custom?.appendToParentPortal}
            containerRef={custom?.containerRef}
          >
            {!isUndefined(custom?.component)
              ? runIfFunc(custom?.component, {
                  icon: custom?.icon,
                  text: custom?.text,
                  message: customLoading.message,
                  timeout: customLoading.timeout,
                  onFinish: customLoadingFunc.finish,
                })
              : null}
          </Portal>
        ) : null}
      </AnimatePresence>
    </LoadingContext.Provider>
  )
}

const fadeVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 1, 1],
    },
  },
}

const scaleFadeVariants: Variants = {
  initial: {
    opacity: 0,
    scale: 0.95,
  },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 0.2, 1],
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.4,
      ease: [0.4, 0, 1, 1],
    },
  },
}

const LoadingScreenComponent = memo(
  ({ icon, text, message, timeout, onFinish }: LoadingComponentProps) => {
    const css: CSSUIObject = {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 9999,
      bg: ['white', 'black'],
      w: '100vw',
      h: '100vh',
      p: 'md',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }

    useTimeout(onFinish, timeout)

    return (
      <ui.div
        as={motion.div}
        className='ui-loading-screen'
        variants={fadeVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        __css={css}
      >
        <ui.div
          maxW='md'
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          gap='sm'
        >
          <Loading size='6xs' {...icon} />
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
  ({ icon, text, message, timeout, onFinish }: LoadingComponentProps) => {
    const css: CSSUIObject = {
      position: 'fixed',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      zIndex: 9999,
      bg: 'blackAlpha.600',
      w: '100vw',
      h: '100vh',
      p: 'md',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }

    useTimeout(onFinish, timeout)

    return (
      <ui.div
        as={motion.div}
        className='ui-loading-page'
        variants={fadeVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        __css={css}
      >
        <ui.div
          as={motion.div}
          className='ui-loading-page-container'
          variants={scaleFadeVariants}
          initial='initial'
          animate='animate'
          exit='exit'
          bg={['white', 'black']}
          maxW='md'
          p='md'
          display='flex'
          flexDirection='column'
          justifyContent='center'
          alignItems='center'
          gap='sm'
          rounded='md'
          boxShadow={['lg', 'dark-lg']}
        >
          <Loading size='6xs' {...icon} />
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
  ({ icon, text, message, timeout, onFinish }: LoadingComponentProps) => {
    useTimeout(onFinish, timeout)

    return (
      <ui.div
        as={motion.div}
        className='ui-loading-page-container'
        variants={scaleFadeVariants}
        initial='initial'
        animate='animate'
        exit='exit'
        position='fixed'
        right='md'
        bottom='md'
        zIndex='beerus'
        bg={['white', 'black']}
        maxW='sm'
        p='sm'
        display='flex'
        justifyContent='center'
        alignItems='center'
        gap='sm'
        rounded='md'
        boxShadow={['3xl', 'dark-lg']}
      >
        <Loading size='1.2rem' {...icon} />
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
