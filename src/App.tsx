import StyledComponentsDemo from './components/StyledComponentsDemo'
import StyledTailwindCSSDemo from './components/StyledTailwindCSSDemo'
import PureSCSSDemo from './components/PureSCSSDemo'
import StyledSCSSDemo from './components/StyledSCSSDemo'

// you can also use styled-components without twin.macro
import { styled } from 'styled-components'

const DemoTitle = styled.p`
    font-size: 1.125rem;
    font-weight: 700;
    margin: 1.25rem 0;
`

// external CSS also works 
import './App.css'

function App() {
    return (
        <>
            <div className="my-12 dark:text-white">
                <p className="text-lg font-bold my-5">Styled Components + twin.macro</p>
                <StyledTailwindCSSDemo />
            </div>
            <div className="my-12 dark:text-white">
                <DemoTitle>Styled Components only</DemoTitle>
                <StyledComponentsDemo />
            </div>
            <div className="my-12 dark:text-white">
                <DemoTitle>Pure SCSS</DemoTitle>
                <PureSCSSDemo />
            </div>
            <div className="my-12 dark:text-white">
                <DemoTitle>Styled Components + Sass/SCSS</DemoTitle>
                <StyledSCSSDemo />
            </div>
        </>
    )
}

export default App
