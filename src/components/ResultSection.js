import React from 'react';
import '../App.css';

const ResultSection = ({ sentimentScores, overallResult }) => (
  <div className="result-section">
    <h2>Sentiment Analysis Result:</h2>
    <p>Positive: {sentimentScores.positive}%</p>
    <p>Neutral: {sentimentScores.neutral}%</p>
    <p>Negative: {sentimentScores.negative}%</p>
    <h3>Overall Sentiment: {overallResult}</h3>
  </div>
);

export default ResultSection;
