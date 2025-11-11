// ResumePDF.jsx
import jsPDF from "jspdf";

const ResumePDF = ({ experiencesData, educationData, skillsData }) => {
  const handleDownloadPDF = () => {
    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 15;
    let y = 20;
    const lineSpacing = 6; // consistent vertical spacing

    const checkPageEnd = (linesCount = 1) => {
      const estimatedHeight = linesCount * lineSpacing;
      if (y + estimatedHeight > pageHeight - 15) {
        pdf.addPage();
        y = 20;
      }
    };

    const addText = (text, options = {}) => {
      if (!text) return;
      const { fontSize = 11, fontStyle = "normal", indent = 0 } = options;
      pdf.setFontSize(fontSize);
      pdf.setFont("helvetica", fontStyle);
      const maxWidth = pageWidth - 2 * margin - indent;
      const lines = pdf.splitTextToSize(text, maxWidth);
      checkPageEnd(lines.length);
      lines.forEach((line) => {
        pdf.text(line, margin + indent, y);
        y += lineSpacing;
      });
      y += 1; // small space after paragraph
    };

    const addSectionHeader = (title) => {
      checkPageEnd();
      pdf.setDrawColor(30, 70, 160);
      pdf.setFillColor(30, 70, 160);
      pdf.rect(margin, y - 4, pageWidth - 2 * margin, 8, "F");
      pdf.setTextColor(255, 255, 255);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(13);
      pdf.text(title.toUpperCase(), margin + 2, y + 2);
      pdf.setTextColor(0, 0, 0);
      y += 10;
    };

    const addLink = (label, url) => {
      if (!label || !url) return;
      pdf.setTextColor(0, 0, 255);
      pdf.textWithLink(`• ${label}`, margin + 5, y, { url });
      pdf.setTextColor(0, 0, 0);
      y += lineSpacing;
    };

    // === HEADER ===
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(22);
    pdf.text("Joel Chacón Castillo — Résumé", margin, y);
    y += 12;

    // === EXPERIENCE ===
    addSectionHeader("Experience");
    experiencesData.forEach((exp) => {
      const header = `${exp.title}${exp.organization ? ` — ${exp.organization}` : ""}`;
      addText(header, { fontStyle: "bold", fontSize: 12 });
      if (exp.date) addText(exp.date, { fontSize: 10, fontStyle: "italic" });

      if (Array.isArray(exp.description)) {
        exp.description.forEach((desc) => {
          if (typeof desc === "string" && desc.trim()) {
            addText(`• ${desc}`, { indent: 5 });
          } else if (desc?.text) {
            addText(`• ${desc.text}`, { indent: 5 });
          } else if (desc?.link?.label && desc?.link?.url) {
            addLink(desc.link.label, desc.link.url);
          }
        });
      }
      y += 2;
    });

    // === EDUCATION ===
    addSectionHeader("Education");
    educationData.forEach((edu) => {
      addText(edu.title, { fontStyle: "bold", fontSize: 12 });
      if (edu.date) addText(edu.date, { fontSize: 10, fontStyle: "italic" });
      if (edu.description && typeof edu.description === "string") {
        addText(`• ${edu.description}`, { indent: 5 });
      }
      y += 2;
    });

    // === SKILLS ===
    addSectionHeader("Skills");
    skillsData.forEach((skill) => {
      addText(`• ${skill.category}: ${skill.skills.join(", ")}`, { indent: 5 });
    });

    pdf.save("Resume.pdf");
  };

  return (
    <button
      onClick={handleDownloadPDF}
      className="flex items-center gap-2 bg-blue-700 hover:bg-blue-800 dark:bg-[#233648] text-white rounded-lg h-10 px-4 font-bold transition-colors"
    >
      <span className="material-symbols-outlined text-base">download</span>
      <span>Download PDF</span>
    </button>
  );
};

export default ResumePDF;
