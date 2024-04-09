import React from 'react';
import { useState } from 'react';


export default function BasicTestScreen() {
    const [responses, setResponses] = useState<string[]>([]);

    return (
        <div>
            <h1>This is a placeholder for the basic test.</h1>
        </div>
    )
}