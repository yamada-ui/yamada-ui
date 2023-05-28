import fs from 'fs'
import { Octokit, RestEndpointMethodTypes } from '@octokit/rest'

type PullRequests = RestEndpointMethodTypes['pulls']['list']['response']['data']
type PullRequest = PullRequests[number]

export type PrData = {
  id: number
  url: string
  body: string
  date: string
  version: string | undefined
}

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

const dateFormatOptions: Intl.DateTimeFormatOptions = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}

const getPrData = ({
  body: content = '',
  merged_at,
  updated_at,
  number: id,
  html_url: url,
}: Omit<PullRequest, 'body'> & { body: string | undefined }): PrData => {
  const parts = content.split('# Releases')
  content = parts[1] || content

  const date = new Date(merged_at ?? updated_at).toLocaleDateString('ja-JP', dateFormatOptions)

  const match = content.match(/## @yamada-ui\/react\@(?<version>\d.+)/)
  const version = match?.groups?.version

  const sanitized = content
    .replace(/<(https?:\/\/.+)>/g, (_, group) => {
      return `[${group}](${group})`
    })
    .replace(/-\s+(Updated dependencies(?:\n.+)*]):(?:\n.+)*/gm, (_, group) => {
      return `- ${group}`
    })
    .replace(/-\s+(Updated dependencies) \\\[\]:(?:\n.+)*/gm, (_, group) => {
      return `- ${group}`
    })

  const body = [
    '---',
    `title: Version ${version}`,
    `description: Explore the changelog for Yamada UI version ${version}. Learn about the latest features, bug fixes, and improvements.`,
    `releaseUrl: ${url}`,
    `releaseDate: ${date}`,
    `version: ${version}`,
    '---',
    '\n',
    `${sanitized}`,
  ].join('\n')

  return { id, url, body, date, version }
}

const getPrByNumber = async (pull_number: number): Promise<PullRequest> => {
  const { data } = await octokit.pulls.get({
    owner: 'yamada-ui',
    repo: 'yamada-ui',
    pull_number,
  })

  return data as PullRequest
}

const getLatestPr = async (): Promise<PullRequest> => {
  const { data } = await octokit.pulls.list({
    state: 'closed',
    owner: 'yamada-ui',
    repo: 'yamada-ui',
    base: 'main',
    head: 'yamada-ui:changeset-release/main',
    per_page: 1,
  })

  return data[0] as PullRequest
}

const getMergedPrs = async (): Promise<PullRequests> => {
  const { data } = await octokit.pulls.list({
    state: 'all',
    owner: 'yamada-ui',
    repo: 'yamada-ui',
    base: 'main',
    head: 'yamada-ui:changeset-release/main',
    per_page: 100,
  })

  return (data as PullRequests[]).filter(({ merged_at }) => merged_at)
}

const writePrFile = async ({ version, body }: PrData): Promise<void> => {
  if (!fs.existsSync('.changelog')) fs.mkdirSync('.changelog')

  return fs.promises.writeFile(`.changelog/v${version}.mdx`, body)
}

export const manifest = {
  path: '.changelog/manifest.json',
  async write(data: PrData[]) {
    data = data.sort((a, b) => b.id - a.id)

    return fs.promises.writeFile(this.path, JSON.stringify(data, null, 2))
  },
  async read(): Promise<PrData[]> {
    try {
      return JSON.parse(await fs.promises.readFile(this.path, 'utf8'))
    } catch (error) {
      return []
    }
  },
  async update(data: PrData) {
    const prevData = await this.read()

    return this.write([data, ...prevData])
  },
}

const writeReadme = async (): Promise<void> => {
  const data = await manifest.read()
  const sortedData = data.map(
    ({ date, version }) => `### ${date}: [v${version}](/.changelog/v${version}.mdx)`,
  )
  const [latestRelease, ...otherReleases] = sortedData

  const readme = [
    '# Changelog',
    '\n',
    '## Latest Release',
    latestRelease,
    '\n',
    '## Previous Releases',
    ...otherReleases,
  ].join('\n')

  await fs.promises.writeFile('CHANGELOG.md', readme)
}

const sync = async (): Promise<void> => {
  const prs = await getMergedPrs()
  const data = prs.map(getPrData) as PrData[]

  await Promise.allSettled([...data.map(writePrFile), manifest.write(data)])

  await writeReadme()
}

const updateFiles = async (data: PrData): Promise<void> => {
  await writePrFile(data)
  await manifest.update(data)
  await writeReadme()
}

const syncByNumber = async (prNumber: number): Promise<void> => {
  const data = getPrData(await getPrByNumber(prNumber))

  await updateFiles(data)
}

const syncLatest = async (): Promise<void> => {
  const pr = await getLatestPr()
  const data = getPrData(pr)

  await updateFiles(data)
}

const arg = process.argv[2] ?? ''

const main = async () => {
  if (arg.includes('--latest')) {
    await syncLatest()
  } else if (arg.includes('--number')) {
    const prNumber = +arg.replace('--number=', '')

    await syncByNumber(prNumber)
  } else {
    await sync()
  }
}

main()
