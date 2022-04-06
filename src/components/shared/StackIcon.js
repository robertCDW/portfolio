import React from 'react';
import styles from '../css/unique/TechStack.module.css'

export const StackIconTop = ({ item }) => {
    return <li className={`${styles.skill} ${styles.top}`}>{item}</li>
}

export const StackIcon = ({ item }) => {
    return <li className={styles.skill}>{item}</li>
}
