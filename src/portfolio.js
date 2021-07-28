/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
  isNickName: false,
};

//SEO Related settings
const seo = {
  title: "Dhruv Krishna Vaid",
  description:
    "Hi! I am Dhruv Krishna Vaid. I am a web developer, app developer, and a certified ethical hacker. I know HTML, CSS, JavaScript, Java, Bash, Dart, React and React Native. I am currently learning Python.",
  og: {
    title: "Dhruv Krishna Vaid's Portfolio Website",
    type: "website",
    url: "https://dhruvkrishnavaid.github.io/",
  },
};

//people who have long names will benefit from this
var x = window.matchMedia("(max-width: 700px)");

//Home Page
const greeting = {
  title: "Dhruv Krishna Vaid",
  logo_name: x.matches ? "Dhruv Krishna" : "Dhruv Krishna Vaid",
  nickname: "",
  subTitle:
    "Hi! I am Dhruv Krishna Vaid. I am a web developer, app developer, and a certified ethical hacker. I know HTML, CSS, JavaScript, Java, Bash, Dart, React and React Native. I am currently learning Python.",
  portfolio_repository: "https://github.com/dhruvkrishnavaid/dhruvkrishnavaid.github.io",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/dhruvkrishnavaid",
    fontAwesomeIcon: "fab fa-github",
    backgroundColor: "#000000",
  },
  {
    name: "Gmail",
    link: "mailto:dhruvkrishnavaid@gmail.com",
    fontAwesomeIcon: "fab fa-google",
    backgroundColor: "#00A0ff",
  },
  {
    name: "Yandex.Mail",
    link: "mailto:dhruvkrishna@yandex.com",
    fontAwesomeIcon: "fab fa-yandex-international",
    backgroundColor: "#ff0000",
  },
  {
    name: "Google Developers",
    link: "https://developers.google.com/profile/u/108430102073000785511",
    fontAwesomeIcon: "fas fa-code",
    backgroundColor: "#ff00ff",
  },
  {
    name: "Stack Overflow",
    link: "https://stackoverflow.com/users/15815834/dhruvkrishnavaid",
    fontAwesomeIcon: "fab fa-stack-overflow",
    backgroundColor: "#FFDD1F",
  }
];

const skills = {
  data: [
    {
      title: "Web Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing almost every kind of website",
        "⚡ Experience of working with Bootstrap and JQuery",
        "⚡ Also applying some basic animations to objects",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Java",
        "⚡ Creating application backend in Node & Express",
      ],
      softwareSkills: [
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "Gatsby",
          fontAwesomeClassname: "simple-icons:gatsby",
          style: {
            color: "#663399",
          },
        },
        {
          skillName: "Flutter",
          fontAwesomeClassname: "simple-icons:flutter",
          style: {
            color: "#02569B",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Setting up cloud functions for serving as application's backend",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "Heroku",
          fontAwesomeClassname: "simple-icons:heroku",
          style: {
            color: "#800080",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      subtitle: "😅 I'm still studying.",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Introduction to Blockchain",
      subtitle: "- Abdul Moiz",
      logo_path: "bdg.webp",
      certificate_link:
        "https://www.bitdegree.org/api/certificate?slug=introduction-to-blockchain-quick-guide-exploring-blockchain&action=view&username=dhruv_krishna_vaid",
      alt_name: "Bitdegree",
      color_code: "#FFFFFF",
    },
    {
      title: "Intro to webpages",
      subtitle: "- Grasshopper (Area 120 by Google)",
      logo_path: "gh.webp",
      certificate_link:
        "https://drive.google.com/file/d/1-HEVo2V_CxSEcY4yp7sMsFkEfGYeIGDm/view?usp=sharing",
      alt_name: "Grasshopper",
      color_code: "#FFFFFF",
    },
    {
      title: "Network Security Fundamentals",
      subtitle: "- Vinz",
      logo_path: "bdg.webp",
      certificate_link:
        "https://www.bitdegree.org/api/certificate?slug=network-security-fundamentals&action=view&username=dhruv_krishna_vaid",
      alt_name: "Bitdegree",
      color_code: "#FFFFFF",
    },
    {
      title: "Ethical Hacking",
      subtitle: "- Eduonix ©",
      logo_path: "ed.webp",
      certificate_link:
        "https://drive.google.com/file/d/1VEADpA2qZi22CxoNih3hOFIo4Vz9To_K/view?usp=sharing",
      alt_name: "Eduonix",
      color_code: "#FFFFFF",
    },
    {
      title: "JavaScript Course",
      subtitle: "- BitDegree Foundation VSI©",
      logo_path: "bdg.webp",
      certificate_link:
        "https://www.bitdegree.org/api/certificate?slug=javascript-course&action=view&username=dhruv_krishna_vaid",
      alt_name: "Bitdegree",
      color_code: "#FFFFFF",
    },
    {
      title: "Career Edge",
      subtitle: "- TCS ION ©",
      logo_path: "tcs.webp",
      certificate_link:
        "https://drive.google.com/file/d/1feGNAfybRrtl8PVxIBMqcKWndt3J3lCk/view?usp=sharing",
      alt_name: "TCS ION",
      color_code: "#FFFFFF",
    },
    {
      title: "Bootstrap tutorial",
      subtitle: "- BitDegree Foundation VSI©",
      logo_path: "bdg.webp",
      certificate_link:
        "https://www.bitdegree.org/api/certificate?slug=bootstrap-tutorial&action=view&username=dhruv_krishna_vaid",
      alt_name: "Bitdegree",
      color_code: "#FFFFFF",
    },
    {
      title: "Coding Fundamentals II",
      subtitle: "- Grasshopper (Area 120 by Google)",
      logo_path: "gh.webp",
      certificate_link:
        "https://drive.google.com/file/d/19kqm4EliOAyhRMkHUM5zdNOxeyLZrcKe/view?usp=sharing",
      alt_name: "Grasshopper",
      color_code: "#FFFFFF",
    },
    {
      title: "Responsive Web Design Course",
      subtitle: "- BitDegree Foundation VSI©",
      logo_path: "bdg.webp",
      certificate_link:
        "https://www.bitdegree.org/api/certificate?slug=responsive-web-design&action=view&username=dhruv_krishna_vaid",
      alt_name: "Bitdegree",
      color_code: "#FFFFFF",
    },
    {
      title: "Advanced Hacking",
      subtitle: "- Programming Hub ©",
      logo_path: "ph.webp",
      certificate_link:
        "https://drive.google.com/file/d/1B7uFrzMFAIK_3Qry0ykAeFbDX_mAYZve/view?usp=sharing",
      alt_name: "Programming Hub",
      color_code: "#FFFFFF",
    },
    {
      title: "Introduction to HTML5 and CSS3",
      subtitle: "- Stone River eLearning",
      logo_path: "bdg.webp",
      certificate_link:
        "https://www.bitdegree.org/api/certificate?slug=learn-html5-and-css3&action=view&username=dhruv_krishna_vaid",
      alt_name: "Bitdegree",
      color_code: "#FFFFFF",
    },
    {
      title: "Dart Course",
      subtitle: "- Programming Hub ©",
      logo_path: "ph.webp",
      certificate_link:
        "https://drive.google.com/file/d/1RCyKTb-YkZCj38riX-kAb59lIVdnrvMO/view?usp=sharing",
      alt_name: "Programming Hub",
      color_code: "#FFFFFF",
    },
    {
      title: "Coding for Beginners",
      subtitle: "- BitDegree Foundation VSI©",
      logo_path: "bdg.webp",
      certificate_link:
        "https://www.bitdegree.org/api/certificate?slug=coding-for-beginners-space-doggos&action=view&username=dhruv_krishna_vaid",
      alt_name: "Bitdegree",
      color_code: "#FFFFFF",
    },
    {
      title: "TypeScript Course",
      subtitle: "- Programming Hub ©",
      logo_path: "ph.webp",
      certificate_link:
        "https://drive.google.com/file/d/11vvx96EwjEKQNHIo_GaWZMwxSi8aYkpY/view?usp=sharing",
      alt_name: "Programming Hub",
      color_code: "#FFFFFF",
    },
    {
      title: "Animations",
      subtitle: "- Grasshopper (Area 120 by Google)",
      logo_path: "gh.webp",
      certificate_link:
        "https://drive.google.com/file/d/1IpmkMWCTZHQIpO2WvG78IKq-n8FLPllT/view?usp=sharing",
      alt_name: "Grasshopper",
      color_code: "#FFFFFF",
    },
    {
      title: "Git Course",
      subtitle: "- Programming Hub ©",
      logo_path: "ph.webp",
      certificate_link:
        "https://drive.google.com/file/d/1JhYjo1e7l56mueLCo2oiJjn1PjwBs067/view?usp=sharing",
      alt_name: "Programming Hub",
      color_code: "#FFFFFF",
    },
    {
      title: "Fundamentals of Digital Marketing",
      subtitle: "- Google Digital Garage",
      logo_path: "gdg.webp",
      certificate_link:
        "https://drive.google.com/file/d/1dDfETYjfbDiPAa6-XSZhAtRXya12gF_i/view?usp=sharing",
      alt_name: "Google Digital Garage",
      color_code: "#FFFFFF",
    },
    {
      title: "Array Methods",
      subtitle: "- Grasshopper (Area 120 by Google)",
      logo_path: "gh.webp",
      certificate_link:
        "https://drive.google.com/file/d/1fLULx3RTDBGTO5Z2WqR02O7Wk4g6vtGB/view?usp=sharing",
      alt_name: "Grasshopper",
      color_code: "#FFFFFF",
    },
    {
      title: "Coding Fundamentals",
      subtitle: "- Grasshopper (Area 120 by Google)",
      logo_path: "gh.webp",
      certificate_link:
        "https://drive.google.com/file/d/1jGG_8ifEl21KKhmg3e6XlpqU8ukpKMPv/view?usp=sharing",
      alt_name: "Grasshopper",
      color_code: "#FFFFFF",
    },
    {
      title: "Ethical Hacking",
      subtitle: "- Programming Hub ©",
      logo_path: "ph.webp",
      certificate_link:
        "https://drive.google.com/file/d/1kBK9ryyG45cwDFegloD5wyK9v691LpBn/view?usp=sharing",
      alt_name: "Programming Hub",
      color_code: "#FFFFFF",
    },
    {
      title: "Using a code editor",
      subtitle: "- Grasshopper (Area 120 by Google)",
      logo_path: "gh.webp",
      certificate_link:
        "https://drive.google.com/file/d/1nov-sBZfqgdcupkYd8ZVUMUrix20K5Hp/view?usp=sharing",
      alt_name: "Grasshopper",
      color_code: "#FFFFFF",
    },
    {
      title: "Intro to Interviewing",
      subtitle: "- Grasshopper (Area 120 by Google)",
      logo_path: "gh.webp",
      certificate_link:
        "https://drive.google.com/file/d/1s-PZTRyOqHufWk_bjVeVma1XsWkKEea3/view?usp=sharing",
      alt_name: "Grasshopper",
      color_code: "#FFFFFF",
    },
    {
      title: "Automation",
      subtitle: "- Grasshopper (Area 120 by Google)",
      logo_path: "gh.webp",
      certificate_link:
        "https://drive.google.com/file/d/1sJo-aqk8hV58V_Z86Mrv4x79A5A3ioWQ/view?usp=sharing",
      alt_name: "Grasshopper",
      color_code: "#FFFFFF",
    },
    {
      title: "Animations II",
      subtitle: "- Grasshopper (Area 120 by Google)",
      logo_path: "gh.webp",
      certificate_link:
        "https://drive.google.com/file/d/1ywfbnpAQ207f1MXP0CxPRF3Hv64jxJT0/view?usp=sharing",
      alt_name: "Grasshopper",
      color_code: "#FFFFFF",
    },
  ],
};

// Experience Page
const experience = {};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "I have created and contributed to some popular opensource projects on Github.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "logo.svg",
    description:
      "I am available on almost every social site. If you find my profile (you probably won't be able to 😆), you can message me, I will reply within 2 days. 😆 I am not very active on social media. I can help you with Python, React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individuals who want to make their career in IT related services, me and my friends write blogs. All the content is in Hinglish, so that people ",
    link: "https://uttam-jankari.blogspot.com",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Email Address",
    subtitle:
      "dhruvkrishnavaid@gmail.com, dhruvkrishna@yandex.com",
    avatar_image_path: "address_image.svg",
    primaryEmail: "mailto:dhruvkrishnavaid@gmail.com",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "Forget about calling me. I don't have a phone number! 😜",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
