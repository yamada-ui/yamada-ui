import * as React from 'react'
import { useSafeLayoutEffect, useUnmountEffect, getValidChildren, isArray } from './'

const assignRefChildren = (
  children: React.ReactElement<any>[],
  cache: React.MutableRefObject<Map<string, React.RefObject<HTMLDivElement>>>,
  prevKey?: string,
): React.ReactElement<any>[] =>
  children.map((child) => {
    const key = prevKey
      ? `${prevKey}.${String(child.key).replace(/\./g, '')}`
      : `${String(child.key).replace(/\./g, '')}`

    let children = child.props.children

    const varidChildren = getValidChildren(children)

    if (varidChildren.length) children = assignRefChildren(varidChildren, cache, key)

    if (isArray(children) && children.length === 1) children = children[0]

    if (!cache.current.has(key)) {
      const ref = React.createRef<HTMLDivElement>()

      child = React.cloneElement(child, { ref, children })

      cache.current.set(key, ref)
    }

    return child
  })

const isLevel = (key: string | undefined) => ((key ?? '').match(/\./g) || []).length

const findHost = (cache: Map<string, React.RefObject<HTMLDivElement>>): HTMLDivElement[] => {
  const keys = Array.from(cache.keys()).sort((a, b) => isLevel(a) - isLevel(b))

  const key = keys.find((key) => cache.get(key)?.current != null)
  const sameLevelKeys = keys
    .map((sameLevelKey) =>
      isLevel(key) === isLevel(sameLevelKey) && key !== sameLevelKey ? sameLevelKey : undefined,
    )
    .filter(Boolean) as string[]

  const host = cache.get(key ?? '')?.current
  const sameLevelHost = sameLevelKeys
    .map((key) => cache.get(key)?.current)
    .filter(Boolean) as HTMLDivElement[]

  return host ? [host, ...sameLevelHost] : []
}

const observerAnimations = (el: HTMLDivElement): Promise<Animation>[] =>
  el.getAnimations({ subtree: true }).map((animation) => animation.finished)

export type AnimationPresenceProps = {
  onExitComplete?: () => void
}

export const AnimationPresence: React.FC<React.PropsWithChildren<AnimationPresenceProps>> = ({
  children,
  onExitComplete,
}) => {
  const [, forceUpdate] = React.useState({})
  const cache = React.useRef(new Map<string, React.RefObject<HTMLDivElement>>())

  const varidChildren = getValidChildren(children)
  const beforeChildren = React.useRef<React.ReactElement[]>([])

  let cloneChildren = assignRefChildren(varidChildren, cache)

  cloneChildren = cloneChildren.length ? cloneChildren : beforeChildren.current

  useSafeLayoutEffect(() => {
    if (cloneChildren.length) beforeChildren.current = cloneChildren

    const els = findHost(cache.current)

    const animations = els.map(observerAnimations).flat()

    if (animations.length)
      Promise.all(animations).then(() => {
        beforeChildren.current = []
        cache.current.clear()
        onExitComplete?.()
        forceUpdate({})
      })
  })

  useUnmountEffect(() => {
    beforeChildren.current = []
    cache.current.clear()
  })

  return <>{cloneChildren}</>
}
