import React from "react";
import { Document, Page } from "react-pdf";
import Button from "react-bootstrap/Button";
import { AiOutlineDownload } from "react-icons/ai";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

function DocumentSection({ file, title, downloadLabel, scale }) {
  return (
    <section className="resume-doc-section">
      <header className="resume-doc-section__header">
        <h2 className="resume-doc-section__title">{title}</h2>
        <Button
          variant="primary"
          href={file}
          target="_blank"
          rel="noopener noreferrer"
          className="resume-doc-section__btn"
        >
          <AiOutlineDownload />
          &nbsp;{downloadLabel}
        </Button>
      </header>
      <div className="resume-doc-section__preview">
        <Document file={file} className="resume-doc-section__document">
          <Page pageNumber={1} scale={scale} />
        </Document>
      </div>
    </section>
  );
}

export default DocumentSection;
