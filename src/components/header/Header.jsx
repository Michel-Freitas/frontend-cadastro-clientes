import './Header.css';
import React from 'react';
import { Button } from 'react-bootstrap';

const Header = (props) => {
    const { title, labelButton} = props;

    return (
        <div className="cliente-header">
            <h2> {title} </h2>
            <Button size="sm" onClick={() => props.actionButton()}> {labelButton} </Button>
        </div>
    )
}

export default Header