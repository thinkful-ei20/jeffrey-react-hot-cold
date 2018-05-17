import React from 'react';

import TopNav from './top-nav';
import InfoModal from './info-modal';

import './header.css';

export default function Header(props) {
    return (
        <header>
            <TopNav onNewGame={() => props.onNewGame()} onShowModal={props.onShowModal}/>
            <InfoModal onShowModal={props.onShowModal} showModal={props.showModal} />
            <h1>HOT or COLD</h1>
        </header>
    );
};
