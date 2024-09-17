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
  [_key in Slug]: { name: string; src: string; href: string }[]
} = {
  mail: [
    {
      name: "umaidashi",
      src: "https://avatars.githubusercontent.com/u/99778758?v=4",
      href: "https://github.com/umaidashi",
    },
    {
      name: "hirotomoyamada",
      src: "https://avatars.githubusercontent.com/u/84060430?v=4",
      href: "https://github.com/hirotomoyamada",
    },
  ],
  dashboard: [
    {
      name: "tasukuwato",
      src: "https://avatars.githubusercontent.com/u/116733827?v=4",
      href: "https://github.com/tasukuwato",
    },
    {
      name: "hirotomoyamada",
      src: "https://avatars.githubusercontent.com/u/84060430?v=4",
      href: "https://github.com/hirotomoyamada",
    },
  ],
  cards: [
    {
      name: "taroj1205",
      src: "https://avatars.githubusercontent.com/u/61367823?v=4",
      href: "https://github.com/taroj1205",
    },
    {
      name: "hirotomoyamada",
      src: "https://avatars.githubusercontent.com/u/84060430?v=4",
      href: "https://github.com/hirotomoyamada",
    },
  ],
  tasks: [
    {
      name: "mst-mkt",
      src: "https://avatars.githubusercontent.com/u/131662659?v=4",
      href: "https://github.com/mst-mkt",
    },
    {
      name: "hirotomoyamada",
      src: "https://avatars.githubusercontent.com/u/84060430?v=4",
      href: "https://github.com/hirotomoyamada",
    },
  ],
  playground: [
    {
      name: "hirotomoyamada",
      src: "https://avatars.githubusercontent.com/u/84060430?v=4",
      href: "https://github.com/hirotomoyamada",
    },
  ],
  forms: [
    {
      name: "kaitobq",
      src: "https://avatars.githubusercontent.com/u/157810570?v=4",
      href: "https://github.com/kaitobq",
    },
    {
      name: "hirotomoyamada",
      src: "https://avatars.githubusercontent.com/u/84060430?v=4",
      href: "https://github.com/hirotomoyamada",
    },
  ],
  music: [
    {
      name: "Hayato1031",
      src: "https://avatars.githubusercontent.com/u/105223982?v=4",
      href: "https://github.com/Hayato1031",
    },
    {
      name: "hirotomoyamada",
      src: "https://avatars.githubusercontent.com/u/84060430?v=4",
      href: "https://github.com/hirotomoyamada",
    },
  ],
  authentication: [
    {
      name: "hirotomoyamada",
      src: "https://avatars.githubusercontent.com/u/84060430?v=4",
      href: "https://github.com/hirotomoyamada",
    },
  ],
}

export type Slug = (typeof SLUGS)[number]
