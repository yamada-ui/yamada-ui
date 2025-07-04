import type { PropsWithChildren } from "react"

interface LayoutProps extends PropsWithChildren {}

export default function Layout({ children }: LayoutProps) {
  return children
}
