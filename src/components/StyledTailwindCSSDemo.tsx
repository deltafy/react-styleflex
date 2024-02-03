import tw, { css, styled, theme } from 'twin.macro'

interface ButtonProps {
    $variant?: 'simple' | 'playful' | 'elegant',
}

const Button = styled.button<ButtonProps>(({ $variant }) => [
    tw`flex justify-center items-center`,
    $variant === 'simple' && tw`h-10 px-6 font-semibold rounded-md bg-black`,
    $variant === 'playful' && tw`h-10 px-6 font-semibold rounded-full bg-violet-600`,
    $variant === 'elegant' && tw`flex-none w-1/2 h-12 uppercase font-medium tracking-wider bg-slate-900`,
    // here's a test that CSS also works inside
    css`
        color: ${theme`colors.white`};
        margin: 0 0.25rem;
    `
])

/**
 * This example uses styled-components with twin.macro 
 * to support Tailwind classes and pure CSS.
 */
export default function StyledTailwindCSSDemo() {
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
