import { execa } from "execa"

const browsers = ["chromium"]

if (!process.env.CI) {
  execa`pnpm playwright install --with-deps ${browsers.join(" ")}`
    .then(() => {
      console.log("Playwright installed")
    })
    .catch((error) => {
      console.error("Failed to install Playwright", error)
    })
}
