import React from "react";
import JobTags from "../../__moleculos/JobTags/JobTags";
import ovalimg from '../../../assets/images/oval.png'
type Job = {
  id: number;
  company: string;
  logo: string;
  new: boolean;
  featured: boolean;
  position: string;
  role: string;
  level: string;
  postedAt: string;
  contract: string;
  location: string;
  languages: string[];
  tools: string[];
};

type JobCardProps = {
  job: Job;
  addFilter: (filter: string) => void;
};

const JobCard: React.FC<JobCardProps> = ({ job, addFilter }) => {
  const tags = [job.role, job.level, ...job.languages, ...job.tools];

  return (
    <div className="bg-white p-8 rounded shadow flex justify-between   md:flex-row md:items-center flex-col relative max-[813px]:mt-16 ">
      <div className=" flex max-lg:flex-col"> <img src={job.logo} alt={job.company} className="w-12 h-12 max-lg:absolute top-[-20px]" />

        <div>
          <div className="ml-4 max-[813px]:ml-0">
            <div className=" flex justify-between items-start">
              <h2 className="text-lg font-bold text-[#5CA5A5] text-[18px] max-sm:text-[13px]" >{job.company}</h2>
              <div className=" flex justify-between items-start gap-3">
                {job.new && <p className="text-white font-bold w-[51px] h-[24px] bg-[#5CA5A5] rounded-[12px] flex justify-center items-center max-sm:text-[14px]">New!</p>}
                {job.featured && <p className="text-white font-bold w-[79px] h-[24px] bg-[#2B3939] rounded-[12px] flex justify-center items-center max-sm:text-[14px]">Featured</p>}
              </div>
            </div>


            <p className="text-bold text-[#2B3939] text-[22px] cursor-pointer font-bold hover:text-[#5CA5A5] max-sm:text-[15px]">{job.position}</p>
            <div className=" flex w-[252px] justify-between items-center">
              <p className=" text-[#7C8F8F] text-[18px] font-medium max-sm:text-[16px]">{job.postedAt}</p>
              <img src={ovalimg} alt="" className=" w-[4px] h-[4px] " />
              <p className=" text-[#7C8F8F] text-[18px] font-medium max-sm:text-[16px]"> {job.contract}</p>
              <img src={ovalimg} alt="" className=" w-[4px] h-[4px] " />

              <p className=" text-[#7C8F8F] text-[18px] font-medium max-sm:text-[16px]">{job.location}</p>
            </div>
          </div>


        </div>
      </div>
      <div className=" hidden max-md:flex w-full bg-[#B7C4C4] h-[1px] mt-1"></div>
      <div className=" flex justify-start items-start">
        <JobTags tags={tags} addFilter={addFilter} />
      </div>
    </div>
  );
};

export default JobCard;
