// AppActionButton.js
import React from 'react';
// Możesz stworzyć osobny AppActionButton.css lub użyć globalnych stylów
// Jeśli chcesz, by buttony były stylizowane centralnie, pomiń to.
// Na razie usuniemy styl inline.

const AppActionButton = ({ label, onClick }) => {
    // Używamy klasy 'app-action-button' dla stylowania
    return (
        <button 
            onClick={onClick} 
            className="app-action-button"
        >
            {label}
        </button>
    );
};

export default AppActionButton;