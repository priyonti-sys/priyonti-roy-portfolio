"""Build the downloadable portfolio résumé from Priyonti's latest role updates."""

from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.enums import TA_CENTER, TA_LEFT
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.pagesizes import letter
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, KeepTogether

output = Path(__file__).parent / "assets" / "Priyonti_Roy_Resume.pdf"
doc = SimpleDocTemplate(str(output), pagesize=letter, leftMargin=42, rightMargin=42,
                        topMargin=34, bottomMargin=32, title="Priyonti Roy Resume",
                        author="Priyonti Roy")
navy = colors.HexColor("#102a43")
muted = colors.HexColor("#4b5c68")
font_dir = Path("/usr/share/fonts/truetype/dejavu")
for label, file in (("DejaVu", "DejaVuSans.ttf"), ("DejaVu-Bold", "DejaVuSans-Bold.ttf")):
    pdfmetrics.registerFont(TTFont(label, str(font_dir / file)))
pdfmetrics.registerFontFamily("DejaVu", normal="DejaVu", bold="DejaVu-Bold",
                              italic="DejaVu", boldItalic="DejaVu-Bold")

styles = {
    "name": ParagraphStyle("name", fontName="DejaVu-Bold", fontSize=19, leading=24,
                           textColor=navy, alignment=TA_CENTER, spaceAfter=2),
    "contact": ParagraphStyle("contact", fontName="DejaVu", fontSize=8.5, leading=12,
                              alignment=TA_CENTER, textColor=muted, spaceAfter=11),
    "summary": ParagraphStyle("summary", fontName="DejaVu", fontSize=9.2, leading=14,
                              alignment=TA_LEFT, spaceAfter=11),
    "heading": ParagraphStyle("heading", fontName="DejaVu-Bold", fontSize=10, leading=15,
                              textColor=navy, spaceBefore=13, spaceAfter=7,
                              borderColor=colors.HexColor("#d7e5eb"), borderWidth=.6,
                              borderPadding=3, borderSide="bottom"),
    "role": ParagraphStyle("role", fontName="DejaVu-Bold", fontSize=9.2, leading=14,
                           textColor=navy, spaceBefore=6),
    "sub": ParagraphStyle("sub", fontName="DejaVu", fontSize=8.8,
                          leading=13, textColor=muted, spaceAfter=4),
    "bullet": ParagraphStyle("bullet", fontName="DejaVu", fontSize=8.9, leading=13.6,
                             leftIndent=11, firstLineIndent=-9, spaceAfter=3),
    "compact": ParagraphStyle("compact", fontName="DejaVu", fontSize=8.8,
                              leading=13.5, spaceAfter=4),
}

p = lambda content, style: Paragraph(content, styles[style])
story = [
    p("Priyonti Roy", "name"),
    p("Ann Arbor, Michigan | +1 (313) 707-7119 | priyonti@umich.edu | linkedin.com/in/priyonti", "contact"),
    p("Business Administration student at Michigan Ross with experience in student organization financial services, administrative support, data management, report generation, and stakeholder coordination.", "summary"),
    p("EDUCATION", "heading"),
    p("University of Michigan - Stephen M. Ross School of Business | BBA, expected May 2029 | GPA: 3.71", "compact"),
    p("PROFESSIONAL EXPERIENCE", "heading"),
]

roles = [
    ("U-M Student Organization Account Service | Ann Arbor, MI | August 2026 - Present",
     "Financial Services Representative", [
         "Support financial operations for 1,700+ student organizations by interpreting university guidelines and helping student leaders navigate account processes.",
         "Maintain accounts using the SOAS Dashboard and Google Suite, including adjustments, payment requests, freezes, deficits, and signer changes; respond by email, phone, and in person.",
     ]),
    ("Visit Detroit | Detroit, MI | May 2026 - August 2026",
     "Destination Partnership Services Intern", [
         "Maintained and verified iDSS CRM records for 250+ partners and generated reports and queries to support daily operations.",
         "Onboarded 20+ partners, monitored distribution lists and engagement, supported outreach, and improved restaurant-partner data accuracy.",
     ]),
    ("General Motors Co. | Detroit, MI | June 2024 - August 2024",
     "Student Intern, Community Service", [
         "Worked with peers and GM mentors on community projects, including distributing 60,000+ pounds of food, neighborhood and school improvements, and public safety activities.",
     ]),
    ("Wayne State University Math Corps | Detroit, MI | June 2022 - August 2022",
     "Mathematics Assistant Teacher", [
         "Guided step-by-step problem solving, facilitated small groups, monitored progress, and gave targeted feedback to students.",
     ]),
]
for organization, title, bullets in roles:
    story.append(KeepTogether([p(organization, "role"), p(title, "sub"),
                               *[p("&#8226; " + bullet, "bullet") for bullet in bullets]]))

story += [
    p("ACADEMIC INVOLVEMENT", "heading"),
    p("<b>Accounting Club, general member:</b> Connect with recruiting events, company visits, and accounting coursework support.", "compact"),
    p("<b>Preparation Initiative Program:</b> Completed academic preparation in analytical and quantitative coursework.", "compact"),
    p("SKILLS &amp; RECOGNITION", "heading"),
    p("<b>Skills:</b> SOAS Dashboard, Google Suite, account support, Microsoft Excel, Microsoft Word, iDSS CRM, data entry, database management, report generation, stakeholder communication.", "compact"),
    p("<b>Credentials:</b> NRF Foundation Certified Specialist in Customer Service and Sales; Goldman Sachs Risk Job Simulation.", "compact"),
    p("<b>Languages:</b> English, Bengali, Hindi. <b>Awards:</b> GM Most Valuable Player; Math Corps Excellent Teaching Assistant.", "compact"),
]

doc.build(story)
print(output)
