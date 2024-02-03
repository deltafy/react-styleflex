import { styled } from 'styled-components'

const flexTemplate = `
    display: flex;
    align-items: center;
    justify-content: center;
`

// note that it is still possible to modify this and apply the example in 
// StyledSCSSDemo (such as by applying props). But for the sake of 
// demonstration, we're trying to use features that are known in Sass/SCSS.
// We're also demonstrating here how you can also use interpolation.
const ButtonGroup = styled.div`
    @mixin create-btn-template($color, $margin-y, $margin-x) {
        ${flexTemplate}
        color: $color;
        margin: $margin-y $margin-x;
    }

    %simple-btn-template {
        height: 2.5rem;
        padding: 0 1.5rem;
        font-weight: 600;
        border-radius: 0.375rem;
        background: #000;
    }

    %playful-btn-template {
        height: 2.5rem;
        padding: 0 1.5rem;
        font-weight: 600;
        border-radius: 9999px;
        background-color: rgb(124 58 237);
    }

    %elegant-btn-template {
        flex: none;
        width: 50%;
        height: 3rem;
        text-transform: uppercase;
        font-weight: 500;
        letter-spacing: 0.05em;
        background-color: rgb(15 23 42);
    }

    ${flexTemplate}

    btn {
        @include create-btn-template(#fff, 0, 0.25rem);

        &-simple {
            @extend %simple-btn-template;
        }

        &-playful {
            @extend %playful-btn-template;
        }

        &-elegant {
            @extend %elegant-btn-template;
        }
    }
`

/**
 * This example uses styled-components with SCSS.
 */
export default function StyledSCSSDemo() {
    return (
        <ButtonGroup>
            <button className="btn btn-simple">
                Simple
            </button>
            <button className="btn btn-playful">
                Playful
            </button>
            <button className="btn btn-elegant">
                Elegant
            </button>
        </ButtonGroup>
    )
}
