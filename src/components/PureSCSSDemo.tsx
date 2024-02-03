import "./demo.scss"

/**
 * This example uses an external SCSS file.
 */
export default function PureSCSSDemo() {
    return (
        <div className="flex justify-center items-center">
            <button className="btn btn-simple">
                Simple
            </button>
            <button className="btn btn-playful">
                Playful
            </button>
            <button className="btn btn-elegant">
                Elegant
            </button>
        </div>
    )
}
