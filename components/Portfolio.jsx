import Image from 'next/image';
import React from 'react';

const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
      <h1 className='font-bold text-2xl p-4'>About us</h1>
      <div className='grid justify-evenly lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-1 w-full mt-32 ml-2 mr-2'>
      <div className="max-w-sm rounded overflow-hidden shadow-lg p-2">
          {/* <img className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" src="https://i.ibb.co/pK9fkZ2/Whats-App-Image-2023-01-16-at-10-11-26.jpg" alt="Sunset in the mountains"/> */}
          
          <Image
            src="https://img.nbc.com/sites/nbcunbc/files/images/2020/9/24/psych_cast_gus.jpg"
            
            width={500}
            height={500}
            style={{ borderRadius: '50%'}}
          />
          
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Niusha Shahbeik</div>
            <p className="text-gray-700 text-base">
            <b>Student</b><br></br>Student Id: 40207025<br></br> Email:  niusha.shahbeik@gmail.com
            </p>
          </div>
          
        </div>  
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-2">
          {/* <img className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" src="https://i.ibb.co/kBMsSFj/IMG-20230116-095744.jpg" alt="Sunset in the mountains"/> */}
          
          <Image
            src="https://img.nbc.com/sites/nbcunbc/files/images/2020/9/24/psych_cast_gus.jpg"
            alt="Sumit Picture"
            width={500}
            height={500}
            style={{ borderRadius: '50%'}}
          />
          
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Sandeep Kumar Gadimuthana</div>
            <p className="text-gray-700 text-base">
              <b>Student</b><br></br>Student Id: 40170512<br></br> Email: sandeepkumarkdrl@gmail.com
            </p>
          </div>
          
        </div>
        
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-2">
          {/* <img className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" src="https://i.ibb.co/pK9fkZ2/Whats-App-Image-2023-01-16-at-10-11-26.jpg" alt="Sunset in the mountains"/> */}
          
          <Image
            src="https://img.nbc.com/sites/nbcunbc/files/images/2020/9/24/psych_cast_gus.jpg"
            alt="Divyam Picture"
            width={500}
            height={500}
            style={{ borderRadius: '50%'}}
          />
          
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Sriman Guda</div>
            <p className="text-gray-700 text-base">
            <b>Student</b><br></br>Student Id: 40197374<br></br> Email: srimangudal4@gmail.com
            </p>
          </div>
          
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-2">
          {/* <img className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" src="https://i.ibb.co/HPM6ftY/Whats-App-Image-2023-01-16-at-10-11-29.jpg" alt="Sunset in the mountains"/> */}
          
          <Image
            src="https://img.nbc.com/sites/nbcunbc/files/images/2020/9/24/psych_cast_gus.jpg"
            
            width={500}
            height={500}
            style={{ borderRadius: '50%'}}
          />
          
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Tabassom Saremi</div>
              <p className="text-gray-700 text-base">
              <b>Student</b>
              </p>
              <p>Student ID: 40186992  <br></br>Email: tabassom.saremi95@gmail.com</p>
            {/* <div className='align-bottom'>
            </div> */}
          </div>
          
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg p-2">
          {/* <img className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" src="https://i.ibb.co/8gX4s9m/Whats-App-Image-2023-01-16-at-10-12-58.jpg" alt="Sunset in the mountains"/> */}
          
          <Image
            src="https://img.nbc.com/sites/nbcunbc/files/images/2020/9/24/psych_cast_gus.jpg"
          
            width={500}
            height={500}
            style={{ borderRadius: '50%'}}
          />
          
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Vishnudas Mudalagiri</div>
            <p className="text-gray-700 text-base">
            <b>Student</b><br></br> Student ID: 40195991 <br></br> Email: vishnumudalagiri3@gmail.com
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
