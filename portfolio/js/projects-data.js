/* ------------------------------------------------------------
   All project content lives here. The home page gallery and the
   12 project pages are both made from this file.
   After editing, run:  node tools/build.js
   ------------------------------------------------------------ */
(function (root, factory) {
  if (typeof module === 'object' && module.exports) module.exports = factory();
  else root.PROJECTS_API = factory();
})(typeof self !== 'undefined' ? self : this, function () {

  var CATEGORIES = ['Web', 'Mobile', 'API & Backend', 'Desktop', 'Planning & Analysis'];

  var PROJECTS = [
    {
      slug: 'raceday',
      title: 'RaceDay',
      tagline: 'Event management for road running, walking and cycling races.',
      cat: ['Web', 'API & Backend'],
      type: 'Full-stack web system',
      status: 'Three-part portfolio of evidence',
      stack: ['C#', 'ASP.NET Core', 'Entity Framework Core', 'SQL', 'MVC', 'Swagger', 'Azure Blob Storage', 'Docker', 'GitHub Actions'],
      motif: 'layers',
      featured: true,
      overview: [
        'RaceDay is a system for South African road running, walking and cycling events. Organisers use it to run their events. Participants use it to find an event, enter it and follow their results.',
        'The project is built in three parts so that each layer is planned and finished before the next one starts: the data and plan, the API, and the website that uses the API.'
      ],
      features: [
        'Two roles: Organiser (manages events, categories and results) and Participant (browses, enters and tracks results)',
        'Events, race categories, entries and results as connected data',
        'Secure sign-in with role-based access to the API',
        'Interactive API documentation with Swagger',
        'Automatic build and test checks on every push with GitHub Actions'
      ],
      approach: [
        'Part 1 is the plan: an entity relationship diagram, an API endpoint plan and the SQL script that creates the database.',
        'Part 2 is the REST API in C# with ASP.NET Core and Entity Framework Core, with authentication, Swagger documentation, unit tests and CI/CD.',
        'Part 3 is the MVC website that calls the API, stores images in Azure Blob Storage and runs in Docker.'
      ],
      learned: [
        'Planning the data model first saves a lot of rework later.',
        'Keeping the API separate from the website makes both easier to test and change.',
        'Small, regular commits and automated tests catch mistakes early.'
      ]
    },
    {
      slug: 'shebiz',
      title: 'SheBiz',
      tagline: 'A platform for women in business: opportunities, mentoring, learning and AI guidance.',
      cat: ['Web'],
      type: 'Web platform and prototype',
      status: 'Hackathon project',
      stack: ['Firebase', 'Figma', 'Google AI Studio', 'VS Code', 'Email verification'],
      motif: 'nodes',
      featured: true,
      overview: [
        'SheBiz helps women who run or want to start a business. It brings opportunities, mentorship, learning and a business manager into one place, with an AI assistant for day-to-day questions.',
        'I worked on it with my hackathon team, Error 404. We designed the screens first, then built the working version with Firebase.'
      ],
      features: [
        'Landing page, registration and sign-up with email verification codes',
        'Dashboard with opportunities and mentorship',
        'My Business area: business dashboard, manager and analytics',
        'AI assistant to guide users through business questions',
        'Profile page, plus a purple and pink 3D visual style'
      ],
      approach: [
        'I wrote a detailed prompt for ten screens with realistic data, so the prototype felt like a real person using it.',
        'I then moved the design into a working build that runs locally and connects to Firebase for sign-in and data.'
      ],
      learned: [
        'Realistic sample data makes design problems visible early.',
        'Working to a hackathon deadline taught me to decide what is essential and cut the rest.'
      ]
    },
    {
      slug: 'gomate',
      title: 'GoMate',
      tagline: 'A ride-hailing platform with a rider app, a driver app and an admin dashboard.',
      cat: ['Mobile', 'API & Backend'],
      type: 'Three connected apps',
      status: 'Concept and build plan',
      stack: ['Flutter', 'ASP.NET Core', 'SQL Server', 'Google sign-in'],
      motif: 'phone',
      featured: true,
      overview: [
        'GoMate is my take on apps like Bolt, Uber and inDrive. It has three parts that all talk to one shared backend: a User App for riders, a Driver App and an Admin Dashboard.',
        'The point of the project is the connection. When a rider books a trip, the driver sees the request and the admin sees the trip at the same time.'
      ],
      features: [
        'Rider app to request and follow a trip',
        'Driver app to receive and accept requests',
        'Admin dashboard to oversee riders, drivers and trips',
        'Continue with Google sign-in on both apps',
        'Soft blue and warm yellow colour scheme'
      ],
      approach: [
        'One ASP.NET Core API and one SQL Server database serve all three apps, so there is a single source of truth.',
        'The Flutter apps share the same design language but have different jobs, so each has its own flow.'
      ],
      learned: [
        'Designing for three types of user at once forces clear thinking about who owns which data.',
        'Shared backends need a clear API contract before any screen is built.'
      ]
    },
    {
      slug: 'algoa-bus',
      title: 'Algoa Bus Company website',
      tagline: 'A redesign proposal for a transport company, with a customer site and a staff admin side.',
      cat: ['Web', 'Planning & Analysis'],
      type: 'Website proposal and design',
      status: 'Pitch to company management',
      stack: ['HTML', 'CSS', 'JavaScript', 'Admin portal'],
      motif: 'city',
      overview: [
        'I designed a new website concept for Algoa Bus Company as part of Drew Technologies, with the tagline "Your Vision. Our Creation." It was prepared as a pitch to the company\'s management.',
        'The design has two connected sides: a public site for customers and an admin portal for staff, both in the same navy and blue look.'
      ],
      features: [
        'Customer pages for enquiries, bus hire, lost and found and bus location',
        'Staff sign-in with employee ID, name and surname',
        'Admin records who signed in and for how long',
        'Admin notifications labelled by source, such as bus hire or lost and found',
        'Dark navy, black and blue colour scheme on both sides'
      ],
      approach: [
        'I started from what the company\'s customers need to do and what staff need to see, then connected the two sides.',
        'I built the proposal as a working website so management could click through something real.'
      ],
      learned: [
        'A pitch lands better when people can use it, not just look at it.',
        'Admin tools need as much design care as the public site.'
      ]
    },
    {
      slug: 'cyber-chatbot',
      title: 'Cybersecurity Awareness Chatbot',
      tagline: 'A WPF chatbot that teaches cybersecurity, with a quiz, a task list and an activity log.',
      cat: ['Desktop'],
      type: 'Desktop application',
      status: 'Completed coursework (Programming 2A)',
      stack: ['C#', 'WPF', 'SQLite', 'JSON', 'GitHub Actions'],
      motif: 'chat',
      featured: true,
      overview: [
        'Cyber Times With Abo is a desktop chatbot that helps people learn about staying safe online. It grew over three parts of my Programming 2A module, and the final version has every feature on the checklist.',
        'The name comes from my own brand, where I want to share cybersecurity and coding knowledge in plain English.'
      ],
      features: [
        'Chatbot that recognises commands and topics in natural wording',
        'Cybersecurity quiz module',
        'Task panel to turn advice into reminders, saved as JSON',
        'Activity log of what the user did',
        'SQLite database for stored data',
        'Dark navy and neon green interface'
      ],
      approach: [
        'I split the code into small classes: QuizManager, TaskManager, ActivityLog, DatabaseManager and the ChatBot itself.',
        'I redesigned the interface for the final part so it feels like one product, not three exercises.'
      ],
      learned: [
        'Separate classes with one job each make a growing app far easier to fix.',
        'Saving data to JSON and SQLite showed me the trade-offs of each.'
      ]
    },
    {
      slug: 'quickchat',
      title: 'QuickChat',
      tagline: 'A Java messaging app with login, message tracking and saved messages.',
      cat: ['Desktop'],
      type: 'Java application',
      status: 'Completed coursework (Programming 1A)',
      stack: ['Java', 'JUnit 5', 'JSON', 'GitHub Actions'],
      motif: 'chat',
      overview: [
        'QuickChat is a messaging app written in Java. Users log in, send messages, and the app tracks every message and stores it so it can be read again later.',
        'The part I am proudest of is the testing. Every key behaviour has a unit test, and the tests run automatically on GitHub.'
      ],
      features: [
        'Login and registration with input checks',
        'Sending, tracking and numbering messages',
        'Messages saved to a JSON file',
        'JUnit 5 unit tests written in Arrange-Act-Assert style',
        'GitHub Actions workflow that runs the tests on every push'
      ],
      approach: [
        'I wrote the Message class and its tests together, so each rule had a test before it was trusted.',
        'I worked on a separate branch with regular commits, then merged once the checks passed.'
      ],
      learned: [
        'A failing test is the fastest way to find a bug.',
        'Setting up CI early means mistakes show up on GitHub, not on submission day.'
      ]
    },
    {
      slug: 'studytrack',
      title: 'StudyTrack',
      tagline: 'A student academic organiser with tasks, a calendar, progress tracking and study groups.',
      cat: ['Web'],
      type: 'Website and design specification',
      status: 'Design complete, ready to build',
      stack: ['UI design', 'Design specification', 'Web'],
      motif: 'bars',
      overview: [
        'StudyTrack helps students keep their work under control. Everything a student needs for the week sits on one dashboard: what is due, what is done and who they are studying with.',
        'I wrote a full design specification so that it can be built as either a website or a mobile app.'
      ],
      features: [
        'Dashboard with tasks, calendar and progress',
        'Study groups to plan sessions with classmates',
        'Login and sign-up screens',
        'Navy and teal palette, modern and not too bright'
      ],
      approach: [
        'I designed the dashboard, login and sign-up mockups first, then wrote down the colours, components and how each part behaves.',
        'Having the specification written down means anyone can build it the same way.'
      ],
      learned: [
        'A written design spec removes guessing at build time.',
        'Calm colours matter for a tool people open every day.'
      ]
    },
    {
      slug: 'studentlife-hub',
      title: 'StudentLife Hub',
      tagline: 'A website idea for managing the many parts of student life in one place.',
      cat: ['Web'],
      type: 'Website concept',
      status: 'Concept',
      stack: ['Web', 'UX concept'],
      motif: 'nodes',
      overview: [
        'Students juggle classes, money, deadlines and everything else outside campus. StudentLife Hub is my concept for one website that brings those things together.',
        'It is an early-stage idea. I am keeping it on the portfolio because it shows how I turn a real problem I live with into a product.'
      ],
      features: [
        'One home page for the student\'s week',
        'Simple tools for the everyday things a student has to manage',
        'Works on a phone first, because that is where students are'
      ],
      approach: [
        'I start from my own day as a student and list the moments where I switch between too many apps.',
        'The next step is to pick the two or three most useful tools and prototype them.'
      ],
      learned: [
        'The best ideas often come from my own daily frustrations.',
        'A small, focused first version beats a big plan.'
      ]
    },
    {
      slug: 'partplug',
      title: 'PartPlug',
      tagline: 'A car-parts marketplace that connects buyers with sellers.',
      cat: ['Web'],
      type: 'Marketplace website',
      status: 'Concept and design',
      stack: ['Web', 'Marketplace design'],
      motif: 'city',
      overview: [
        'PartPlug is a marketplace for car parts. Finding the right part is hard because it has to fit the exact car, so the idea is built around finding the right part quickly.',
        'It connects people who need a part with the sellers who have it.'
      ],
      features: [
        'Search for parts by car make, model and year',
        'Seller listings with clear photos and prices',
        'Buyer and seller accounts',
        'Mobile-friendly pages for use in a workshop or a garage'
      ],
      approach: [
        'I started with the buyer\'s question: will this fit my car? Everything else follows from that.',
        'Sellers need a quick way to list a part, so the listing form is kept short.'
      ],
      learned: [
        'Good search is the heart of a marketplace.',
        'Trust, such as clear photos and honest details, is a design problem as well as a technical one.'
      ]
    },
    {
      slug: 'trading-time',
      title: 'Trading Time with Mr LT',
      tagline: 'A website about forex trading education.',
      cat: ['Web'],
      type: 'Educational website',
      status: 'Website build',
      stack: ['Web', 'HTML', 'CSS', 'JavaScript'],
      motif: 'bars',
      overview: [
        'Trading Time with Mr LT is a website that teaches forex trading. It is built so that a beginner can understand what they are looking at and where to start.',
        'The look is clean and serious, because people trust a site about money only when it feels careful.'
      ],
      features: [
        'Clear explanations for beginners',
        'Organised learning topics',
        'Contact and enquiry options',
        'Responsive design that reads well on a phone'
      ],
      approach: [
        'I focused on plain language and a layout that does not overwhelm a first-time visitor.',
        'The structure puts learning first, and contact options are always easy to find.'
      ],
      learned: [
        'Education sites live or die on clarity.',
        'Layout and tone build trust before a visitor reads a single lesson.'
      ]
    },
    {
      slug: 'ssp-portal',
      title: 'Smart Service Portal planning',
      tagline: 'Project plan and work breakdown for a City of Johannesburg service request portal.',
      cat: ['Planning & Analysis'],
      type: 'Project management assignment',
      status: 'Group assignment, revised after lecturer feedback',
      stack: ['Microsoft Project', 'WBS', 'Network diagram', 'Critical path', 'Quality plan'],
      motif: 'nodes',
      featured: true,
      overview: [
        'The Smart Service Portal (SSP) is a web and mobile platform where residents of Johannesburg log and track service requests such as water leaks, electricity faults and refuse collection.',
        'Our team of four acted as the IT project management team. We planned the whole project to finish within eight months, using standard project management tools.'
      ],
      features: [
        'Three SMART project objectives',
        'Scope document and project quality plan',
        'Work breakdown structure with six deliverables, 12 work packages and 40 activities',
        'Network diagram with a critical path and scheduling dates',
        'Resource estimates and a preliminary budget of R1,000,000 across 173 working days',
        'Reports from Microsoft Project'
      ],
      approach: [
        'We built the first work breakdown structure, got detailed feedback from our lecturer, and rebuilt it.',
        'The revision split front end from back end, separated security from integration, moved infrastructure into its own deliverable and removed weekends from the schedule.'
      ],
      learned: [
        'Feedback is the fastest way to improve a plan.',
        'A work breakdown structure only works when every item is a clear action with a clear owner.'
      ]
    },
    {
      slug: 'airport-crm',
      title: 'Airport CRM and booking system',
      tagline: 'Systems analysis and design for a customer and booking system.',
      cat: ['Planning & Analysis'],
      type: 'Systems analysis assignment',
      status: 'Completed assignment',
      stack: ['UML activity diagrams', 'Domain class diagrams', 'ERD'],
      motif: 'layers',
      overview: [
        'This assignment is the analysis and design for a customer relationship and booking system, based on the Reciprocal Sales Corporation case.',
        'It covers how the system behaves, what information it holds and how that information is related.'
      ],
      features: [
        'UML activity diagrams that show how work flows through the system',
        'Domain class diagram of the main concepts and their relationships',
        'Entity relationship diagram (ERD) for the data'
      ],
      approach: [
        'I started from the business process, then identified the main things the system has to remember, and finally connected them in a data model.',
        'I delivered the diagrams as clean images so they are easy to read and reuse.'
      ],
      learned: [
        'Good analysis makes the coding stage shorter.',
        'Diagrams are a way to find questions before they become bugs.'
      ]
    }
  ];

  /* ---------- Procedural isometric cover art (SVG) ---------- */

  function hash(str) {
    var h = 2166136261;
    for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  function rng(seed) {
    var s = seed || 1;
    return function () { s = (Math.imul(s, 1664525) + 1013904223) >>> 0; return s / 4294967296; };
  }

  var C = {
    ink: '#0c1a2e', navy: '#183153', steel: '#5b7c99', steelL: '#a7bccf', orange: '#f4773b',
    tops:   { s: '#a7bccf', n: '#3b5f86', o: '#f4773b' },
    lefts:  { s: '#5b7c99', n: '#264a73', o: '#d65f25' },
    rights: { s: '#3f5d7a', n: '#183153', o: '#b34a1a' }
  };

  function box(ox, oy, x, y, w, d, h, tone) {
    var c = 0.866, s = 0.5;
    function P(px, py, pz) { return [ox + (px - py) * c, oy + (px + py) * s - pz]; }
    function pts(a) { return a.map(function (p) { return p[0].toFixed(1) + ',' + p[1].toFixed(1); }).join(' '); }
    var top = [P(x, y, h), P(x + w, y, h), P(x + w, y + d, h), P(x, y + d, h)];
    var left = [P(x, y + d, h), P(x + w, y + d, h), P(x + w, y + d, 0), P(x, y + d, 0)];
    var right = [P(x + w, y, h), P(x + w, y + d, h), P(x + w, y + d, 0), P(x + w, y, 0)];
    return '<polygon points="' + pts(left) + '" fill="' + C.lefts[tone] + '"/>' +
           '<polygon points="' + pts(right) + '" fill="' + C.rights[tone] + '"/>' +
           '<polygon points="' + pts(top) + '" fill="' + C.tops[tone] + '"/>';
  }

  function scene(p) {
    var r = rng(hash(p.slug)), out = [], i, j;
    var m = p.motif || 'city';
    if (m === 'city') {
      var items = [];
      for (i = 0; i < 4; i++) for (j = 0; j < 3; j++) {
        items.push({ x: i * 62, y: j * 62, h: 20 + Math.floor(r() * 90), t: r() < 0.16 ? 'o' : (r() < 0.5 ? 's' : 'n') });
      }
      if (!items.some(function (b) { return b.t === 'o'; })) items[5].t = 'o';
      items.sort(function (a, b) { return (a.x + a.y) - (b.x + b.y); });
      items.forEach(function (b) { out.push(box(330, 175, b.x - 100, b.y - 50, 50, 50, b.h, b.t)); });
    } else if (m === 'layers') {
      var tones = ['n', 's', 'o'];
      for (i = 0; i < 3; i++) out.push(box(320, 210 - i * 44, -90, -90, 180, 180, 16, tones[i]));
    } else if (m === 'phone') {
      out.push(box(250, 250, 0, 0, 90, 14, 160, 'n'));
      out.push(box(250, 250, 6, 14, 78, 2, 150, 's'));
      out.push(box(400, 280, 0, 0, 90, 14, 160, 's'));
      out.push(box(400, 280, 6, 14, 78, 2, 150, 'o'));
    } else if (m === 'bars') {
      for (i = 0; i < 6; i++) out.push(box(190 + i * 34, 170 + i * 20, 0, 0, 40, 40, 30 + i * 22 + Math.floor(r() * 20), i === 5 ? 'o' : (i % 2 ? 's' : 'n')));
    } else if (m === 'chat') {
      out.push(box(260, 90, 0, 0, 170, 20, 46, 'n'));
      out.push(box(330, 160, 0, 0, 150, 20, 46, 's'));
      out.push(box(260, 230, 0, 0, 120, 20, 46, 'o'));
    } else { /* nodes */
      var pts = [];
      for (i = 0; i < 7; i++) pts.push([90 + r() * 460, 60 + r() * 280]);
      for (i = 0; i < pts.length - 1; i++) {
        out.push('<line x1="' + pts[i][0].toFixed(0) + '" y1="' + pts[i][1].toFixed(0) + '" x2="' + pts[i + 1][0].toFixed(0) + '" y2="' + pts[i + 1][1].toFixed(0) + '" stroke="' + C.steel + '" stroke-width="2"/>');
      }
      pts.forEach(function (q, k) {
        out.push('<circle cx="' + q[0].toFixed(0) + '" cy="' + q[1].toFixed(0) + '" r="' + (k === 3 ? 16 : 11) + '" fill="' + (k === 3 ? C.orange : C.steelL) + '"/>');
      });
    }
    return out.join('');
  }

  function coverSVG(p) {
    var id = 'g' + hash(p.slug);
    return '<svg class="cover-svg" viewBox="0 0 640 400" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Illustration for ' + p.title.replace(/"/g, '') + '">' +
      '<defs><linearGradient id="' + id + '" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="' + C.navy + '"/><stop offset="1" stop-color="' + C.ink + '"/></linearGradient></defs>' +
      '<rect x="-1200" y="-800" width="3040" height="2000" fill="url(#' + id + ')"/>' +
      '<g opacity=".12" stroke="' + C.steelL + '" stroke-width="1">' +
        [-720, -640, -560, -480, -400, -320, -240, -160, -80, 0, 80, 160, 240, 320, 400, 480, 560, 640, 720, 800, 880, 960, 1040, 1120, 1200, 1280, 1360].map(function (x) { return '<line x1="' + x + '" y1="-800" x2="' + x + '" y2="1200"/>'; }).join('') +
        [-400, -320, -240, -160, -80, 0, 80, 160, 240, 320, 400, 480, 560, 640, 720].map(function (y) { return '<line x1="-1200" y1="' + y + '" x2="1840" y2="' + y + '"/>'; }).join('') +
      '</g>' + scene(p) + '</svg>';
  }

  return { CATEGORIES: CATEGORIES, PROJECTS: PROJECTS, coverSVG: coverSVG };
});
