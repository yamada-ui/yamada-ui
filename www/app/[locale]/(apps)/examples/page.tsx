import { Examples } from "@/components"
import { generateSharedMetadata } from "@/utils/next"
import { SourceCodeLink } from "./source-code-link"

export const generateMetadata = generateSharedMetadata("examples")

export default function Page() {
  return (
    <>
      <Examples />

      <SourceCodeLink />
    </>
  )
}
