import React, { useEffect } from "react"
import AOS from "aos"
import "../node_modules/aos/dist/aos.css"
import './App.css'
import Row from './Row'
import Section from './Section'
import Item from './Item'
import Contact from './Contact'
import List from './List'
import { HEADER, EXPERIENCES, BACKGROUNDS, LISTS, CONTACTS } from './data.js'

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className='wrapper'>
      <Row>
        <Section size="small">
            <p className="page-title">{HEADER.name}</p>
            <p className="page-subtitle">{HEADER.position}</p>
        </Section>
        <Section size="large" customClass="info-box">
            <p className="text-gray">{HEADER.about}</p>
        </Section>
      </Row>
      <p className="divider">&#12336;</p>
      <Row>
            <Section
                size="small"
                id="skills"
                title="Skills"
            >
              {LISTS.map((list, index) =>
                <List
                    key={index}
                    title={list.title}
                    list={list.list}
                />
              )}
            </Section>
            <Section
                size="large"
                id="experience"
                title="Experience"
            >
                {EXPERIENCES.map((experience, index) =>
                    <Item
                        key={index}
                        break={experience.break}
                        suptext={experience.suptext}
                        sectionHead={experience.sectionHead}
                        title={experience.title}
                        subtitle={experience.subtitle}
                        copy={experience.copy}
                    />
                )}
            </Section>
      </Row>
      <p className="divider">&#12336;</p>
      <Row>
        <Section size="small" id="info" title="Contact">
            {CONTACTS.map((contact, index) =>
                <Contact
                    key={index}
                    title={contact.title}
                    list={contact.list}
                />
            )}
        </Section>
        <Section size="large" id="background" title="Background">
            {BACKGROUNDS.map((background, index) =>
                <Item
                    key={index}
                    break={background.break}
                    suptext={background.suptext}
                    sectionHead={background.sectionHead}
                    title={background.title}
                    subtitle={background.subtitle}
                    copy={background.copy}
                />
            )}
        </Section>
      </Row>
    </div>
  )
}

export default App
