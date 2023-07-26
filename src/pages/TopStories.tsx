import useSWRInfinite from 'swr/infinite'

import { getTopStories } from '../services/hacker-news'
import { Story } from '../components/Story'

export default function TopStories () {
  const { data, size, setSize } = useSWRInfinite(
    (index) => `stories/${index + 1}`,
    (key) => {
      const [, page] = key.split('/')
      return getTopStories(Number(page), 5)
    }
  )

  const stories = data?.flat()

  return (
    <>
      <ul style={{ listStyle: 'none' }}>
        {stories?.map((id: number, index: number) => (
          <li key={id}>
            <Story id={id} index={index} />
          </li>
        ))}
      </ul>

      <button onClick={() => { setSize(size + 1) }}>
        Load more
      </button>
    </>
  )
}
