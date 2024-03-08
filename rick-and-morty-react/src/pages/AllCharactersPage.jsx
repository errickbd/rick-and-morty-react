import {useState, useEffect} from 'react'
import axios from 'axios'



const AllCharactersPage = () => {
    const [characters, setCharacters] = useState([])

    const getCharacters = async () => {
        const response = await axios.get('https://rickandmortyapi.com/api/character/')
        console.log(response.data)
        const charactersArray = response.data.results
        setCharacters(charactersArray)
        // charactersArray.map((characters, index) => {
        
        // })
       
    }
    



    useEffect(() => {
        getCharacters()
    }, [])

    return (
        <>
            <h2>List of Characters:</h2>
            <ul>
                {characters.map(character => (
                    <li key={character.id} value={character.name}>
                        {character.name} <br />
                        {character.gender} <br />
                        {character.species} <br />
                    </li>
                ))}
            </ul>

        </>
    )
}

export default AllCharactersPage