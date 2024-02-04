# react-styleflex

**A React Template that lets you flex with style.**

## What's in the Box?

* [React 18](https://react.dev/)
* [Vite](https://vitejs.dev/)
* [TypeScript](https://www.typescriptlang.org/)
* [styled-components](https://styled-components.com/)
* [Tailwind CSS](https://tailwindcss.com/)
* [twin.macro](https://github.com/ben-rogerson/twin.macro)
* [Sass](https://sass-lang.com/)
* [PostCSS](https://postcss.org/)
* [Autoprefixer](https://github.com/postcss/autoprefixer)
* [emotion](https://emotion.sh/)

## Setup

```sh
git clone https://github.com/deltafy/react-styleflex.git
cd react-styleflex
npm install
```

## Styling Methods

See [EXAMPLES](https://github.com/deltafy/react-styleflex/tree/main/src/components).

**Method 1: External CSS**

You can import your CSS and style your components the classic way.

```css
/* container.css */
.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin: 0 0.25rem;
}

.btn-simple {
    height: 2.5rem;
    padding: 0 1.5rem;
    font-weight: 600;
    border-radius: 0.375rem;
    background: #000;
}
```
```jsx
import './container.css'

export default function MyComponent() {
    return (
        <button className="btn btn-simple">
            Simple
        </button>
    )
}
```

**Method 2: External SCSS**

You can also use SCSS from an external file and use its styles instead.

```scss
/* container.scss */
.btn {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    margin: 0 0.25rem;
    
    &-simple {
        height: 2.5rem;
        padding: 0 1.5rem;
        font-weight: 600;
        border-radius: 0.375rem;
        background: #000;
    }
}
```
```jsx
import './container.scss'

export default function MyComponent() {
    return (
        <button className="btn btn-simple">
            Simple
        </button>
    )
}
```

**Method 3: Tailwind Classes**

You can plug Tailwind classes instead of importing or writing any CSS.

```jsx
export default function MyComponent() {
    return (
        <button className="flex justify-center items-center h-10 px-6 font-semibold rounded-md bg-black">
            Simple
        </button>
    )
}
```

**Method 4: styled-components**

You can also opt for a CSS-in-JS approach using styled-components.

```jsx
import { styled, css } from 'styled-components'

interface ButtonProps {
    $variant?: 'simple' | 'playful',
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
`

export default function MyComponent() {
    return (
        <div className="flex justify-center items-center">
            <Button $variant="simple">
                Simple
            </Button>
            <Button $variant="playful">
                Playful
            </Button>
        </div>
    )
}
```

**Method 5: styled-components + twin.macro**

You can also choose to import styled-components from twin.macro instead, allowing you to use Tailwind classes inside and CSS.

```jsx
import tw, { css, styled, theme } from 'twin.macro'

interface ButtonProps {
    $variant?: 'simple' | 'playful',
}

const Button = styled.button<ButtonProps>(({ $variant }) => [
    tw`flex justify-center items-center`,
    $variant === 'simple' && tw`h-10 px-6 font-semibold rounded-md bg-black`,
    $variant === 'playful' && tw`h-10 px-6 font-semibold rounded-full bg-violet-600`,
    // here's a test that CSS also works inside
    css`
        color: ${theme`colors.white`};
        margin: 0 0.25rem;
    `
])

export default function StyledTailwindCSSDemo() {
    return (
        <div className="flex justify-center items-center">
            <Button $variant="simple">
                Simple
            </Button>
            <Button $variant="playful">
                Playful
            </Button>
        </div>
    )
}
```

**Method 6: styled-components + Pure SCSS**

Or you can even opt for using pure SCSS inside styled-components (and optionally take advantage of string interpolation).

```jsx
import { styled } from 'styled-components'

const flexTemplate = `
    display: flex;
    align-items: center;
    justify-content: center;
`

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

    ${flexTemplate}

    .btn {
        @include create-btn-template(#fff, 0, 0.25rem);

        &-simple {
            @extend %simple-btn-template;
        }

        &-playful {
            @extend %playful-btn-template;
        }
    }
`

export default function StyledSCSSDemo() {
    return (
        <ButtonGroup>
            <button className="btn btn-simple">
                Simple
            </button>
            <button className="btn btn-playful">
                Playful
            </button>
        </ButtonGroup>
    )
}
```
