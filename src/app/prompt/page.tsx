"use client"

import { useState } from 'react';

export default function OpenAIChat() {
    const [userInput, setUserInput] = useState(""); // State to track user input
    const [response, setResponse] = useState(""); // State to store API response
    const apiKey = process.env.NEXT_PUBLIC_OPENAI_KEY;
    console.log("API Key is:", apiKey || "Key not found");

    const handleSend = async () => {
        if (!userInput.trim()) return; // Prevent empty submissions

        try {
            const openaiResponse = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${apiKey}`, // Use the API key from the .env file
                },
                body: JSON.stringify({
                    model: "gpt-4",
                    messages: [
                        { role: "system", content: "You are a helpful assistant." },
                        { role: "user", content: userInput },
                    ],
                }),
            });

            if (!openaiResponse.ok) {
                throw new Error(`Error: ${openaiResponse.status}`);
            }

            const data = await openaiResponse.json();
            setResponse(data.choices[0].message.content); // Store the API response
        } catch (error) {
            console.error("Error fetching OpenAI API response:", error);
            setResponse("Sorry, something went wrong. Please try again.");
        }
    };

    return (
        <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
            <h1>Chat with OpenAI</h1>
            {/* <p>{process.env.REACT_APP_OPENAI_KEY}</p> */}
            <textarea
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Type your message here..."
                style={{ width: "100%", height: "100px", marginBottom: "10px", color: "black" }}
            />
            <button onClick={handleSend} style={{ padding: "10px 20px", marginBottom: "20px" }}>
                Send
            </button>
            <div>
                <h2>Response:</h2>
                <p>{response || "No response yet."}</p>
            </div>
        </div>
    );
}
