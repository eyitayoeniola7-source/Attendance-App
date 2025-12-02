import React from 'react';
import welcome from '../assets/images/welcome.png';
import Group from '../assets/images/Group.png'; 
import ekitiLogo from '../assets/images/ekitiLogo.png';
import wakocodeLogo from '../assets/images/wakocodeLogo.png'; 
import MaskGroup from '../assets/images/MaskGroup.png';
import CoursesGrid from '../components/CoursesGrid';
import Footer from '../components/Footer';


const HomePage = () => {
  return (
     <div className="min-h-screen flex flex-col bg-gray-200">
          
          
          <div className="flex-grow flex items-center  justify-center  py-12 px-4">
            <div className="max-w-5xl w-full bg-yellow-300 rounded-2xl shadow-2xl overflow-hidden">
              <div className="flex flex-col md:flex-row">
                {/* Text Section */}
                <div className="w-full md:w-1/2 p-8 md:p-12 flex items-center">
                  <div className="w-full">
                    
                    <h2 className="text-3xl inline  md:5xl font-extrabold leading-tight text-black mb-2"> <span className="inline text-orange-600 " >Ekiti State</span> MSME ICT Skill Acquisition Hub:</h2>
                    <p className="text-black font-thin text-sm mb-6">Empowering The Future Of Innovators</p>
                    <h4 className="font-bold text-2xl text-black"> Attendance WebApp</h4>
                      </div>
                      </div>
                  
                  {/* Image Section */}
                <div className="w-full md:w-1/2 bg-yellow-300 p-8 md:p-12 flex items-center justify-center">
            
                    <div className="w-full max-w-md  mb-6  backdrop-blur-sm  flex items-center justify-end p-4 rounded-lg">
                      <img 
                      src={welcome} 
                      className="w-full h-auto md:w-full md:h-auto object-contain"
                      alt="Welcome Image"
                      />
                    </div>
                  </div>
                
              </div>
            </div>
          
            
            </div>
            

<div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 md:gap-8 bg-gray-200 px-4 py-6">
  {/* Decorative Group Image */}
  <img 
    src={Group} 
    alt="Decorative Group" 
    className="w-auto h-12 sm:h-14 md:h-16 object-contain" 
  />
  
  {/* Logo Container */}
  <div className="flex justify-center items-center gap-3 sm:gap-4 md:gap-6">
    <img 
      src={ekitiLogo} 
      alt="Ekiti State Logo" 
      className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain" 
    />
    <img 
      src={wakocodeLogo} 
      alt="Wakocode Logo" 
      className="h-12 sm:h-14 md:h-16 lg:h-20 w-auto object-contain" 
    />
  </div>
</div>

 <div className="w-full py-8 md:py-12">
  <div className="max-w-7xl mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
      
      {/* Text Section */}
      <div className="w-full md:w-1/2">
        <div className="max-w-lg">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-600 mb-4">
            About The Program
          </h2>
          
          <p className="text-gray-800 text-sm md:text-base lg:text-lg leading-relaxed mb-6">
            The Ekiti State MSME ICT Skill Acquisition Hub Is A
            Transformative Initiative Developed In Collaboration With Wakocode Technologies. This Program Is Dedicated To 
            Empowering The Youth Of Ekiti State By Providing Them With 
            In-Demand ICT Skills That Are Critical For Success In Today's 
            Global Digital Economy.
           Through This Initiative, Participants Will Gain Hands-On Training 
            In Full Stack Development, Cloud Computing, Cybersecurity, Backend Development, And Data Analytics-Skills That Are Vital 
            To Thrive In Both Local And International Job Markets.
          </p>
          
          <a 
            href='#courses' 
            className="inline-block font-bold px-6 py-3 text-sm md:text-base text-black bg-yellow-300 hover:bg-orange-400 hover:scale-105 transition-all duration-300 rounded-md shadow-md"
          >
            Learn More
          </a>
        </div>
      </div>
      
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center md:justify-end">
        <div className="w-full max-w-md lg:max-w-lg">
          <img 
            src={MaskGroup} 
            alt="Mask Group Logo" 
            className='w-full h-auto object-contain rounded-lg'
          />
        </div>
      </div>
      
    </div>
  </div>
</div>
            <CoursesGrid />
            <Footer />
        </div>
        
          
  );
};

export default HomePage; 