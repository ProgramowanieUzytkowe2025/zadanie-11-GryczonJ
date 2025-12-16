import React from 'react';
const AppActionButton = ({ label, onClick, disabled }) => {
    
    return (
        <button 
            onClick={onClick} 
            className="app-action-button"
            disabled={ disabled}
           
        >
            {label}
        </button>
    );
};

export default AppActionButton;