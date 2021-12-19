import React, { Component } from 'react'
import styles from './footer.module.css'
export default class Footer extends Component {
    render() {
        return (
            <footer className={styles.mainFooter}>
                Made with love by Gabriela Costa - All Rights Reserved
            </footer>
        )
    }
}