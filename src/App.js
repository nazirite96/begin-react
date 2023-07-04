import React from 'react';
import Hello from './Hello';
import Wrapper from "./Wrapper";
import './App.css'

function App() {
    const name = 'react';
    const style = {
        backgroundColor: 'black',
        color: 'aqua',
        fontSize: 24,
        padding: '1rem'
    }
    return (
        <Wrapper>
            <Hello name="react" color="red" isSpecial></Hello>
            <Hello color="pink"></Hello>
            <div style={style}>{name}</div>
            <div className="gray-box"></div>
        </Wrapper>
    );
}

export default App;
