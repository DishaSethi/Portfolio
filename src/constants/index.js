// import projects1 from "../assets/projects1.webp";
import projects1 from "../assets/project1.png";
import projects2 from "../assets/project3.png";
import projects3 from "../assets/project2.png";
// import projects4 from "../assets/projects4.webp";
// import projects5 from "../assets/projects5.webp";
// import projects6 from "../assets/projects6.webp";

import person1 from "../assets/person1.webp";
import person2 from "../assets/person2.webp";
import person3 from "../assets/person3.webp";
import person4 from "../assets/person4.webp";
import person5 from "../assets/person5.webp";
import person6 from "../assets/person6.webp";

export const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#technologies", label: "Technologies" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Contributions" },

  // { href: "#testimonials", label: "Testimonials" },

 
  // { href: "#education", label: "Education" },
  ,
  { href: "#contact", label: "Contact" },
];

export const HERO_CONTENT = {
  greeting: "Hey there! 🖐️",
  introduction:
    "I'm a passionate web developer and tech enthusiast constantly learning and growing in the world of technology.",
  description:
    "",
  resumeLinkText: "Download Resume",
  resumeLink: "./Disha_Resume.pdf",
};

export const PROJECTS = [
  {
    name: " Blog-Platform",
    description: "Developed a full-stack blog platform using the MERN stack with features like CRUD functionality, JWT-based authentication, and real-time comments via WebSockets. Optimized user experience with search filters, pagination, and a responsive design.",
    image: projects1,
    link: "https://github.com/DishaSethi/Blog-platform",
  },
  {
    name: "CryptoPlace",
    description: "Developed a crypto tracking platform using React, featuring the top 10 cryptocurrencies, a robust search functionality, and a currency converter supporting USD, EUR, and INR. Integrated individual coin pages with dynamic charts and a news section for the latest updates.",
    image: projects2,
    link: "https://github.com/DishaSethi/Crypto-Palace",
  },
  {
    name: "SmartEats",
    description: "A full-stack food delivery application built with the MERN (MongoDB, Express, React, Node.js) stack. This platform provides a seamless food ordering experience for customers and a powerful admin dashboard for managing orders, and more.",
    image: projects3,
    link: "https://github.com/DishaSethi/Food-Delivery-Website",
  },
  // {
  //   name: "DevDeck",
  //   description:
  //     "Interactive dashboard for developers to track coding activity",
  //   image: projects4,
  //   link: "https://github.com/your-github/devdeck",
  // },
  // {
  //   name: "FitConnect",
  //   description: "Fitness social network to connect athletes and trainers",
  //   image: projects5,
  //   link: "https://github.com/your-github/fitconnect",
  // },
  // {
  //   name: "WellNest",
  //   description: "A wellness app for mental and physical health improvement",
  //   image: projects6,
  //   link: "https://github.com/your-github/wellnest",
  // },
];

export const ABOUT_CONTENT = {
  paragraphs: [
    "I thrive on solving complex problems and continuously improving my skills. Currently, I’m diving deep into data structures and algorithms to enhance my problem-solving abilities and optimize code.",
    "I’m also working with React for front-end development and Node.js for back-end development, always eager to apply my knowledge through real-world projects. Whether it's contributing to open-source codebases or tackling algorithmic challenges, I'm always learning and growing.",
  ],
};

export const EXPERIENCES = [
  {
    yearRange: "2024 — Now (PartTime)",
    title: "Tech Lead at Finance And Economics Society (IGDTUW)",
   
    description: [
      "Led the design and implementation of a new Games Section, boosting team efficiency by 30%",
      "Ensuring high-quality delivery by fostering collaboration and maintaining consistent progress across all tasks.",
    ],
  },
  {
    yearRange: "2023 — 2024",
    title: "Technical Member at Finance And Economics Society(IGDTUW)",
  
    description: [
      "Contributed to the official society website in 2023, enhancing the UI of events, home, and resources pages using React, HTML, CSS, and JavaScript, increasing user interaction by 20%",
      "Improved website design and layout using Figma, leading to a 15% increase in user satisfaction",
      "Promoted to Tech Lead, overseeing development and maintenance of the website, managing a team of 5 developers",
    ],
  },
  // {
  //   yearRange: "2018 — 2021",
  //   title: "Frontend Developer at Creative Solutions",
  //   location: "London, UK",
  //   description: [
  //     "Developed and maintained user interfaces for high-traffic websites.",
  //     "Worked closely with designers to implement pixel-perfect designs.",
  //     "Optimized websites for SEO and performance, resulting in a 30% increase in traffic.",
  //   ],
  // },
];

// export const TESTIMONIALS = [
//   {
//     name: "Sarah Johnson",
//     title: "Frontend Engineer, Google",
//     feedback:
//       "Jason is one of the most talented developers I've had the pleasure of working with. His skills in frontend development are unparalleled, and his ability to solve complex problems with ease is truly impressive. His leadership and communication make him a standout developer in any team.",
//     image: person1,
//   },
//   {
//     name: "Michael Anderson",
//     title: "Product Manager, Facebook",
//     feedback:
//       "Jason was instrumental in driving our product forward. His keen eye for detail and ability to work cross-functionally made him an invaluable asset. He consistently delivers top-quality work and elevates the projects he's involved in. He’s a natural leader, and his expertise in frontend technologies is outstanding.",
//     image: person2,
//   },
//   {
//     name: "Emily Davis",
//     title: "Lead Designer, Amazon",
//     feedback:
//       "Working with Jason has been a phenomenal experience. His deep understanding of both design and development allowed us to push the boundaries of what we could achieve. His creative problem-solving abilities and commitment to quality are second to none.",
//     image: person3,
//   },
//   {
//     name: "David Lee",
//     title: "Senior Developer, Microsoft",
//     feedback:
//       "Jason's contribution to our team was nothing short of amazing. His technical knowledge, combined with his passion for creating user-friendly and scalable applications, made a significant impact on the success of our product. He’s always willing to go the extra mile to ensure the best outcome.",
//     image: person4,
//   },
//   {
//     name: "Laura Martinez",
//     title: "CTO, Shopify",
//     feedback:
//       "Jason brought a level of expertise and professionalism to our team that was greatly appreciated. His focus on scalability and clean code ensured that our platform could handle large traffic loads without compromising performance. His work ethic and collaboration skills are impeccable.",
//     image: person5,
//   },
//   {
//     name: "Chris Brown",
//     title: "Co-founder, Stripe",
//     feedback:
//       "Jason combines technical proficiency with excellent leadership skills. He was a key part of our success, helping us build a robust and scalable product. His attention to detail and ability to manage teams made him an invaluable part of the company.",
//     image: person6,
//   },
// ];

export const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    title: "Frontend Engineer, Google",
    feedback:
      "Jason is one of the most talented developers I've had the pleasure of working with. His skills in frontend development are unparalleled, and his ability to solve complex problems with ease is truly impressive. His leadership and communication make him a standout developer in any team.",
    image: person1,
  },
  {
    name: "Michael Anderson",
    title: "Product Manager, Facebook",
    feedback:
      "Jason was instrumental in driving our product forward. His keen eye for detail and ability to work cross-functionally made him an invaluable asset. He consistently delivers top-quality work and elevates the projects he's involved in. He’s a natural leader, and his expertise in frontend technologies is outstanding.",
    image: person2,
  },
  {
    name: "Emily Davis",
    title: "Lead Designer, Amazon",
    feedback:
      "Working with Jason has been a phenomenal experience. His deep understanding of both design and development allowed us to push the boundaries of what we could achieve. His creative problem-solving abilities and commitment to quality are second to none.",
    image: person3,
 
  }
];

export const CONTACT_CONTENT = {
  headline: "LET'S WORK ON SOMETHING GREAT",
  description:
    "I'm excited to collaborate on projects that push boundaries and create meaningful impact. Let's build something innovative and exceptional together.",
  email: "sethidisha123@gmail.com",
  socialLinks: [
    // {
    //   platform: "Twitter",
    //   url: "https://twitter.com/yourprofile",
    //   ariaLabel: "Follow me on Twitter",
    //   icon: "RiTwitterXFill",
    // },
    {
      platform: "GitHub",
      url: "https://github.com/DishaSethi",
      ariaLabel: "View my GitHub profile",
      icon: "RiGithubFill",
    },
    {
      platform: "LinkedIn",
      url: "https://www.linkedin.com/in/disha-sethi-068107220",
      ariaLabel: "Connect with me on LinkedIn",
      icon: "RiLinkedinFill",
    },
  ],
  footerText: `© ${new Date().getFullYear()} Disha Sethi. All rights reserved.`,
};
