export default function Contact (props) {
    const title = props.title
    const list = props.list

    return (
        <div className="col-group" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="100" data-aos-anchor="#info">
            {title && <label className="text-gray text-small">{title}</label>}
            {list.map((item, index) =>
                <p key={index}>{item}</p>
            )}
        </div>
    )
}