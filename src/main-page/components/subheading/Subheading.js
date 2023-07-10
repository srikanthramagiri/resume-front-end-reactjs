import React from 'react';
// import {Row, Col} from 'react-bootstrap'
import './subheading.scss'

const Subheading = ({text}) => {
    return (
        <>
            <h3 className='subheading'> {text}</h3>
        </>
    )
}
export default Subheading