export const SLUGS = [
  "mail",
  "dashboard",
  "cards",
  "tasks",
  "playground",
  "forms",
  "music",
  "authentication",
] as const

export const AUTHORS: {
  [_key in Slug]: { href: string; name: string; src: string }[]
} = {
  authentication: [
    {
      href: "https://github.com/hirotomoyamada",
      name: "hirotomoyamada",
      src: "https://avatars.githubusercontent.com/u/84060430?v=4",
    },
  ],
  cards: [
    {
      href: "https://github.com/taroj1205",
      name: "taroj1205",
      src: "https://avatars.githubusercontent.com/u/61367823?v=4",
    },
    {
      href: "https://github.com/hirotomoyamada",
      name: "hirotomoyamada",
      src: "https://avatars.githubusercontent.com/u/84060430?v=4",
    },
  ],
  dashboard: [
    {
      href: "https://github.com/tasukuwato",
      name: "tasukuwato",
      src: "https://avatars.githubusercontent.com/u/116733827?v=4",
    },
    {
      href: "https://github.com/hirotomoyamada",
      name: "hirotomoyamada",
      src: "https://avatars.githubusercontent.com/u/84060430?v=4",
    },
  ],
  forms: [
    {
      href: "https://github.com/kaitobq",
      name: "kaitobq",
      src: "https://avatars.githubusercontent.com/u/157810570?v=4",
    },
    {
      href: "https://github.com/hirotomoyamada",
      name: "hirotomoyamada",
      src: "https://avatars.githubusercontent.com/u/84060430?v=4",
    },
  ],
  mail: [
    {
      href: "https://github.com/umaidashi",
      name: "umaidashi",
      src: "https://avatars.githubusercontent.com/u/99778758?v=4",
    },
    {
      href: "https://github.com/hirotomoyamada",
      name: "hirotomoyamada",
      src: "https://avatars.githubusercontent.com/u/84060430?v=4",
    },
  ],
  music: [
    {
      href: "https://github.com/Hayato1031",
      name: "Hayato1031",
      src: "https://avatars.githubusercontent.com/u/105223982?v=4",
    },
    {
      href: "https://github.com/hirotomoyamada",
      name: "hirotomoyamada",
      src: "https://avatars.githubusercontent.com/u/84060430?v=4",
    },
  ],
  playground: [
    {
      href: "https://github.com/hirotomoyamada",
      name: "hirotomoyamada",
      src: "https://avatars.githubusercontent.com/u/84060430?v=4",
    },
  ],
  tasks: [
    {
      href: "https://github.com/mst-mkt",
      name: "mst-mkt",
      src: "https://avatars.githubusercontent.com/u/131662659?v=4",
    },
    {
      href: "https://github.com/hirotomoyamada",
      name: "hirotomoyamada",
      src: "https://avatars.githubusercontent.com/u/84060430?v=4",
    },
  ],
}

export type Slug = (typeof SLUGS)[number]
