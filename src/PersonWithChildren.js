import React from 'react';

const personWithChildren = (props) => {
    return (
        <div>
            <p>I am {props.name} and I am {props.age} years </p>
            <p>{props.children}</p>
        </div>
        )
};

export default personWithChildren;