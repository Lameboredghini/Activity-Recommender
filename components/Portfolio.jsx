import Image from 'next/image';
import React from 'react';

const Portfolio = () => {
  return (
    <>
    <div class="bg-white-800">
    <div className='max-w-[1240px] mx-auto py-16 text-center mt-10 '>
      <h1 className='font-bold text-3xl p-4'>About us</h1>

      <div className='grid justify-evenly lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full ml-2 mr-2'>
      <div className="shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] max-w-sm rounded overflow-hidden shadow-lg my-8 p-2">
          {/* <img className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" src="https://i.ibb.co/pK9fkZ2/Whats-App-Image-2023-01-16-at-10-11-26.jpg" alt="Sunset in the mountains"/> */}
          
          <Image
           class="rounded-t-lg object-cover h-80 w-100"
            src="https://cdn-images.imagevenue.com/96/f3/b6/ME15WIYS_o.jpg"
            
            width={500}
            height={500}
            
          />
          
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Niusha Shahbeik</div>
            <p className="text-gray-700 text-base">
            <b>Student</b><br></br>Student Id: 40207025<br></br> Email:  niusha.shahbeik@gmail.com
            </p>
          </div>
          
        </div>  
        <div className="max-w-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] rounded overflow-hidden shadow-lg my-8 p-2">
          {/* <img className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" src="https://i.ibb.co/kBMsSFj/IMG-20230116-095744.jpg" alt="Sunset in the mountains"/> */}
          
          <Image
           class="rounded-t-lg object-cover h-80 w-100"
            src="https://cdn-images.imagevenue.com/80/17/19/ME15WIYT_o.jpg"
            
            width={500}
            height={500}
           
          />
          
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Sandeep Kumar Gadimuthana</div>
            <p className="text-gray-700 text-base">
              <b>Student</b><br></br>Student Id: 40170512<br></br> Email: sandeepkumarkdrl@gmail.com
            </p>
          </div>
          
        </div>
        
        <div className="max-w-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] rounded overflow-hidden shadow-lg my-8 p-2 ">
          {/* <img className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" src="https://i.ibb.co/pK9fkZ2/Whats-App-Image-2023-01-16-at-10-11-26.jpg" alt="Sunset in the mountains"/> */}
          
          <Image
           class="rounded-t-lg object-cover h-80 w-100"
            src="https://cdn-images.imagevenue.com/b2/2c/a1/ME15WIYQ_o.jpg"
         
            width={500}
            height={500}
           
          />
          
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Sriman Guda</div>
            <p className="text-gray-700 text-base">
            <b>Student</b><br></br>Student Id: 40197374<br></br> Email: srimangudal4@gmail.com
            </p>
          </div>
          
        </div>
        <div className="max-w-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] rounded overflow-hidden shadow-lg my-8 p-2">
          {/* <img className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" src="https://i.ibb.co/HPM6ftY/Whats-App-Image-2023-01-16-at-10-11-29.jpg" alt="Sunset in the mountains"/> */}
          
          <Image
          class="rounded-t-lg object-cover h-80 w-100"
            src="https://cdn-images.imagevenue.com/5f/ff/1e/ME15WIYY_o.jpg"
            
            width={500}
            height={500}
           
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
        <div className="max-w-sm shadow-[rgba(0,_0,_0,_0.4)_0px_30px_90px] rounded overflow-hidden shadow-lg my-8 p-2">
          {/* <img className="shadow-lg rounded-full max-w-full h-auto align-middle border-none" src="https://i.ibb.co/8gX4s9m/Whats-App-Image-2023-01-16-at-10-12-58.jpg" alt="Sunset in the mountains"/> */}
          
          <Image

           class="rounded-t-lg object-cover h-80 w-100"
            src="https://cdn-images.imagevenue.com/c6/ae/58/ME15WIYX_o.jpg"
          
            width={500}
            height={500}

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
    </div>
    </>
  );
};

export default Portfolio;
