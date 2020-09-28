import React from 'react';

const personaBind = (props) => {
    return (
        <div>
            <p onClick={props.click}>I am {props.name} and I am {props.age} years </p>
            <p>{props.children}</p>
        </div>
        )
};

export default personaBind;