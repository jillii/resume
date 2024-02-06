export default function Section (props) {
    const size = props.size
    const id = props.id
    const customClass = props.customClass
    const title = props.title

    return (
        <div id={id} className={`col col-${size}${customClass ? ' ' + customClass : ''}`}>
            <h2 className="subhead">{title}</h2>
            {props.children}
        </div>
    )
}