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
      title: "Data Analyst",
      icon: web,
    },
    {
      title: "Front End Developer",
      icon: mobile,
    },
    {
      title: "Content Writer",
      icon: backend,
    },
    {
      title: "Artist",
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
      title: "Data Analyst Intern",
      company_name: "Start Up",
      icon: starbucks,
      iconBg: "#383E56",
      date: "April 2024 - June 2024",
      points: [
        "Data Collection and Analysis: I gathered and analyzed large datasets to uncover trends and insights that supported strategic decisions."," Data Visualization: I created interactive dashboards and visual reports using Tableau to simplify complex data for quick decision-making.","  Market Research: I conducted market research, analyzing competitors and trends to provide actionable recommendations for the startup's growth"," Collaboration: I worked with marketing and product development teams to deliver data-driven insights that improved strategies and products.",
      ],
    },
    {
      title: "Content Writer Intern",
      company_name: "Kshitiksha Foundation",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "July 2024 - Aug 2024",
      points: [
       "Content Creation: I wrote articles, blog posts, and social media content that highlighted the foundation's mission and impact, translating complex ideas into easy-to-understand language.","Research and Data Interpretation: I conducted research and analyzed data related to education and social initiatives, using insights to inform content strategy."," Data-Driven Storytelling: I integrated data into my writing to create compelling, insight-driven narratives that resonated with the audience.","Collaboration: I worked closely with team members to align content with the foundation's goals, emphasizing communication and teamwork.",
      ],
    },
    {
      title: "Data Science Intern",
      company_name: "Prodigy Infotech",
      icon: shopify,
      iconBg: "#383E56",
      date: "Sep 2024 - Oct 2024",
      points: [
        "Data Collection and Cleaning: Working with raw data from various sources using Python, Pandas, and NumPy, I clean and structure data for accurate analysis."," Data Analysis and Visualization: I create insightful visualizations using Matplotlib and Seaborn, making complex data easy to understand for technical and non-technical stakeholders."," Machine Learning: I apply machine learning algorithms like regression, classification, and clustering using Scikit-learn to build and evaluate predictive models."," Whether it's optimizing performance, implementing cutting-edge features, or solving intricate coding puzzles, I am dedicated to creating web applications that leave a lasting impact.",
      ],
    },
    {
      title: "Current Endeavors and Recent Learning",
      company_name: "",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "2024 - Present",
      points: [
        "I recently completed a Professional Data Analyst course by Google, where I mastered techniques in data wrangling, visualization, and statistical modeling. This training enhanced my proficiency in Python, R, SQL, Tableau, and Excel.","Additionally, I’m collaborating with an NGO to support their social initiatives. By analyzing community outreach data, I help them make data-informed decisions that further their mission.","I’m currently applying these skills to personal projects, focusing on analyzing large datasets to uncover actionable insights. My passion lies in transforming raw data into strategies that drive positive outcomes.",
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
      name: "Exploring the Bitcoin Cryptocurrency Market",
      description:
        "Conducted a comprehensive analysis of the Bitcoin cryptocurrency market using real-world data to explore market trends, trading volumes, and price fluctuations. Visualized key metrics and compared Bitcoin’s performance with other cryptocurrencies for better market insights, helping to uncover patterns .",
      tags: [
        {
          name: "ML",
          color: "blue-text-gradient",
        },
        {
          name: "PANDAS",
          color: "green-text-gradient",
        },
        {
          name: "PYTHON",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/MyGethubItIs/Exploring-the-Bitcoin-Cryptocurrency-Market",
    },
    {
      name: "OntoGuide: Personalized ContentRecommendation System",
      description:
        "Developed a content recommendation system using ontological tables to enhance semantic understanding and deliver highly accurate and personalized content recommendations. Improved user experience by user preferences.",
      tags: [
        {
          name: "NLP",
          color: "blue-text-gradient",
        },
        {
          name: "PYTHON",
          color: "green-text-gradient",
        },
        {
          name: "ML",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/MyGethubItIs/OntoGuide-Personalized-Content-Recommendation/tree/main",
    },
    {
      name: "HealthTrackr: Smart Health Monitoring System",
      description:
        "A smart health monitoring system designed to track and analyze vital health metrics in real-time. Provides personalized health insights and alerts, making it easier to manage health conditions and stay informed about overall well-being.",
      tags: [
        {
          name: "PYTHON",
          color: "blue-text-gradient",
        },
        {
          name: "MYSQL",
          color: "green-text-gradient",
        },
        {
          name: "AI/ML",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/MyGethubItIs/HealthTrackr-Smart-Health-Monitoring/tree/main",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
