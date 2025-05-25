"use client"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { courses } from '@/lib/data'; 
import { formatWithCommas } from '@/utils/currency';
import { FiCheck } from "react-icons/fi";
import { HiOutlineExclamation } from "react-icons/hi";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

const formatLevel = (level: string) => {
  return level.charAt(0).toUpperCase() + level.slice(1);
};

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography component="div">{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const modes = ['full_license', 'driving_only', 'refresher'];

export default function PricingTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className='w-full overflow-hidden pt-28 font-inter'>
      <section className='w-full'>
        <div className='max-w-6xl mx-auto pb-16'>
          <p className="font-bold text-2xl sm:text-3xl text-center font-inter">Our Price Range</p>
          <p className="text-center text-gray-600 mt-5 mb-8 text-base md:text-lg font-inter">Whether you're just starting out or looking to improve specific skills, we offer a range of professional driving courses to meet your needs.</p>
          <Box sx={{ bgcolor: 'white', color: 'black', width: '100%' }}>
            <AppBar position="static" color="default" className="bg-white shadow-none">
              <Tabs
                value={value}
                onChange={handleChange}
                TabIndicatorProps={{ style: { backgroundColor: "#00C951" } }}
                textColor="inherit"
                variant="fullWidth"
                aria-label="pricing tabs"
                className='bg-white shadow'
              >
                {modes.map((mode, index) => (
                  <Tab key={mode}
                  {...a11yProps(index)}
                  className={`capitalize font-medium text-sm md:text-base ${
                    value === index ? "text-green-500" : "text-slate-500"
                  }`}
                  sx={{
                    "&.Mui-selected": {
                      fontWeight: 600,
                      font: "--font-inter",
                      color: "#00C951",
                    },
                  }}
                  label={mode.replace('_', ' ').toUpperCase()} {...a11yProps(index)} />
                ))}
              </Tabs>
            </AppBar>
            {modes.map((mode, index) => (
              <TabPanel key={mode} value={value} index={index}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {courses.filter(course => course.mode === mode).map((course, i) => (
                    <div key={i} className="relative border-2 border-gray-100 p-5 pt-12 rounded-xl font-inter overflow-hidden">
                      <div className={`absolute top-0 left-0 
                        ${course.level === "standard"
                          ? "bg-blue-500"
                          : course.level === "express"
                          ? "bg-yellow-500"
                          : "bg-green-500"}
                        py-2 px-4 text-white rounded-br-lg`}>
                        <p>{formatLevel(course.level)}</p>
                      </div>
                      <div>
                        <p className="text-lg font-semibold capitalize">{course.transmission}</p>
                        <p className="mt-1 text-sm text-gray-600">{course.description}</p>

                        <p className='mt-5 font-bold font-inter text-2xl'>GH₵ {formatWithCommas(Number(course.fee)) || "Free"}</p>
                        <div className='mt-5 flex flex-row justify-between'>
                          <p className='text-base text-gray-600 font-inter font-semibold'>Duration: {course.duration}</p>
                        </div>
                        <div className='mt-5 flex flex-col gap-5'>
                          {
                            course.packages.map((item, index) => (
                              <div key={index} className='flex flex-row gap-2 items-center'>
                                <FiCheck className='text-green-500 size-5'/>
                                <p className='text-gray-600 font-inter'>{item}</p>
                              </div>
                            ))
                          }
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabPanel>
            ))}
          </Box>
        </div>
      </section>

      <section className='w-full bg-green-200/10'>
        <div className='max-w-6xl mx-auto py-16 px-5'>   
            <div className='bg-gray-100 p-5 py-10 max-w-4xl mx-auto rounded-lg'>
            <p className="font-bold text-lg sm:text-xl text-center font-inter">Other License Services</p>
              <ul className='flex flex-col gap-3 mt-5'>
                <li className='flex flex-row justify-between itmes-center'><p>International Driving Permit</p> <p className='text-green-600'>GH₵ 750</p></li>
                <li className='flex flex-row justify-between itmes-center'><p>License Upgrading(Premium)</p> <p className='text-green-600'>GH₵ 1,200</p></li>
                <li className='flex flex-row justify-between itmes-center'><p>License Upgrading(standard)</p> <p className='text-green-600'>GH₵ 900</p></li>
                <li className='flex flex-row justify-between itmes-center'><p>Missing License, Police Report Required</p> <p className='text-green-600'>GH₵ 750</p></li>
                <li className='flex flex-row justify-between itmes-center'><p>Missing License (Standard)</p> <p className='text-green-600'>GH₵ 600</p></li>
                <li className='flex flex-row justify-between itmes-center'><p>License Replacement(Premium)</p> <p className='text-green-600'>GH₵ 700</p></li>
                <li className='flex flex-row justify-between itmes-center'><p>License Replacement(Standard)</p> <p className='text-green-600'>GH₵ 600</p></li>
                <li className='flex flex-row justify-between itmes-center'><p>Eye Test Fee For The DVLA</p> <p className='text-green-600'>GH₵ 100</p></li>
                <li className='flex flex-row justify-between itmes-center'><p>DVLA Examination Fee</p> <p className='text-green-600'>GH₵ 250</p></li>
              </ul>
            </div>
        </div>
      </section>
      
      <section className='w-full'>
        <div className='max-w-6xl mx-auto py-24'>
          <div className='p-5 max-w-4xl mx-auto'>
          <p className="font-bold text-2xl sm:text-3xl text-start font-inter ml-5">Important Information</p>
            <div className='p-5 flex flex-col gap-5'>
              <div className='flex flex-col gap-3 justify-between border-2 border-gray-100 p-5 rounded-lg'>
                <div className='flex flex-row gap-3 items-center'>
                  <HiOutlineExclamation className='text-yellow-500 size-3'/> 
                  <p className='font-semibold text-lg sm:text-xl font-inter'>Payment Information</p>
                </div>
                <p className='ml-8 text-gray-500'>All fees are non-refundable.</p>
              </div>     
              <div className='flex flex-col gap-3 justify-between border-2 border-gray-100 p-5 rounded-lg'>
                <div className='flex flex-row gap-3 items-center'>
                  <HiOutlineExclamation className='text-yellow-500 size-3'/> 
                  <p className='font-semibold text-lg sm:text-xl font-inter'>Cancellation Policy
                  </p>
                </div>
                <p className='ml-8 text-gray-500'>We require 8 hours' notice for cancellations or rescheduling. Late cancellations may incur a fee of 50% of the lesson cost. No-shows will be charged the full lesson price.</p>
              </div>     
              <div className='flex flex-col gap-3 justify-between border-2 border-gray-100 p-5 rounded-lg'>
                <div className='flex flex-row gap-3 items-center'>
                  <HiOutlineExclamation className='text-yellow-500 size-3'/> 
                  <p className='font-semibold text-lg sm:text-xl font-inter'>Course Prerequisites</p>
                </div>
                <p className='ml-8 text-gray-500'>All students must have a valid learner's permit or driver's license (depending on course level) before beginning in-car instruction. Please bring this documentation to your first lesson.</p>
              </div>     
                  
            </div>
          </div>
        </div>
      </section>


    </div>
    
  );
}
