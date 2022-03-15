import React from "react";
import styles from '../css/shared/PageHeading.module.css'

const PageHeading = ({ value }) => {
  return <h2 className={styles.PageHeading}>{value}</h2>
}

export default PageHeading
