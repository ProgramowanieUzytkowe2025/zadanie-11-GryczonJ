import React from 'react';

const AppCalculationHistory = ({ history, onRestore  }) => {
    if (history.length === 0) {
        return <p style={{ textAlign: 'center', color: '#666' }}>Brak wykonanych działań w historii.</p>;
    }

    return (
        <div className="calculation-history">
            <h4>Historia Działań</h4>
            
            <table>
                <thead>
                    <tr>
                        <th>Liczba A</th>
                        <th>Działanie</th>
                        <th>Liczba B</th>
                        <th>Wynik</th>
                        <th>Czas</th>
                        <th>Akcja</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {history.map((item, index) => (
                        <tr key={index}>
                            <td>{item.numA}</td>
                            <td>{item.operation}</td>
                            <td>{item.numB}</td>
                            <td>{item.result}</td>
                            <td>{item.timestamp}</td>
                            <td>
                                
                                <button 
                                    onClick={() => onRestore(index)} 
                                    className="restore-button"
                                    title="Wczytaj ten stan i usuń nowsze operacje"
                                >
                                    Wczytaj
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AppCalculationHistory;