"use client";
import React, { useState } from 'react';
import styles from './Calculator.module.css';

const BUTTONS = [
  ['7', '8', '9', '/'],
  ['4', '5', '6', '*'],
  ['1', '2', '3', '-'],
  ['0', '.', '=', '+'],
  ['C']
];


export default function Calculator() {
  const [display, setDisplay] = useState('0');

  // Helper to check if last char is operator
  const isOperator = (char: string) => /[+\-*/]/.test(char);

  // Button click handler with improved logic
  const handleClick = (value: string) => {
    if (display === 'Error') {
      setDisplay(value === 'C' ? '0' : value);
      return;
    }
    if (value === 'C') {
      setDisplay('0');
      return;
    }
    if (value === '=') {
      try {
        // Prevent division by zero
        if (/\/0(?!\d)/.test(display)) throw new Error();
        // eslint-disable-next-line no-eval
        const result = eval(display);
        setDisplay(result.toString());
      } catch {
        setDisplay('Error');
      }
      return;
    }
    // Prevent multiple consecutive operators
    if (isOperator(value) && isOperator(display.slice(-1))) {
      return;
    }
    // Prevent multiple decimals in a number
    if (value === '.') {
      const parts = display.split(/[+\-*/]/);
      if (parts[parts.length - 1].includes('.')) return;
    }
    // Replace initial zero unless entering a decimal
    if (display === '0' && value !== '.') {
      setDisplay(value);
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div className={styles.calculator} role="region" aria-label="Calculator">
      <div className={styles.display} data-testid="display" aria-live="polite">{display}</div>
      <div className={styles.buttonGrid} role="group" aria-label="Calculator keypad">
        {BUTTONS.flat().map((btn, i) => (
          <button
            key={i}
            className={styles.button}
            onClick={() => handleClick(btn)}
            aria-label={btn === 'C' ? 'Clear' : btn === '=' ? 'Equals' : btn}
            tabIndex={0}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}
