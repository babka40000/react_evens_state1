import React from 'react'
import "./css/toolbar.css";

export const Toolbar = props => {
    return (
        <div className='toolbar-main'>
            {props.filters.map((filter) => (<button className={props.selected===filter ? 'toolbar-item-active': 'toolbar-item'} onClick={ props.onSelectFilter }>{ filter }</button>))}    
        </div>
    )
}
