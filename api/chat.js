// api/chat.js
export default async function handler(req, res) {
    const { message } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    const systemPrompt = `
    You are the AI assistant for Priyanshu Mishra, a Full Stack Developer and AI Researcher.
    Use this data to answer:
    - Education: JIMS Engineering Management Technical Campus[cite: 3].
    - Research: "Forecasting Financial Futures: A LSTM Framework for Stock Market Prediction"[cite: 1].
    - Key Results: R-squared (R2) of 0.9301, MAPE of 2.92%, and RMSE of $8.39[cite: 101, 102].
    - Technicals: Used 3 years of yfinance data, FinBERT for sentiment analysis, and 60-day look-back sequences[cite: 10, 44, 52].
    - Skills: MERN Stack (MongoDB, Express, React, Node), Python, TensorFlow, and Cybersecurity[cite: 23, 56].
    Keep answers concise, professional, and helpful.
  `;

    try {
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                contents: [{ parts: [{ text: `${systemPrompt}\nUser: ${message}` }] }]
            })
        });

        const data = await response.json();
        const reply = data.candidates[0].content.parts[0].text;
        res.status(200).json({ reply });
    } catch (error) {
        res.status(500).json({ error: "Failed to connect to AI" });
    }
}