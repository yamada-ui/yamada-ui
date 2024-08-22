import type { FC } from "react"
import { createRoot } from "react-dom/client"

const App: FC = () => {
  return <>Hono</>
}

const domNode = document.getElementById("root")!
const root = createRoot(domNode)
root.render(<App />)
