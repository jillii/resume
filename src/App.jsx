import React, { useEffect } from "react"
import AOS from "aos"
import "../node_modules/aos/dist/aos.css"
import './App.css'
import Row from './Row'
import Section from './Section'
import { HEADER, RESUME } from './data'

function App() {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);

  return (
    <div className='wrapper'>
        <div>
            <div className="col">
                <p className="page-title">{HEADER.name}</p>
                <p className="page-subtitle">{HEADER.position}</p>
            </div>
            <div className="col info-box">
                <p className="text-gray">{HEADER.about}</p>
            </div>
        </div>
        <div className="content">
            {RESUME.map((section, index) => 
                <>
                    {index % 2 === 0 && <p className="divider">&#12336;</p>}
                    <Section 
                        id={section.title.toLowerCase()} 
                        title={section.title} 
                        key={index} 
                        content={section.content}
                    />
                </>
            )}
        </div>
    </div>
  )
}

export default App
