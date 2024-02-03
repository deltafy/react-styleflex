import { styled, css } from 'styled-components'

interface ButtonProps {
    $variant?: 'simple' | 'playful' | 'elegant',
}

const Button = styled.button<ButtonProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin: 0 0.25rem;

    ${props => props.$variant === 'simple' &&
        css`
            height: 2.5rem;
            padding: 0 1.5rem;
            font-weight: 600;
            border-radius: 0.375rem;
            background: #000;
        `
    }

    ${props => props.$variant === 'playful' &&
        css`
            height: 2.5rem;
            padding: 0 1.5rem;
            font-weight: 600;
            border-radius: 9999px;
            background-color: rgb(124 58 237);
        `
    }

    ${props => props.$variant === 'elegant' &&
        css`
            flex: none;
            width: 50%;
            height: 3rem;
            text-transform: uppercase;
            font-weight: 500;
            letter-spacing: 0.05em;
            background-color: rgb(15 23 42);
        `
    }
`

/**
 * This example uses styled-components.
 */
export default function StyledComponentsDemo() {
    return (
        <div className="flex justify-center items-center">
            <Button $variant="simple">
                Simple
            </Button>
            <Button $variant="playful">
                Playful
            </Button>
            <Button $variant="elegant">
                Elegant
            </Button>
        </div>
    )
}
