import React, { useState } from 'react';
import './CommandCard.css';

function CommandCard({ command }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (window.electronAPI) {
      window.electronAPI.copyToClipboard(command.command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } else {
      // Fallback for non-Electron environments
      navigator.clipboard.writeText(command.command);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="command-card">
      <div className="card-header">
        <span className="category-tag">{command.category}</span>
        <span className="difficulty" data-level={command.difficulty}>
          {command.difficulty}
        </span>
      </div>

      <div className="card-body">
        <code className="command-text">{command.command}</code>
        <p className="command-description">{command.description}</p>
        
        {command.example && (
          <div className="command-example">
            <strong>Example:</strong>
            <code>{command.example}</code>
          </div>
        )}
      </div>

      <button 
        className={`copy-btn ${copied ? 'copied' : ''}`}
        onClick={handleCopy}
      >
        {copied ? '✓ Copied!' : '📋 Copy'}
      </button>
    </div>
  );
}

export default CommandCard;