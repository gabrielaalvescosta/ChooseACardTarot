import React, { Component } from 'react'
import styles from './header.css'

export default class Header extends Component {
    render() {
        return (
            <header className={styles.header}>
                <h1>Yes or No Tarot</h1>
                <h2>Click on this card below to see the answer of your question.</h2>
            </header>
        )
    }
}