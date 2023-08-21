import { search } from "@/services/tmdbAPI"
import { Search } from "./Search"

let i = 0;

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q: string }
}) {
  const data = await search(searchParams.q);

  return (
    <main className="main">
      <Search initialQuery={searchParams.q} data={data}/>
    </main>
  )
}
