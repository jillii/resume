export default function Copy (props) {
    const isList = props.isList
    const value = props.value
    let ret = ''
    console.log(value.split('.'))

    if (isList) {
        ret = <ul className="text-medium">{value.split(".").map((x, index) => {if (x) {return <li key={index}>{x}.</li>}})}</ul>
    } else {
        ret = <p className="text-medium">{value}</p>
    }

    return ret
}