import jsPDF from "jspdf"
import { resumeData } from "../resumeData"

export function generateResumePDF() {
  const pdf = new jsPDF()

  const pageWidth = pdf.internal.pageSize.getWidth()
  const pageHeight = pdf.internal.pageSize.getHeight()

  const margin = 20
  const contentWidth = pageWidth - margin * 2

  let y = 20

  // -------------------------
  // Helper: check page space
  // -------------------------
  function checkPageSpace(requiredHeight: number) {
    if (y + requiredHeight > pageHeight - 20) {
      pdf.addPage()
      y = 20
    }
  }

  // -------------------------
  // Helper: section title
  // -------------------------
  function addSectionTitle(title: string) {
    checkPageSpace(15)

    y += 8

    pdf.setFont("helvetica", "bold")
    pdf.setFontSize(13)
    pdf.text(title.toUpperCase(), margin, y)

    y += 3

    pdf.setLineWidth(0.5)
    pdf.line(margin, y, pageWidth - margin, y)

    y += 8
  }

  // -------------------------
  // Header
  // -------------------------
  pdf.setFont("helvetica", "bold")
  pdf.setFontSize(24)
  pdf.text(resumeData.name, margin, y)

  y += 9

  pdf.setFont("helvetica", "normal")
  pdf.setFontSize(13)
  pdf.text(resumeData.title, margin, y)

  y += 7

  pdf.setFontSize(10)
  pdf.text(resumeData.location, margin, y)

  y += 5

  pdf.text("GitHub: github.com/yangronghua", margin, y)

  // -------------------------
  // Summary
  // -------------------------
  addSectionTitle("Professional Summary")

  pdf.setFont("helvetica", "normal")
  pdf.setFontSize(10)

  const summaryLines = pdf.splitTextToSize(
    resumeData.summary,
    contentWidth
  )

  pdf.text(summaryLines, margin, y)

  y += summaryLines.length * 5 + 3

  // -------------------------
  // Skills
  // -------------------------
  addSectionTitle("Skills")

  pdf.setFontSize(10)

  const skillsText = resumeData.skills.join("  •  ")

  const skillLines = pdf.splitTextToSize(
    skillsText,
    contentWidth
  )

  pdf.text(skillLines, margin, y)

  y += skillLines.length * 5 + 3

  // -------------------------
  // Experience
  // -------------------------
  addSectionTitle("Professional Experience")

  resumeData.experience.forEach((job) => {
    checkPageSpace(35)

    pdf.setFont("helvetica", "bold")
    pdf.setFontSize(11)
    pdf.text(job.position, margin, y)

    y += 6

    pdf.setFont("helvetica", "normal")
    pdf.setFontSize(10)
    pdf.text(job.company, margin, y)

    y += 5

    pdf.setFontSize(9)
    pdf.text(`${job.location}  |  ${job.date}`, margin, y)

    y += 6

    job.responsibilities.forEach((responsibility) => {
      const lines = pdf.splitTextToSize(
        responsibility,
        contentWidth - 8
      )

      checkPageSpace(lines.length * 5 + 3)

      pdf.setFontSize(10)

      pdf.text("•", margin, y)

      pdf.text(lines, margin + 5, y)

      y += lines.length * 5 + 2
    })

    y += 5
  })

  // -------------------------
  // Education
  // -------------------------
  addSectionTitle("Education")

  resumeData.education.forEach((education) => {
    checkPageSpace(30)

    pdf.setFont("helvetica", "bold")
    pdf.setFontSize(11)

    const degreeLines = pdf.splitTextToSize(
      education.degree,
      contentWidth
    )

    pdf.text(degreeLines, margin, y)

    y += degreeLines.length * 5 + 2

    pdf.setFont("helvetica", "normal")
    pdf.setFontSize(10)

    pdf.text(education.school, margin, y)

    y += 5

    pdf.setFontSize(9)

    pdf.text(
      `${education.location}  |  ${education.date}`,
      margin,
      y
    )

    y += 5

    if (education.details) {
      const detailLines = pdf.splitTextToSize(
        education.details,
        contentWidth
      )

      pdf.text(detailLines, margin, y)

      y += detailLines.length * 5
    }

    y += 5
  })

  // -------------------------
  // Projects
  // -------------------------
  addSectionTitle("Projects")

  resumeData.projects.forEach((project) => {
    checkPageSpace(30)

    pdf.setFont("helvetica", "bold")
    pdf.setFontSize(11)

    pdf.text(project.name, margin, y)

    y += 6

    pdf.setFont("helvetica", "normal")
    pdf.setFontSize(10)

    const descriptionLines = pdf.splitTextToSize(
      project.description,
      contentWidth
    )

    pdf.text(descriptionLines, margin, y)

    y += descriptionLines.length * 5 + 2

    pdf.setFontSize(9)

    const technologyLines = pdf.splitTextToSize(
      `Technologies: ${project.technologies}`,
      contentWidth
    )

    pdf.text(technologyLines, margin, y)

    y += technologyLines.length * 5 + 2

    pdf.text(`GitHub: ${project.github}`, margin, y)

    y += 8
  })

  // -------------------------
  // Certificates
  // -------------------------
  addSectionTitle("Certificates")

  resumeData.certificates.forEach((certificate) => {
    checkPageSpace(15)

    pdf.setFont("helvetica", "bold")
    pdf.setFontSize(10)

    pdf.text(certificate.name, margin, y)

    y += 5

    pdf.setFont("helvetica", "normal")
    pdf.setFontSize(9)

    pdf.text(certificate.issuer, margin, y)

    y += 8
  })

  // -------------------------
  // Footer / page numbers
  // -------------------------
  const totalPages = pdf.getNumberOfPages()

  for (let i = 1; i <= totalPages; i++) {
    pdf.setPage(i)

    pdf.setFont("helvetica", "normal")
    pdf.setFontSize(8)

    pdf.text(
      `Ronghua Yang | Page ${i} of ${totalPages}`,
      pageWidth / 2,
      pageHeight - 10,
      {
        align: "center",
      }
    )
  }

  // -------------------------
  // Filename
  // -------------------------
  const now = new Date()

  const dateTime = now
    .toISOString()
    .slice(0, 16)
    .replace("T", "-")
    .replace(":", "-")

  pdf.save(
    `Ronghua-Yang-Resume-${dateTime}.pdf`
  )
}