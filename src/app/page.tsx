import {TfiEmail} from 'react-icons/tfi';
import {MdOutlinePhoneIphone} from 'react-icons/md'
import {ImLocation} from 'react-icons/im'
import {BsLinkedin} from 'react-icons/bs'


export default function Home() {
  return (
    
      <>
      <div className="sm:flex-row flex flex-col-reverse bg-[#4685C6] p-8 justify-between gap-5">
        <div className="text-white flex flex-col gap-3 md:text-center lg:text-left">
          <h1 className="text-5xl text-center md:text-left">Muhammad Haseeb</h1>
          <p className="text-center md:text-left max-w-3xl text-xl">A person who is self-motivated, humble, honest, respectful towards others and is enthusiastic about achieving dream goals. Have a keen interest in learning about new technologies, platforms, and languages.</p>
        </div>
        <div>
          <img className="object-cover rounded-full border-[#2C363F] border-8 max-w-[200px] m-auto" src={"/pic.jpg"} alt={"pic"} />
        </div>
      </div>
      <div className='md:flex-row flex flex-col text-white gap-3 bg-[#2D6FAA] justify-between px-8 py-4'>
        <div className='flex flex-col gap-3'>
          <div className='flex gap-2'>
          <TfiEmail size={"30px"} />
          <div className='text-[17px]'>haseebn2868@gmail.com</div>
          </div>
          <div className='flex gap-2'>
          <ImLocation size="30px" />
          <div className='text-[17px]'>House#218, Block F1, Wapda Town, Lahore, Pakistan</div>
          </div>
        </div>
        <div className='flex flex-col gap-3'>
          <div className='flex gap-2'>
          <MdOutlinePhoneIphone size={"30px"} />
          <div className='text-[17px]'>03328359845</div>
          </div>
          <div className='flex flex-wrap gap-2'>
          <BsLinkedin size={"30px"} />
          <div className='text-[17px]'><a href='https://www.linkedin.com/in/muhammad-haseeb-6b2b15152' target={"_blank"}>linkedin.com/in/muhammad-haseeb</a></div>
          </div>
        </div>
      </div>
      <div className='sm:flex-row flex flex-col justify-between p-8 gap-8'>
        <div className='flex flex-col gap-8 basis-1/2'>
          <div className='flex flex-col gap-4'>
          <div className='flex flex-col'>
            <h5 className='text-[25px] font-bold mb-4 underline underline-offset-8'>EDUCATION</h5>
            <h4 className='text-[20px] font-bold'>Web 3.0 and Metaverse Development Course</h4>
            <p className='text-[18px] font-medium'>Presedential Institute of Artificial Intelligence and Computing (PIAIC)</p>
            <span>09/2022 - Present</span>
            <span>Lahore, Pakistan</span>
          </div>
          <div className='flex flex-col'>
            <h4 className='text-[20px] font-bold'>Bachelor of Computer Science</h4>
            <p className='text-[18px] font-medium'>Government College University</p>
            <span>08/2018 - 08-2022</span>
            <span>Lahore, Pakistan</span>
            <span className='mt-2'>Subjects</span>
            <div className='flex justify-between'>
            <ul className='list-disc px-4'>
            <li>Programming Fundamentals (C++)</li>
            <li>Data Structure and Algorithm</li>
            <li>Database Systems</li>
            <li>Database Design Theory</li>
            </ul>
            <ul className='list-disc px-4'>
            <li>OOP (Java)</li>
            <li>Design and Analysis of Algorithm</li>
            <li>Data Warehouse</li>
            <li>Computer System Architecture</li>
            </ul>
            </div>
          </div>
          <div className='flex flex-col'>
            <h4 className='text-[20px] font-bold'>Faculty of Science (FSc.) Pre-Engineering</h4>
            <p className='text-[18px] font-medium'>Punjab Group of Colleges, Johar Town</p>
            <span>2015 - 2017</span>
            <span>Lahore, Pakistan</span>
          </div>
          <div className='flex flex-col'>
            <h4 className='text-[20px] font-bold'>Matriculation (Science Group)</h4>
            <p className='text-[18px] font-medium'>The Punjab School, Johar Town</p>
            <span>2013 - 2015</span>
            <span>Lahore, Pakistan</span>
          </div>
        </div>
        <div className='flex flex-col'>
          <h5 className='text-[25px] font-bold mb-4 underline underline-offset-8'>WORK EXPERIENCE</h5>
          <h4 className='text-[20px] font-bold'>Data Analytics Intern</h4>
          <p className='text-[18px] font-medium'>Systems Limited</p>
          <span>10/2022 - 12/2022</span>
          <span>Lahore, Pakistan</span>
          <span className='mt-2'>Completed Tasks</span>
          <ul className='list-disc px-4'>
            <li>Completed a Bookshop dataset project</li>
            <li>Made a Data Warehouse using Data Warehousing concepts and SSIS</li>
            <li>Made KPI's and performed Data Visualization using Tableau</li>
          </ul>
        </div>
        </div>
        <div className='flex flex-col gap-8 basis-1/2'>
          <div>
            <h5 className='text-[25px] font-bold mb-4 underline underline-offset-8'>SKILLS</h5>
            <div className='flex flex-wrap gap-3'>
              <div className='border-2 p-2 rounded-xl bg-[#90B6DD] border-gray-500'>HTML</div>
              <div className='border-2 p-2 rounded-xl bg-[#90B6DD] border-gray-500'>CSS</div>
              <div className='border-2 p-2 rounded-xl bg-[#90B6DD] border-gray-500'>JavaScript</div>
              <div className='border-2 p-2 rounded-xl bg-[#90B6DD] border-gray-500'>C++</div>
              <div className='border-2 p-2 rounded-xl bg-[#90B6DD] border-gray-500'>SQL</div>
              <div className='border-2 p-2 rounded-xl bg-[#90B6DD] border-gray-500'>Tableau</div>
              <div className='border-2 p-2 rounded-xl bg-[#90B6DD] border-gray-500'>SSIS</div>
              <div className='border-2 p-2 rounded-xl bg-[#90B6DD] border-gray-500'>Chakra UI</div>
            </div>
          </div>
          <div>
            <h5 className='text-[25px] font-bold mb-4 underline underline-offset-8'>PERSONAL PROJECTS</h5>
            <div className='flex flex-col gap-4'>
            <div className='flex flex-col'>
            <p className='text-[18px] font-medium'>Mudava.com (07/2022 - 10/2022)</p>
            <ul className='list-disc px-4'>
            <li>Made the documentation of the Final Year Project</li>
            <li>The project is an online healthcare system</li>
            <li>The system is designed to provide online health care to the users especially the senior citizen.</li>
            <li>The system also allows online check-up to the patients. The patient can consult with the doctor at real time using voice recognition. The doctor will provide a digital prescription to the patient.</li>
            <li>The system provides medicine delivery service. The medicine prescribed by the doctor will be delivered to the patient.</li>
            </ul>
            </div>
            <div className='flex flex-col'>
            <p className='text-[18px] font-medium'>Panaverse DAO Syllabus Website (02/2023)</p>
            <ul className='list-disc px-4'>
            <li>Developed a responsive website for Panaverse DAO using Next.JS 13 and Chakra UI.</li>
            <li><a href='https://panaverse-dao-website-nine.vercel.app/' target={"_blank"}><p className='font-semibold'>Link: https://panaverse-dao-website-nine.vercel.app/</p></a></li>
            </ul>
            </div>
            </div>
          </div>
          <div>
            <h5 className='text-[25px] font-bold mb-4 underline underline-offset-8'>INTERESTS</h5>
            <div className='flex flex-wrap gap-3'>
              <div className='border-2 p-2 rounded-xl bg-[#90B6DD] border-gray-500'>Computer Hardware</div>
              <div className='border-2 p-2 rounded-xl bg-[#90B6DD] border-gray-500'>Video Games</div>
              <div className='border-2 p-2 rounded-xl bg-[#90B6DD] border-gray-500'>Badminton</div>
              <div className='border-2 p-2 rounded-xl bg-[#90B6DD] border-gray-500'>Men's Fashion</div>
              <div className='border-2 p-2 rounded-xl bg-[#90B6DD] border-gray-500'>Netflix</div>
              <div className='border-2 p-2 rounded-xl bg-[#90B6DD] border-gray-500'>Music</div>
              <div className='border-2 p-2 rounded-xl bg-[#90B6DD] border-gray-500'>Sketching</div>
            </div>
          </div>
        </div>
      </div>
      </>  

    
  )
}
