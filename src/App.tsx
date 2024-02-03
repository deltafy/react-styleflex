import StyledComponentsDemo from './components/StyledComponentsDemo'
import StyledTwinMacroDemo from './components/StyledTwinMacroDemo'

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
            <div className="my-12">
                <p className="text-lg font-bold my-5">Styled Components + twin.macro</p>
                <StyledTwinMacroDemo />
            </div>
            <div className="my-12">
                <DemoTitle>Styled Components only</DemoTitle>
                <StyledComponentsDemo />
            </div>
        </>
    )
}

export default App
