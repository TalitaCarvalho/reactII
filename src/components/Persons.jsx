import { useEffect, useState } from "react"
function Persons() {
    const url_base = "https://rickandmortyapi.com/api/character"
    const [persons, setPersons] = useState([])
    const [apiData, setApiData] = useState([])
    const [queryParam, setQuery] = useState("")

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(url_base)
            const result = await response.json()
            setApiData(result.results)
            setPersons(result.results)
        }
        fetchData()
    }, [])

    async function query(e){
        setQuery(e.target.value)
        console.log(queryParam);
        if(e.target.value) {
            const response = await fetch(`${url_base}?name=${e.target.value}`)
            const result = await response.json()
            setPersons(result.results)
            return
        }

        setPersons(apiData)

    }
   
    return (
        <div>
            <input type="text" value={queryParam} onChange={query}/>
            <div>
                {
                    persons.map(val => <div key={val.id} >
                        <div>
                            {val.name}
                        </div>
                        <img src={val.image}/>
                    </div>)
                }
            </div>
        </div>
    )
}
export default Persons
