"""Build the six portfolio pages and homepage from site-template.html.

Run `python build_pages.py` after changing shared navigation, footer, or copy.
"""

from pathlib import Path
import re

root = Path(__file__).parent
template = (root / "site-template.html").read_text(encoding="utf-8")
main_match = re.search(r'  <main id="main">\n(.*?)\n  </main>', template, re.S)
if not main_match:
    raise ValueError("Cannot find the shared template's main element")

sections = {
    match.group(1): match.group(0)
    for match in re.finditer(
        r'^    <section[^>]+id="([^"]+)"[^>]*>.*?^    </section>',
        main_match.group(1),
        re.M | re.S,
    )
}

pages = {
    "index.html": ("home",),
    "about.html": ("about", "impact"),
    "experience.html": ("experience", "achievements"),
    "projects.html": ("projects",),
    "education.html": ("education",),
    "contact.html": ("contact",),
}

for filename, page_sections in pages.items():
    missing = set(page_sections) - sections.keys()
    if missing:
        raise ValueError(f"Missing sections for {filename}: {sorted(missing)}")
    main = '  <main id="main" class="page-main">\n' + '\n\n'.join(sections[id] for id in page_sections) + '\n  </main>'
    content = template[:main_match.start()] + main + template[main_match.end():]
    content = content.replace('<body>', f'<body data-page="{filename[:-5]}">', 1)
    if filename != "index.html":
        content = content.replace('<a class="skip-link" href="#main">Skip to content</a>', '<a class="skip-link" href="#main">Skip to content</a>')
    (root / filename).write_text(content, encoding="utf-8")

print("Built " + ", ".join(pages))
