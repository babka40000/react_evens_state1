import React, { useState } from 'react'
import { ProjectList } from '../ProjectList/ProjectList';
import { Toolbar } from '../Toolbar/Toolbar';
import "./css/portfolio.css";

export const Portfolio = props => {
    const [list, setList] = useState(props.images);
    const [selected, setSelected] = useState('All');

    return (
        <div className='portfolio-main'>

            <Toolbar
                filters={["All", "Websites", "Flayers", "Business Cards"]}
                selected={selected}
                onSelectFilter={(event) => {
                    setSelected(event.target.textContent);
                    event.target.textContent === 'All' ? setList(props.images) : setList(props.images.filter(item => item.category === event.target.textContent))
                }}
            />

            <ProjectList list={list} />
        </div>
    )
}