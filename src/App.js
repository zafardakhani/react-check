import React, { useState } from 'react';
import Sentiment from 'sentiment';
import './App.css';
import Header from './components/Header';
import InputSection from './components/InputSection';
import ResultSection from './components/ResultSection';
import Logo from './components/Logo';

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
      <Header />
      <InputSection text={text} setText={setText} handleUpload={handleUpload} />
      {sentimentScores && (
        <ResultSection sentimentScores={sentimentScores} overallResult={overallResult} />
      )}
      <Logo />
    </div>
  );
};

export default App;
