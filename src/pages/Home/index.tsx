import React from 'react';
import Header from '../../components/Header'
import Card from '../../components/Card'
import Facebook from '../../assets/images/icon-facebook.svg';
import Twitter from '../../assets/images/icon-twitter.svg';
import Instagram from '../../assets/images/icon-instagram.svg';
import Youtube from '../../assets/images/icon-youtube.svg';
import Up from '../../assets/images/icon-up.svg';
import Down from '../../assets/images/icon-down.svg';
import './style.css'

const Home = () =>(
    <div className="home">
        <div id="hed">
            <Header />
        </div>
        <div id="cards">
            <Card logo ={Facebook} aname="@nathanf" number="1987" followers="F O L L O W E R S" seta={Up} dia="12 Today" top="hsl(208, 92%, 53%)"/> 
            <Card logo ={Twitter} aname="@nathanf" number="1044" followers="F O L L O W E R S" seta={Up} dia="99 Today" top="hsl(208, 92%, 53%)" />
            <Card logo ={Instagram} aname="@realnathanf" number="11k" followers="F O L L O W E R S" seta={Up} dia="1099 Today" top="#FDC468"/>
            <Card logo ={Youtube} aname="Nathan F." number="8239" followers="S U B S C R I B E R S" seta={Down} dia="144 Today" cor="#DC414C" top="hsl(348, 97%, 39%)"/> 
        </div>
            <h2 id="ov">Overview - Today</h2>
    </div>
    

);

export default Home;