// ResumePDF.jsx
import jsPDF from "jspdf";

const ResumePDF = ({ experiencesData, educationData, skillsData }) => {
  const handleDownloadPDF = () => {
    const pdf = new jsPDF("p", "mm", "a4");
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const margin = 15;
    let y = 20;

    const addText = (text, options = {}) => {
      const { fontSize = 12, fontStyle = "normal", indent = 0 } = options;
      pdf.setFontSize(fontSize);
      pdf.setFont(undefined, fontStyle);
      const lines = pdf.splitTextToSize(text, pageWidth - 2 * margin - indent);
      lines.forEach((line) => {
        if (y > pageHeight - 20) {
          pdf.addPage();
          y = 20;
        }
        pdf.text(line, margin + indent, y);
        y += fontSize * 0.5 + 3; // dynamic spacing
      });
    };

    const addSectionHeader = (title) => {
      pdf.setDrawColor(50, 115, 220);
      pdf.setFillColor(50, 115, 220);
      pdf.rect(margin, y - 5, pageWidth - 2 * margin, 8, "F"); // colored header bar
      pdf.setTextColor(255, 255, 255);
      addText(title, { fontSize: 14, fontStyle: "bold" });
      pdf.setTextColor(0, 0, 0);
      y += 6;
    };

    // Header
    addText("My Resume", { fontSize: 24, fontStyle: "bold" });
    y += 10;

    // Experience Section
    addSectionHeader("Experience");
    experiencesData.forEach((exp) => {
      addText(`${exp.title}${exp.organization ? ` — ${exp.organization}` : ""}`, { fontStyle: "bold", fontSize: 12 });
      if (exp.date) addText(exp.date, { fontSize: 10, fontStyle: "italic" });
      exp.description.forEach((desc) => {
        const text = desc.text || desc;
        addText(desc.subText ? `• ${text} — ${desc.subText}` : `• ${text}`, { indent: 5 });
      });
      y += 4;
    });

    // Education Section
    addSectionHeader("Education");
    educationData.forEach((edu) => {
      addText(edu.title, { fontStyle: "bold", fontSize: 12 });
      if (edu.date) addText(edu.date, { fontSize: 10, fontStyle: "italic" });
      if (edu.description && typeof edu.description === "string") addText(`• ${edu.description}`, { indent: 5 });
      y += 3;
    });

    // Skills Section
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
