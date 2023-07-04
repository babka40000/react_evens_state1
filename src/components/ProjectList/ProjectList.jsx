import React from 'react'

export const ProjectList = props => {
    return (
        <div>
            {props.list.map((image) => (<img alt='' src={ image.img }></img>))}
        </div>
    )
}