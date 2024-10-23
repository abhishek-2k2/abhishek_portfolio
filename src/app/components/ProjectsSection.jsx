"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "  Video Conferencing Platform",
    description:"Engineered a video conferencing platform using Next.js and TypeScript, facilitating secure meetings for up to 1,000 users ",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/abhishek-2k2/VIDEO_CONFERENCING_PLATFORM",
    previewUrl: "https://video-conferencing-pied.vercel.app/",
  },
  {
    id: 2,
    title: "CryptoCurrency Wallet Address Classifier",
    description: "Developed and deployed a machine learning classifier to accurately predict cryptocurrency types (Bitcoin, Bitcoin Cash, Ethereum, or Litecoin)",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/abhishek-2k2/CryptoCurrency_Wallet_Addres_Classifier",
    previewUrl: "https://cryptoaddressclassfication-dtn8uv2jbcapbw8kikoybz.streamlit.app/",
  },
  {
    id: 3,
    title: " Unified Banking and Financial Platform",
    description: "Engineered and deployed a SaaS-Driven Financial Management and Multi-Bank Aggregation platform using Next.js and TypeScript",
    image: "/images/projects/12.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/abhishek-2k2/SaaS-Driven_financial_managment_system",
    previewUrl: "https://payflow-seven.vercel.app/",
  },
  {
    id: 4,
    title: "Credit Card fraud detection",
    description: "Utilizes Logistic Regression to detect fraudulent transactions, demonstrating data preprocessing, model training, and evaluation.",
    image: "/images/projects/4.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/abhishek-2k2/CREDIT_CARD_FRAUD_DETECTION",
    previewUrl: "https://codtech-task-1-nivfxnyn4vpcmsssp8jylq.streamlit.app/",
  },
  {
    id: 5,
    title: "Portfolio website",
    description: "Portfolio Website",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
