import html2canvas from "html2canvas";
import jsPDF from "jspdf";

type Props = {
  targetId: string;
};

const ExportReport = ({ targetId }: Props) => {
  const handleExport = async () => {
    const element = document.getElementById(targetId);
    if (!element) return;

    const canvas = await html2canvas(element, {
      scale: 2,
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const width = 210;
    const height = (canvas.height * width) / canvas.width;

    pdf.addImage(imgData, "PNG", 0, 0, width, height);

    pdf.save("resume-report.pdf");
  };

  return (
    <div className="flex justify-end">
      <button
        onClick={handleExport}
        className="bg-violet-600 hover:bg-violet-700 text-white px-5 py-3 rounded-2xl transition-all"
      >
        Export PDF Report
      </button>
    </div>
  );
};

export default ExportReport;