// This "Type" defines the shape of our event data
export interface IEvent {
  id: number;
  hostSocietyName: string;
  eventName: string;
  description: string;
  eventURL: string;
  topics: string[];
}

// This is our "database" of all events
export const hardcodedEvents: IEvent[] = [
  // --- AI / ML ---
  {
    id: 1,
    hostSocietyName: "IEEE-DTU",
    eventName: "Innovate AI 2025",
    description:
      "A 48-hour premier hackathon organized by IEEE-DTU, focused on building groundbreaking solutions to real-world problems using the power of Artificial Intelligence and Machine Learning.",
    eventURL: "https://forms.gle/...",
    topics: ["AI", "Hackathon", "ML", "IEEE"],
  },
  {
    id: 2,
    hostSocietyName: "GDSC DTU",
    eventName: "ML Foundations Bootcamp",
    description:
      "Join GDSC for a week-long bootcamp on the foundations of Machine Learning, from simple regression to neural networks. No prior experience required. Perfect for beginners.",
    eventURL: "https://forms.gle/...",
    topics: ["ML", "AI", "GDSC", "Workshop"],
  },
  // --- Design ---
  {
    id: 3,
    hostSocietyName: "Pratibimb, DTU",
    eventName: "Pixel Perfect Designathon",
    description:
      "Join Pratibimb, the official photography and videography society of DTU, for a 24-hour designathon. We are looking for UI/UX designers, graphic artists, and product thinkers.",
    eventURL: "https://forms.gle/...",
    topics: ["Design", "UI/UX", "Graphic Design", "Pratibimb"],
  },
  {
    id: 4,
    hostSocietyName: "Pratibimb, DTU",
    eventName: "Figma & UI Pro Workshop",
    description:
      "A 3-day workshop covering the essentials and pro-tips for UI/UX design using Figma. Learn from industry professionals and build a stunning portfolio piece.",
    eventURL: "https://forms.gle/...",
    topics: ["Design", "UI/UX", "Workshop", "Pratibimb"],
  },
  // --- CTF / Cybersecurity ---
  {
    id: 5,
    hostSocietyName: "DTU-CTF Team",
    eventName: "ByteBandits CTF 2025",
    description:
      "Get your keyboards ready! A 48-hour Jeopardy-style Capture The Flag competition. Open to all skill levels, with categories in Web, Pwn, Reverse Engineering, Crypto, and Forensics.",
    eventURL: "https://forms.gle/...",
    topics: ["CTF", "Cybersecurity", "Web", "Crypto", "Forensics"],
  },
  {
    id: 6,
    hostSocietyName: "IEEE-DTU",
    eventName: "Hardware Hacking 101",
    description:
      "Ever wanted to hack a smart device? This workshop covers the basics of hardware hacking, JTAG, UART, and more. All hardware will be provided.",
    eventURL: "https://forms.gle/...",
    topics: ["CTF", "Cybersecurity", "Hardware", "Workshop", "IEEE"],
  },
  // --- Cultural / Music / Fest ---
  {
    id: 7,
    hostSocietyName: "Engifest Team",
    eventName: "Engifest 2025 Auditions",
    description:
      "Auditions for Engifest, the largest cultural fest in North India, are here! We are looking for dancers, singers, and actors. Show us what you've got.",
    eventURL: "https://forms.gle/...",
    topics: ["Cultural", "Dance", "Music", "Engifest", "Theatre"],
  },
  {
    id: 8,
    hostSocietyName: "Rhapsody (Music Society)",
    eventName: "Battle of the Bands",
    description:
      "Rhapsody's annual band competition is here. Bring your best set and compete for the title of DTU's best band. All genres are welcome, from rock to classical.",
    eventURL: "https://forms.gle/...",
    topics: ["Music", "Cultural", "Engifest"],
  },
  // --- Debate / MUN ---
  {
    id: 9,
    hostSocietyName: "DTU Debating Society",
    eventName: "The DTU Parliamentary Debate",
    description:
      "The annual DTU Parliamentary Debate is back. Sharpen your arguments and face the best debaters from across the country in this thrilling competition of wits and words.",
    eventURL: "https://forms.gle/...",
    topics: ["Debate", "MUN", "Public Speaking"],
  },
  {
    id: 10,
    hostSocietyName: "DTU MUN Society",
    eventName: "DTU MUN 2025",
    description:
      "The 10th edition of the Delhi Technological University Model United Nations is now accepting delegate applications. Join us for a weekend of intense debate and diplomacy.",
    eventURL: "https://forms.gle/...",
    topics: ["MUN", "Debate", "Public Speaking"],
  },
  // --- Social Work / Community ---
  {
    id: 11,
    hostSocietyName: "NSS DTU",
    eventName: "Community 'Shramdaan' Drive",
    description:
      "Join NSS DTU for a campus-wide cleanliness and tree-plantation drive. Let's work together to make our campus green and clean. Certificates will be provided to all volunteers.",
    eventURL: "https://forms.gle/...",
    topics: ["Social Work", "NSS", "Community"],
  },
  {
    id: 12,
    hostSocietyName: "NSS DTU",
    eventName: "Blood Donation Camp",
    description:
      "Be a hero. Save a life. NSS DTU is organizing its bi-annual blood donation camp in collaboration with Red Cross Society. Every donor gets a certificate and refreshments.",
    eventURL: "https://forms.gle/...",
    topics: ["Social Work", "NSS", "Community", "Health"],
  },
  // --- Web / App Dev ---
  {
    id: 13,
    hostSocietyName: "GDSC DTU",
    eventName: "Web 3.0 Bootcamp",
    description:
      "Explore the future of the internet with GDSC DTU. This week-long bootcamp will cover everything from blockchain basics to smart contracts and dApp development.",
    eventURL: "https://forms.gle/...",
    topics: ["Web", "GDSC", "Crypto", "Hackathon"],
  },
  {
    id: 14,
    hostSocietyName: "GDSC DTU",
    eventName: "Flutter Festival: App Dev",
    description:
      "Learn to build beautiful, cross-platform apps with Flutter. This 3-day workshop will take you from a blank canvas to a fully functional weather app.",
    eventURL: "https://forms.gle/...",
    topics: ["App Dev", "GDSC", "Workshop", "Mobile Dev"],
  },
  // --- Business / E-Cell ---
  {
    id: 15,
    hostSocietyName: "E-Cell DTU",
    eventName: "Social Impact Startup Pitch",
    description:
      "Have an idea that can change the world? E-Cell DTU presents a pitch competition focused on social-work, sustainability, and community-driven startups. Get mentorship and funding.",
    eventURL: "https://forms.gle/...",
    topics: ["Social Work", "Business", "E-Cell"],
  },
  {
    id: 16,
    hostSocietyName: "E-Cell DTU",
    eventName: "Stock Market Simulation Challenge",
    description:
      "Think you can beat the market? Join E-Cell's virtual stock trading competition. Compete with real-time market data and win cash prizes.",
    eventURL: "https://forms.gle/...",
    topics: ["Business", "E-Cell", "Fintech"],
  },
  // --- Literature / Quizzing ---
  {
    id: 17,
    hostSocietyName: "DTU Quiz Club",
    eventName: "MELA Quiz (Music, Ent, Lit, Arts)",
    description:
      "Join the DTU Quiz Club for a fun-filled evening quiz covering all things pop culture. Come in teams of two or join one on the spot.",
    eventURL: "https://forms.gle/...",
    topics: ["Quiz", "Literature", "Music", "Cultural"],
  },
  {
    id: 18,
    hostSocietyName: "LitSoc DTU",
    eventName: "Verse: The Poetry Slam",
    description:
      "The Literary Society presents its flagship poetry slam. Bring your original pieces (English or Hindi) and perform them in front of a live audience.",
    eventURL: "https://forms.gle/...",
    topics: ["Literature", "Cultural", "Public Speaking"],
  },
  // --- Gaming / E-Sports ---
  {
    id: 19,
    hostSocietyName: "DTU Gaming",
    eventName: "Valorant LAN Tournament",
    description:
      "The official DTU Gaming Club presents a 5v5 Valorant LAN tournament. Form your teams and compete for a massive prize pool. Brackets will be double-elimination.",
    eventURL: "https://forms.gle/...",
    topics: ["Gaming", "E-Sports"],
  },
  {
    id: 20,
    hostSocietyName: "DTU Gaming",
    eventName: "FIFA 25 Showdown",
    description:
      "Get ready for the ultimate 1v1 FIFA 25 competition on PS5. Settle your rivalries and find out who is the best FIFA player on campus.",
    eventURL: "https://forms.gle/...",
    topics: ["Gaming", "E-Sports", "Sports"],
  },
  // --- Mechanical / Automotive ---
  {
    id: 21,
    hostSocietyName: "Team Raftaar",
    eventName: "Team Raftaar Recruitment 2025",
    description:
      "We build racecars. We are recruiting passionate 1st and 2nd year students for our engineering and management departments. No experience needed, just a passion for automobiles.",
    eventURL: "https://forms.gle/...",
    topics: ["Automotive", "Mechanical", "Recruitment"],
  },
  {
    id: 22,
    hostSocietyName: "Team Defianz (Baja SAE)",
    eventName: "Baja SAE Vehicle Showcase",
    description:
      "See the all-terrain vehicle we built for the national Baja SAE competition. Come talk to the team, see the engineering, and learn how you can join.",
    eventURL: "https://forms.gle/...",
    topics: ["Automotive", "Mechanical", "Showcase"],
  },
  // --- Health / Sports ---
  {
    id: 23,
    hostSocietyName: "DTU Sports",
    eventName: "DTU Marathon 2025",
    description:
      "Run for a cause! The annual DTU Marathon (5K and 10K) is here. All participants get a t-shirt, medal, and certificate. Open to all students, faculty, and alumni.",
    eventURL: "https://forms.gle/...",
    topics: ["Sports", "Health", "Community"],
  },
  {
    id: 24,
    hostSocietyName: "DSW DTU",
    eventName: "Yoga and Wellness Camp",
    description:
      "De-stress before the exams. DSW is organizing a 3-day morning yoga and wellness camp. Open to all. Mats will be provided.",
    eventURL: "https://forms.gle/...",
    topics: ["Health", "Wellness", "Community"],
  },
  // --- Career / T&P ---
  {
    id: 25,
    hostSocietyName: "T&P Cell, DTU",
    eventName: "Resume Building Workshop",
    description:
      "The Training & Placement Cell presents a workshop on how to build an ATS-friendly, high-impact resume. Mandatory for students seeking internships.",
    eventURL: "https://forms.gle/...",
    topics: ["Career", "Workshop", "Business"],
  },
  {
    id: 26,
    hostSocietyName: "T&P Cell, DTU",
    eventName: "Internship & Placement Fair",
    description:
      "The annual T&P fair is here. 50+ companies will be visiting the campus for internship and full-time roles. Prepare your resumes and dress professionally.",
    eventURL: "https://forms.gle/...",
    topics: ["Career", "Recruitment", "Business"],
  },
  // --- Open Source / Misc ---
  {
    id: 27,
    hostSocietyName: "GDSC DTU",
    eventName: "Open Source Contribution Drive",
    description:
      "Join GDSC for a month-long contribution drive. We will guide you on how to make your first pull request, find good-first-issues, and build your GitHub profile.",
    eventURL: "https://forms.gle/...",
    topics: ["Open Source", "GDSC", "Web", "Workshop"],
  },
  {
    id: 28,
    hostSocietyName: "Yuvaan (Street Play)",
    eventName: "Spandan: Annual Stage Play",
    description:
      "Yuvaan, the street play society, presents its annual stage play. A thought-provoking performance on social issues. Come and support the artists.",
    eventURL: "https://forms.gle/...",
    topics: ["Theatre", "Cultural", "Engifest"],
  },
  {
    id: 29,
    hostSocietyName: "Fin-X DTU",
    eventName: "Fintech & Crypto Summit",
    description:
      "The finance and crypto society of DTU brings you a summit on the future of money. Talks from industry leaders on DeFi, Blockchain, and Algorithmic Trading.",
    eventURL: "https://forms.gle/...",
    topics: ["Fintech", "Crypto", "Business", "Workshop"],
  },
  {
    id: 30,
    hostSocietyName: "Google",
    eventName: "Google Summer of Code (GSoC)",
    description:
      "Google Summer of Code is a global, online program focused on bringing new contributors into open-source software development. Get paid to work on open source!",
    eventURL: "https://forms.gle/...",
    topics: ["Open Source", "Web", "AI", "Mobile Dev", "Career"],
  },
];
