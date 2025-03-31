export default function Contact (props) {
    const title = props.title
    const list = props.value
    const isLink = props.isLink

    return (
        <>
            {list.map((item, index) =>
                {if (isLink) {
                    return <a key={index} className="contact" href={`https://${item}/`} target="_blank">{item}</a>
                } else {
                    return <p key={index} className="contact">{item}</p>
                }}
            )}
        </>
    )
}