import React from 'react'

export default function Pais() {
  const [paises, setPaises] = React.useState([])
  const [url, setUrl] = React.useState('https://pic-api.peruviandigital.club/ubigeo/api/paises/?format=json')

  React.useEffect(()=>{
    // console.log("ejemplo")
    getData(url)
  }, [url])

  const getData = async (uri) => {
    const result = await fetch(uri,
    { 
      method: 'get', 
      headers: new Headers({
        'Authorization': 'Basic '+btoa('admin:@Spicsivesoft'), 
        // 'Content-Type': 'application/x-www-form-urlencoded'
      })
    }  
    )
    const data = await result.json()
    setPaises(data)
    // console.log(paises)
  }

  const nextPage = e => {
    // console.log("e:", e)
    setUrl(paises.next)
  }

  const previousPage = e => {
    setUrl(paises.previous)
  }


  return (
    <div>
      <h1>Pais</h1>
      <ul>
        {
          paises?.results?.map(item => 
              <li key={item.id}>{item.name} - {item.id}</li>
            ) || <p>No hay datos</p>
        }
      </ul>
      <button onClick={previousPage}>Anterior</button>
      <button onClick={nextPage}>Siguiente</button>
    </div>
  )
}
