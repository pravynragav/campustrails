export interface SubmissionDetails {
  deadline: string;
  eligibleContributors: string;
  submissionMethod: string;
  reviewProcess: string;
  contactEmail: string;
  acceptedFormats: string[];
}

export interface QuestionVoiceResponse {
  id: string;
  quote: string;
  author: string;
  department: string;
  yearOrRole: string;
  avatarColor: string;
}

export interface SectionItem {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  status: "active" | "coming-soon";
  formUrl: string; // Specific Google Form URL for each section
  categoryTag: string;
  expectedTopics?: string[];
  submissionInfo?: SubmissionDetails;
  currentPrompt?: string;
  sampleResponses?: QuestionVoiceResponse[];
}

export interface SiteConfig {
  name: string;
  edition: string;
  year: string;
  institution: string;
  tagline: string;
  description: string;
  contactEmail: string;
  patron: string;
  facultyInCharge: string;
  articleCollectionForm: string;
  collegeLogoPath: string;
  collegeImagePath: string;
  submissionInfo: SubmissionDetails;
  oneQuestionPrompt: string;
  oneQuestionResponses: QuestionVoiceResponse[];
  sections: SectionItem[];
  navigation: {
    label: string;
    href: string;
  }[];
}

/**
 * CENTRAL SITE CONFIGURATION - CAMPUS TRAILS 27
 */
export const siteConfig: SiteConfig = {
  name: "Campus Trails 27",
  edition: "27th Edition",
  year: "2026",
  institution: "Mepco Schlenk Engineering College",
  tagline: "Stories, Ideas & Perspectives from Our Campus",
  description:
    "Campus Trails 27 is the official student publication project of Mepco Schlenk Engineering College, bringing together creative writing, campus stories, Tamil & English literature, technical insights, drawings, photography, and student voices.",
  
  // Official Contact & Leadership Details
  contactEmail: "campustrails@mepcoeng.ac.in",
  patron: "Dr. S. Arivazhagan",
  facultyInCharge: "Dr. J. Senthilkumar",

  // Images in public/pic
  collegeLogoPath: "/pic/logo.jpg",
  collegeImagePath: "/pic/clg.jpeg",

  // Central Google Form URL for Main Article Collection
  articleCollectionForm:
    "https://docs.google.com/forms/d/e/1FAIpQLSc_MAIN_COLLECTION_FORM/viewform",

  submissionInfo: {
    deadline: "Rolling Submission (Phase 1 Priority Deadline: March 31, 2026)",
    eligibleContributors:
      "All current students, faculty members, and alumni of Mepco Schlenk Engineering College",
    submissionMethod:
      "Online Google Form submission (Upload document/image or Google Docs link)",
    reviewProcess:
      "Editorial board review under the guidance of Faculty In-Charge Dr. J. Senthilkumar within 7-10 business days.",
    contactEmail: "campustrails@mepcoeng.ac.in",
    acceptedFormats: [
      "DOCX / PDF",
      "Google Docs Link",
      "Tamil & English Text (கவிதைகள், கதைகள்)",
      "High-res JPG / PNG (Photographs & Drawings)",
    ],
  },

  oneQuestionPrompt:
    "What is one piece of advice or memorable lesson you would share with a 1st-year student at Mepco?",
  oneQuestionResponses: [
    {
      id: "1",
      quote:
        "Don't just stick to textbooks. Join at least two college clubs in your first year — it builds confidence and friendships that last all four years.",
      author: "K. Rithanya",
      department: "ECE",
      yearOrRole: "3rd Year",
      avatarColor: "bg-[#ed4b35]",
    },
    {
      id: "2",
      quote:
        "Spend time in the central library and workshop labs early on. The hands-on exposure at Mepco gives you an edge in hackathons and placements.",
      author: "M. Sanjay",
      department: "CSE",
      yearOrRole: "4th Year",
      avatarColor: "bg-blue-600",
    },
    {
      id: "3",
      quote:
        "Mepco taught me that consistency matters more than last-minute cramming. Balance your academics with sports, literature, and campus events.",
      author: "Dr. P. Swaminathan",
      department: "Mechanical Engineering",
      yearOrRole: "Faculty Adviser",
      avatarColor: "bg-emerald-600",
    },
    {
      id: "4",
      quote:
        "Write, paint, or create whenever you get time! Campus Trails gave me my first platform to publish my Tamil poetry (கவிதைகள்).",
      author: "S. Ananya",
      department: "Biotech",
      yearOrRole: "2nd Year",
      avatarColor: "bg-purple-600",
    },
  ],

  navigation: [
    { label: "Home", href: "/" },
    { label: "Collection", href: "/collection" },
    { label: "Sections", href: "/sections" },
    { label: "Guidelines", href: "/guidelines" },
  ],

  sections: [
    {
      id: "main-article-collection",
      number: "01",
      title: "Main Article Collection",
      shortDescription:
        "The primary collection featuring Tamil & English stories, poems, photographs, and drawings.",
      fullDescription:
        "The Main Article Collection is the core literary and creative portal for Campus Trails 27. We invite Tamil stories & poems (கவிதைகள் & கதைகள்), English literature, feature essays, campus photography, and drawings/artwork from Mepco Schlenk Engineering College students and staff.",
      status: "active",
      formUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSc_MAIN_ARTICLE_COLLECTION_FORM/viewform",
      categoryTag: "Primary Section",
      expectedTopics: [
        "Tamil Poems & Stories (கவிதைகள் & சிறுகதைகள்)",
        "English Fiction, Micro-stories & Poetry",
        "Campus Photography & Nature Shots",
        "Handmade Drawings, Sketches & Digital Artworks",
        "Feature Essays & Personal Narratives",
      ],
      submissionInfo: {
        deadline: "Rolling Submissions - Phase 1 Priority: March 31, 2026",
        eligibleContributors: "Open to all Mepco Schlenk Engineering College students & staff",
        submissionMethod: "Section-specific Google Form",
        reviewProcess: "Editorial board review guided by Dr. J. Senthilkumar within 7 days",
        contactEmail: "campustrails@mepcoeng.ac.in",
        acceptedFormats: ["DOCX", "PDF", "Google Docs link", "JPG / PNG photos & drawings"],
      },
    },
    {
      id: "campus-chronicles",
      number: "02",
      title: "Campus Chronicles",
      shortDescription:
        "Real campus experiences, event stories, funny incidents, memorable lab moments, and faculty anecdotes.",
      fullDescription:
        "Campus Chronicles captures the authentic heartbeat of Mepco Schlenk Engineering College life. Share real campus experiences, symposium victories, funny hostel/mess incidents, unforgettable lab bloopers, short memories, and lighthearted student/faculty stories.",
      status: "active",
      formUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSc_CAMPUS_CHRONICLES_FORM/viewform",
      categoryTag: "Priority Section",
      expectedTopics: [
        "Real campus experiences & event stories",
        "Funny hostel, mess & bus ride incidents",
        "Unforgettable lab moments & project chaos",
        "Memorable student & faculty anecdotes",
      ],
      submissionInfo: {
        deadline: "Active Submission Window",
        eligibleContributors: "Students, Faculty, and Alumni of Mepco",
        submissionMethod: "Section-specific Google Form",
        reviewProcess: "Fast-track review by Campus Chronicles editorial team",
        contactEmail: "campustrails@mepcoeng.ac.in",
        acceptedFormats: ["DOCX", "PDF", "Text submission via Google Form"],
      },
    },
    {
      id: "one-question-many-voices",
      number: "03",
      title: "One Question, Many Voices",
      shortDescription:
        "One interesting prompt answered by students from different departments and years directly on the website.",
      fullDescription:
        "One Question, Many Voices features short, impactful perspectives from students across all departments and academic years at Mepco. Each month, we pose one compelling question and feature the top responses directly on the website.",
      status: "active",
      formUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSc_ONE_QUESTION_MANY_VOICES_FORM/viewform",
      categoryTag: "Interactive Website Section",
      expectedTopics: [
        "Advice to 1st-year junior students",
        "Favorite campus spot & why",
        "Best project / lab experience at Mepco",
        "What engineering taught me about life",
      ],
      currentPrompt:
        "What is one piece of advice or memorable lesson you would share with a 1st-year student at Mepco?",
    },
    {
      id: "what-i-learned",
      number: "04",
      title: "What I Learned",
      shortDescription:
        "Students share useful engineering, technical, practical or life skills they have learned.",
      fullDescription:
        "A practical knowledge-sharing space where students break down useful technical skills, coding tricks, lab techniques, soft skills, or life lessons discovered during their engineering journey at Mepco.",
      status: "coming-soon",
      formUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSc_WHAT_I_LEARNED_FORM/viewform",
      categoryTag: "Skills & Learnings",
      expectedTopics: [
        "Useful engineering & coding techniques",
        "Practical lab & project shortcuts",
        "Life skills & time management at hostel",
        "Interview preparation takeaways",
      ],
    },
    {
      id: "diy-creative-corner",
      number: "05",
      title: "DIY & Creative Corner",
      shortDescription:
        "DIY projects, arts & crafts, handmade works, and creative student creations.",
      fullDescription:
        "Celebrating hands-on craftsmanship and artistic hobbies. Showcasing DIY projects, handmade crafts, origami, pottery, woodworking, custom electronics mods, and physical artwork created by students.",
      status: "coming-soon",
      formUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSc_DIY_CREATIVE_CORNER_FORM/viewform",
      categoryTag: "Crafts & Hobby Arts",
      expectedTopics: [
        "Handmade arts & crafts showcases",
        "DIY hardware & electronics projects",
        "Papercraft, origami & physical sculptures",
        "Step-by-step DIY tutorials",
      ],
    },
    {
      id: "a-year-in-mepco",
      number: "06",
      title: "A Year in MEPCO",
      shortDescription:
        "Clubs and student activities narrate their year's experiences, achievements, and behind-the-scenes moments.",
      fullDescription:
        "An annual retrospective section where college clubs, technical societies, sports teams, and event committees document their year's journey, symposium highlights, team memories, and behind-the-scenes stories.",
      status: "coming-soon",
      formUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSc_A_YEAR_IN_MEPCO_FORM/viewform",
      categoryTag: "Clubs & Activities",
      expectedTopics: [
        "Technical & cultural club annual roundups",
        "Behind-the-scenes symposium stories",
        "Sports team victories & tournament logs",
        "Society event memories",
      ],
    },
    {
      id: "book-movie-reviews",
      number: "07",
      title: "Book & Movie Reviews",
      shortDescription:
        "Student reviews and recommendations of books, movies, anime, and media.",
      fullDescription:
        "Got a book or movie that inspired you? Share insightful student reviews, media critiques, book recommendations, movie analysis, and anime breakdowns for the Mepco community.",
      status: "coming-soon",
      formUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSc_BOOK_MOVIE_REVIEWS_FORM/viewform",
      categoryTag: "Media & Reviews",
      expectedTopics: [
        "Technical & non-fiction book reviews",
        "Classic & modern movie recommendations",
        "Documentary & sci-fi breakdowns",
        "Tamil literature & regional film critiques",
      ],
    },
    {
      id: "seriousness-not-found",
      number: "08",
      title: "404: Seriousness Not Found",
      shortDescription:
        "Student comics, lighthearted campus observations, creative anecdotes, and humorous stories.",
      fullDescription:
        "The lighthearted side of engineering! A collection of original student comic strips, relatable campus observations, exam week anecdotes, and humorous student-life stories.",
      status: "coming-soon",
      formUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSc_SERIOUSNESS_NOT_FOUND_FORM/viewform",
      categoryTag: "Humour & Comics",
      expectedTopics: [
        "Original student comic strips & sketches",
        "Exam week & viva lighthearted anecdotes",
        "Engineering lab humour & creative stories",
        "Relatable campus life observations",
      ],
    },
    {
      id: "everyday-heroes",
      number: "09",
      title: "Everyday Heroes",
      shortDescription:
        "Stories of people who make a positive difference through small acts of kindness or meaningful contributions.",
      fullDescription:
        "Honoring the unsung heroes of Mepco Schlenk Engineering College — campus staff, canteen workers, bus drivers, security guards, peer mentors, and students performing quiet acts of kindness.",
      status: "coming-soon",
      formUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSc_EVERYDAY_HEROES_FORM/viewform",
      categoryTag: "Inspiration & Community",
      expectedTopics: [
        "Spotlights on campus support staff",
        "Stories of student kindness & peer mentoring",
        "Community service & NSS initiative highlights",
        "Unsung heroes of Mepco",
      ],
    },
    {
      id: "how-well-do-you-know-mepco",
      number: "10",
      title: "How Well Do You Know MEPCO?",
      shortDescription:
        "Interesting, unusual, historical, and humorous facts/trivia about our college campus.",
      fullDescription:
        "Did you know the secret history of our campus landmarks? A trivia and fun-facts section celebrating unique campus spots, historical anecdotes, architectural secrets, and campus lore.",
      status: "coming-soon",
      formUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSc_KNOW_MEPCO_FORM/viewform",
      categoryTag: "Campus Trivia & Lore",
      expectedTopics: [
        "Mepco Schlenk Engineering College history & milestones",
        "Unusual campus trivia & architectural facts",
        "Campus flora, fauna & eco-friendly features",
        "Historical photos & timeline trivia",
      ],
    },
    {
      id: "scenes-from-the-past",
      number: "11",
      title: "Scenes from the Past",
      shortDescription:
        "Interesting life experiences, turning points, nostalgic memories, and stories from faculty members.",
      fullDescription:
        "Wisdom and nostalgia from our esteemed professors and staff. Faculty members share their college days, career turning points, industry insights, and nostalgic memories of engineering education.",
      status: "coming-soon",
      formUrl:
        "https://docs.google.com/forms/d/e/1FAIpQLSc_SCENES_FROM_PAST_FORM/viewform",
      categoryTag: "Faculty Nostalgia",
      expectedTopics: [
        "Professors sharing their own college memories",
        "Key turning points in academic/engineering careers",
        "Advice for young engineering graduates",
        "Evolution of Mepco over the decades",
      ],
    },
  ],
};
