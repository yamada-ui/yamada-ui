// import { Octokit } from "@octokit/rest"
// import { config } from "dotenv"
// import { recursiveOctokit, wait } from "./utils"

// config()

// const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

// const SERVICE_NAME = "github"
// const ORGANIZATION_NAME = "yamada-ui"
// const REPO_NAME = "yamada-ui"
// const API_ENDPOINT = `https://codecov.io/api/v2/${SERVICE_NAME}/${ORGANIZATION_NAME}`
// const REPORT_ENDPOINT = `https://app.codecov.io/gh/yamada-ui/yamada-ui/blob/main`
// const REQUEST_OPTIONS: RequestInit = {
//   headers: {
//     accept: "application/json",
//     Authorization: `bearer ${process.env.CODECOV_API_TOKEN}`,
//     method: "GET",
//   },
// }

// const TARGET_COVERAGE = 95

// const GITHUB_OPTIONS = { owner: "yamada-ui", repo: "yamada-ui" }

// const ISSUE_BODY = (packageName: string, files: { [key: string]: number[] }) =>
//   [
//     `package: ${packageName}`,
//     "",
//     "### Description",
//     `\`${packageName}\` has a test coverage of less than ${TARGET_COVERAGE}%. We will enhance it to above ${TARGET_COVERAGE}%.`,
//     "",
//     "### Target files",
//     ...Object.entries(files).flatMap(([path, lines]) => [
//       `- [${path}](${REPORT_ENDPOINT}/${path})`,
//       ...lines.map(
//         (line) => `  - [L${line}](${REPORT_ENDPOINT}/${path}#L${line})`,
//       ),
//     ]),
//     "",
//     "### Problem Statement/Justification",
//     "Testing is essential to ensure quality when operating a package.",
//     "",
//     "### Additional Information",
//     "While it's ideal to cover all tests, if there are too many lines to work on, please create a PR within your capacity.",
//     "Any deficiencies not covered by the PR will be automatically created as issues.",
//   ].join("\n")

// type Issue = Awaited<
//   ReturnType<typeof octokit.issues.listForRepo>
// >["data"][number]

// interface CoverageReportTotals {
//   branches: number
//   complexity: number
//   complexity_ratio: number
//   complexity_total: number
//   coverage: number
//   diff: any
//   files: number
//   hits: number
//   lines: number
//   messages: number
//   methods: number
//   misses: number
//   partials: number
//   sessions: number
// }

// interface CoverageReportFile {
//   name: string
//   line_coverage: [number, number][]
//   totals: CoverageReportTotals
// }

// interface CoverageReport {
//   commit_file_url: string
//   files: CoverageReportFile[]
//   totals: CoverageReportTotals
// }

// const codecov = async <T>(path: string, options?: RequestInit) => {
//   const res = await fetch(`${API_ENDPOINT}/${path}`, {
//     ...REQUEST_OPTIONS,
//     ...options,
//   })
//   const data = await res.json()

//   return data as T
// }

// const getIssues = async () => {
//   let issues: Issue[] = []
//   let page = 1
//   let count = 0
//   const perPage = 100

//   const listForRepo = async () => {
//     const { data } = await octokit.issues.listForRepo({
//       ...GITHUB_OPTIONS,
//       labels: "coverage",
//       page,
//       per_page: perPage,
//       state: "open",
//     })

//     issues.push(...data)

//     count = data.length

//     if (count === perPage) {
//       page++

//       await recursiveOctokit(listForRepo)
//     }
//   }

//   await recursiveOctokit(listForRepo)

//   issues = issues.filter(({ pull_request }) => !pull_request)

//   return issues
// }

// const getExistPackages = (issues: Issue[]) =>
//   issues.reduce<{ [key: string]: Issue }>((prev, issue) => {
//     const packageName = issue.body?.match(/^package: ([^\s]+)/m)?.[1]

//     if (packageName) prev[packageName] = issue

//     return prev
//   }, {})

// const getCoverageReport = async () => {
//   const data = await codecov<CoverageReport>(`repos/${REPO_NAME}/report`)

//   return data
// }

// const getTargetFiles = (files: CoverageReportFile[]) => {
//   const targetFiles: { [key: string]: number[] } = {}

//   files.forEach(({ name, line_coverage, totals }) => {
//     const { coverage, lines, misses, partials } = totals

//     if (coverage >= TARGET_COVERAGE) return

//     if (lines === misses + partials) {
//       targetFiles[name] = []
//     } else {
//       const targetLines: number[] = []

//       line_coverage.forEach(([line, flg], index) => {
//         const [, prevFlg] = line_coverage[index - 1] ?? []

//         if (flg === 1 && prevFlg !== 1) targetLines.push(line)
//       })

//       targetFiles[name] = targetLines
//     }
//   })

//   return targetFiles
// }

// const getTargetPackages = (files: { [key: string]: number[] }) => {
//   return Object.entries(files).reduce<{
//     [key: string]: { [key: string]: number[] }
//   }>((prev, [path, lines]) => {
//     const resolvedPath = path.replace(/^packages\//, "")
//     const isGroup = /^(components|hooks)\//.test(resolvedPath)

//     let packageName = resolvedPath.split("/")[isGroup ? 1 : 0]

//     packageName = `@yamada-ui/${packageName}`

//     prev[packageName] = { ...prev[packageName], [path]: lines }

//     return prev
//   }, {})
// }

// const createIssues = async (
//   existPackages: { [key: string]: Issue },
//   packages: { [key: string]: { [key: string]: number[] } },
// ) => {
//   for (const [packageName, files] of Object.entries(packages)) {
//     const isExist = Object.keys(existPackages).includes(packageName)
//     const body = ISSUE_BODY(packageName, files)

//     await recursiveOctokit(async () => {
//       if (isExist) {
//         const { body: prevBody, number } = existPackages[packageName] ?? {}

//         if (prevBody === body || !number) {
//           console.log("Skipped issue", number, packageName)

//           return
//         }

//         await octokit.issues.update({
//           ...GITHUB_OPTIONS,
//           body,
//           issue_number: number,
//         })

//         console.log("Updated issue", number, packageName)
//       } else {
//         await octokit.issues.create({
//           ...GITHUB_OPTIONS,
//           body,
//           labels: ["coverage", "test", "good first issue"],
//           title: `Enhance Test Coverage for \`${packageName}\``,
//         })

//         console.log("Created issue", packageName)
//       }
//     })

//     await wait(3000)
//   }
// }

// const main = async () => {
//   try {
//     const issues = await getIssues()

//     const existPackages = getExistPackages(issues)

//     const { files } = await getCoverageReport()

//     const targetFiles = getTargetFiles(files)

//     const targetPackages = getTargetPackages(targetFiles)

//     await createIssues(existPackages, targetPackages)
//   } catch (e) {
//     if (e instanceof Error) console.log(e.message)
//   }
// }

// main()
