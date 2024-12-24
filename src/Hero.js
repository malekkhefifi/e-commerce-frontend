// src/Hero.js
import React from 'react';
import styles from './Hero.module.css'; // Import the CSS file

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.siteName}>ChicShop</div> {/* Nom du site avec animation */}
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>Bienvenue chez ChicShop</h1>
        <p className={styles.heroDescription}>
          Découvrez les dernières tendances mode pour toute la famille.
        </p>
        <a href="#shop" className={styles.heroButton}>
          Explorer nos collections
        </a>
      </div>
    </section>
  );
};

export default Hero;








