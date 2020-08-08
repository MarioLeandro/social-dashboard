import React from 'react';
import './style.css';


interface CardProps {
    logo: string;
    aname: string;
    number: string;
    followers: string;
    seta: string;
    dia: string;
    cor?: string;
    top?: string;
}

const Card: React.FC<CardProps> = (props) => (
<div id="card" style={{borderTopColor: props.top}}>
    <div id="l1">
        <img src={props.logo} alt="fb" />
    <label className="anames"
    id="aname">
        {props.aname}
    </label>
    </div>
    
    <br/>

    <label className="fnumber"
    id="number">
        {props.number}
    </label>
    <label className="followers"
    id="follow">
        {props.followers}
    </label>
    <div id="l4">
    <img src={props.seta} alt="up" id="iconb"/>
    <label className="today"
    id="day" style={{color: props.cor}}>
        {props.dia}
    </label>
    </div>
    
</div>
);

export default Card;