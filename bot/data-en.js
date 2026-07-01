/* ================================================
   PAVEL — bot/data-en.js  v1.0
   English knowledge base for the chatbot.
   Mirrors bot/data.js structure exactly.

   Motor multi-intent: detects multiple questions
   in a single message and replies to each one.

   To enrich the bot in English, edit ONLY this file.
   IMPORTANT: load AFTER data.js and BEFORE js/scroll.js in HTML.

   <script src="bot/data.js?v=1"></script>
   <script src="bot/data-en.js?v=1"></script>   ← this file
   <script src="js/hero.js?v=2"></script>
   <script src="js/scroll.js?v=3"></script>
================================================ */

window.PV_CHATBOT_DATA_EN = {

  /* ════════════════════════════════════════════════
     KNOWLEDGE BASE — "The company" mode
  ════════════════════════════════════════════════ */
  kb: [

    /* ── General services ── */
    {
      section: 'servicios',
      keys: [
        'service', 'services', 'offer', 'offers', 'do you do', 'what do you do',
        'what you do', 'solutions', 'can you help', 'how can you help',
        'what do you offer', 'what you offer', 'specialties', 'capabilities',
        'portfolio of services', 'service portfolio', 'activities'
      ],
      answer: [
        'At **JPO Contracting Unlimited Inc.** we offer professional services specialized in the commercial and residential construction sector. Our main lines are:\n\n- **Architecture and Design**: from concept to construction drawings.\n- **Structural and Civil Engineering**: design, calculation and technical supervision.\n- **Shop Drawings**: detailed fabrication and installation plans.\n- **Permit and Regulatory Management**: obtaining licenses and ensuring code compliance.\n\nEvery project receives personalized attention from the initial consultation through final delivery.',
        'We are a firm based in Oshawa, Canada, specializing in architecture, engineering, shop drawings, and permit services. We work on both residential and commercial projects, guaranteeing quality and on-time delivery.\n\nWould you like more details about any of our service areas?',
        'Our service offering covers the entire construction project cycle:\n\n- Architectural and interior design\n- Structural calculation and seismic analysis\n- Detailed shop drawings for manufacturers\n- Municipal permit and building license procurement\n\nContact us for a no-obligation consultation.'
      ]
    },

    /* ── Business hours ── */
    {
      keys: [
        'hours', 'schedule', 'business hours', 'office hours', 'opening hours',
        'when are you open', 'when do you open', 'when can i call', 'available',
        'availability', 'monday', 'friday', 'weekend', 'saturday', 'sunday',
        'working hours', 'work hours', 'when can i reach you', 'reach you',
        'office schedule', 'contact hours', 'what time'
      ],
      answer: [
        'Our business hours are **Monday to Friday, 8:00 a.m. to 6:00 p.m.** (Toronto time, EST). On Saturdays we are available from 9:00 a.m. to 1:00 p.m. for specific inquiries.\n\nOutside those hours you can leave us a message through the contact form or by email, and we will reply on the next business day.',
        'We attend from **Monday to Friday, 8:00 a.m. to 6:00 p.m.** (EST). On weekends we only handle technical emergencies or active project issues.\n\nIf you would like to schedule a consultation, you can do so at any time through this chat or the contact form.',
        'Our team is available Monday to Friday, from 8 a.m. to 6 p.m. Eastern time. On Saturdays there is limited availability until noon.\n\nFor urgent inquiries outside office hours, write to us and an advisor will get back to you at the start of the next business day.',
        'Regular office hours are **Monday to Friday, 8:00 to 18:00**. If you need an appointment or call, you can request it through the form and we will confirm availability the same day.'
      ]
    },

    /* ── Quote / proposal ── */
    {
      section: 'contacto',
      keys: [
        'proposal', 'quote', 'quotation', 'budget', 'estimate', 'cost',
        'price', 'pricing', 'how much', 'how much does it cost', 'rates',
        'fees', 'investment', 'pay', 'charge', 'package', 'plan',
        'cost per square', 'project cost', 'get a quote', 'request a proposal',
        'free consultation', 'no cost'
      ],
      answer: [
        'To prepare a technical proposal we need to understand the scope of your project. We recommend:\n\n1. Completing the form in the **Contact** section of this page.\n2. Or reaching out to our commercial team directly at **+1 (437) 830-2999** to schedule a free consultation.\n\nThat way we can prepare a proposal tailored to your specific situation.',
        'The cost of each project depends on its scale, location, and the disciplines involved (architecture, engineering, shop drawings or permits). To provide an accurate budget we need a brief prior assessment.\n\nYou can start the process by filling out the contact form or calling us. **The first consultation is free of charge**.',
        'We do not work with standard rates because every project is different. What we do guarantee is a clear, itemized proposal with no hidden charges.\n\nContact our team to receive a personalized technical proposal based on your needs.'
      ]
    },

    /* ── Geographic coverage ── */
    {
      section: 'contacto',
      keys: [
        'country', 'countries', 'where', 'coverage', 'operate', 'presence',
        'international', 'latin america', 'region', 'colombia', 'mexico',
        'peru', 'chile', 'argentina', 'brazil', 'ecuador', 'panama',
        'outside colombia', 'another country', 'do you work in', 'do you have offices',
        'are you in', 'which countries', 'global', 'locations',
        'canada', 'ontario', 'toronto', 'oshawa'
      ],
      answer: [
        'Our main office is located in **Oshawa, Ontario, Canada**, at **489 Fairleigh Ave, Oshawa, ON L1J 2W7**. We primarily serve projects in the province of Ontario and across Canada, although we can also evaluate international projects under specific conditions.\n\nIf your project is in another region, contact us and we will study the feasibility.',
        'We operate from Oshawa, Canada, with coverage across the Canadian territory. We have experience in commercial and residential projects in the Ontario region, and we are open to collaborating in other provinces upon agreement.\n\nDo you have a project in a specific location you would like to ask us about?',
        'We are strategically located in Oshawa, with easy access to major Ontario highways. We serve clients throughout the metropolitan area and the rest of Ontario.\n\nFor projects outside Ontario, we can manage local teams or remote advisory depending on the scope.'
      ]
    },

    /* ── Timelines / deadlines ── */
    {
      section: 'soluciones',
      keys: [
        'timeline', 'deadline', 'duration', 'how long', 'how long does it take',
        'schedule', 'delivery', 'date', 'when will it be done', 'completion time',
        'weeks', 'months', 'years', 'time frame', 'timeframe', 'turnaround',
        'project duration', 'how long does a project take'
      ],
      answer: [
        'Timelines vary depending on project type and scale:\n\n- Architectural consulting and studies: **2 to 6 weeks**\n- Structural design and shop drawings: **4 to 10 weeks**\n- Full projects (design + permits): **3 to 9 months**\n- Large-scale construction projects: **1 to 2 years**\n\nWe always include a detailed schedule in the technical proposal.',
        'Execution times depend on the complexity of the project and municipal processing. As a general reference:\n\n- Architectural and engineering drawings: weeks\n- Detailed shop drawings: weeks\n- Permit management: 2 to 6 months (depending on municipality)\n- Complete construction: months to years\n\nEvery proposal includes a schedule with milestones and partial delivery dates.',
        'We do not set generic timelines because every project has its own conditions. What we do guarantee is a realistic schedule from day one and proactive communication if any variation arises.\n\nOur on-time delivery rate exceeds **95%** across completed projects.'
      ]
    },

    /* ── Technology / tools ── */
    {
      section: 'servicios',
      keys: [
        'software', 'tools', 'programs', 'autocad', 'revit', 'sketchup',
        'bim', 'modeling', 'digital', 'technology', 'platform',
        '3d model', 'rendering', 'visualization'
      ],
      answer: [
        'We work with the most advanced tools in the industry: **AutoCAD, Revit, SketchUp and rendering packages** to deliver high-quality drawings and 3D models that facilitate decision-making and communication with construction teams.\n\nWe also use structural calculation software to ensure safety and efficiency in our designs.',
        'Our digital workflow includes BIM modeling (Revit) to coordinate disciplines, precise shop drawings, and photorealistic renders for client presentations and authority submissions.\n\nWe can adapt to the formats your team requires.',
        'We hold licenses for the main design and calculation programs. If you need a specific format (DWG, PDF, RVT, etc.), we deliver it without problem.'
      ]
    },

    /* ── Certifications and standards ── */
    {
      section: 'servicios',
      keys: [
        'iso', 'certification', 'certifications', 'leed', 'sustainable',
        'sustainability', 'certified', 'standard', 'standards', 'ohsas',
        'quality', 'environmental', 'green building', 'green construction',
        'technical standard', 'accredited', 'accreditation', 'compliant',
        'what certifications', 'are you certified', 'credentials',
        'ontario building code', 'obc'
      ],
      answer: [
        'All our designs and drawings comply with local regulations, including the **Ontario Building Code (OBC)** and applicable municipal codes. We also follow quality best practices in our internal processes.\n\nAlthough we are not formally ISO certified, we apply quality management and safety practices in every project.',
        'We ensure that every project meets all Ontario and municipal construction regulations. We work with registered engineers and architects who sign off on drawings and calculation reports.\n\nIf your project requires specific certifications (LEED, etc.), we can advise and coordinate with external specialists.'
      ]
    },

    /* ── Contact and human assistance ── */
    {
      showContactCard: true,
      section: 'contacto',
      keys: [
        'contact', 'reach you', 'phone', 'email', 'write to you', 'call',
        'advisor', 'human', 'person', 'talk to someone', 'communicate',
        'whatsapp', 'number', 'i want to talk', 'need to speak',
        'how do i contact you', 'want someone to call me', 'schedule',
        'appointment', 'meeting', 'get in touch', 'speak with someone',
        'send me your number', 'give me your number', 'give me a contact',
        'what is your email', 'what is the email', 'pass me the number',
        'some contact', 'any contact'
      ],
      answer: [
        'You can reach us through:\n\n- **Phone / WhatsApp:** +1 (437) 830-2999\n- **Contact form** in the Contact section of this page\n- **Email** (you can request it through this chat)\n- **In-person visit:** 489 Fairleigh Ave, Oshawa, ON L1J 2W7 (by appointment)\n\nAn advisor will get back to you as soon as possible.',
        'Available contact channels:\n\n- Call or WhatsApp at **+1 (437) 830-2999**\n- The contact form on this page\n- Email\n\nIf you prefer, you can also ask us to call you at a specific time and we will arrange it.',
        'Our commercial team is available by phone, WhatsApp, email, and web form. During office hours response is immediate; outside those hours we reply on the next business day.\n\nDo not hesitate to contact us, we are here to help.'
      ]
    },

    /* ── Projects / portfolio ── */
    {
      section: 'proyectos',
      keys: [
        'project', 'projects', 'portfolio', 'examples', 'works', 'past work',
        'what have you built', 'references', 'case studies', 'experience',
        'have you built', 'what projects', 'show me', 'see projects',
        'gallery', 'achievements', 'past clients', 'previous projects',
        'completed work', 'case study', 'track record'
      ],
      answer: [
        'We have a diverse portfolio including residential projects (single-family and multi-family) and commercial projects (offices, retail, mixed-use). We have completed architectural designs, structural calculations, shop drawings, and permit management in the Ontario region.\n\nVisit the **Projects** section of this page to see representative cases. If you need specific references, contact us and we will share examples similar to your project.',
        'We have executed projects for private clients, developers, and general contractors in Ontario. Our work ranges from renovation drawings to full designs for new construction.\n\nIn the **Projects** section you will find a sample of our capabilities. Would you like an advisor to present projects similar to yours?',
        'Our portfolio covers residential and commercial sectors, with an emphasis on design quality and drawing precision. We work with builders, architects, and engineers to deliver impeccable technical documentation.\n\nIf you want to see concrete examples, get in touch and we will send you relevant cases.'
      ]
    },

    /* ── Team / about us ── */
    {
      section: 'nosotros',
      keys: [
        'team', 'who are you', 'who is behind', 'founder', 'director',
        'manager', 'professionals', 'engineers', 'staff', 'about you',
        'about the company', 'history', 'years of experience',
        'how many years', 'when were you founded', 'background', 'about us',
        'who works there', 'specialists', 'company profile'
      ],
      answer: [
        '**JPO Contracting Unlimited Inc.** was incorporated in Ontario in **September 2022**. Our team is led by **Jose Rafael Pardo Ojeda**, who has extensive experience in the construction and engineering sector.\n\nWe work with a network of collaborating professionals (architects, engineers, drafters) to offer a comprehensive and high-quality service.',
        'We are a young but knowledgeable company in architecture, structural engineering, and permit management. Our founder, Jose Rafael Pardo Ojeda, personally oversees each project to ensure excellence.\n\nYou can learn more about us in the **About** section of this site.',
        'We have a multidisciplinary team of registered professionals in Ontario. We specialize in providing agile and efficient technical solutions, adapted to each client\'s needs.\n\nOur commitment is total client satisfaction and meeting agreed deadlines.'
      ]
    },

    /* ── Work process / methodology ── */
    {
      section: 'soluciones',
      keys: [
        'process', 'methodology', 'how do you work', 'steps', 'stages',
        'phases', 'what is the process', 'what should i do', 'where do i start',
        'how do we start', 'workflow', 'procedure', 'how it works',
        'getting started', 'first steps', 'kick off', 'kickoff'
      ],
      answer: [
        'Our work process is structured in four phases:\n\n1. **Diagnosis and technical proposal** (initial meeting, requirement gathering).\n2. **Design and development** (architectural, structural drawings, shop drawings).\n3. **Permit management** (submission to municipalities and authorities).\n4. **Delivery and support** (final review, adjustments, post-delivery support).\n\nEach phase includes client review and approval checkpoints before moving forward.',
        'We work under a phased project methodology with defined deliverables at each stage. The client has full visibility and control over progress at all times.\n\nFrom first contact to final handover, you will have a dedicated manager as a single point of contact.',
        'The process begins with a free initial consultation where we assess the project and its requirements. From there we prepare a technical proposal, sign the agreement, and kick off design. The client approves each stage before moving to the next.'
      ]
    },

    /* ── Quality and control ── */
    {
      section: 'soluciones',
      keys: [
        'quality', 'quality control', 'assurance', 'inspection', 'review',
        'audit', 'warranty', 'guarantee', 'errors', 'failures', 'defects',
        'what if something goes wrong', 'do you stand behind your work',
        'accountability', 'responsibility', 'do you guarantee', 'warranty period'
      ],
      answer: [
        'Quality control is fundamental in our work. We review every drawing, calculation, and document before delivery. We ensure everything complies with local codes and project requirements.\n\nIf during execution an error attributable to our drawings is detected, we correct it at no additional cost.',
        'We have an internal review system that includes cross-checking between disciplines. Every deliverable goes through technical review before being sent to the client or authorities.\n\nOur goal is to minimize errors and ensure flawless documentation.',
        'Quality is non-negotiable. All our designs and drawings are meticulously reviewed to avoid issues on site or in the permit process.\n\nIf any observation arises, we address it immediately and without extra charges if it is our responsibility.'
      ]
    },

    /* ── Architecture ── */
    {
      section: 'servicios',
      keys: [
        'architecture', 'architect', 'architectural design', 'architectural drawings',
        'floor plans', 'elevations', 'sections', 'render', 'interior design',
        'layout', 'spaces', 'conceptualization', 'schematic design'
      ],
      answer: [
        'We offer architectural services from concept to construction drawings. We develop floor plans, elevations, sections, 3D renders, and all the documentation needed for permit applications and construction.\n\nWe work on both residential (houses, apartments) and commercial (offices, retail, mixed-use) projects.',
        'Our architecture team creates functional and aesthetically pleasing designs, tailored to client needs and the urban environment. We deliver detailed drawings, photorealistic renders, and all required graphic documentation.\n\nIf you need renovations, additions, or a project from scratch, we can help.'
      ]
    },

    /* ── Structural engineering ── */
    {
      section: 'servicios',
      keys: [
        'structural', 'structure', 'structural analysis', 'structural design',
        'load', 'loads', 'columns', 'beams', 'slab', 'foundation', 'foundations',
        'seismic', 'earthquake resistant', 'structural retrofit', 'soil study',
        'reinforced concrete', 'steel structure', 'structural review',
        'structural inspection', 'structural assessment'
      ],
      answer: [
        'Structural engineering is one of our pillars. We perform calculation and design of concrete, steel, timber, and masonry structures, in compliance with the Ontario Building Code and applicable standards.\n\nWe deliver calculation reports, reinforcement drawings, and construction details to ensure safety and durability.',
        'We design efficient and safe structures for all types of buildings. Our engineers use specialized software for load, seismic, and wind analysis.\n\nWe also offer design reviews and structural reinforcement consulting.'
      ]
    },

    /* ── Shop drawings ── */
    {
      section: 'servicios',
      keys: [
        'shop drawing', 'shop drawings', 'fabrication drawings', 'installation drawings',
        'construction details', 'fabrication', 'installation', 'steel detailing',
        'erection drawings', 'carpentry drawings', 'metalwork drawings',
        'structural steel drawings', 'steel plans'
      ],
      answer: [
        'We produce detailed **shop drawings** for fabrication and installation of structural, architectural, and finishing elements. We work with precision to ensure that fabricators and installers can execute without errors.\n\nWe deliver drawings in DWG, PDF, and, if required, 3D models.',
        'Our shop drawings are key to a trouble-free construction. We develop fabrication drawings for steel structures, carpentry, metalwork, installations, and any other components that need to be prefabricated.\n\nWe coordinate with site teams to ensure correct interpretation of details.'
      ]
    },

    /* ── Permits and municipal management ── */
    {
      section: 'servicios',
      keys: [
        'permit', 'permits', 'license', 'licenses', 'building permit',
        'zoning', 'municipality', 'city', 'toronto', 'ontario',
        'application', 'process', 'approval', 'regulations', 'building department'
      ],
      answer: [
        'We manage building permit acquisition with municipalities in Ontario, including the City of Toronto. We prepare all required technical documentation (drawings, reports, forms) and follow up until approval.\n\nOur knowledge of local codes and regulations streamlines the process and reduces the risk of rejections.',
        'We offer a comprehensive **permit and regulatory management** service. We take care of:\n\n- Zoning and land use review\n- Preparation of submission drawings\n- Filling out municipal forms\n- Follow-up and response to comments\n- Obtaining the building permit\n\nSo you can focus on construction while we navigate the bureaucracy.'
      ]
    },

    /* ── Commercial projects ── */
    {
      section: 'servicios',
      keys: [
        'commercial', 'offices', 'retail', 'stores', 'restaurants',
        'commercial building', 'shopping center', 'hotel', 'hospitality',
        'commercial space', 'business'
      ],
      answer: [
        'We have experience in commercial projects: offices, retail stores, restaurants, hotels, and mixed-use buildings. We offer architectural design, structural calculation, shop drawings, and permit management for these types of spaces.\n\nWe understand the particular needs of each business and adapt designs to maximize functionality and corporate image.'
      ]
    },

    /* ── Residential projects ── */
    {
      section: 'servicios',
      keys: [
        'residential', 'housing', 'house', 'apartment', 'condo',
        'condominium', 'single family', 'multi-family',
        'renovation', 'addition', 'extension'
      ],
      answer: [
        'For residential projects we offer architectural and structural design, drawing production, shop drawings, and permit management. We serve from single-family homes to apartment complexes.\n\nWe also carry out renovation and addition projects, adapting existing structures to new needs.'
      ]
    },

    /* ── Payment terms / contractual conditions ── */
    {
      section: 'contacto',
      keys: [
        'payment', 'payment terms', 'how do you charge', 'installments',
        'advance payment', 'deposit', 'contract', 'conditions', 'invoice',
        'billing', 'wire transfer', 'credit', 'financing', 'how to pay',
        'payment schedule', 'payment structure', 'retainer'
      ],
      answer: [
        'Payment conditions are defined in the proposal and vary by project type. Our typical structure is:\n\n- Initial advance payment upon contract signing (30% - 50%)\n- Partial payments by milestone or progress\n- Final payment upon handover\n\nWe accept bank transfers (Interac e-transfer, wire transfer) and certified cheques. We issue formal invoices.',
        'Our contractual terms are transparent and negotiable. The standard structure is a 40% advance, progress-based payments, and a final payment at handover. For short consulting engagements it may be a single payment.\n\nIn all cases we issue a formal invoice and all terms are set out in the contract.'
      ]
    },

    /* ── Sustainability / environment ── */
    {
      section: 'servicios',
      keys: [
        'sustainable', 'sustainability', 'green', 'eco-friendly', 'environment',
        'environmental impact', 'carbon footprint', 'energy efficiency',
        'renewable energy', 'solar panels', 'green building', 'green construction',
        'leed certification', 'bioconstruction', 'net zero', 'passive design'
      ],
      answer: [
        'We incorporate sustainability criteria into our designs whenever the client requests it. We can orient the project towards energy efficiency, sustainable materials, and resource optimization.\n\nIf you seek LEED or similar certification, we can advise and coordinate with external specialists to meet the requirements.'
      ]
    },

    /* ── Emergencies / damage / urgent reviews ── */
    {
      section: 'servicios',
      keys: [
        'emergency', 'urgent', 'urgency', 'damage', 'collapse', 'crack',
        'cracks', 'settlement', 'subsidence', 'flooding', 'earthquake',
        'structural failure', 'structural problem', 'my building', 'failure',
        'structural assessment', 'urgent inspection', 'structural damage'
      ],
      answer: [
        'We handle structural emergencies or visible damage as a priority. If your building shows cracks, settlement, or has suffered an earthquake or flooding, contact us immediately by phone or WhatsApp.\n\nWe dispatch a specialist for an assessment as quickly as possible.',
        'We offer emergency diagnosis service for structures with possible damage. The process includes visual inspection, deformation measurement, and issuance of a preliminary safety report.\n\nDo not wait for the problem to worsen — call us at **+1 (437) 830-2999**.'
      ]
    },

    /* ── Alliances / suppliers / subcontractors ── */
    {
      section: 'contacto',
      keys: [
        'alliance', 'alliances', 'supplier', 'suppliers', 'subcontractor',
        'subcontractors', 'partner', 'partners', 'collaboration',
        'work with you', 'become a supplier', 'vendor registration',
        'joint venture', 'teaming', 'partnering'
      ],
      answer: [
        'We are open to collaborating with other professionals and companies in the sector. If you want to register as a supplier or propose an alliance, please write to us through the Contact form indicating your specialty.\n\nWe evaluate technical capacity and references to establish mutually beneficial working relationships.'
      ]
    },

    /* ── Warranty ── */
    {
      section: 'soluciones',
      keys: [
        'warranty', 'warranties', 'guarantee', 'guarantees', 'what warranty do you offer',
        'do you offer a warranty', 'warranty coverage', 'drawing warranty',
        'service warranty', 'how long is the warranty', 'what if something goes wrong',
        'what if there is an error in the drawings'
      ],
      synonyms: ['stand behind your work', 'who is responsible for mistakes'],
      answer: [
        'All of our technical work is backed: if an error attributable to our drawings or calculations is detected, we correct it **at no additional cost**. This warranty applies while the project is active and within a reasonable period after delivery.\n\nIn addition, sealed drawings are backed by the professional liability insurance of the engineers and architects who sign them.',
        'We do not hand over a document and disappear. If an issue arises that is attributable to our design, we resolve it immediately and at no extra charge.\n\nOur quality commitment includes review, correction, and support throughout the permitting and construction stages.',
        'Our warranty covers errors in design, calculation, or documentation. It does not cover scope changes requested by the client or execution errors on site unrelated to our drawings.\n\nIf you have questions about a specific case, we are happy to walk you through it.'
      ]
    },

    /* ── Insurance and professional licensing ── */
    {
      section: 'nosotros',
      keys: [
        'insurance', 'insured', 'policy', 'professional license', 'are you insured',
        'do you have liability insurance', 'p eng', 'p.eng', 'registered engineer',
        'licensed professional', 'wsib', 'liability insurance', 'errors and omissions',
        'e&o', 'are you licensed', 'licensed architects'
      ],
      synonyms: ['insurance coverage', 'are you certified engineers'],
      answer: [
        'We work with architects and engineers **registered and licensed in Ontario** (P.Eng / Licensed Architect), who sign and seal documents as required. We carry professional liability insurance (Errors & Omissions) to back our technical work.\n\nIf you need an insurance certificate or a specific professional\'s credentials for your file, we can provide them.',
        'Yes, we carry active professional liability insurance and work exclusively with professionals accredited by the relevant Ontario regulatory bodies (PEO, OAA, depending on the discipline).\n\nThis gives you peace of mind that every document delivered has real legal and technical backing.',
        'Licensing and professional insurance are non-negotiable for us: every drawing we seal goes through a properly registered professional. We are happy to share whatever documentation you need for your permitting or financing process.'
      ]
    },

    /* ── Confidentiality and ownership of drawings ── */
    {
      section: 'contacto',
      keys: [
        'confidentiality', 'nda', 'non disclosure agreement',
        'ownership of the drawings', 'copyright of the drawings',
        'who owns the drawings', 'can i use the drawings elsewhere',
        'my project is confidential', 'sign an nda'
      ],
      answer: [
        'We handle all of your project information with strict confidentiality. If your company requires a non-disclosure agreement (NDA) before sharing sensitive details, we are happy to formalize it.\n\nAs for the drawings: once the agreed payment is completed, you receive the usage rights to the documents for your project.',
        'We understand that some projects require complete confidentiality (commercial developments, product intellectual property, etc.). We can sign a standard NDA or one provided by your company before starting any technical discussion.\n\nFinal drawings, once the contract is settled, are made available to the client for use in the project.'
      ]
    },

    /* ── Site visits / on-site survey ── */
    {
      section: 'servicios',
      keys: [
        'site visit', 'do you visit the site', 'field inspection',
        'on site survey', 'on-site measurements', 'do you come measure',
        'do you visit the property', 'do you visit the lot', 'site inspections',
        'i need you to come see it'
      ],
      answer: [
        'Yes, we conduct technical site visits when the project requires it: taking measurements, verifying existing conditions, inspecting damage, or simply understanding the context before designing.\n\nVisits are scheduled based on our team\'s availability and the project\'s location within Ontario.',
        'For renovations or additions, an on-site visit is usually necessary to survey the existing conditions of the property before starting the design. For new projects on a vacant lot, topographic and cadastral information is sometimes sufficient.\n\nWe schedule the visit once the process has started with you.'
      ]
    },

    /* ── Virtual meetings / remote consultation ── */
    {
      section: 'contacto',
      keys: [
        'virtual meeting', 'video call', 'zoom', 'remote consultation',
        'online consultation', 'can we meet by video', 'meet', 'teams',
        'whatsapp video call', 'do you meet online'
      ],
      answer: [
        'Yes, we offer virtual meetings via **Zoom, Google Meet, Microsoft Teams, or WhatsApp video call**, whichever you prefer. This is especially useful if you are not located in Ontario or simply prefer not to travel.\n\nJust coordinate a time with our team and we will send you the meeting link.',
        'Most of our initial consultations are done remotely, by video or phone, at no cost. This lets us serve clients in different locations efficiently.\n\nIf an in-person visit is ever needed, we will coordinate that separately.'
      ]
    },

    /* ── Languages spoken ── */
    {
      section: 'nosotros',
      keys: [
        'do you speak spanish', 'do you speak english', 'languages',
        'what language do you support', 'do you speak portuguese',
        'spanish support', 'hablan español', 'service in spanish'
      ],
      answer: [
        'We provide support in **English and Spanish**, both in this chat and via phone, WhatsApp, and email. Feel free to write to us in whichever language is most comfortable for you and we will respond in the same one.',
        'Our team is bilingual (English/Spanish), which makes communication easy for both Latin American and Canadian clients. If preferred, we can also coordinate written communication in other languages depending on availability.'
      ]
    },

    /* ── Minimum project size ── */
    {
      section: 'servicios',
      keys: [
        'small project', 'small projects', 'minimum size', 'do you take small jobs',
        'do you do small projects', 'minimum amount', 'minimum budget',
        'my project is very small', 'do you accept small projects'
      ],
      answer: [
        'We do not have a strict minimum project size. We handle everything from one-off consultations (reviewing a drawing, a small addition) to large-scale commercial projects.\n\nTell us about your project and we will let you know if we can help directly or point you to the best path forward.',
        'We work on projects of all sizes. For very small jobs, a one-time consultation may be more efficient than a full project given the minimum management overhead involved.\n\nTalk to our team and we will give you an honest recommendation for your case.'
      ]
    },

    /* ── Second opinion / review of third-party drawings ── */
    {
      section: 'servicios',
      keys: [
        'second opinion', 'review another architect\'s drawings', 'peer review',
        'independent review', 'i already have drawings can you review them',
        'review existing design', 'technical opinion', 'audit my drawings'
      ],
      answer: [
        'Yes, we offer **drawing review and second-opinion** services on plans prepared by other professionals. We assess code compliance, structural consistency, and possible improvements before you proceed to permits or construction.\n\nThis service is independent and can be hired even if we were not the original designers.',
        'We perform design and calculation audits on existing drawings, useful when there are doubts about structural safety, possible errors from a previous consultant, or before investing in costly construction.\n\nWe deliver a technical report with our findings and recommendations.'
      ]
    },

    /* ── Construction cost estimate ── */
    {
      section: 'servicios',
      keys: [
        'construction estimate', 'construction cost', 'how much does it cost to build',
        'construction budget', 'cost per square foot', 'cost estimate',
        'how much would it cost to build'
      ],
      answer: [
        'Important: our **design fee** is separate from the **construction cost** of the build. We can prepare a preliminary construction cost estimate based on square footage and finish level, although the final amount is determined by the contractor executing the work.\n\nThis helps you plan your budget starting at the design stage.',
        'As a general reference, construction costs in Ontario vary widely depending on project type, finishes, and location, so we avoid giving generic figures that could be misleading. During design we can help you estimate a realistic range and adjust the scope to your budget.\n\nIf you already have a contractor, we coordinate with them to validate the construction budget.'
      ]
    },

    /* ── Relationship with the contractor / do you build? ── */
    {
      section: 'servicios',
      keys: [
        'general contractor', 'can you recommend a contractor', 'do you build',
        'do you do construction', 'are you builders', 'who does the construction',
        'do you also build', 'do you handle construction'
      ],
      answer: [
        'We are a **design, engineering, and permitting** firm; we do not execute construction directly. However, we work closely with general contractors and can recommend trusted professionals if you need one to build the project.\n\nDuring construction, we can also provide technical support to verify that the build follows the drawings.',
        'We are not a construction contractor, but we collaborate closely with general contractors (GCs) and specialized subcontractors during the build phase. If you already have a contractor, we coordinate directly with their team; if not, we can suggest options from our network.'
      ]
    },

    /* ── Scope changes during the project ── */
    {
      section: 'soluciones',
      keys: [
        'scope change', 'change order', 'changes during the project',
        'can the design be modified later', 'extra cost for changes',
        'can i make changes later', 'modify the project midway'
      ],
      answer: [
        'We understand projects evolve. Minor changes within the original scope are usually included at no extra cost; significant changes (requiring redesign, recalculation, or new filings) are quoted as an add-on before being executed, always with your prior approval.\n\nWe never apply surprise charges: every change is communicated and agreed with you first.',
        'Yes, it is possible to modify the design during the process. We document every requested change and, if it generates significant additional work, we present a clear quote before proceeding. This keeps you in full control of scope and budget.'
      ]
    },

    /* ── Cancellation and deposit refund ── */
    {
      section: 'contacto',
      keys: [
        'cancel', 'cancellation', 'refund', 'do you refund the deposit',
        'cancellation policy', 'i changed my mind', 'i no longer want to continue',
        'i want to cancel the contract', 'can i cancel'
      ],
      answer: [
        'We understand circumstances can change. If you need to cancel a project in progress, the work actually performed up to that point is billed, and the unused portion of the deposit is refunded, per the terms of the signed contract.\n\nWe recommend speaking directly with our team to review your specific case and find the best solution.',
        'Cancellation terms are detailed in each contract since they depend on the project stage. In general, only the actual progress delivered is billed; the rest of the deposit is refunded.\n\nIf you are considering pausing or canceling, contact us before making a final decision: sometimes a temporary pause is a better option than a cancellation.'
      ]
    },

    /* ── Complaints ── */
    {
      section: 'contacto',
      keys: [
        'complaint', 'complaints', 'i am not satisfied', 'poor service',
        'how do i file a complaint', 'i want to file a complaint',
        'i was not happy with the service'
      ],
      answer: [
        'We are sorry your experience did not meet expectations. Please contact us directly at **+1 (437) 830-2999** or by email, detailing the situation, and a manager will review your case as a priority.\n\nWe take every piece of feedback seriously to keep improving.',
        'You can file a complaint through the Contact form, by email, or by phone. Please describe the project and the specific situation so we can address it as quickly as possible.\n\nYour satisfaction matters to us and we will work toward a fair resolution.'
      ]
    },

    /* ── After-sale support / updating old drawings ── */
    {
      section: 'servicios',
      keys: [
        'support after delivery', 'after sales support', 'update old drawings',
        'modify old drawings', 'old drawings', 'drawings from years ago',
        'can you update an old drawing'
      ],
      answer: [
        'Yes, we can review, update, or modify old drawings (ours or another professional\'s) to bring them up to date with new regulations, new requirements, or project changes.\n\nSend us the existing drawings and we will let you know the scope needed to update them.',
        'We work with old drawings frequently, especially in renovations or when a permit has expired and needs to be renewed. The first step is reviewing the existing documentation to determine how much needs updating.'
      ]
    },

    /* ── Land subdivision / development ── */
    {
      section: 'servicios',
      keys: [
        'subdivision', 'severance', 'land development', 'lot severance',
        'consent application', 'split a lot', 'divide my lot', 'i want to subdivide'
      ],
      answer: [
        'We offer guidance through **land subdivision (severance)** and development processes, including preparing submission drawings and coordinating with the municipality for a "consent application".\n\nThis type of process usually also requires a land survey, which we coordinate with outside specialists if needed.',
        'Yes, we help with subdivision and land development projects in Ontario, from initial feasibility to the technical documentation required by the municipality. Each case depends on the current zoning of the lot.'
      ]
    },

    /* ── ADU / Garden Suite / Second unit ── */
    {
      section: 'servicios',
      keys: [
        'adu', 'garden suite', 'coach house', 'second unit', 'secondary suite',
        'basement apartment', 'in law suite', 'backyard home', 'accessory dwelling unit'
      ],
      answer: [
        'We design **ADUs (Accessory Dwelling Units)**: garden suites, coach houses, basement suites, and other secondary units, increasingly popular across Ontario for generating rental income or housing family members.\n\nWe handle the architectural design, zoning compliance, and permit management.',
        'Secondary units (ADUs) have specific zoning and building-code requirements depending on the municipality. We help you assess feasibility on your property and design the option that best uses the available space.'
      ]
    },

    /* ── Heritage buildings ── */
    {
      section: 'servicios',
      keys: [
        'heritage building', 'historic house', 'heritage designation', 'heritage permit',
        'protected building', 'heritage property', 'my house is heritage listed'
      ],
      answer: [
        'We have experience working with **heritage-designated properties**. These projects require an additional process before the municipality\'s heritage committee, in addition to regular building permits.\n\nWe advise you on the specific requirements to preserve protected elements while developing your project.',
        'Renovations on heritage buildings demand design sensitivity and particular regulatory knowledge. We coordinate with the municipality\'s heritage authorities so your project gets approved without compromising the property\'s historic value.'
      ]
    },

    /* ── Accessibility / universal design ── */
    {
      section: 'servicios',
      keys: [
        'accessibility', 'aoda', 'universal design', 'ramp', 'wheelchair access',
        'accessibility regulations', 'accessible design'
      ],
      answer: [
        'We incorporate **accessibility and universal design** criteria into our projects, complying with AODA (Accessibility for Ontarians with Disabilities Act) regulations when the building type requires it: ramps, circulation widths, accessible bathrooms, and more.\n\nIf your project needs specific accommodations, we can design them from the start or incorporate them into an existing project.'
      ]
    },

    /* ── Soil study / geotechnical ── */
    {
      section: 'servicios',
      keys: [
        'soil study', 'geotechnical', 'soil testing', 'bearing capacity',
        'geotechnical report', 'soil report'
      ],
      answer: [
        'The soil study (geotechnical report) is typically performed by a specialized lab or geotechnical engineer, with whom we coordinate directly to integrate their results into our structural and foundation design.\n\nIf your project requires it, we can manage that coordination as part of our integrated service.'
      ]
    },

    /* ── Mechanical, electrical and plumbing engineering (MEP) ── */
    {
      section: 'servicios',
      keys: [
        'electrical', 'plumbing', 'mechanical', 'hvac', 'mep',
        'electrical installations', 'plumbing installations', 'air conditioning',
        'heating', 'ventilation', 'electrical system'
      ],
      answer: [
        'We coordinate **mechanical, electrical, and plumbing (MEP)** design through our network of specialist engineers in each discipline, integrating their drawings with the architectural and structural design so the project is coherent and code-compliant.\n\nIf your project requires these services, we include them in the integrated proposal.'
      ]
    },

    /* ── Land survey ── */
    {
      section: 'servicios',
      keys: [
        'topography', 'land survey', 'survey drawing', 'property survey',
        'lot lines', 'survey plan'
      ],
      answer: [
        'A land survey is carried out by a licensed Ontario Land Surveyor; we coordinate directly with trusted professionals to obtain it when your project requires it, especially for permits, subdivisions, or new construction.'
      ]
    },

    /* ── Minor repairs / handyman (out of scope) ── */
    {
      section: 'servicios',
      keys: [
        'small fix', 'minor repair', 'handyman', 'one day job', 'replace a door',
        'painting', 'minor work', 'unclog a pipe'
      ],
      answer: [
        'Our focus is **design, engineering, and permit management**, so minor "handyman" type repairs (painting, one-off plumbing fixes, day-to-day fixes) are not part of our direct services. However, if the repair involves a structural issue or requires drawings, we are happy to help you assess it.\n\nIf you need a contractor for minor work, we can recommend options from our network.'
      ]
    },

    /* ── Careers / internships ── */
    {
      section: 'nosotros',
      keys: [
        'jobs', 'careers', 'internship', 'vacancies', 'work with you',
        'send my resume', 'cv', 'resume', 'are you hiring', 'job opportunities'
      ],
      answer: [
        'Thank you for your interest in joining our team. If positions are open, we post them through our official channels. You can send us your resume by email indicating your area of interest (architecture, engineering, drafting, administration) and we will keep it on file for future opportunities.'
      ]
    },

    /* ── Social media ── */
    {
      section: 'contacto',
      keys: [
        'social media', 'instagram', 'facebook', 'linkedin', 'follow you',
        'instagram profile', 'do you have instagram', 'do you have facebook'
      ],
      answer: [
        'You can find us on our official social media channels; the links are available on this same page, usually in the footer. There we share projects, news, and content of interest about architecture and engineering.'
      ]
    },

    /* ── File formats and included revisions ── */
    {
      section: 'servicios',
      keys: [
        'file format', 'dwg', 'how many revisions are included', 'included revisions',
        'changes included', 'editable files', 'what format do you deliver',
        'do you deliver in pdf'
      ],
      answer: [
        'We deliver drawings in whatever format your project requires: **PDF** for review and presentation, **DWG** (AutoCAD), and/or **RVT** (Revit) if you need editable files. The number of included revision rounds is specified in each proposal and usually covers reasonable adjustments within the original scope.'
      ]
    },

    /* ── Professional seal / stamp on drawings ── */
    {
      section: 'servicios',
      keys: [
        'who signs the drawings', 'professional seal', 'stamp', 'p eng stamp',
        'engineer\'s signature', 'sealed drawings', 'signed drawings',
        'i need sealed drawings', 'i need signed drawings'
      ],
      answer: [
        'Drawings that require legal validity for permits are signed and sealed by an **architect or engineer registered in Ontario** (OAA / PEO), depending on the discipline. This seal certifies that the design complies with the building code and applicable regulations, and is required for municipal approval.'
      ]
    },

    /* ── Architect vs. engineer ── */
    {
      section: 'servicios',
      keys: [
        'do i need an architect or an engineer', 'difference between architect and engineer',
        'what professional do i need', 'who should i hire', 'architect vs engineer'
      ],
      answer: [
        'Don\'t worry about figuring that out yourself: many projects need both working together. The **architect** focuses on design, space planning, and aesthetics; the **structural engineer** ensures the building\'s safety and strength.\n\nTell us about your project and we will tell you exactly which disciplines are needed — that\'s what our integrated service is for.'
      ]
    },

    /* ── Free initial consultation (detail) ── */
    {
      section: 'contacto',
      keys: [
        'free consultation', 'first consultation', 'no cost consultation',
        'do you charge for the consultation', 'is the first meeting free',
        'how much does the initial consultation cost'
      ],
      answer: [
        'Yes, the **first consultation is free**. During it we discuss your project, evaluate its general feasibility, and explain the recommended process. From that conversation we prepare a formal technical proposal if you decide to move forward.',
        'We do not charge for the initial consultation. You can schedule it through this chat, by phone, or via the contact form, with no obligation to proceed with the project.'
      ]
    },

    /* ── Communication and follow-up during the project ── */
    {
      section: 'soluciones',
      keys: [
        'how do you keep me updated', 'project updates', 'progress reports',
        'communication during the project', 'project manager', 'point of contact',
        'will i have a dedicated contact'
      ],
      answer: [
        'Every client has a **dedicated point of contact** throughout the project, who keeps you informed of progress, answers questions, and coordinates deliverables. Depending on the project\'s complexity, we schedule periodic updates by email, call, or virtual meeting.\n\nOur goal is that you are never left wondering what stage your project is at.'
      ]
    },

    /* ── Virtual assistant identity ── */
    {
      section: 'nosotros',
      keys: [
        'are you a robot', 'are you a bot', 'are you a real person', 'are you ai',
        'are you human', 'who am i talking to', 'is this automated',
        'am i talking to a chatbot'
      ],
      answer: [
        'I am the virtual assistant for **JPO Contracting Unlimited Inc.**, designed to give you immediate guidance about our services. If you would rather speak with someone from our team, just let me know or call **+1 (437) 830-2999**.'
      ]
    }

  ],

  /* ════════════════════════════════════════════════
     FALLBACK MESSAGES — when the bot cannot answer
  ════════════════════════════════════════════════ */
  fallback: [
    'That inquiry requires personalized attention from our technical team. Here is the direct contact:',
    'I don\'t have specific information on that right now, but our team can help you directly:',
    'To give you a precise answer on that topic, the best option is to speak with one of our specialists:',
    'That is beyond what I have on record here. Let me share our technical team\'s contact:',
    'I want to make sure you get the right answer, so the best approach is to connect you directly with the team:',
    'I don\'t have the exact details for that question, but you can reach out directly here:',
    'That is a more specific inquiry than I can handle through this channel. Here is the team\'s contact:',
    'For topics like this, our team will give you a more complete answer. Here is the direct contact:',
    'I don\'t have that information available yet, but you can contact our team directly:',
    'I\'d rather connect you with someone from the team for that specific topic. Here is their contact:',
    'Some questions deserve a direct technical answer. Here is the channel to speak with a specialist:',
    'To give you the precise information you need, it is best for one of our advisors to reach out:',
    'That level of detail is best handled directly by someone from our team. Here is how to reach them:',
    'My role is to guide you, but for this case you need to speak directly with the team. Here is the contact:',
    'I want you to receive the best possible answer, and for that topic our team is who can help you most:'
  ],

  /* ════════════════════════════════════════════════
     WELCOME MESSAGES (20 variants)
     One is chosen at random each time the user
     opens the chat for the first time in the session.
  ════════════════════════════════════════════════ */
  welcome: [
    'Thank you for reaching out to JPO Contracting Unlimited Inc. I am the virtual assistant, here to guide you through our architecture, engineering, shop drawings, and permit services. Feel free to ask anything.',
    'It is a pleasure to assist you. I am the virtual assistant for JPO Contracting Unlimited Inc., specialized in residential and commercial construction services. How can we help?',
    'Hello. This is JPO Contracting Unlimited Inc.\'s virtual assistant. You can ask me about architectural design, structural engineering, shop drawings, or building permits.',
    'Welcome to JPO Contracting Unlimited Inc.\'s digital assistance channel. I am the virtual assistant and I am available to guide you. How can I help?',
    'Thank you for your visit. JPO Contracting Unlimited Inc.\'s virtual assistant is at your service to guide you through our services. How can I help you today?',
    'Good day. I am the virtual assistant for JPO Contracting Unlimited Inc. Do you have any questions about your projects or our technical capabilities?',
    'Hi, thanks for contacting us. This channel is handled by JPO Contracting Unlimited Inc.\'s virtual assistant. I am here to guide you through our services. Go ahead with your inquiry.',
    'Great to hear from you. I am the virtual assistant for JPO Contracting Unlimited Inc. and I am here to guide you through our construction and design services.',
    'Hello. JPO Contracting Unlimited Inc. virtual assistant at your service. I am here to guide you on architecture, structural engineering, and permits. How can I help?',
    'Thank you for choosing JPO Contracting Unlimited Inc. I am the virtual assistant and I am here to guide you with anything you need about our projects and technical solutions.',
    'It is a pleasure to assist you. JPO Contracting Unlimited Inc.\'s virtual assistant is at your disposal to guide you through our architecture, engineering, and permit services.',
    'Hello, welcome. I am the virtual assistant for JPO Contracting Unlimited Inc., here to guide you on services, projects, and capabilities. Please go ahead.',
    'Glad to have your inquiry. JPO Contracting Unlimited Inc.\'s virtual assistant is available to assist you. Ask your question and we will be happy to help.',
    'Thank you for reaching out to JPO Contracting Unlimited Inc. I am the firm\'s virtual assistant and I am available to guide you on any service or project.',
    'Hi. Welcome to JPO Contracting Unlimited Inc.\'s chat. I am your virtual assistant and I am ready to help you with any questions about our construction and engineering services.',
    'Hello and welcome. I am the virtual assistant for JPO Contracting Unlimited Inc. Feel free to ask me anything about our services, projects, or team.',
    'Good to connect with you. JPO Contracting Unlimited Inc.\'s virtual assistant is here to help. Whether it\'s about our services, timelines, or technical capabilities — just ask.',
    'Hi there. Thanks for stopping by. I\'m the virtual assistant for JPO Contracting Unlimited Inc., ready to help you navigate our engineering and construction services.',
    'Welcome. I\'m here to help you learn more about JPO Contracting Unlimited Inc. — our services, projects, methodology, and how we can support your next project.',
    'Hello! JPO Contracting Unlimited Inc.\'s virtual assistant here. Ask me anything about architectural design, structural engineering, shop drawings, permits, or anything else you\'d like to know.'
  ],

  /* ════════════════════════════════════════════════
     MODE CHANGE MESSAGES
  ════════════════════════════════════════════════ */
  modeIntros: {
    empresa: [
      'Back to company mode. Ask me about services, projects, architecture, engineering, or any aspect of JPO Contracting Unlimited Inc.',
      'Sure. Let\'s continue with information about the company and our services. What would you like to know?',
      'Company mode restored. I can answer questions about services, experience, geographic coverage, permits, and more.'
    ],
    general: [
      'General conversation mode activated. You can now ask me about technology, engineering, construction, design, or any other topic of interest.',
      'Switching to general mode. Feel free to ask about technical topics, industry trends, or anything else you\'d like to explore.',
      'Open conversation mode on. The floor is yours — ask about any topic you prefer.'
    ]
  },

  /* ════════════════════════════════════════════════
     COMPANY CONTACT
  ════════════════════════════════════════════════ */
  contact: {
    name: 'JPO Contracting Unlimited Inc.',
    phoneDisplay: '+1 (437) 830-2999',
    phoneHref: '+14378302999',
    email: 'official@jpocontracting.com'
  }

};