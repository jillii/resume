export default function SectionHead (props) {
    const hasBreak = props.hasBreak
    return (
        <h3 className={hasBreak && 'breaks'}><b>{props.value} /&nbsp;</b></h3>
    )
}