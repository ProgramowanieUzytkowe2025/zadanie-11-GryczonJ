import React from 'react';

const IconA = ({ size, label, onClick }) => {

    const style = {
        fontSize: size,
        cursor: 'pointer',
        margin: '0 5px',
        fontWeight: 'bold',
        transition: 'color 0.1s'
    };

    return (
        <span 
            style={style} 
            onClick={onClick} 
            title={`Ustaw rozmiar: ${label}`}
        >
            A
        </span>
    );
};

const AppHeader = ({ onFontSizeChange }) => {
    const authorName = "Jan Gryczon";

    return (
        <header className="app-header">
            <div className="header-author">
                Autor: {authorName}
            </div>
            
            <div className="header-controls">
                <span style={{ marginRight: '15px' }}>Zmień rozmiar:</span>

               
                <IconA 
                    size="14px" 
                    label="Mały" 
                    onClick={() => onFontSizeChange('small')}
                />
                
                
                <IconA 
                    size="18px" 
                    label="Średni" 
                    onClick={() => onFontSizeChange('medium')}
                />
                
                
                <IconA 
                    size="24px" 
                    label="Duży" 
                    onClick={() => onFontSizeChange('large')}
                />
            </div>
        </header>
    );
};

export default AppHeader;