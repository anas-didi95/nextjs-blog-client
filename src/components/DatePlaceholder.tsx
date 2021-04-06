import { parseISO, format } from "date-fns"

const DatePlaceholder: React.FC<{ dateString: string }> = ({ dateString }) => {
  const date = parseISO(dateString)
  return <time dateTime={dateString}>{format(date, "yyyy, LLLL d")}</time>
}

export default DatePlaceholder
