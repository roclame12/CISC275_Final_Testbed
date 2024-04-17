import React, { useEffect, useState } from 'react';
import * as openai from 'openai';

// Initialize OpenAI API
openai.configure({ apiKey: 'YOUR_OPENAI_API_KEY' }); // Replace 'YOUR_OPENAI_API_KEY' with your actual API key

const ReportScreen: React.FC<{ responses: string[] }> = ({ responses }) => {
    const [report, setReport] = useState<string[]>([]);

    useEffect(() => {
        const generateReport = async () => {
            try {
                const reportPrompt = `Based on your answers, suggest the best major for me.`;
                const reportResponse = await openai.chat.completions.create({
                    engine: "gpt-4", // Choose the GPT model
                    prompt: reportPrompt,
                    maxTokens: 50
                });

                const suggestedMajors: string[] = reportResponse.choices.map(choice => choice.text.trim());
                setReport(suggestedMajors);
            } catch (error) {
                console.error("Error generating report:", error);
            }
        };

        generateReport();
    }, [responses]);

    return (
        <div>
            <h2>Test Completed!</h2>
            <h3>Recommended Majors:</h3>
            <ul>
                {report.map((major, index) => (
                    <li key={index}>{major}</li>
                ))}
            </ul>
        </div>
    );
};

export default ReportScreen;
