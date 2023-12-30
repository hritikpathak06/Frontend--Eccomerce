import React, { useState } from "react";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faCopy } from '@fortawesome/free-solid-svg-icons';
// import CopyToClipboard from 'react-copy-to-clipboard';
// import './CopyPage.css';

const CopyPage = () => {
  const [inputText, setInputText] = useState("");
  const [copied, setCopied] = useState(false);

  const fontFamilies = [
    "Arial",
    "Times New Roman",
    "Courier New",
    "Verdana",
    "Georgia",
  ];

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    setCopied(false);
  };

  const handleCopy = () => {
    setCopied(true);
  };

  return (
    <div className="font-generator mt-10">
      <h1>Font Generator</h1>
      <textarea
        value={inputText}
        onChange={handleInputChange}
        placeholder="Enter your text here"
      />
      {/* <CopyToClipboard text={inputText} onCopy={handleCopy}>
        <button>
          <FontAwesomeIcon icon={faCopy} />
          {copied ? ' Copied!' : ' Copy to Clipboard'}
        </button>
      </CopyToClipboard> */}

      <div className="font-boxes">
        {fontFamilies.map((font, index) => (
          <div key={index} className="font-box" style={{ fontFamily: font }}>
            {inputText}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CopyPage;
