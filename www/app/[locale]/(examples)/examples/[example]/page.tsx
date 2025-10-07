import { notFound } from "next/navigation"
import { isSlug } from "../../utils"
import { Authentication } from "./authentication"
import { Dashboard } from "./dashboard"
import { Examples } from "./examples"
import { Forms } from "./forms"
import { Mail } from "./mail"
import { Music } from "./music"
import { Playground } from "./playground"
import { Tasks } from "./tasks"

export default async function Page({
  params,
}: PageProps<"/[locale]/examples/[example]">) {
  const { example } = await params

  if (!isSlug(example)) notFound()
  switch (example) {
    case "examples":
      return <Examples />
    case "mail":
      return <Mail />
    case "dashboard":
      return <Dashboard />
    case "tasks":
      return <Tasks />
    case "playground":
      return <Playground />
    case "forms":
      return <Forms />
    case "music":
      return <Music />
    case "authentication":
      return <Authentication />
    default:
      return example satisfies never
  }
}
