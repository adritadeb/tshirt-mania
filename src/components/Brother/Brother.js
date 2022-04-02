import React from 'react';
import Special from '../Special/Special';

const Brother = ({ house }) => {
    return (
        <div>
            <h4>Brother</h4>
            <p><small>House: {house}</small></p>
            <Special></Special>
        </div>
    );
};

export default Brother;