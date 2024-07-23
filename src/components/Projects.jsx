import React from "react";
import geminiImage from "./../assets/gemini-image.png";
import universityImage from "./../assets/university-image.png";
import netflixImage from "./../assets/netflix-image.png";

const projects = [
  {
    id: 1,
    name: "Gemini Clone",
    technologies: "React Js", // Corrected typo here
    image: geminiImage,
    vercel: "https://gemini-clone-mauve.vercel.app/",
  },
  {
    id: 2,
    name: "University Website",
    technologies: "React Js",
    image: universityImage,
    vercel: "https://university-website-xi.vercel.app/",
  },
  {
    id: 3,
    name: "Netflix Clone",
    technologies: "Tailwind CSS",
    image: netflixImage,
    vercel: "https://um4321.github.io/first-clone/",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            return ( // Added return here
              <div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105">
                <img src={project.image} alt={project.name} className="rounded-lg mb-4 w-full h-48 object-cover" />
                <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
                <p className="text-gray-400 mb-4">{project.technologies}</p> {/* Corrected typo here */}
                <a href={project.vercel} className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full" target="_blank" rel="noopener noreferrer">Vercel</a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
