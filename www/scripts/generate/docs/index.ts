import { Command } from "commander"
import { sort } from "./sort"

export default function main() {
  const program = new Command("Yamada UI CLI")

  program
    .command("sort <path>")
    .option("-d, --desc", "Sort in descending order")
    .action(sort)

  program.parse()
}

main()
