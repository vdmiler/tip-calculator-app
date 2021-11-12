import React from 'react';
import styles from './App.module.scss';
import Navigation from './components/Navigation/Navigation';
import Results from './components/Results/Results';

const App = () => {
  return (
    <div className="App">
      <section className={styles.calculator}>
        <div className="_container">
          <div className={styles.body}>
            <h1 className={styles.title}>
              Splitter
            </h1>
            <div className={styles.tip}>
              <Navigation />
              <Results />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
