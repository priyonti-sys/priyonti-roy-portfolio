(() => {
  'use strict';

  const experiences = [
    {
      id: 'soas',
      company: 'Student Organization Account Service · University of Michigan',
      mark: 'M',
      role: 'Financial Services Representative',
      location: 'Ann Arbor, Michigan',
      date: 'August 2026 - Present',
      summary: 'Supporting financial account operations and student leaders at an office serving more than 1,700 University of Michigan student organizations.',
      bullets: [
        'Interpret university financial guidelines, address account needs, and help student leaders navigate financial processes and requirements.',
        'Maintain and update student organization financial accounts using the SOAS Dashboard and Google Suite.',
        'Handle account adjustments, payment-related requests, freezes, deficits, and signer changes.',
        'Provide timely support to student leaders through email, phone, and in-person interactions.'
      ],
      tools: ['SOAS Dashboard', 'Google Suite', 'Financial account support', 'University financial guidelines', 'Payment requests', 'Student services', 'Email and phone support']
    },
    {
      id: 'visit-detroit',
      company: 'Visit Detroit',
      mark: 'VD',
      role: 'Destination Partnership Services Intern',
      location: 'Detroit, Michigan',
      date: 'May 2026 - August 2026',
      summary: 'Supported partner operations, CRM data quality, event execution, stakeholder outreach, and destination-industry learning in a fast-paced tourism organization.',
      bullets: [
        'Maintained and improved iDSS partner records by entering, verifying, correcting, and connecting data used for directories, communications, reports, and queries.',
        'Supported new partner onboarding from submitted information through directory creation, account access, invitations, tool instructions, newsletter enrollment, distribution lists, and contact mapping.',
        'Monitored distribution-list engagement and followed up with contacts whose engagement was zero so important partner communications reached the right people.',
        'Contributed to event logistics, registration, outreach, collateral, signage, run-of-show documents, group resumes, site itineraries, and on-site support.',
        'Led a major restaurant-partner data review that corrected outdated records and improved classification between paid partners and Neighborhood Promotion Program participants.',
        'Participated in meetings, consulting discussions, public-facing events, and cross-department learning opportunities to understand Visit Detroit’s business from multiple perspectives.'
      ],
      tools: ['iDSS CRM', 'STOVA', 'Tempest', 'Microsoft Excel', 'Microsoft Word', 'Email outreach', 'Report generation', 'Event operations']
    },
    {
      id: 'general-motors',
      company: 'General Motors Co.',
      mark: 'GM',
      role: 'Student Intern | Community Service',
      location: 'Detroit, Michigan',
      date: 'June 2024 - August 2024',
      summary: 'Collaborated with peers, GM mentors, schools, and community partners to plan and complete projects that improved neighborhoods, public spaces, safety, access, and team development.',
      bullets: [
        'Helped distribute more than 60,000 pounds of fresh food to hundreds of families in one day.',
        'Supported neighborhood cleanup and restoration projects in Hamtramck, including sidewalks, parks, signage, school facilities, stadium bleachers, and residential address visibility.',
        'Assisted a school IT department by organizing and cleaning electronic equipment and supplies.',
        'Completed CPR and AED training, career workshops, mock interviews, debate activities, and team problem-solving challenges.',
        'Built professional relationships with mentors and retirees while developing teamwork, communication, responsibility, and community awareness.'
      ],
      tools: ['Community engagement', 'Project execution', 'Team collaboration', 'Public safety', 'Career readiness', 'CPR/AED', 'Communication']
    },
    {
      id: 'math-corps',
      company: 'Wayne State University Math Corps',
      mark: 'MC',
      role: 'Mathematics Assistant Teacher',
      location: 'Detroit, Michigan',
      date: 'June 2022 - August 2022',
      summary: 'Helped students strengthen mathematical understanding by combining structured explanation, small-group collaboration, targeted feedback, and encouragement.',
      bullets: [
        'Guided students through step-by-step problem solving and logical reasoning rather than simply providing answers.',
        'Facilitated small-group sessions that encouraged students to explain their thinking and learn collaboratively.',
        'Monitored progress, identified gaps in understanding, and adjusted support to meet individual learning needs.',
        'Developed patience, clarity, classroom awareness, and the ability to translate complex ideas into understandable steps.'
      ],
      tools: ['Instruction', 'Mentoring', 'Quantitative reasoning', 'Small-group facilitation', 'Progress monitoring', 'Feedback']
    }
  ];

  const projects = [
    {
      id: 'restaurant-modernization',
      number: '01',
      title: 'Restaurant Partner Data Modernization',
      category: 'Data & Operations',
      featured: true,
      summary: 'Identified outdated restaurant records, proposed a focused review, and improved how active, closed, moved, paid, and NPP-supported businesses were represented in iDSS.',
      tags: ['Data quality', 'iDSS', 'Stakeholder outreach', 'Segmentation'],
      context: 'Restaurant information changes frequently because locations close, move, or operate under larger tenant relationships. Outdated records made outreach, queries, lead distribution, and partner classification less reliable.',
      actions: [
        'Raised the data-quality concern to my manager and helped turn it into a defined internship project.',
        'Called and emailed restaurant contacts to verify current business information and correct outdated records.',
        'Updated contact details, account status, and communication-list connections in iDSS.',
        'Reviewed restaurants connected through Bedrock, Greektown, Eastern Market, and other tenant relationships.',
        'Separated paid partners from businesses included through the Neighborhood Promotion Program so teams could identify each relationship more clearly.',
        'Closed accounts for businesses confirmed as closed and contacted moved businesses to discuss renewing outside the NPP relationship.'
      ],
      impact: 'Created a cleaner, more accurate restaurant-partner dataset and a clearer distinction between paid membership and program-based participation. The work improved internal visibility, future outreach, and the usefulness of partner queries.',
      skills: ['Process improvement', 'Data validation', 'CRM maintenance', 'Professional communication', 'Research', 'Judgment', 'Initiative']
    },
    {
      id: 'partner-onboarding',
      number: '02',
      title: 'New Partner Onboarding Workflow',
      category: 'Data & Operations',
      featured: false,
      summary: 'Supported new partners from initial information collection through directory publication, system access, communication setup, and early engagement follow-up.',
      tags: ['Partner lifecycle', 'CRM', 'Directory setup', 'Communication'],
      context: 'New partners need accurate public information, working system access, clear instructions, and properly connected communication records before they can receive the full value of their partnership.',
      actions: [
        'Collected new-partner information submitted through Tally and reviewed it for completeness.',
        'Created or updated company records and directory information in iDSS.',
        'Prepared directory listings and sent partners confirmation when their information was ready.',
        'Created login information, issued invitations, and provided instructions for using iDSS and the Tempest-linked experience.',
        'Connected partners to newsletters and distribution lists and mapped the main contact and member-of-record fields for reliable queries.',
        'Monitored distribution engagement and reached out when a contact showed zero engagement.'
      ],
      impact: 'Helped create a more consistent onboarding experience while improving data completeness, communication access, and partner readiness.',
      skills: ['Onboarding', 'Attention to detail', 'Email communication', 'CRM administration', 'Customer service', 'Follow-up']
    },
    {
      id: 'npp-lifecycle',
      number: '03',
      title: 'Neighborhood Promotion Program Account Review',
      category: 'Data & Operations',
      featured: false,
      summary: 'Reviewed businesses that had closed or moved, updated account status, and contacted eligible businesses about continuing their relationship after leaving an NPP location.',
      tags: ['NPP', 'Account lifecycle', 'Retention outreach', 'CRM'],
      context: 'Businesses can qualify for Visit Detroit visibility through location-based program relationships. When a business closes or moves, its account and membership pathway need to be reassessed.',
      actions: [
        'Reviewed a list of NPP businesses identified as moved or closed.',
        'Closed iDSS accounts for businesses that were no longer operating.',
        'Verified moved locations and determined when a business no longer fell under the program relationship.',
        'Contacted moved businesses to ask whether they wanted to renew as direct partners.'
      ],
      impact: 'Improved account accuracy and created a thoughtful transition path for businesses that could continue as paid partners after moving.',
      skills: ['Account management', 'Retention outreach', 'Data cleanup', 'Policy application', 'Professional judgment']
    },
    {
      id: 'celebrate-services-week',
      number: '04',
      title: 'National Celebrate Services Week',
      category: 'Events',
      featured: false,
      summary: 'Led planning and execution for Visit Detroit’s celebration in partnership with the Event Service Professionals Association.',
      tags: ['Event planning', 'Logistics', 'Partner engagement', 'Leadership'],
      context: 'The celebration required coordination across logistics, timing, venue needs, partner participation, and event communications.',
      actions: [
        'Coordinated event logistics, venue considerations, timeline development, and partner engagement.',
        'Tracked planning needs and helped move deliverables from preparation through execution.',
        'Prepared materials and communications supporting a smooth participant experience.',
        'Collaborated with Visit Detroit colleagues and external partners connected to the celebration.'
      ],
      impact: 'Demonstrated ownership of a multi-step event project and strengthened my ability to coordinate people, details, and deadlines.',
      skills: ['Event leadership', 'Scheduling', 'Logistics', 'Cross-functional coordination', 'Communication']
    },
    {
      id: 'event-operations',
      number: '05',
      title: 'Detroit Event Operations Portfolio',
      category: 'Events',
      featured: false,
      summary: 'Supported the Detroit Grand Prix, a partner mixer, and Hometown Tourist Day through setup, registration, public-facing communication, exhibitor support, and networking.',
      tags: ['On-site operations', 'Registration', 'Networking', 'Hospitality'],
      context: 'Each event served a different audience—business partners, visitors, local residents, exhibitors, and destination stakeholders—requiring adaptable on-site support.',
      actions: [
        'Helped set up Visit Detroit’s lounge at the Detroit Grand Prix and spoke with guests about the organization while networking with other companies in the space.',
        'Supported registration at a partner mixer held at Detroit City Distillery for partner 100 Proof, using iDSS CRM and STOVA to manage attendee and event information.',
        'Helped exhibitors set up and navigate Hometown Tourist Day at Campus Martius and monitored the event to keep activities moving smoothly.',
        'Provided welcoming, responsive support while representing Visit Detroit in public-facing environments.'
      ],
      impact: 'Built confidence in live event operations, professional networking, visitor interaction, and the fast decision-making required on event day.',
      skills: ['Hospitality', 'Registration operations', 'Public speaking', 'Problem solving', 'Networking', 'Brand representation']
    },
    {
      id: 'event-documents',
      number: '06',
      title: 'Client and Event Planning Documents',
      category: 'Data & Operations',
      featured: false,
      summary: 'Developed Run of Show, Group Resume, and Site Itinerary materials to support client events, site visits, and operational coordination.',
      tags: ['Run of Show', 'Group Resume', 'Site Itinerary', 'Documentation'],
      context: 'Client events and site visits rely on clear documents that translate many details into an operational plan teams can follow.',
      actions: [
        'Organized timing, contacts, locations, and responsibilities into structured event documents.',
        'Prepared Run of Show materials to clarify sequence and ownership.',
        'Built Group Resume and Site Itinerary documents to support internal coordination and client movement.',
        'Reviewed details for consistency and practical usability.'
      ],
      impact: 'Supported smoother coordination by turning dispersed event details into accessible, action-oriented documents.',
      skills: ['Business writing', 'Operational planning', 'Document design', 'Detail management', 'Microsoft Word']
    },
    {
      id: 'symphony-session',
      number: '07',
      title: 'Symphony Report Education Session',
      category: 'Events',
      featured: false,
      summary: 'Supported registration, questionnaires, and event planning for a learning session on the Symphony Intelligence Platform and tourism performance data.',
      tags: ['Tourism analytics', 'Event support', 'Learning', 'Registration'],
      context: 'The education session introduced participants to a tourism analytics platform that combines travel data sources and tracks tourism, hotel, and economic metrics.',
      actions: [
        'Assisted with registration processes, questionnaires, and planning details.',
        'Supported the session environment so attendees could focus on the speaker and content.',
        'Learned how destination organizations use analytics to understand visitation, hotel performance, and economic impact.',
        'Requested and helped initiate an intern learning meeting with the Vice President of Marketing and Communications to better understand social media and departmental support.'
      ],
      impact: 'Expanded my understanding of data-informed destination strategy while demonstrating curiosity and initiative in creating additional learning access for interns.',
      skills: ['Tourism analytics awareness', 'Executive communication', 'Event coordination', 'Curiosity', 'Professional development']
    },
    {
      id: 'veterans-games',
      number: '08',
      title: 'National Veterans Wheelchair Games Volunteer Support',
      category: 'Community',
      featured: false,
      summary: 'Volunteered during the National Veterans Wheelchair Games hosted in Detroit, contributing to a major adaptive sports and community event.',
      tags: ['Volunteer service', 'Accessibility', 'Community event', 'Detroit'],
      context: 'The National Veterans Wheelchair Games brought veterans, organizers, volunteers, and visitors together for a large-scale adaptive sports experience.',
      actions: [
        'Volunteered as part of the event’s Detroit support network.',
        'Contributed to a welcoming environment for participants and guests.',
        'Observed the operational scale and coordination required for a national sports event.'
      ],
      impact: 'Added to my community-service experience and deepened my appreciation for accessible events, volunteer coordination, and veteran-centered programming.',
      skills: ['Volunteer service', 'Event awareness', 'Accessibility mindset', 'Community engagement']
    },
    {
      id: 'gm-community',
      number: '09',
      title: 'GM Community Impact Projects',
      category: 'Community',
      featured: false,
      summary: 'Completed a portfolio of neighborhood, school, food-access, safety, and public-space projects with peers and GM mentors.',
      tags: ['60,000+ lbs food', 'Hamtramck', 'Teamwork', 'Public service'],
      context: 'The internship combined direct community service with professional development and team-based execution.',
      actions: [
        'Distributed more than 60,000 pounds of fresh food to hundreds of families.',
        'Cleaned a quarter mile of sidewalk, restored park areas, removed hazards, and improved public signage.',
        'Added visible addresses to more than 20 homes to support identification and emergency response.',
        'Helped arrange school bathroom repairs and installed in-stall trash cans to support hygienic menstrual-product disposal.',
        'Stained stadium bleachers, replaced welcome signs, organized IT equipment, and completed multiple neighborhood improvement tasks.',
        'Participated in CPR/AED training, mock interviews, debate, and collaborative problem-solving exercises.'
      ],
      impact: 'Created visible community improvements while developing practical teamwork, accountability, safety awareness, and professional readiness.',
      skills: ['Community project execution', 'Teamwork', 'Safety', 'Hands-on problem solving', 'Professional development']
    },
    {
      id: 'math-corps-support',
      number: '10',
      title: 'Math Corps Student Support',
      category: 'Education',
      featured: false,
      summary: 'Helped students build quantitative confidence through guided reasoning, small-group instruction, progress monitoring, and targeted feedback.',
      tags: ['Teaching', 'Mentoring', 'Mathematics', 'Feedback'],
      context: 'Students often need both conceptual explanation and confidence-building support to make progress in mathematics.',
      actions: [
        'Explained mathematical ideas through clear, step-by-step reasoning.',
        'Facilitated collaborative problem-solving sessions and encouraged students to explain their approaches.',
        'Observed performance, identified learning gaps, and adjusted support accordingly.',
        'Provided feedback that emphasized improvement and understanding.'
      ],
      impact: 'Helped create an encouraging learning environment and earned recognition as an Excellent Teaching Assistant.',
      skills: ['Teaching', 'Mentoring', 'Quantitative reasoning', 'Communication', 'Patience', 'Assessment']
    }
  ];

  const skillCategories = [
    {
      id: 'operations',
      label: 'Operations & Data',
      summary: 'I help student leaders navigate account processes, maintain reliable records, document details, and turn operational needs into clear next steps.',
      skills: ['Financial account support', 'University financial guidelines', 'Account adjustments', 'Payment requests', 'Deficit and freeze support', 'Signer changes', 'CRM database management', 'Data entry and validation', 'Report generation', 'Account lifecycle management', 'Process improvement', 'Documentation', 'Quality control']
    },
    {
      id: 'partnerships',
      label: 'Partnerships & Communication',
      summary: 'I support partner relationships through responsive communication, clear onboarding, thoughtful follow-up, and accurate contact management.',
      skills: ['Partner onboarding', 'Stakeholder coordination', 'Phone and email outreach', 'Customer service', 'Professional correspondence', 'Engagement follow-up', 'Relationship management', 'Public-facing communication', 'Networking', 'Cross-functional collaboration']
    },
    {
      id: 'events',
      label: 'Events & Service',
      summary: 'I contribute before, during, and after events by coordinating logistics, preparing materials, supporting registration, and helping participants feel welcomed.',
      skills: ['Event planning', 'Registration support', 'Venue and timeline coordination', 'Run of Show', 'Group Resume', 'Site Itinerary', 'Exhibitor support', 'Signage and collateral', 'On-site troubleshooting', 'Hospitality', 'Volunteer coordination']
    },
    {
      id: 'tools',
      label: 'Tools & Systems',
      summary: 'I use financial account systems and productivity tools to manage student organization accounts, partner data, communications, and documents.',
      skills: ['SOAS Dashboard', 'Google Suite', 'iDSS CRM', 'STOVA', 'Tempest', 'Microsoft Excel', 'Microsoft Word', 'Tally forms', 'Email distribution systems', 'Database reporting']
    },
    {
      id: 'leadership',
      label: 'Leadership & Community',
      summary: 'I take initiative, learn from feedback, support teams, and connect professional work to community needs.',
      skills: ['Project ownership', 'Initiative', 'Team collaboration', 'Community engagement', 'Mentoring', 'Small-group facilitation', 'Problem solving', 'Adaptability', 'Time management', 'Curiosity', 'Professional development']
    }
  ];

  const achievements = [
    {
      icon: '◆',
      title: 'Initiated a High-Value Data Project',
      text: 'Noticed outdated restaurant partner information, raised the issue, and helped turn it into a major internship project focused on accuracy and segmentation.',
      label: 'Visit Detroit · 2026'
    },
    {
      icon: '◎',
      title: 'Led Celebrate Services Week Planning',
      text: 'Coordinated logistics, venue considerations, timelines, and partner engagement for Visit Detroit’s celebration with the Event Service Professionals Association.',
      label: 'Event leadership'
    },
    {
      icon: '★',
      title: 'Most Valuable Player',
      text: 'Recognized as MVP during the General Motors community service internship for contribution, teamwork, and engagement.',
      label: 'General Motors · 2024'
    },
    {
      icon: '∑',
      title: 'Excellent Teaching Assistant',
      text: 'Recognized by Wayne State University Math Corps for supporting student learning with patience, clarity, and strong quantitative guidance.',
      label: 'Math Corps · 2022'
    },
    {
      icon: '↗',
      title: 'Created an Executive Learning Opportunity',
      text: 'Proactively requested a meeting with the Vice President of Marketing and Communications so interns could learn how the department supports Visit Detroit.',
      label: 'Professional curiosity'
    },
    {
      icon: '♥',
      title: '60,000+ Pounds of Food Distributed',
      text: 'Helped deliver fresh food to hundreds of families in a single day as part of a broader portfolio of community improvement projects.',
      label: 'Community impact'
    },
    {
      icon: '✓',
      title: 'Partner Operations at Scale',
      text: 'Supported CRM records for more than 250 partners and helped onboard more than 20 new partners through structured data and communication workflows.',
      label: 'Partner services'
    }
  ];

  const mapLocations = {
    downtown: {
      label: 'Downtown Detroit',
      title: 'Visit Detroit',
      text: 'Partner operations, events, destination marketing support, CRM data quality, and community-facing experiences.',
      tags: ['Partnerships', 'Events', 'Tourism']
    },
    wayne: {
      label: 'Midtown Detroit',
      title: 'Wayne State University Math Corps',
      text: 'Mathematics instruction, mentoring, small-group facilitation, and student progress support.',
      tags: ['Education', 'Mentoring', 'Mathematics']
    },
    hamtramck: {
      label: 'Hamtramck',
      title: 'General Motors Community Projects',
      text: 'Food access, neighborhood cleanup, school improvements, public safety, park restoration, and community teamwork.',
      tags: ['Community', 'Safety', 'Service']
    }
  };

  const sections = [
    { label: 'Home', detail: 'Introduction and impact snapshot', target: 'index.html', icon: '⌂' },
    { label: 'About', detail: 'Background and working principles', target: 'about.html', icon: '○' },
    { label: 'Experience', detail: 'SOAS, Visit Detroit, GM, and Math Corps', target: 'experience.html', icon: '↗' },
    { label: 'Projects', detail: 'Detailed project portfolio', target: 'projects.html', icon: '◇' },
    { label: 'Skills', detail: 'Capabilities and systems', target: 'skills.html', icon: '⌘' },
    { label: 'Education', detail: 'Michigan Ross and credentials', target: 'education.html', icon: 'M' },
    { label: 'Contact', detail: 'Email, phone, and LinkedIn', target: 'contact.html', icon: '@' }
  ];

  const $ = (selector, parent = document) => parent.querySelector(selector);
  const $$ = (selector, parent = document) => [...parent.querySelectorAll(selector)];

  function escapeHtml(value) {
    return String(value)
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#039;');
  }

  function setModalState(open) {
    document.body.classList.toggle('modal-open', open);
  }

  function showToast(message) {
    const toast = $('#toast');
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(showToast.timeout);
    showToast.timeout = setTimeout(() => toast.classList.remove('show'), 2400);
  }

  function initTheme() {
    const root = document.documentElement;
    let stored = null;
    try {
      stored = localStorage.getItem('pr-theme');
    } catch {
      stored = null;
    }
    const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    root.dataset.theme = stored || (systemDark ? 'dark' : 'light');

    $('#themeToggle').addEventListener('click', () => {
      const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
      root.dataset.theme = next;
      try {
        localStorage.setItem('pr-theme', next);
      } catch {
        // Theme still works when storage is unavailable.
      }
      showToast(`${next[0].toUpperCase() + next.slice(1)} theme enabled`);
    });
  }

  function initMobileMenu() {
    const button = $('#mobileMenuBtn');
    const nav = $('#navLinks');
    button.addEventListener('click', () => {
      const isOpen = button.getAttribute('aria-expanded') === 'true';
      button.setAttribute('aria-expanded', String(!isOpen));
      button.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
      nav.classList.toggle('open', !isOpen);
    });

    $$('#navLinks a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-label', 'Open navigation');
    }));
  }

  function initRotatingRole() {
    const roles = ['financial account support', 'student services', 'partnership operations', 'data accuracy', 'stakeholder communication'];
    const element = $('#rotatingRole');
    let index = 0;
    setInterval(() => {
      index = (index + 1) % roles.length;
      element.classList.remove('swap');
      void element.offsetWidth;
      element.textContent = roles[index];
      element.classList.add('swap');
    }, 2600);
  }

  function initRevealAndCounters() {
    $$('[data-delay]').forEach(el => {
      el.style.setProperty('--reveal-delay', `${el.dataset.delay}ms`);
    });

    const counterObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const element = entry.target;
        const target = Number(element.dataset.counter);
        const suffix = element.dataset.suffix || '';
        const duration = 1500;
        const start = performance.now();

        function update(now) {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(target * eased);
          element.textContent = `${current.toLocaleString()}${suffix}`;
          if (progress < 1) requestAnimationFrame(update);
        }

        requestAnimationFrame(update);
        counterObserver.unobserve(element);
      });
    }, { threshold: 0.6 });

    $$('[data-counter]').forEach(el => counterObserver.observe(el));

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      $$('.reveal').forEach(el => el.classList.add('visible'));
      return;
    }

    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -30px' });

    $$('.reveal').forEach(el => revealObserver.observe(el));
  }

  function initScrollUI() {
    const progress = $('#scrollProgress');
    const navLinks = $$('#navLinks a');
    const page = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
      const active = link.getAttribute('href') === page;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'page');
    });

    const update = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;

    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
  }

  function renderExperienceTabs(activeIndex = 0) {
    const tabs = $('#experienceTabs');
    tabs.innerHTML = experiences.map((item, index) => `
      <button class="experience-tab" role="tab" id="tab-${escapeHtml(item.id)}" aria-selected="${index === activeIndex}" aria-controls="experiencePanel" tabindex="${index === activeIndex ? '0' : '-1'}" data-exp-index="${index}">
        <span class="experience-tab-index">0${index + 1}</span>
        <span>
          <strong>${escapeHtml(item.company)}</strong>
          <span>${escapeHtml(item.role)}</span>
          <small>${escapeHtml(item.date)}</small>
        </span>
      </button>
    `).join('');

    $$('.experience-tab', tabs).forEach(button => {
      button.addEventListener('click', () => {
        setActiveExperience(Number(button.dataset.expIndex));
      });

      button.addEventListener('keydown', event => {
        if (!['ArrowDown', 'ArrowUp', 'ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) return;
        event.preventDefault();

        const currentIndex = Number(button.dataset.expIndex);
        let nextIndex = currentIndex;
        if (event.key === 'ArrowDown' || event.key === 'ArrowRight') nextIndex = (currentIndex + 1) % experiences.length;
        if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + experiences.length) % experiences.length;
        if (event.key === 'Home') nextIndex = 0;
        if (event.key === 'End') nextIndex = experiences.length - 1;

        setActiveExperience(nextIndex, true);
      });
    });
  }

  function setActiveExperience(index, moveFocus = false) {
    const buttons = $$('.experience-tab', $('#experienceTabs'));
    buttons.forEach((button, buttonIndex) => {
      const isActive = buttonIndex === index;
      button.setAttribute('aria-selected', String(isActive));
      button.tabIndex = isActive ? 0 : -1;
    });

    renderExperiencePanel(index);

    if (moveFocus && buttons[index]) {
      buttons[index].focus();
    }
  }

  function renderExperiencePanel(index = 0) {
    const item = experiences[index];
    const panel = $('#experiencePanel');
    if (!item || !panel) return;

    panel.setAttribute('aria-labelledby', `tab-${item.id}`);
    panel.innerHTML = `
      <div class="exp-topline">
        <div>
          <div class="exp-company"><span class="exp-company-mark">${escapeHtml(item.mark)}</span>${escapeHtml(item.company)} · ${escapeHtml(item.location)}</div>
          <h3>${escapeHtml(item.role)}</h3>
        </div>
        <span class="exp-date">${escapeHtml(item.date)}</span>
      </div>
      <p class="exp-summary">${escapeHtml(item.summary)}</p>
      <ul class="exp-bullets">
        ${item.bullets.map(bullet => `<li>${escapeHtml(bullet)}</li>`).join('')}
      </ul>
      <div class="exp-tools">${item.tools.map(tool => `<span>${escapeHtml(tool)}</span>`).join('')}</div>
    `;

    panel.animate(
      [{ opacity: 0, transform: 'translateX(10px)' }, { opacity: 1, transform: 'translateX(0)' }],
      { duration: 300, easing: 'ease-out' }
    );
  }

  let activeProjectFilter = 'All';

  function renderProjectFilters() {
    const categories = ['All', ...new Set(projects.map(project => project.category))];
    const filters = $('#projectFilters');
    filters.innerHTML = categories.map(category => `
      <button class="filter-btn ${category === activeProjectFilter ? 'active' : ''}" data-filter="${escapeHtml(category)}" aria-pressed="${category === activeProjectFilter}">${escapeHtml(category)}</button>
    `).join('');

    $$('.filter-btn', filters).forEach(button => {
      button.addEventListener('click', () => {
        activeProjectFilter = button.dataset.filter;
        renderProjectFilters();
        renderProjects();
      });
    });
  }

  function renderProjects() {
    const query = $('#projectSearch').value.trim().toLowerCase();
    const filtered = projects.filter(project => {
      const categoryMatch = activeProjectFilter === 'All' || project.category === activeProjectFilter;
      const searchable = [project.title, project.category, project.summary, project.context, ...project.tags, ...project.skills].join(' ').toLowerCase();
      return categoryMatch && (!query || searchable.includes(query));
    });

    $('#projectGrid').innerHTML = filtered.map((project, index) => `
      <article class="project-card ${project.featured ? 'featured' : ''}" style="animation-delay:${index * 35}ms">
        <div class="project-top">
          <span class="project-number">PROJECT ${escapeHtml(project.number)}</span>
          <span class="project-category">${escapeHtml(project.category)}</span>
        </div>
        <h3>${escapeHtml(project.title)}</h3>
        <p>${escapeHtml(project.summary)}</p>
        <div class="project-tags">${project.tags.slice(0, 4).map(tag => `<span>${escapeHtml(tag)}</span>`).join('')}</div>
        <button class="project-open" data-project-id="${escapeHtml(project.id)}" aria-label="View details for ${escapeHtml(project.title)}">
          <span>View project details</span><span aria-hidden="true">+</span>
        </button>
      </article>
    `).join('');

    $('#projectEmpty').hidden = filtered.length > 0;
    $$('.project-open').forEach(button => button.addEventListener('click', () => openProject(button.dataset.projectId)));
  }

  function openProject(id) {
    const project = projects.find(item => item.id === id);
    if (!project) return;

    $('#projectModalContent').innerHTML = `
      <div class="modal-hero">
        <p class="section-kicker">${escapeHtml(project.category)} · Project ${escapeHtml(project.number)}</p>
        <h2 id="projectModalTitle">${escapeHtml(project.title)}</h2>
        <p>${escapeHtml(project.summary)}</p>
        <div class="modal-tags">${project.tags.map(tag => `<span>${escapeHtml(tag)}</span>`).join('')}</div>
      </div>
      <div class="modal-body">
        <section class="modal-section">
          <h3>Context</h3>
          <p>${escapeHtml(project.context)}</p>
        </section>
        <section class="modal-section">
          <h3>What I did</h3>
          <ul>${project.actions.map(action => `<li>${escapeHtml(action)}</li>`).join('')}</ul>
        </section>
        <section class="modal-section">
          <h3>Value created</h3>
          <p>${escapeHtml(project.impact)}</p>
        </section>
        <section class="modal-section">
          <h3>Skills applied</h3>
          <div class="modal-tags">${project.skills.map(skill => `<span>${escapeHtml(skill)}</span>`).join('')}</div>
        </section>
      </div>
    `;

    const modal = $('#projectModal');
    modal.showModal();
    setModalState(true);
  }

  function initProjectModal() {
    const modal = $('#projectModal');
    $('#projectModalClose').addEventListener('click', () => modal.close());
    modal.addEventListener('click', event => {
      if (event.target === modal) modal.close();
    });
    modal.addEventListener('close', () => setModalState(false));
    $('#projectSearch')?.addEventListener('input', renderProjects);
  }

  function initResumeModal() {
    const modal = $('#resumeModal');
    $('#resumePreviewBtn')?.addEventListener('click', () => {
      modal.showModal();
      setModalState(true);
    });
    $('#resumeModalClose').addEventListener('click', () => modal.close());
    modal.addEventListener('click', event => {
      if (event.target === modal) modal.close();
    });
    modal.addEventListener('close', () => setModalState(false));
  }

  function initMap() {
    const nodes = $$('.map-node');
    function selectLocation(id) {
      const location = mapLocations[id];
      if (!location) return;
      nodes.forEach(node => node.classList.toggle('active', node.dataset.mapId === id));
      const detail = $('#mapDetail');
      detail.innerHTML = `
        <p class="map-label">${escapeHtml(location.label)}</p>
        <h3>${escapeHtml(location.title)}</h3>
        <p>${escapeHtml(location.text)}</p>
        <div class="map-tags">${location.tags.map(tag => `<span>${escapeHtml(tag)}</span>`).join('')}</div>
      `;
      detail.animate([{ opacity: 0.35, transform: 'translateY(8px)' }, { opacity: 1, transform: 'translateY(0)' }], { duration: 260, easing: 'ease-out' });
    }

    nodes.forEach(node => {
      node.addEventListener('click', () => selectLocation(node.dataset.mapId));
      node.addEventListener('mouseenter', () => selectLocation(node.dataset.mapId));
      node.addEventListener('keydown', event => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          selectLocation(node.dataset.mapId);
        }
      });
    });
    selectLocation('downtown');
  }

  function renderSkillCategories(activeIndex = 0) {
    const categoryContainer = $('#skillCategories');
    categoryContainer.innerHTML = skillCategories.map((category, index) => `
      <button class="skill-category-btn" role="tab" aria-selected="${index === activeIndex}" data-skill-index="${index}">
        <span>${escapeHtml(category.label)}</span><span>${String(category.skills.length).padStart(2, '0')}</span>
      </button>
    `).join('');

    $$('.skill-category-btn', categoryContainer).forEach(button => {
      button.addEventListener('click', () => {
        const index = Number(button.dataset.skillIndex);
        renderSkillCategories(index);
        renderSkills(index);
      });
    });
  }

  function renderSkills(index = 0) {
    const category = skillCategories[index];
    $('#skillSummary').innerHTML = `<p class="section-kicker">${escapeHtml(category.label)}</p><h3>${escapeHtml(category.label)}</h3><p>${escapeHtml(category.summary)}</p>`;
    $('#skillCloud').innerHTML = category.skills.map((skill, skillIndex) => `<span class="skill-pill" style="animation-delay:${skillIndex * 28}ms">${escapeHtml(skill)}</span>`).join('');
  }

  function renderAchievements() {
    $('#achievementTrack').innerHTML = achievements.map(achievement => `
      <article class="achievement-card">
        <span class="achievement-icon" aria-hidden="true">${escapeHtml(achievement.icon)}</span>
        <h3>${escapeHtml(achievement.title)}</h3>
        <p>${escapeHtml(achievement.text)}</p>
        <small>${escapeHtml(achievement.label)}</small>
      </article>
    `).join('');

    const track = $('#achievementTrack');
    const move = direction => {
      const card = $('.achievement-card', track);
      const distance = card ? card.getBoundingClientRect().width + 18 : 330;
      track.scrollBy({ left: direction * distance, behavior: 'smooth' });
    };
    $('#achievementPrev').addEventListener('click', () => move(-1));
    $('#achievementNext').addEventListener('click', () => move(1));
  }

  function buildGmailComposeUrl({ to, subject = '', body = '' }) {
    const params = new URLSearchParams({
      view: 'cm',
      fs: '1',
      to,
      su: subject,
      body
    });
    return `https://mail.google.com/mail/?${params.toString()}`;
  }

  function initContact() {
    $$('.copy-btn').forEach(button => {
      button.addEventListener('click', async () => {
        const text = button.dataset.copy;
        try {
          await navigator.clipboard.writeText(text);
        } catch {
          const textArea = document.createElement('textarea');
          textArea.value = text;
          document.body.appendChild(textArea);
          textArea.select();
          document.execCommand('copy');
          textArea.remove();
        }
        showToast('Copied to clipboard');
      });
    });

    const form = $('#contactForm');
    if (!form) return;

    form.addEventListener('submit', event => {
      event.preventDefault();

      if (!form.reportValidity()) return;

      const name = $('#senderName').value.trim();
      const email = $('#senderEmail').value.trim();
      const subject = $('#messageSubject').value.trim();
      const message = $('#messageBody').value.trim();
      const body = `Hello Priyonti,\n\n${message}\n\nFrom: ${name}\nEmail: ${email}`;
      const gmailUrl = buildGmailComposeUrl({
        to: 'priyonti@umich.edu',
        subject,
        body
      });
      const mailtoUrl = `mailto:priyonti@umich.edu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      // Open a blank tab immediately so browsers recognize this as a user-initiated action.
      const draftWindow = window.open('about:blank', '_blank');
      if (draftWindow) {
        draftWindow.opener = null;
        draftWindow.location.replace(gmailUrl);
        showToast('Gmail draft opened in a new tab');
      } else {
        // Fallback for strict popup blockers or browsers without Gmail access.
        window.location.href = mailtoUrl;
      }
    });
  }

  let commandItems = [];
  let commandSelection = 0;

  function buildCommandItems() {
    commandItems = [
      ...sections.map(section => ({ ...section, type: 'section' })),
      ...projects.map(project => ({
        label: project.title,
        detail: `${project.category} · ${project.tags.slice(0, 2).join(', ')}`,
        target: project.id,
        icon: '◇',
        type: 'project'
      })),
      { label: 'Email Priyonti', detail: 'Open a Gmail draft', target: 'https://mail.google.com/mail/?view=cm&fs=1&to=priyonti%40umich.edu', icon: '@', type: 'external' },
      { label: 'Open LinkedIn', detail: 'linkedin.com/in/priyonti', target: 'https://www.linkedin.com/in/priyonti', icon: 'in', type: 'external' },
      { label: 'Download résumé', detail: 'Priyonti Roy résumé PDF', target: 'assets/Priyonti_Roy_Resume.pdf', icon: '↓', type: 'download' }
    ];
  }

  function renderCommandResults() {
    const query = $('#commandInput').value.trim().toLowerCase();
    const visible = commandItems.filter(item => !query || `${item.label} ${item.detail}`.toLowerCase().includes(query)).slice(0, 12);
    commandSelection = Math.min(commandSelection, Math.max(visible.length - 1, 0));
    $('#commandResults').innerHTML = visible.length ? visible.map((item, index) => `
      <button class="command-result ${index === commandSelection ? 'active' : ''}" data-command-index="${index}">
        <span class="command-result-icon">${escapeHtml(item.icon)}</span>
        <span><strong>${escapeHtml(item.label)}</strong><small>${escapeHtml(item.detail)}</small></span>
        <kbd>↵</kbd>
      </button>
    `).join('') : '<p class="empty-state">No matching item found.</p>';

    $$('.command-result').forEach((button, index) => {
      button.addEventListener('mouseenter', () => {
        commandSelection = index;
        renderCommandResults();
      });
      button.addEventListener('click', () => executeCommand(visible[index]));
    });
    return visible;
  }

  function executeCommand(item) {
    if (!item) return;
    $('#commandModal').close();
    if (item.type === 'section') {
      window.location.href = item.target;
    } else if (item.type === 'project') {
      if ($('#projectGrid')) openProject(item.target);
      else window.location.href = `projects.html?project=${encodeURIComponent(item.target)}`;
    } else if (item.type === 'external') {
      window.open(item.target, '_blank', 'noopener');
    } else if (item.type === 'download') {
      const anchor = document.createElement('a');
      anchor.href = item.target;
      anchor.download = '';
      anchor.click();
    } else {
      window.location.href = item.target;
    }
  }

  function initCommandPalette() {
    buildCommandItems();
    const modal = $('#commandModal');
    const input = $('#commandInput');

    const open = () => {
      commandSelection = 0;
      input.value = '';
      renderCommandResults();
      modal.showModal();
      setModalState(true);
      requestAnimationFrame(() => input.focus());
    };

    $('#commandBtn').addEventListener('click', open);
    $('#commandClose').addEventListener('click', () => modal.close());
    input.addEventListener('input', () => {
      commandSelection = 0;
      renderCommandResults();
    });

    input.addEventListener('keydown', event => {
      const visible = renderCommandResults();
      if (event.key === 'ArrowDown') {
        event.preventDefault();
        commandSelection = Math.min(commandSelection + 1, visible.length - 1);
        renderCommandResults();
      } else if (event.key === 'ArrowUp') {
        event.preventDefault();
        commandSelection = Math.max(commandSelection - 1, 0);
        renderCommandResults();
      } else if (event.key === 'Enter') {
        event.preventDefault();
        executeCommand(visible[commandSelection]);
      }
    });

    document.addEventListener('keydown', event => {
      const shortcut = (event.ctrlKey || event.metaKey) && event.key.toLowerCase() === 'k';
      const slash = event.key === '/' && !['INPUT', 'TEXTAREA'].includes(document.activeElement.tagName);
      if (shortcut || slash) {
        event.preventDefault();
        if (!modal.open) open();
      }
    });

    modal.addEventListener('click', event => {
      if (event.target === modal) modal.close();
    });
    modal.addEventListener('close', () => setModalState(false));
  }

  function init() {
    $('#currentYear').textContent = new Date().getFullYear();
    initTheme();
    initMobileMenu();
    if ($('#rotatingRole')) initRotatingRole();
    initRevealAndCounters();
    initScrollUI();
    if ($('#experienceTabs')) {
      renderExperienceTabs(0);
      renderExperiencePanel(0);
    }
    if ($('#projectGrid')) {
      renderProjectFilters();
      renderProjects();
    }
    initProjectModal();
    initResumeModal();
    if ($('#mapDetail')) initMap();
    if ($('#skillCategories')) {
      renderSkillCategories(0);
      renderSkills(0);
    }
    if ($('#achievementTrack')) renderAchievements();
    initContact();
    initCommandPalette();
    if ($('#projectGrid')) {
      const projectId = new URLSearchParams(window.location.search).get('project');
      if (projectId) openProject(projectId);
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
