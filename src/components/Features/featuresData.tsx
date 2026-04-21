import { Feature } from "@/types/feature";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: (
      /* Communication Hub — chat bubble with text lines */
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M20 0C9.0 0 0 8.06 0 18C0 22.28 1.56 26.22 4.18 29.28L2.06 37.18C1.82 38.08 2.72 38.88 3.58 38.5L12.2 34.8C14.6 35.58 17.24 36 20 36C31 36 40 27.94 40 18C40 8.06 31 0 20 0Z"
        />
        <path d="M12 15H28C29.1 15 30 15.9 30 17C30 18.1 29.1 19 28 19H12C10.9 19 10 18.1 10 17C10 15.9 10.9 15 12 15ZM12 21H22C23.1 21 24 21.9 24 23C24 24.1 23.1 25 22 25H12C10.9 25 10 24.1 10 23C10 21.9 10.9 21 12 21Z" />
      </svg>
    ),
    title: "Communication Hub",
    paragraph:
      "Unified inbox, real-time messaging, and team channels in one workspace. Keep every conversation organised and every team member connected across your entire organisation.",
  },
  {
    id: 2,
    icon: (
      /* Smart Calendar — calendar with date dots */
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M34 4H32V2C32 0.9 31.1 0 30 0C28.9 0 28 0.9 28 2V4H12V2C12 0.9 11.1 0 10 0C8.9 0 8 0.9 8 2V4H6C2.68 4 0 6.68 0 10V34C0 37.32 2.68 40 6 40H34C37.32 40 40 37.32 40 34V10C40 6.68 37.32 4 34 4ZM34 34C34 35.1 33.1 36 32 36H8C6.9 36 6 35.1 6 34V14H34V34Z"
        />
        <path d="M12 20C10.9 20 10 20.9 10 22C10 23.1 10.9 24 12 24C13.1 24 14 23.1 14 22C14 20.9 13.1 20 12 20ZM20 20C18.9 20 18 20.9 18 22C18 23.1 18.9 24 20 24C21.1 24 22 23.1 22 22C22 20.9 21.1 20 20 20ZM28 20C26.9 20 26 20.9 26 22C26 23.1 26.9 24 28 24C29.1 24 30 23.1 30 22C30 20.9 29.1 20 28 20ZM12 28C10.9 28 10 28.9 10 30C10 31.1 10.9 32 12 32C13.1 32 14 31.1 14 30C14 28.9 13.1 28 12 28ZM20 28C18.9 28 18 28.9 18 30C18 31.1 18.9 32 20 32C21.1 32 22 31.1 22 30C22 28.9 21.1 28 20 28Z" />
      </svg>
    ),
    title: "Smart Calendar",
    paragraph:
      "Intelligent scheduling, automated reminders, and seamless meeting coordination for your whole team. Never miss a deadline or double-book a resource again.",
  },
  {
    id: 3,
    icon: (
      /* Office Suite — document with text lines */
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M24 0H6C4.9 0 4 0.9 4 2V38C4 39.1 4.9 40 6 40H34C35.1 40 36 39.1 36 38V12L24 0Z"
        />
        <path d="M24 0V10C24 11.1 24.9 12 26 12H36L24 0ZM12 18H28C29.1 18 30 18.9 30 20C30 21.1 29.1 22 28 22H12C10.9 22 10 21.1 10 20C10 18.9 10.9 18 12 18ZM12 26H28C29.1 26 30 26.9 30 28C30 29.1 29.1 30 28 30H12C10.9 30 10 29.1 10 28C10 26.9 10.9 26 12 26ZM12 10H18C19.1 10 20 10.9 20 12C20 13.1 19.1 14 18 14H12C10.9 14 10 13.1 10 12C10 10.9 10.9 10 12 10Z" />
      </svg>
    ),
    title: "Office Suite",
    paragraph:
      "Create documents, spreadsheets, and presentations with live co-authoring built in. Export to PDF or DOCX, leave comments, and review changes without leaving the platform.",
  },
  {
    id: 4,
    icon: (
      /* Video Conferencing — video camera */
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M28 10H4C1.8 10 0 11.8 0 14V30C0 32.2 1.8 34 4 34H28C30.2 34 32 32.2 32 30V14C32 11.8 30.2 10 28 10Z"
        />
        <path d="M38.6 12.8L34 16V28L38.6 31.2C39.4 31.74 40 31.36 40 30.4V13.6C40 12.64 39.4 12.26 38.6 12.8ZM14 16C11.8 16 10 17.8 10 20C10 22.2 11.8 24 14 24C16.2 24 18 22.2 18 20C18 17.8 16.2 16 14 16Z" />
      </svg>
    ),
    title: "Video Conferencing",
    paragraph:
      "HD meetings, webinars, and screen sharing at any scale. Host team standups or company-wide sessions with cloud recording, breakout rooms, and crisp audio built right in.",
  },
  {
    id: 5,
    icon: (
      /* Developer Tools — code angle brackets */
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M4 4C1.8 4 0 5.8 0 8V32C0 34.2 1.8 36 4 36H36C38.2 36 40 34.2 40 32V8C40 5.8 38.2 4 36 4H4ZM4 8H36V12H4V8Z"
        />
        <path d="M16.8 17.4L10 22L16.8 26.6C17.78 27.28 19.12 27.04 19.8 26.06C20.48 25.08 20.24 23.74 19.26 23.06L15.5 20.5L19.26 17.94C20.24 17.26 20.48 15.92 19.8 14.94C19.12 13.96 17.78 13.72 16.8 14.4V17.4ZM23.2 17.4V14.4C22.22 13.72 20.88 13.96 20.2 14.94C19.52 15.92 19.76 17.26 20.74 17.94L24.5 20.5L20.74 23.06C19.76 23.74 19.52 25.08 20.2 26.06C20.88 27.04 22.22 27.28 23.2 26.6L30 22L23.2 17.4Z" />
      </svg>
    ),
    title: "Developer Tools",
    paragraph:
      "Connect GitHub and GitLab without switching tabs. Collaborate on code reviews, track pull requests, and keep your engineering team aligned inside the same workspace.",
  },
  {
    id: 6,
    icon: (
      /* Smart Drive — cloud with upload arrow */
      <svg width="40" height="40" viewBox="0 0 40 40" className="fill-current">
        <path
          opacity="0.5"
          d="M32.2 15.18C31.08 9.44 26.04 5 20 5C15.22 5 11.08 7.66 8.9 11.58C3.86 12.14 0 16.38 0 21.5C0 26.98 4.42 31.4 9.9 31.4H31.6C36.26 31.4 40 27.66 40 23C40 18.54 36.58 14.9 32.2 15.18Z"
        />
        <path d="M22 21.5V28C22 29.1 21.1 30 20 30C18.9 30 18 29.1 18 28V21.5H14.8C13.86 21.5 13.38 20.38 14.02 19.72L19.22 14.32C19.64 13.88 20.36 13.88 20.78 14.32L25.98 19.72C26.62 20.38 26.14 21.5 25.2 21.5H22Z" />
      </svg>
    ),
    title: "Smart Drive",
    paragraph:
      "Enterprise cloud storage with version history and instant secure sharing. Access files offline, restore previous versions, and keep your team's documents always within reach.",
  },
];
export default featuresData;