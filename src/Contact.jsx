export default function Contact (props) {
    const title = props.title
    const list = props.value

    return (
        <>
            {list.map((item, index) =>
                <p key={index}>{item}</p>
            )}
        </>
    )
}