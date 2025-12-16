// AppCalculator.js
import React, { useState } from 'react';
import AppActionButton from './AppActionButton';
import AppCalculationHistory from './AppCalculationHistory';
import './AppCalculator.css'; 

const AppCalculator = () => {
    const [numberA, setNumberA] = useState('');
    const [numberB, setNumberB] = useState('');
    const [result, setResult] = useState(0); 
    const [comparisonResult, setComparisonResult] = useState('Wprowadź liczby'); 
    const areInputsValid = numberA !== '' && numberB !== '';

    const [calculationHistory, setCalculationHistory] = useState([]);

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
        else if (a === '') {
            return 'Wprowadź liczbę do pola A';
        }
        else if (b === '') {
            return 'Wprowadź liczbę do pola B';
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
        let operationSymbol;

        switch (operation) {
            case 'ADD': calculatedResult = numA + numB; operationSymbol = '+'; break;
            case 'SUBTRACT': calculatedResult = numA - numB; operationSymbol = '-'; break;
            case 'MULTIPLY': calculatedResult = numA * numB; operationSymbol = '*'; break;
            case 'DIVIDE':
                calculatedResult = (numB === 0) ? 'Błąd: Dzielenie przez 0' : numA / numB;
                operationSymbol = '/';
                break;
            default: calculatedResult = 0;
        }

        setResult(calculatedResult);

        const newHistoryItem = {
            numA: numA,
            operation: operationSymbol,
            numB: numB,
            result: calculatedResult,
            timestamp: new Date().toLocaleTimeString('pl-PL'), 
        };

        setCalculationHistory([newHistoryItem, ...calculationHistory]);   
    };
    
    const handleRestore = (index) => {
        const restoredItem = calculationHistory[index];
       
        const newHistory = calculationHistory.slice(index);
        
        const newA = String(restoredItem.numA);
        const newB = String(restoredItem.numB);
        
        setNumberA(newA);
        setNumberB(newB);
        
        setResult(restoredItem.result);

        setComparisonResult(performComparison(newA, newB));
        
        setCalculationHistory(newHistory);
    };

    const handleNumberBChange = (event) => {
        const value = event.target.value;
        setNumberB(value);
        setComparisonResult(performComparison(numberA, value));
    };

     const handleNumberAChange = (event) => {
        const value = event.target.value;
        setNumberA(value);
        setComparisonResult(performComparison(value, numberB));

    };


    return (
        <div className="app-calculator">
            <h3>🔢 Kalkulator AppCalculator</h3>

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
            
            <div className="comparison-section">
                <p>📈 Wynik Porównania:</p>
                <input
                    id="comparisonDisplay"
                    type="text"
                    value={comparisonResult}
                    readOnly 
                />
            </div>

            <div className="action-buttons">
                <AppActionButton label="Dodaj (+)" onClick={() => handleOperation('ADD')}           disabled={!areInputsValid} />
                <AppActionButton label="Odejmij (-)" onClick={() => handleOperation('SUBTRACT')}    disabled={!areInputsValid} />
                <AppActionButton label="Pomnóż (*)" onClick={() => handleOperation('MULTIPLY')}     disabled={!areInputsValid} />
                <AppActionButton label="Podziel (/)" onClick={() => handleOperation('DIVIDE')}      disabled={!areInputsValid || parseFloat(numberB) === 0} />
            </div>

            <div className="result-display">
                <label htmlFor="resultDisplay">Wynik Działania:</label>
                <input
                    id="resultDisplay"
                    type="text"
                    value={result}
                    readOnly
                />
            </div>
            <AppCalculationHistory 
                history={calculationHistory} 
                onRestore={handleRestore} 
            />
        </div>
    );
};

export default AppCalculator;