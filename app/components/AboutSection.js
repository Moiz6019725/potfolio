import React from "react";

const AboutSection = () => {
  return (
    <>
      <div className="py-16">
        <h2 className="gradient-text text-3xl sm:text-4xl md:text-5xl font-bold text-center pb-4">
          About Me
        </h2>

        <div className="w-[80%] m-auto text-justify">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-6 sm:leading-7 md:leading-8 text-[#A7ACAC]">
            I am a Full Stack Mern web app developer with at least 6 months of
            experience. I have worked on various projects, including
            payment-integration platforms, social media applications, and music
            player applications. My expertise lies in building responsive and
            user-friendly web applications using the MERN stack (MongoDB,
            Express.js, React.js, and Node.js).
          </p>
        </div>

        <div className="mt-5 flex text-white justify-center gap-x-4 m-auto w-[50%] text-lg sm:text-xl md:text-2xl">
          <i className="fa-brands fa-figma"></i>
          <i className="fa-brands fa-react"></i>
          <i className="fa-brands fa-html5"></i>
          <i className="fa-brands fa-css3-alt"></i>
          <i className="fa-brands fa-bootstrap"></i>
          <i className="fa-brands fa-js"></i>
          <i className="fa-brands fa-node-js"></i>
          <i className="fa-brands fa-git-alt"></i>
        </div>
      </div>
    </>
  );
};

export default AboutSection;
