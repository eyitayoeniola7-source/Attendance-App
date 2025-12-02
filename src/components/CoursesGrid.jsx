import React from 'react';
import CyberSecurity from '../assets/images/cyberSecurity.png';
import DataAnalysis from '../assets/images/dataAnalysis.png';
import CloudComputing from '../assets/images/CloudComputing.png';
import Backend from '../assets/images/Backend.png';
import GoogleCode from '../assets/images/GoogleCode.png';

const CourseCard = ({ title, description, image, bgColor }) => {
  return (
    <div className={`${bgColor} rounded-3xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl`}>
      <div className="flex items-start gap-3 mb-4">
        <img src={image} alt={title} className="w-8 h-8 flex-shrink-0 object-contain" />
        <h3 className="text-2xl font-bold text-black">{title}</h3>
      </div>
      <p className="text-gray-800 mb-6 leading-relaxed">
        {description}
      </p>
     
    </div>
  );
};

export default function CoursesGrid() {
  const courses = [
    {
      id: 1,
      title: "Data Analysis",
      description: "The Demand For Data Analysts Has Been On The Rise Due To The Increasing Reliance On Big Data And Predictive Analytics Driving Business Growth.",
      image: DataAnalysis,
      bgColor: "bg-yellow-400",
      
    },
    {
      id: 2,
      title: "Cyber Security",
      description: "Cybersecurity Is The Practice Of Protecting Networks, Systems, Hardware, And Data From Digital Attacks. It Involves Implementing Strong Security Protocols, Complex Encryption Methods, And Proactive Countermeasures.",
      image: CyberSecurity,
      bgColor: "bg-orange-500",
      
    },
    {
      id: 3,
      title: "Backend Development",
      description: "Learn To Develop Server-Side Software With An Emphasis On Databases, Back-End Logic, APIs, Architecture, And Servers.",
      image: Backend,
      bgColor: "bg-green-400",
      
    },
    {
      id: 4,
      title: "Cloud Computing",
      description: "Learn How To Tackle The World Of Cloud Infrastructure, Deployment, And Management. Master AWS, Azure, And Google Cloud Platforms.",
      image: CloudComputing,
      bgColor: "bg-yellow-400",
      
    },
    {
      id: 5,
      title: "Full Stack Development",
      description: "Explore Creative Design, Video Editing, Motion Graphics, And Digital Media Production To Bring Your Creative Vision To Life.",
      image: GoogleCode,
      bgColor: "bg-orange-500",
      
    }
  ];

  return (
    <div className="min-h-screen bg-white py-16 px-4">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-5xl font-bold text-orange-600 mb-2">Courses</h1>
        <div className="w-48 h-1 bg-black mx-auto mb-8"></div>
        <p className="text-gray-700 text-lg leading-relaxed max-w-4xl mx-auto">
          Gain In-Demand Tech Skills And Unlock Exciting Job Opportunities Locally And Globally. 
          Our Expert-Led Training, Offered At Essential, Advanced, And Professional Levels, 
          Prepares You For Success In The Ever-Evolving Tech Industry. Explore Our Courses Below!
        </p>
      </div>

      {/* Grid Section - 3-2 Layout */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {courses.slice(0, 3).map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
        
        {/* Bottom Row - Centered 2 boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {courses.slice(3, 5).map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
}