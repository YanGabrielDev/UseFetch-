import { useEffect, useState,useRef } from "react"
export const useFetch = (url, options) => {
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(false)
  const urlRef = useRef(url)
  const optionsRef = useRef(options)
  useEffect(() => {
    if(url !== urlRef.current) {
      urlRef.current = url;
      setShouldLoad(s => !s)
    }
  }, [url, options])

  useEffect(() => {
    setLoading(true)
    const fetchData = async () => {
      await new Promise(r => setTimeout(r , 3000))

    try {  const response = await fetch(urlRef.current, optionsRef.current)
      const jsonResult = await response.json()
      setResult(jsonResult)
      setLoading(false)} catch(e){
        setLoading(false)
        throw e;
      }
    } 
    fetchData()
  },[shouldLoad])
return [result, loading]
}