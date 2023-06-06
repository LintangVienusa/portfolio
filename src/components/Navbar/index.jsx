import { useState } from 'react'
import { header, project, skills, contact } from '../../portfolio'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import './style.scss'

const Navbar = () => {
    const { homepage, title } = header

    const [showNavList, setShowNavList] = useState(false)
    const toggleNavList = () => setShowNavList(!showNavList)

    return (

        <header className='header center'>
            <h3>
                {homepage ? (
                <a href={homepage} className='link'>
                    {title}
                </a>
                ) : (
                title
                )}
            </h3>
            <nav className="center nav">
                <ul
                    style={{ display: showNavList ? 'flex' : null }}
                    className='nav__list'
                >
                    {project.length ? (
                        <li className='nav__list-item'>
                            <a 
                                href='#projects'
                                onClick={toggleNavList}
                                className='link link--nav'
                            >Works</a>
                        </li>
                    ): null}

                    {skills.length ?(
                        <li className='nav__list-item'>
                            <a 
                                href="#skills"
                                onClick={toggleNavList}
                                className='link link--nav'
                            >Skills</a>
                        </li>
                    ): null}    

                    {contact.length ?(
                        <li className='nav__list-item'>
                            <a 
                                href="#contact"
                                onClick={toggleNavList}
                                className='link link--nav'
                            >contact</a>
                        </li>
                    ): null}
                </ul>
                <button
                    type='button'
                    onClick={toggleNavList}
                    className='btn btn--icon nav__hamburger'
                    aria-label='toggle navigation'
                >
                    {showNavList ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
                </button>
            </nav>
        </header>
    )
}

export default Navbar