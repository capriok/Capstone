import { useEffect, useState } from 'react'
import indexJson from 'json/index.json'

const useIndexJsonData = () => {
	const [json, setJson] = useState(indexJson)

	useEffect(() => {
		console.log({ IndexJSON: indexJson });
		setJson(indexJson)
	}, [])

	return { ...json }
}

export default useIndexJsonData