// AppCalculator.js
import React, { useState } from 'react';
import AppActionButton from './AppActionButton';
import './AppCalculator.css'; // <--- TUTAJ IMPORTUJEMY PLIK STYLI

const AppCalculator = () => {
    // Zarządzanie Stanem:
    const [numberA, setNumberA] = useState('');
    const [numberB, setNumberB] = useState('');
    const [result, setResult] = useState(0); 
    const [comparisonResult, setComparisonResult] = useState('Wprowadź liczby'); 

    // --- Funkcje Pomocnicze i Logika (bez zmian) ---

    const getNumbers = () => {
        const numA = parseFloat(numberA) || 0;
        const numB = parseFloat(numberB) || 0;
        return { numA, numB };
    };

    const performComparison = (a, b) => {
        const numA = parseFloat(a) || 0;
        const numB = parseFloat(b) || 0;

        if (a === '' && b === '') {
             return 'Wprowadź liczby do pól A i B';
        }

        if (numA > numB) {
            return `A (${numA}) jest większe niż B (${numB})`;
        } else if (numA < numB) {
            return `A (${numA}) jest mniejsze niż B (${numB})`;
        } else if (numA === numB && (a !== '' || b !== '')) {
            return `A (${numA}) jest równe B (${numB})`;
        }
        
        return 'Oczekuję na dane...';
    };

    const handleOperation = (operation) => {
        const { numA, numB } = getNumbers();
        let calculatedResult;

        switch (operation) {
            case 'ADD': calculatedResult = numA + numB; break;
            case 'SUBTRACT': calculatedResult = numA - numB; break;
            case 'MULTIPLY': calculatedResult = numA * numB; break;
            case 'DIVIDE':
                calculatedResult = (numB === 0) ? 'Błąd: Dzielenie przez 0' : numA / numB;
                break;
            default: calculatedResult = 0;
        }

        setResult(calculatedResult);
    };

    const handleNumberAChange = (event) => {
        const value = event.target.value;
        setNumberA(value);
        setComparisonResult(performComparison(value, numberB));
    };

    const handleNumberBChange = (event) => {
        const value = event.target.value;
        setNumberB(value);
        setComparisonResult(performComparison(numberA, value));
    };

    // --- Renderowanie (JSX z klasami CSS) ---
    return (
        <div className="app-calculator">
            <h3>🔢 Kalkulator AppCalculator</h3>

            {/* Pola Input A i B (Punkt 1) */}
            <div className="input-group">
                <label htmlFor="inputA">A:</label>
                <input
                    id="inputA" type="number" value={numberA} onChange={handleNumberAChange} placeholder="Liczba A"
                />
            </div>
            <div className="input-group">
                <label htmlFor="inputB">B:</label>
                <input
                    id="inputB" type="number" value={numberB} onChange={handleNumberBChange} placeholder="Liczba B"
                />
            </div>

            <hr />
            
            {/* Pole Wyniku Porównania */}
            <div className="comparison-section">
                <p>📈 Wynik Porównania:</p>
                <input
                    id="comparisonDisplay"
                    type="text"
                    value={comparisonResult}
                    readOnly 
                />
            </div>

            {/* Przyciski Akcji (Działania, Punkt 3) */}
            <div className="action-buttons">
                <AppActionButton label="Dodaj (+)" onClick={() => handleOperation('ADD')} />
                <AppActionButton label="Odejmij (-)" onClick={() => handleOperation('SUBTRACT')} />
                <AppActionButton label="Pomnóż (*)" onClick={() => handleOperation('MULTIPLY')} />
                <AppActionButton label="Podziel (/)" onClick={() => handleOperation('DIVIDE')} />
            </div>

            {/* Pole Wyniku Działania (Punkt 2) */}
            <div className="result-display">
                <label htmlFor="resultDisplay">Wynik Działania:</label>
                <input
                    id="resultDisplay"
                    type="text"
                    value={result}
                    readOnly
                />
            </div>
        </div>
    );
};

export default AppCalculator;