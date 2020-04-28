import React from 'react';

// Functional component that just processes a render
function Header() {
    return (
        <header style={headerStyle}>
            <h1>
                Todo List
            </h1>
        </header>
    )
};

const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px',
};

export default Header;
