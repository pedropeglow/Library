let livros = []
const endpointAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

async function getBuscarLivrosAPI(){
    const res = await fetch(endpointAPI)
    livros = await res.json()
    console.table(livros)
}

getBuscarLivrosAPI()
