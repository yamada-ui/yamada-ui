import type { MetaFunction } from "@remix-run/node"
import { Layout } from "~/components/layouts"

export const meta: MetaFunction = () => {
  return [
    { title: "Remix App - Yamada UI" },
    { name: "description", content: "Remix App - Yamada UI" },
  ]
}

const Index = () => {
  return <Layout />
}

export default Index
