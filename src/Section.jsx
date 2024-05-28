import Item from './Item'

export default function Section (props) {
    const id = props.id
    const title = props.title
    const content = props.content

    return (
        <div id={id} className="col">
            <h2 className="subhead">{title}</h2>
            {content &&
                content.map((item, index) => 
                    <Item 
                        key={index} 
                        isList={item.isList}
                        index={index}
                        suptext={item.suptext}
                        anchor={`#${title.toLowerCase()}`}
                        hasBreak={item.break}
                        sectionHead={item.sectionHead}
                        title={item.title}
                        subtitle={item.subtitle}
                        copy={item.copy}
                        list={item.list}
                        contact={item.contact}
                    />
                )
            }
        </div>
    )
}