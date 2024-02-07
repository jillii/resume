export default function List (props) {
    const list = props.value

    return (
        <p className="list">
            {list.map((item, index) => 
                <span key={index}>{item}</span>
            )}
        </p>
    );
}