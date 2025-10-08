export interface MailItem {
  id: number
  authorName: string
  content: string
  email: string
  tags: string[]
  timestamp: Date
  title: string
  unRead: boolean
}

export const MAILS: MailItem[] = [
  {
    id: 1,
    authorName: "Bob Johnson",
    content: `Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun.

    If you're interested, let me know, and we can plan the details. It'll be a great way to unwind and enjoy nature.

    Looking forward to your response!

    Best, Bob`,
    email: "bobjohnson@example.com",
    tags: ["personal"],
    timestamp: new Date("2025-04-10 11:45"),
    title: "Weekend Plans",
    unRead: false,
  },
  {
    id: 2,
    authorName: "Alice Smith",
    content: `Just a reminder that we have a meeting tomorrow at 10:00 AM. Please make sure to prepare any materials or reports that you need to present.

    If you have any questions or need to reschedule, please let me know as soon as possible.

    Looking forward to seeing you there!

    Best, Alice`,
    email: "alicesmith@example.com",
    tags: ["work", "important"],
    timestamp: new Date("2025-04-11 09:30"),
    title: "Meeting Reminder",
    unRead: true,
  },
  {
    id: 3,
    authorName: "Chef Jamie",
    content: `I hope this email finds you well. I wanted to share a new recipe that I've been working on. It's a delicious and healthy dish that I think you'll enjoy.

    Here's the recipe:

    - Ingredients:
    - Instructions:
    - Enjoy!

    Let me know if you have any questions or feedback. I'd love to hear how it turns out!

    Best, Chef Jamie`,
    email: "chefjamie@example.com",
    tags: ["personal"],
    timestamp: new Date("2025-04-12 14:15"),
    title: "New Recipe",
    unRead: true,
  },
  {
    id: 4,
    authorName: "John Doe",
    content: `Hi Alice,

    Thanks for the update. I'm glad to hear that the project is going well. I appreciate all the hard work that you and the team are putting in.

    Let me know if there's anything I can do to help or if you need any additional resources.

    Best, John`,
    email: "johndoe@example.com",
    tags: ["work", "important"],
    timestamp: new Date("2025-04-13 16:30"),
    title: "Re: Project Update",
    unRead: false,
  },
  {
    id: 5,
    authorName: "Bob Johnson",
    content: `Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun.

    If you're interested, let me know, and we can plan the details. It'll be a great way to unwind and enjoy nature.

    Looking forward to your response!

    Best, Bob`,
    email: "bobjohnson@exmple.com",
    tags: ["personal"],
    timestamp: new Date("2025-04-10 11:45"),
    title: "Weekend Plans",
    unRead: false,
  },
  {
    id: 6,
    authorName: "Alice Smith",
    content: `Just a reminder that we have a meeting tomorrow at 10:00 AM. Please make sure to prepare any materials or reports that you need to present.

    If you have any questions or need to reschedule, please let me know as soon as possible.

    Looking forward to seeing you there!

    Best, Alice`,
    email: "alicesmith@example.com",
    tags: ["work", "important"],
    timestamp: new Date("2025-04-11 09:30"),
    title: "Meeting Reminder",
    unRead: true,
  },
  {
    id: 7,
    authorName: "John Doe",
    content: `Hi Alice,

    Thanks for the update. I'm glad to hear that the project is going well. I appreciate all the hard work that you and the team are putting in.

    Let me know if there's anything I can do to help or if you need any additional resources.

    Best, John`,
    email: "johndoe@example.com",
    tags: ["work", "important"],
    timestamp: new Date("2025-04-13 16:30"),
    title: "Re: Question about the project",
    unRead: true,
  },
]

export const DEFAULT_MAIL = MAILS[0]!
