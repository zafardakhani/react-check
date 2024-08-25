import React, { useState } from 'react';
import Sentiment from 'sentiment';
import './App.css';

const App = () => {
  const [text, setText] = useState('');
  const [sentimentScores, setSentimentScores] = useState(null);
  const [overallResult, setOverallResult] = useState('');

  const sentiment = new Sentiment();

  const handleUpload = () => {
    const analysis = sentiment.analyze(text);
    const totalScore = analysis.score;
    const totalWords = analysis.tokens.length;

    const positiveWords = analysis.positive.length;
    const negativeWords = analysis.negative.length;
    const neutralWords = totalWords - positiveWords - negativeWords;

    const positivePercentage = ((positiveWords / totalWords) * 100).toFixed(2);
    const negativePercentage = ((negativeWords / totalWords) * 100).toFixed(2);
    const neutralPercentage = ((neutralWords / totalWords) * 100).toFixed(2);

    setSentimentScores({
      positive: positivePercentage,
      negative: negativePercentage,
      neutral: neutralPercentage,
    });

    if (totalScore > 0) {
      setOverallResult('Positive');
    } else if (totalScore < 0) {
      setOverallResult('Negative');
    } else {
      setOverallResult('Neutral');
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Sentiment Analysis Dashboard by Zafar</h1>
        <div className="input-section">
          <textarea
            placeholder="Enter your comment here..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button onClick={handleUpload}>Upload</button>
        </div>
        {sentimentScores && (
          <div className="result-section">
            <h2>Sentiment Analysis Result:</h2>
            <p>Positive: {sentimentScores.positive}%</p>
            <p>Neutral: {sentimentScores.neutral}%</p>
            <p>Negative: {sentimentScores.negative}%</p>
            <h3>Overall Sentiment: {overallResult}</h3>
          </div>
        )}
      </header>
      <img
        src="https://w7.pngwing.com/pngs/505/485/png-transparent-symbiosis-law-school-symbiosis-international-deemed-university-symbiosis-school-of-economics-symbiosis-college-of-arts-and-commerce-symbiosis-society-hyderabad-miscellaneous-text-logo-thumbnail.png"
        alt="Symbiosis Pune Logo"
        className="logo"
      />
    </div>
  );
};

export default App;

