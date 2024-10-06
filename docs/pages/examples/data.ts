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
  [_key in Slug]: { name: string; href: string; src: string }[]
} = {
  authentication: [
    {
      name: "hirotomoyamada",
      href: "https://github.com/hirotomoyamada",
      src: "https://avatars.githubusercontent.com/u/84060430?v=4",
    },
  ],
  cards: [
    {
      name: "taroj1205",
      href: "https://github.com/taroj1205",
      src: "https://avatars.githubusercontent.com/u/61367823?v=4",
    },
    {
      name: "hirotomoyamada",
      href: "https://github.com/hirotomoyamada",
      src: "https://avatars.githubusercontent.com/u/84060430?v=4",
    },
  ],
  dashboard: [
    {
      name: "tasukuwato",
      href: "https://github.com/tasukuwato",
      src: "https://avatars.githubusercontent.com/u/116733827?v=4",
    },
    {
      name: "hirotomoyamada",
      href: "https://github.com/hirotomoyamada",
      src: "https://avatars.githubusercontent.com/u/84060430?v=4",
    },
  ],
  forms: [
    {
      name: "kaitobq",
      href: "https://github.com/kaitobq",
      src: "https://avatars.githubusercontent.com/u/157810570?v=4",
    },
    {
      name: "hirotomoyamada",
      href: "https://github.com/hirotomoyamada",
      src: "https://avatars.githubusercontent.com/u/84060430?v=4",
    },
  ],
  mail: [
    {
      name: "umaidashi",
      href: "https://github.com/umaidashi",
      src: "https://avatars.githubusercontent.com/u/99778758?v=4",
    },
    {
      name: "hirotomoyamada",
      href: "https://github.com/hirotomoyamada",
      src: "https://avatars.githubusercontent.com/u/84060430?v=4",
    },
  ],
  music: [
    {
      name: "Hayato1031",
      href: "https://github.com/Hayato1031",
      src: "https://avatars.githubusercontent.com/u/105223982?v=4",
    },
    {
      name: "hirotomoyamada",
      href: "https://github.com/hirotomoyamada",
      src: "https://avatars.githubusercontent.com/u/84060430?v=4",
    },
  ],
  playground: [
    {
      name: "hirotomoyamada",
      href: "https://github.com/hirotomoyamada",
      src: "https://avatars.githubusercontent.com/u/84060430?v=4",
    },
  ],
  tasks: [
    {
      name: "mst-mkt",
      href: "https://github.com/mst-mkt",
      src: "https://avatars.githubusercontent.com/u/131662659?v=4",
    },
    {
      name: "hirotomoyamada",
      href: "https://github.com/hirotomoyamada",
      src: "https://avatars.githubusercontent.com/u/84060430?v=4",
    },
  ],
}

export type Slug = (typeof SLUGS)[number]
