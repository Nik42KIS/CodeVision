import React, { useState } from 'react';
import styles from './CodeBar.module.css';
import HTMLeditor from '../Editor/HTMLeditor';
import CSSeditor from '../Editor/CSSeditor';
import JSeditor from '../Editor/JSeditor';

const CodeBar = () => {
  const [activeTab, setActiveTab] = useState('html');

  return (
    <div className={styles.codebar}>
      <nav className={styles.tab}>
        <button
          onClick={() => setActiveTab('html')}
          className={`${styles.item} ${activeTab === 'html' ? styles.activeTab : ''}`}>
          HTML
        </button>

        <button
          onClick={() => setActiveTab('css')}
          className={`${styles.item} ${activeTab === 'css' ? styles.activeTab : ''}`}>
          CSS
        </button>

        <button
          onClick={() => setActiveTab('js')}
          className={`${styles.item} ${activeTab === 'js' ? styles.activeTab : ''}`}>
          JS
        </button>
      </nav>
      <div className={styles.editor}>
        {activeTab === 'html' ? <HTMLeditor /> : null}
        {activeTab === 'css' ? <CSSeditor /> : null}
        {activeTab === 'js' ? <JSeditor /> : null}
      </div>
    </div>
  );
};

export default CodeBar;
