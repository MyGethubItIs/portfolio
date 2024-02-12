import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Front End Developer",
      icon: mobile,
    },
    {
      title: "Musician",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "I am Himanshu a passionate and skilled React.js developer with a strong foundation in front-end development."," Armed with a keen eye for detail and a love for creating seamless user experiences, I thrive in the world of web development."," My journey in the realm of React.js has been marked by a commitment to staying current with the latest trends and technologies, ensuring that I deliver not just functional but also cutting-edge solutions. Whether it's crafting responsive user interfaces, optimizing performance, or solving complex problems, I approach each project with enthusiasm and dedication."," My goal is to contribute to innovative and user-centric applications, bringing ideas to life through the power of React.js.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "As a dedicated React Native developer, I specialize in building cross-platform mobile applications that seamlessly blend performance and aesthetics."," My journey in mobile app development has been driven by a passion for creating engaging user experiences that transcend platforms. With a solid foundation in React Native, I bring a unique blend of technical expertise and creative problem-solving to every project."," My goal is to contribute to the ever-evolving mobile landscape, leveraging React Native to bring innovative and user-friendly applications to life.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "As a dedicated web developer, I am driven by the art and science of crafting immersive digital experiences."," With a solid foundation in front-end and back-end technologies, I thrive on the challenge of transforming creative concepts into functional, user-friendly websites."," My passion for staying abreast of the latest web development trends ensures that I bring a fresh perspective to every project."," Whether it's optimizing performance, implementing cutting-edge features, or solving intricate coding puzzles, I am dedicated to creating web applications that leave a lasting impact.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Hi, I'm Himanshu, a seasoned full-stack developer with a passion for creating comprehensive and seamless digital experiences. ","My expertise spans both front-end and back-end technologies, allowing me to architect and implement end-to-end solutions.","From designing intuitive user interfaces to building robust server-side components, I thrive in the intricate dance between client and server. My goal is to leverage my diverse skill set to deliver scalable, efficient, and innovative solutions that not only meet but exceed the evolving needs of modern web development.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but he proved me wrong.",
      name: "Amenda cermeny",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like he does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After he optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Project-1",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/MyGethubItIs/project-1-GAME",
    },
    {
      name: "Project-2",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/MyGethubItIs/PROJECT-2",
    },
    {
      name: "Project-3",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/MyGethubItIs/Project-3",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };