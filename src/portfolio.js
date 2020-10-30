
// Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Zahirul Islam",
  title: "Hi all, I'm Zahirul",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Web and Desktop applications with C# / ASP.NET MVC / JavaScript / Reactjs / Nodejs / jQuery and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1RnASsE64epv-2E_bC9bptXWhSUcJgBt_/view?usp=sharing"
};

// Social Media Link

const socialMediaLinks = {

  github: "https://github.com/ZahirRussell",
  linkedin: "https://www.linkedin.com/in/zahir-russell/",
  gmail: "zirussell007@live.com",
  twitter: "https://twitter.com/zirussell007",
  medium: "https://medium.com/@zahirrussell",
  stackoverflow: "https://stackoverflow.com/users/8743710/zahir"
};

// Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "ASPIRING FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji("⚡ Develop highly interactive web applications"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    }
  ]
};

// education background

const educationInfo = {
  viewEducation: true, // Set it to true to see education section
  schools: [
    {
      schoolName: "National University",
      logo: require("./assets/images/nuLogo.png"),
      subHeader: "Master of Arts in Bengali",
      duration: "2011 - 2012",
      result: "2nd class"
    },
    {
      schoolName: "National University",
      logo: require("./assets/images/nuLogo.png"),
      subHeader: "Bachelor of Arts in Bengali",
      duration: "2006 - 2010",
      result: "2nd class"
    }
  ]
}

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ]
};


// top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Programmer",
      company: "General Automation Ltd",
      companylogo: require("./assets/images/GaLogo.png"),
      date: "January 2017 – Present",
      descBullets: [
        "Involved in gathering business requirements, planning and project documentation.",
        "Heavily involved in development of the application using Microsoft .Net Technologies.",
        "Multi-Tiered application development, including user-facing features, business functionalities, database objects, and reports."
      ]
    },
    {
      role: "Junior Programmer",
      company: "General Automation Ltd",
      companylogo: require("./assets/images/GaLogo.png"),
      date: "June 2013 – December 2016",
      descBullets: [
        "Developed Attendance, Leave and Payroll Management using C# and ASP.NET.",
        "Developed Yarnell School Online (Outsourced-USA).",
        "Maintained and Support Applications."
      ]
    },
    {
      role: "Programmer Intern",
      company: "Pro Dhaka Soft",
      companylogo: require("./assets/images/GaLogo.png"),
      date: "January 2013 – May 2013",
      descBullets: [
        "Maintained and Support Applications.",
        "Involved in development process of School Management Software",
        "Maintained technical documentation."
      ]
    },
  ]
};

/* Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "zahirrussell", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false
};




// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Achievements And Certifications 🏆 "),
  subtitle: "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Microsoft® Certified Professional Developer",
      subtitle: "Transcript Id: 1105105, Access Code: mcpZahir",
      image: require("./assets/images/MCPD_logo.png"),
      footerLink: [
        { name: "Certification Link", url: "https://mcp.microsoft.com/Anonymous//Transcript/Validate" }       
      ]
    },
    {
      title: "Microsoft® Certified Technology Specialist",
      subtitle: "Transcript Id: 1105105, Access Code: mcpZahir",
      image: require("./assets/images/MCTS_logo.png"),
      footerLink: [
        { name: "Certification Link", url: "https://mcp.microsoft.com/Anonymous//Transcript/Validate" }       
      ]
    },

    {
      title: "Microsoft® Certified Technology Specialist",
      subtitle: "Transcript Id: 1105105, Access Code: mcpZahir",
      image: require("./assets/images/MCTS_logo.png"),
      footerLink: [
        { name: "Certification Link", url: "https://mcp.microsoft.com/Anonymous//Transcript/Validate" }       
      ]
    }
  ]
};

// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+8801912531068",
  email_address: "allworksbd@gmail.com"
};

export { greeting, socialMediaLinks, skillsSection, educationInfo, techStack, workExperiences, openSource, achievementSection, blogSection,   contactInfo };
