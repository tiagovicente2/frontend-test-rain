import { useEffect, useState } from 'react'

const useLocalStorage = (key: string, initialValue: any) => {
  const [data, setData] = useState<any>(initialValue)

  const setStoredData = (newValue: any) => {
    localStorage.setItem(key, JSON.stringify(newValue))
    setData(newValue)
  }

  useEffect(() => {
    const storedValue = localStorage.getItem(key)
    if (storedValue) {
      setData(JSON.parse(storedValue))
    }
  }, [])

  return [data, setStoredData]
}

export default useLocalStorage
