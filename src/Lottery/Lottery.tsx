import React, { useState } from 'react';

interface Props {
    updateCircles: () => number;
}

const Lottery: React.FC<Props> = ({ updateCircles }) => {
    const [currentNumbers, setCurrentNumbers] = useState<number[]>([5, 11, 16, 23, 32]);

    const generateNewNumbers = () => {
        const newNumbers: number[] = [];

        while (newNumbers.length < 5) {
            const randomNumber = Math.floor(Math.random() * 32) + 5;
            if (!newNumbers.includes(randomNumber)) {
                newNumbers.push(randomNumber);
            }
        }

        setCurrentNumbers([...newNumbers.sort((a, b) => a - b)]);
    };

    return (
        <div className="lottery">
            <h2>Lottery</h2>
            <div className="circles">
                <p>Current circle numbers: {currentNumbers.join(', ')}</p>
            </div>
            <button onClick={() => { generateNewNumbers(); updateCircles(); }}>New numbers</button>
        </div>
    );
};

export default Lottery;
