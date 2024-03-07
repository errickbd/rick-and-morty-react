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
            {/* {charactersArray.map((characters, index) => {
            
            })} */}
            <ul>
                <li>
                    
                </li>
            </ul>

        </>
    )
}

export default AllCharactersPage