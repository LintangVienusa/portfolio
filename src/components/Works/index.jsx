import uniqid from 'uniqid'
import { project } from '../../portfolio'
import Container from './Container'
import './Style.scss'

const Works = () => {
    return (
        <section id='project' className='section'>
            <h2 className='section__title'>Works</h2>

            <div className='projects__grid'>
                {project.map((px) => (
                    <Container key={uniqid()} project={px} />
                ))}
            </div>
        </section>
    )
}

export default Works