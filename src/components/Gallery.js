import React, { useState } from "react";
import { motion } from "framer-motion";
import projectsData from "./data.json"; 

const Gallery = React.forwardRef((props, ref) => {
  const [currentPage, setCurrentPage] = useState(0);
  const imagesPerPage = 3;

  const totalPages = Math.ceil(projectsData.projects.length / imagesPerPage);

  const nextPage = () => {
    setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
  };

  return (
    <div ref={ref} className="w-screen bg-white" id="gallery">
      <motion.div>
        <div className="flex items-center justify-center h-[100px]">
          <h1 className="text-7xl bebas mt-10 mb-10">Gallery</h1>
        </div>
        <div className="flex justify-center relative">
          <button
            onClick={prevPage}
            className="bg-transparent hover:bg-gray-200 text-gray-800 
            font-bold py-2 px-4 rounded-full absolute left-0 top-1/2 transform -translate-y-1/2 z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-7"
              fill="none"
              viewBox="0 0 26 26"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={3}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <div className="flex overflow-hidden w-[80%] relative">
            <motion.div
              className="flex w-full"
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ delay: 0.1 }}
            >
              {projectsData.projects
                .slice(
                  currentPage * imagesPerPage,
                  (currentPage + 1) * imagesPerPage
                )
                .map((project, index) => (
                  <motion.div
                    key={index}
                    className="w-[300px] h-[380px] bg-gradient-to-r from-blue-300 via-pink-500 to-purple-400 hover:from-blue-400 hover:via-purple-500 hover:to-yellow-500
                    hover:shadow-lg transition duration-300 rounded-t-[40px] shadow-md mx-5"
                   whileHover={{
                      scale: 1.1, 
                      zIndex: 1, 
                      transition: { duration: 0.5 }, 
                    }}
                  >
                    <div className="relative">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-[270px] object-cover rounded-t-[40px]"
                      />
                      <motion.div
                        className="absolute bottom-0 left-0 w-full bg-black bg-opacity-70 p-5"
                        initial={{ y: 50, opacity: 0 }}
                        whileHover={{ y: 0, opacity: 2 }}
                        transition={{ duration: 0.3 }}
                      >
                        <h2 className="text-white font-bold text-lg">
                          {project.name}
                        </h2>
                      </motion.div>
                    </div>
                    <div className="p-5">
                      <p className="text-sm">{project.description}</p>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </div>
          <button
            onClick={nextPage}
            className="bg-transparent hover:bg-gray-200 text-gray-800 
            font-bold py-2 px-4 rounded-full absolute right-0 top-1/2 transform -translate-y-1/2 z-10"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
        <div className="flex justify-center mt-8">
          <a
            href="https://enactus-mnnit.netlify.app/gallery"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-600 hover:from-pink-500 hover:via-red-500 hover:to-yellow-500 text-white font-bold py-2 px-6 rounded-full shadow-lg transform transition-transform duration-300 hover:scale-110"
            >
            More Pictures
          </a>
        </div>
        <br></br>
      </motion.div>
    </div>
  );
});

export default Gallery;
