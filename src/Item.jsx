import SectionHead from "./SectionHead"
import Title from "./Title"
import Subtitle from "./Subtitle"
import Copy from "./Copy"
import List from "./List"
import Contact from "./Contact"

export default function Item (props) {
    const anchor = props.anchor
    const index = props.index
    const hasBreak = props.hasBreak
    const isList = props.isList
    const suptext = props.suptext
    const sectionHead = props.sectionHead
    const title = props.title
    const subtitle = props.subtitle
    const copy = props.copy
    const list = props.list
    const contact = props.contact
    const isLink = props.isLink
    const link = props.link

    return (
        <div className="col-group" data-aos="fade-up" data-aos-duration="2000" data-aos-anchor={anchor} data-aos-delay={index * 200}>
            {suptext &&
                <Subtitle value={suptext} />
            }
            {sectionHead &&
                <SectionHead value={sectionHead} hasBreak={hasBreak} />
            }
            {title &&
                <Title value={title} />
            }
            {link &&
                <> &bull; <a href={link} target="_blank" className="item-link">Link</a></>
            }
            {subtitle &&
                <Subtitle value={subtitle} />
            }
            {copy &&
                <Copy value={copy} isList={isList} />
            }
            {list &&
                <List value={list} />
            }
            {contact &&
                <Contact value={contact} isLink={isLink} />
            }
        </div>
    )
}