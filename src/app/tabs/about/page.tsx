"use client";
import React from "react";
import Image from "next/image";
import { image } from "@/constant";
import { SimpleButton } from "@/components/ui/Button";
import Timeline, { timelineClasses } from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { values, Leaders } from "@/lib/data";
import { AvatarCard } from "@/components/ui/Card";

const About = () => {
  return (
    <div className="About w-full overflow-hidden">
      <section>
        <div className="relative h-[600] overflow-hidden w-full">
          <div className="relative">
            <Image
              src={image.bg3}
              className="img w-full h-150 object-bottom"
              style={{ objectFit: "cover" }}
              alt="Dejay Home Page"
            />
            <div className="any absolute top-0 right-0 w-full h-150"></div>
          </div>
          <div className="absolute top-0 right-0 w-full h-150 pt-24">
            <div className="max-w-6xl mx-auto h-full flex flex-col gap-5 justify-center px-5">
              <h1 className="text-3xl md:text-5xl font-extrabold font-inter ">
                About <span className="text-green-500 font-chango">DEJAY</span>{" "}
                Driving School
              </h1>
              <p className="text-base md:text-2xl font-inter font-semibold md:font-medium">
                Our mission is to create confident, safe drivers through
                personalized instruction and modern training methods.
              </p>
              <div className="flex flex-row gap-5 flex-wrap ">
                <SimpleButton
                  link="/contact"
                  text="Book Your First Lesson"
                  style="bg-green-500 text-white font-bold py-3 px-5 rounded-lg font-inter"
                  tesxtStyle="font-semibold"
                />
                <SimpleButton
                  link="/courses"
                  text="View Courses"
                  style="bg-white text-gray-800 font-bold py-3 px-5 rounded-lg font-inter"
                  tesxtStyle="font-semibold"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full font-inter">
        <div className="max-w-6xl mx-auto px-5 py-16">
          <div className="w-full">
            <p className="text-lg p-3 rounded-full bg-green-500 text-white font-semibold w-fit">
              Our Story
            </p>
            <h1 className="text-2xl md:text-5xl font-extrabold font-inter mt-5">
              From Passion to Profession
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="mt-5 font-inter text-gray-500">
                <p>
                  Dejay Driving School was founded in 2005 by Michael and Lisa
                  Chen, former driving safety instructors who saw a need for a
                  more personalized approach to driver education. <br></br>
                  <br />
                  What began as a small operation with just two cars and one
                  location has grown into a respected driving school with
                  multiple centers across the city, a fleet of modern vehicles,
                  and a team of expert instructors united by the same core
                  mission: to create safer roads through better driver
                  education. <br></br>
                  <br />
                  Over the past 18 years, we've helped over 25,000 students
                  become confident, skilled drivers. Our dedication to safety
                  and quality instruction has earned us recognition as one of
                  the top driving schools in the region.
                </p>
              </div>
              <div className="relative mt-5">
                <Image
                  src={image.founder}
                  alt="DriveWise Academy founders"
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                  <p className="font-bold text-xl">Est. 2005</p>
                  <p className="text-muted-foreground">
                    18 years of excellence
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-green-200/10">
        <div className="max-w-6xl mx-auto px-5 py-16">
          <p className="font-bold text-2xl sm:text-3xl text-center">
            Our Journey
          </p>
          <p className="text-center text-gray-600 mt-5 mb-8 text-base">
            From our humble beginnings to becoming a leading driving academy,
            our focus on quality education remains unchanged.
          </p>
          <Timeline
            position="alternate"
            sx={{
              padding: 0,
              margin: 0,
            }}
          >
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className="flex flex-col gap-1">
                  <p className="px-3 py-1 text-sm rounded-full border-2 border-green-500/50 w-fit">
                    2005
                  </p>
                  <p className="text-lg font-semibold mt-3">Foundation</p>
                  <p className="text-gray-500 text-sm md:text-base">
                    Michael and Lisa Chen establish DriveWise Academy with a
                    mission to provide personalized driving instruction focused
                    on safety.
                  </p>
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className="flex flex-col gap-1">
                  <p className="px-3 py-1 text-sm rounded-full border-2 border-green-500/50 w-fit self-end">
                    2010
                  </p>
                  <p className="text-lg font-semibold mt-3">Expansion</p>
                  <p className="text-gray-500 text-sm md:text-base">
                    Following five successful years, we expanded to three
                    locations across the city and introduced specialized courses
                    for defensive driving.
                  </p>
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="secondary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className="flex flex-col gap-1">
                  <p className="px-3 py-1 text-sm rounded-full border-2 border-green-500/50 w-fit">
                    2015
                  </p>
                  <p className="text-lg font-semibold mt-3">Innovation</p>
                  <p className="text-gray-500 text-sm md:text-base">
                    Introduced cutting-edge simulation technology to complement
                    on-road training, enhancing hazard perception and reaction
                    skills.
                  </p>
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="primary" />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                <div className="flex flex-col gap-1">
                  <p className="px-3 py-1 text-sm rounded-full border-2 border-green-500/50 w-fit self-end">
                    2020
                  </p>
                  <p className="text-lg font-semibold mt-3">Adaptation</p>
                  <p className="text-gray-500 text-sm md:text-base">
                    During the pandemic, we developed virtual theory classes and
                    implemented enhanced safety protocols for in-car lessons.
                  </p>
                </div>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot variant="outlined" color="secondary" />
                <TimelineConnector />
                <TimelineDot variant="outlined" />
              </TimelineSeparator>
              <TimelineContent>
                <div className="flex flex-col gap-1">
                  <p className="px-3 py-1 text-sm rounded-full border-2 border-green-500/50 w-fit">
                    Today
                  </p>
                  <p className="text-lg font-semibold mt-3">Excellence</p>
                  <p className="text-gray-500 text-sm md:text-base">
                    Now with five locations, a fleet of 20 vehicles, and 25,000+
                    graduates, we continue to evolve while maintaining our
                    commitment to personalized instruction.
                  </p>
                </div>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </div>
      </section>

      <section>
        <div className="max-w-6xl mx-auto px-5 py-16 md:py-24">
          <p className="font-bold text-2xl sm:text-3xl text-center">
            Our Journey
          </p>
          <p className="text-center text-gray-600 mt-5 mb-8 text-base">
            From our humble beginnings to becoming a leading driving academy,
            our focus on quality education remains unchanged.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-8 bg-gray-100 rounded-2xl flex flex-col"
              >
                <div className="p-5 rounded-lg bg-green-300/30 w-fit">
                  <value.icon className="text-4xl text-green-500" />
                </div>
                <p className="text-lg font-semibold mt-5">{value.title}</p>
                <p className="text-gray-500 text-base mt-2">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-green-200/10">
        <div className="max-w-6xl mx-auto px-5 py-16">
          <p className="font-bold text-2xl sm:text-3xl text-center">
            Our LeaderShip Team
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {Leaders.map((leader, index) => (
              <AvatarCard key={index} item={leader} />
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-green-600">
        <div className="max-w-6xl mx-auto py-20 px-5 md:py-24">
          <p className="font-extrabold text-2xl sm:text-4xl text-center text-white font-inter">
            Ready to Start Your Driving Journey?
          </p>
          <p className="text-center text-gray-100 mt-5 text-lg font-inter">
            Book your first lesson today and take the first step toward becoming
            a confident, safe driver.
          </p>
          <div className="mt-10 w-full flex justify-center items-center">
            <SimpleButton
              link="/courses"
              text="View All Courses"
              style="w-fit bg-white text-green-500 font-bold py-3 px-5 rounded font-inter"
              tesxtStyle="font-semibold"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
