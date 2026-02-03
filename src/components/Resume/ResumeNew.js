import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import DocumentSection from "./DocumentSection";
import resumePdf from "../../Assets/Gil_Resume.pdf";
import cvPdf from "../../Assets/Gil_CV.pdf";
import { AiOutlineDownload } from "react-icons/ai";
import { pdfjs } from "react-pdf";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const DOCS = [
  { file: resumePdf, title: "Resume", downloadLabel: "Download Resume" },
  { file: cvPdf, title: "CV", downloadLabel: "Download CV" },
];

function ResumeNew() {
  const [scale, setScale] = useState(1.7);

  useEffect(() => {
    const onResize = () => setScale(window.innerWidth > 786 ? 1.7 : 0.6);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <div className="resume-page">
      <Container fluid className="resume-section">
        <Particle />
        <div className="resume-page__hero">
          <h1 className="resume-page__title">Resume &amp; CV</h1>
          <p className="resume-page__subtitle">View or download below</p>
          <div className="resume-page__quick-downloads">
            {DOCS.map(({ file, downloadLabel }) => (
              <Button
                key={downloadLabel}
                variant="primary"
                href={file}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-page__quick-btn"
              >
                <AiOutlineDownload />
                &nbsp;{downloadLabel}
              </Button>
            ))}
          </div>
        </div>
        <div className="resume-page__sections">
          {DOCS.map(({ file, title, downloadLabel }) => (
            <DocumentSection
              key={title}
              file={file}
              title={title}
              downloadLabel={downloadLabel}
              scale={scale}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}

export default ResumeNew;
