import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
// import { Button } from '/Button';
// import Logo from '../Logo.jpg'

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);


    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);


    const showButton = () => {
        if (window.innerWidth <= 960){
            setButton(false)
        }
        else{
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    },[])


    window.addEventListener("resize", showButton)


    return(
        <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    <img src='https://camo.githubusercontent.com/6fd3529f4ad55c26bd27fab0fc7f79de4c7454706cf24517ae2c92a438d6e1b4/68747470733a2f2f69636f6e2d6c6962726172792e636f6d2f696d616765732f7269636b2d616e642d6d6f7274792d69636f6e2f7269636b2d616e642d6d6f7274792d69636f6e2d31352e6a7067' className='logo'/>
                    <h2>Rick & Morty</h2>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/story' className='nav-links' onClick={closeMobileMenu}>
                            Story
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/characters' className='nav-links' onClick={closeMobileMenu}>
                            Randomizer
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/allcharacters' className='nav-links' onClick={closeMobileMenu}>
                            Characters
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    )

}

export default Navbar