import Link from "next/link"

export default function ButtonP({ id, func, text, url, className }) {
  return (
    <div onClick={func}>
      <Link href={url}>
        <a
          id={id}
          className={`capitalize text-xs font-bold tracking-normal px-4 py-2.5 rounded-lg text-white bg-blue-600 hover:bg-blue-700 ${className}`}
        >
          {text}
        </a>
      </Link>
    </div>
  )
}
