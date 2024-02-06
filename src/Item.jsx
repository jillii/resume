export default function Item (props) {
    const sectionHead = props.sectionHead
    const suptext = props.suptext
    const title = props.title
    const subtitle = props.subtitle
    const copy = props.copy

    return (
        <div className={`col-group ${props.single ? 'single' : ''}`} data-aos="fade-up" data-aos-duration="2000" data-aos-anchor="#experience">
            {suptext && <label className="text-gray text-small">{suptext}</label>}
            <h3>
                {sectionHead && <b>{sectionHead} / </b>}
                {props.break && <br/>}
                {title}
            </h3>
            {subtitle && <label className="text-gray text-small">{subtitle}</label>}
            {copy && <p className="text-medium">{copy}</p>}
        </div>
    );
}