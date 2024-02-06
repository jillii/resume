export default function List (props) {
    const title = props.title
    const list = props.list

    return (
        <>
            <div className="col-group" data-aos="fade-up" data-aos-duration="2000" data-aos-anchor="#skills">
                <label className="text-gray text-small">{title}</label>
                <p className="list">
                    {list.map((item, index) => 
                        <span key={index}>{item}</span>
                    )}
                </p>
            </div>
        </>
    );
}