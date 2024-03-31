import {
  type IconDefinition,
  faArchive,
  faCartShopping,
  faCircleExclamation,
  faComments,
  faFile,
  faInbox,
  faPaperPlane,
  faTrash,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons"

export type MailType = {
  key: number
  title: string
  unRead: boolean
  authorName: string
  email: string
  content: string
  timestamp: Date
  tags: string[]
}

export const mails: MailType[] = [
  {
    key: 1,
    title: "Weekend Plans",
    unRead: false,
    authorName: "Bob Johnson",
    email: "bobjohnson@example.com",
    content: `Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun.

    If you're interested, let me know, and we can plan the details. It'll be a great way to unwind and enjoy nature.
    
    Looking forward to your response!
    
    Best, Bob`,
    timestamp: new Date("2023-04-10 11:45"),
    tags: ["personal"],
  },
  {
    key: 2,
    title: "Meeting Reminder",
    unRead: true,
    authorName: "Alice Smith",
    email: "alicesmith@example.com",
    content: `Just a reminder that we have a meeting tomorrow at 10:00 AM. Please make sure to prepare any materials or reports that you need to present.

    If you have any questions or need to reschedule, please let me know as soon as possible.

    Looking forward to seeing you there!

    Best, Alice`,
    timestamp: new Date("2023-04-11 09:30"),
    tags: ["work", "important"],
  },
  {
    key: 3,
    title: "New Recipe",
    unRead: true,
    authorName: "Chef Jamie",
    email: "chefjamie@example.com",
    content: `I hope this email finds you well. I wanted to share a new recipe that I've been working on. It's a delicious and healthy dish that I think you'll enjoy.

    Here's the recipe:

    - Ingredients:
    - Instructions:
    - Enjoy!

    Let me know if you have any questions or feedback. I'd love to hear how it turns out!

    Best, Chef Jamie`,
    timestamp: new Date("2023-04-12 14:15"),
    tags: ["personal"],
  },
  {
    key: 4,
    title: "Re: Project Update",
    unRead: false,
    authorName: "John Doe",
    email: "johndoe@example.com",
    content: `Hi Alice,

    Thanks for the update. I'm glad to hear that the project is going well. I appreciate all the hard work that you and the team are putting in.

    Let me know if there's anything I can do to help or if you need any additional resources.

    Best, John`,
    timestamp: new Date("2023-04-13 16:30"),
    tags: ["work", "important"],
  },
  {
    key: 5,
    title: "Weekend Plans",
    unRead: false,
    authorName: "Bob Johnson",
    email: "bobjohnson@exmple.com",
    content: `Any plans for the weekend? I was thinking of going hiking in the nearby mountains. It's been a while since we had some outdoor fun.

    If you're interested, let me know, and we can plan the details. It'll be a great way to unwind and enjoy nature.

    Looking forward to your response!

    Best, Bob`,
    timestamp: new Date("2023-04-10 11:45"),
    tags: ["personal"],
  },
  {
    key: 6,
    title: "Meeting Reminder",
    unRead: true,
    authorName: "Alice Smith",
    email: "alicesmith@example.com",
    content: `Just a reminder that we have a meeting tomorrow at 10:00 AM. Please make sure to prepare any materials or reports that you need to present.

    If you have any questions or need to reschedule, please let me know as soon as possible.

    Looking forward to seeing you there!

    Best, Alice`,
    timestamp: new Date("2023-04-11 09:30"),
    tags: ["work", "important"],
  },
  {
    key: 7,
    title: "Re: Question about the project",
    unRead: true,
    authorName: "John Doe",
    email: "johndoe@example.com",
    content: `Hi Alice,

    Thanks for the update. I'm glad to hear that the project is going well. I appreciate all the hard work that you and the team are putting in.

    Let me know if there's anything I can do to help or if you need any additional resources.

    Best, John`,
    timestamp: new Date("2023-04-13 16:30"),
    tags: ["work", "important"],
  },
]

export type MailSidebarItemType = {
  icon: IconDefinition
  title: string
  num?: number
}

export const mailSidebarItems: MailSidebarItemType[][] = [
  [
    { icon: faInbox, title: "Inbox", num: 53 },
    { icon: faFile, title: "Drafts", num: 4 },
    { icon: faPaperPlane, title: "Sent" },
    { icon: faTrash, title: "Trash" },
    { icon: faArchive, title: "Archive" },
  ],
  [
    { icon: faUserGroup, title: "Personal", num: 435 },
    { icon: faCircleExclamation, title: "Updates", num: 342 },
    { icon: faComments, title: "Forum", num: 167 },
    { icon: faCartShopping, title: "Shopping", num: 8 },
    { icon: faArchive, title: "Promotions", num: 13 },
  ],
]
