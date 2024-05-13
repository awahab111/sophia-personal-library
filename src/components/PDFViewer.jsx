import React, { useEffect, useRef } from 'react';

const PDFViewer = ({ url }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const loadingTask = window.pdfjsLib.getDocument(url);
    loadingTask.promise.then(pdf => {
      console.log('PDF loaded');
      
      // Fetch the first page
      const pageNumber = 1;
      pdf.getPage(pageNumber).then(page => {
        console.log('Page loaded');
        
        const scale = 1.5;
        const viewport = page.getViewport({ scale: scale });

        // Prepare canvas using PDF page dimensions
        const canvas = canvasRef.current;
        const context = canvas.getContext('2d');
        canvas.height = viewport.height;
        canvas.width = viewport.width;

        // Render PDF page into canvas context
        const renderContext = {
          canvasContext: context,
          viewport: viewport
        };
        const renderTask = page.render(renderContext);
        renderTask.promise.then(() => {
          console.log('Page rendered');
        });
      });
    }, reason => {
      console.error(reason);
    });
  }, [url]);

  return <canvas ref={canvasRef} />;
};

export default PDFViewer;