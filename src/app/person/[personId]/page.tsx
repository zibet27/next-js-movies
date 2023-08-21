import { getPerson } from '@/services/tmdbAPI'
import { PersonInfo } from './PersonInfo'

export async function routeData(personId: string) {
  try {
    const item = await getPerson(personId)

     if (item.adult) {
      throw new Error('Data not available')
    } else {
      return { item }
    }

    return { item }
  } catch (err) {
    console.log(err)
    throw new Error('Data not available')
  }
}

export default async function PersonPage({
  params,
}: {
  params: { personId: string }
}) {
  const data = await routeData(params.personId)

  return (
    <main>
      <PersonInfo person={data.item} />
    </main>
  )
}
