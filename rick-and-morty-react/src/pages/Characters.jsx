import {useState, useEffect} from 'react'
import '../App.css'
import axios from 'axios'



function Characters() {
    const [character, setCharacter] = useState('')

    const randomNumber = Math.floor(Math.random()*826) + 1;

    const getCharacter  = async(event) => {
        event.preventDefault()
        let form = new FormData(event.target)
        let formData = Object.fromEntries(form)
        try{
            const response = await axios.get(`https://rickandmortyapi.com/api/character/${randomNumber}`)
            console.log(response.data.image)
            setCharacter(response.data.image)
        }
        catch(error){
            console.error("Error getting character:", error)
        }
    }

    return (
        <>
        <div className="characters-container">
            <h1 className="characters-h1">Click the button below to get a random Character.</h1> <br />
            
            <form onSubmit={getCharacter}>
                <button className='character-button' type='submit'>SEARCH</button>
            </form> 
            <img src={character}></img>
        </div>
        
        </>
    )
}

export default Characters;