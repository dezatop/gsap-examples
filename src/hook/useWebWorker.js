import {useEffect, useRef, useState} from "react";

const workerHandler = (fn) => {
  onmessage = (event) => {
    postMessage(fn(event.data))
  }
}

export const useWebWorker = (fn) => {
  const workerRef = useRef()
  const [result, setResult] = useState(null)


  useEffect(() => {
    const worker = new Worker(URL.createObjectURL(new Blob([`(${workerHandler})(${fn})`])))

    workerRef.current = worker
    worker.onmessage = (event) => {
      console.log('worker.onmessage', event)
      setResult(event.data)
    }

    return () => {
      worker.terminate()
    }
  }, [fn])

  return {
    result,
    run: (value) => workerRef.current.postMessage(value)
  }
}