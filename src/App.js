import React, { useState } from 'react';
import Sentiment from 'sentiment';
import './App.css';

const App = () => {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const sentiment = new Sentiment();

  const handleAnalyze = () => {
    const analysis = sentiment.analyze(text);
    if (analysis.score > 0) {
      setResult('Positive');
    } else if (analysis.score < 0) {
      setResult('Negative');
    } else {
      setResult('Neutral');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sentiment Analysis Dashboard</h1>
        <textarea
          placeholder="Enter text to analyze"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={handleAnalyze}>Analyze Sentiment</button>
        {result && <h2>Sentiment: {result}</h2>}
      </header>
    </div>
  );
};
//hello tanvir
export default App;
