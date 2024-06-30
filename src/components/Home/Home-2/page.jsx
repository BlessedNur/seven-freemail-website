import React from 'react';
import styles from './page.module.css';

function page() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.contentContainer}>
          <h1 className={styles.heading}> <span>60+</span> Technologies Registered <br /> Our Platform</h1>
          
          <p className={styles.paragraph}>
            Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Laborum
            officia <br />doloremque soluta qui esse cumque id, facere <br /> modi
            odit maiores  modi odit maiores  modi odit maiores modi <br /> odit
            maiores modi odit maiores.
          </p>
          
          <div className={styles.technologyButtons}>
            <button className={styles.technologyButton}>.HTML</button>
            <button className={styles.technologyButton}>.css</button>
            <button className={styles.technologyButton}>.Python</button>
            <button className={styles.technologyButton}>.Flutter</button>
            <button className={styles.searchButton}>+ Search more</button>
          </div>
        </div>
        <div className={styles.profileImageContainer}>
          <img src="/images/Group 2157.png" alt="#" />
        </div>
      </section>
    </>
  );
}

export default page;