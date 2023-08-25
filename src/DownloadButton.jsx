import React from 'react';

const DownloadButton = () => {
  const handleDownload = () => {
    // Replace 'your-pdf-file.pdf' with the actual path to your PDF file
    const pdfUrl = './assets/CV/Recato,Jean';
    
    // Trigger the file download
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.target = '_blank'; // Open in a new tab
    link.download = 'Recato,Jean Lorenz.pdf';
    link.click();
  };

  return (
    <button onClick={handleDownload}>Download PDF</button>
  );
};

export default DownloadButton;
