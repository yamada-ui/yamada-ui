export const getDateDiff = (date: Date): string => {
  const diff = new Date().getTime() - date.getTime()
  const diffInYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 365))
  const diffInMonths = Math.floor(diff / (1000 * 60 * 60 * 24 * 30))
  const diffInDays = Math.floor(diff / (1000 * 60 * 60 * 24))

  if (diffInYears > 0)
    return `${diffInYears} year${diffInYears > 1 ? "s" : ""} ago`

  if (diffInMonths > 0)
    return `${diffInMonths} month${diffInMonths > 1 ? "s" : ""} ago`

  if (diffInDays > 0) return `${diffInDays} day${diffInDays > 1 ? "s" : ""} ago`

  return "Today"
}

export const getTimestamp = (timestamp: Date): string => {
  const date = new Date(timestamp)

  return date.toLocaleDateString("en-US", {
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    month: "short",
    year: "numeric",
  })
}
