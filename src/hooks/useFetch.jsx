import { useEffect, useState } from 'react'

function useFetch(url) {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then(data => setData(data.results))
  }, [url])

  return data
}

export default useFetch
