import Link from "next/link";

export default function TagList({tags}){
  return (
    <div>
      <ul className="flex -mx-2 my-6">
        {tags.map((tag) => (
          <li className="mx-2">
            <Link href={`/tags/${tag}`}>
              <a className="p-2 bg-snow dark:bg-slate rounded-lg shadow-lg text-sky dark:text-ice hover:bg-snow-light dark:hover:bg-slate-light">{tag}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}