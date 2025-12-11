import { BiHomeAlt2 } from "react-icons/bi";
import { HiOutlineExclamationCircle } from "react-icons/hi2";
import { LuListTodo } from "react-icons/lu";
import { IoPricetagsOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";
import { PiPhoneCall } from "react-icons/pi";
import { GoShieldCheck } from "react-icons/go";
import { GoClock } from "react-icons/go";
import { BsCalendar2 } from "react-icons/bs";
import { GoStar } from "react-icons/go";
import { Course } from "@/types/type";
import { TestimonialProps } from "@/types/type";
import { image } from "@/constant";
import { AiOutlineSafety } from "react-icons/ai";
import { SlChemistry } from "react-icons/sl";
import { LuSettings2 } from "react-icons/lu";
import { MdOutlinePlayLesson } from "react-icons/md";

export const SiteLinks = [
  {
    name: "Home",
    link: "/",
    icon: BiHomeAlt2,
  },
  {
    name: "Lessons",
    link: "/lessons",
    icon: MdOutlinePlayLesson,
  },
  {
    name: "Courses",
    link: "/courses",
    icon: LuListTodo,
  },
  // {
  //   name: "About",
  //   link: "/about",
  //   icon: HiOutlineExclamationCircle,
  // },
  {
    name: "Pricing",
    link: "/pricing",
    icon: IoPricetagsOutline,
  },
  {
    name: "Staff",
    link: "/staff",
    icon: LuUsers,
  },
  {
    name: "Contact",
    link: "/contact",
    icon: PiPhoneCall,
  },
];

export const categories = [
  "Traffic Rules",
  "Practical Skills",
  "Safety",
  "Vehicle Maintenance",
  "Road Signs",
  "Theory",
];

export const WhyUs = [
  {
    icon: GoShieldCheck,
    title: "Certified Instructors",
    text: "All our instructors are state-certified with years of teaching experience.",
  },
  {
    icon: GoStar,
    title: "98% Pass Rate",
    text: "Our students consistently achieve excellent results on their driving tests.",
  },
  {
    icon: GoClock,
    title: "Flexible Scheduling",
    text: "Book lessons that fit your busy schedule, including evenings and weekends.",
  },
  {
    icon: BsCalendar2,
    title: "Modern Vehicles",
    text: "Learn in our fleet of well-maintained, dual-control vehicles with the latest safety features.",
  },
];

export const values = [
  {
    icon: AiOutlineSafety,
    title: "Safety First",
    text: "We believe that safety is paramount in driving. Our instructors emphasize defensive driving techniques and hazard awareness in every lesson.",
  },
  {
    icon: LuSettings2,
    title: "Personalized Learning",
    text: "We recognize that every student is unique, with different learning styles and challenges. Our instruction adapts to meet individual needs.",
  },
  {
    icon: SlChemistry,
    title: "Continuous Improvement",
    text: "We stay updated on the latest driving techniques, vehicle technologies, and teaching methods to provide the best possible instruction.",
  },
];

export const courses: Course[] = [
  // Full License
  {
    mode: "full_license",
    level: "standard",
    transmission: "automatic",
    duration: "2 months",
    fee: 2700,
    description: "Standard automatic driving lessons for full licensing.",
    packages: ["Road signs", "Driving practice", "Simulator training"],
    routine: ["3 days/week", "2 hours/day"],
  },
  {
    mode: "full_license",
    level: "standard",
    transmission: "manual",
    duration: "2 months",
    fee: 2800,
    description: "Standard manual driving lessons for full licensing.",
    packages: ["Road signs", "Manual gear training", "Test prep"],
    routine: ["3 days/week", "2 hours/day"],
  },
  {
    mode: "full_license",
    level: "premium",
    transmission: "automatic",
    duration: "2 months",
    fee: 3200,
    description: "Premium full license training with automatic car.",
    packages: [
      "Advanced road practice",
      "Simulator",
      "Free retest",
      "Hazard perception training",
      "Emergency maneuvers practice",
      "Weather condition driving",
      "Accident prevention techniques",
    ],
    routine: ["4 days/week", "2 hours/day"],
  },
  {
    mode: "full_license",
    level: "premium",
    transmission: "manual",
    duration: "2 months",
    fee: 3300,
    description: "Premium manual driving license training.",
    packages: [
      "Manual handling",
      "Night driving",
      "Retest option",
      "Hazard perception training",
      "Emergency maneuvers practice",
      "Weather condition driving",
      "Accident prevention techniques",
    ],
    routine: ["4 days/week", "2 hours/day"],
  },
  {
    mode: "full_license",
    level: "express",
    transmission: "automatic",
    duration: "1 month",
    fee: 4000,
    description: "Fast-track automatic full license training.",
    packages: [
      "Fast-track theory & practical",
      "Simulator",
      "Road test",
      "Hazard perception training",
      "Emergency maneuvers practice",
      "Weather condition driving",
      "Accident prevention techniques",
    ],
    routine: ["6 days/week", "3 hours/day"],
  },
  {
    mode: "full_license",
    level: "express",
    transmission: "manual",
    duration: "1 month",
    fee: 4000,
    description: "Fast-track manual full license training.",
    packages: [
      "Quick manual practice",
      "Theory crash course",
      "Hazard perception training",
      "Emergency maneuvers practice",
      "Weather condition driving",
      "Accident prevention techniques",
    ],
    routine: ["6 days/week", "3 hours/day"],
  },

  // Driving Only
  {
    mode: "driving_only",
    level: "standard",
    transmission: "automatic",
    duration: "3 months",
    fee: 1500,
    description: "Standard driving practice with automatic car only.",
    packages: ["Basic car control", "Traffic signs", "Parking practice"],
    routine: ["3 days/week", "1.5 hours/day"],
  },
  {
    mode: "driving_only",
    level: "standard",
    transmission: "manual",
    duration: "3 months",
    fee: 1500,
    description: "Standard driving with manual gear practice.",
    packages: ["Basic car control", "Gear shifting", "Road test"],
    routine: ["3 days/week", "1.5 hours/day"],
  },
  {
    mode: "driving_only",
    level: "premium",
    transmission: "automatic",
    duration: "1 month",
    fee: 2400,
    description: "Premium short-term driving course (automatic).",
    packages: [
      "Advanced road training",
      "Simulations",
      "Parking masterclass",
      "Hazard perception training",
      "Emergency maneuvers practice",
    ],
    routine: ["4 days/week", "2 hours/day"],
  },
  {
    mode: "driving_only",
    level: "premium",
    transmission: "manual",
    duration: "1 month",
    fee: 2400,
    description: "Premium manual gear driving course.",
    packages: [
      "Advanced manual practice",
      "Steep driving",
      "Retest option",
      "Hazard perception training",
      "Emergency maneuvers practice",
    ],
    routine: ["4 days/week", "2 hours/day"],
  },
  {
    mode: "driving_only",
    level: "express",
    transmission: "automatic",
    duration: "1 month",
    fee: 2800,
    description: "Express automatic driving course only.",
    packages: [
      "High-speed road practice",
      "Quick theory recap",
      "Hazard perception training",
      "Emergency maneuvers practice",
    ],
    routine: ["6 days/week", "3 hours/day"],
  },
  {
    mode: "driving_only",
    level: "express",
    transmission: "manual",
    duration: "1 month",
    fee: 2800,
    description: "Express manual driving course only.",
    packages: [
      "Crash course manual driving",
      "Speed control",
      "Hazard perception training",
      "Emergency maneuvers practice",
    ],
    routine: ["6 days/week", "3 hours/day"],
  },

  // Refresher
  {
    mode: "refresher",
    level: "standard",
    transmission: "automatic",
    duration: "2 months",
    fee: 1800,
    description: "Standard refresher course for licensed drivers.",
    packages: ["City driving", "Reverse & parking", "Road signs"],
    routine: ["2 days/week", "1.5 hours/day"],
  },
  {
    mode: "refresher",
    level: "premium",
    transmission: "automatic",
    duration: "2 months",
    fee: 1900,
    description: "Premium refresher course with intensive practice.",
    packages: [
      "Custom route planning",
      "Night practice",
      "One-on-one coaching",
      "Hazard perception training",
      "Accident prevention techniques",
    ],
    routine: ["3 days/week", "2 hours/day"],
  },
  {
    mode: "refresher",
    level: "express",
    transmission: "automatic",
    duration: "2 months",
    fee: 2000,
    description: "Express refresher program for urgent improvement.",
    packages: [
      "Quick recap",
      "Parking drills",
      "Short tests",
      "Hazard perception training",
      "Accident prevention techniques",
    ],
    routine: ["4 days/week", "2 hours/day"],
  },
];

export const testimonials: TestimonialProps[] = [
  {
    id: 1,
    name: "Fatima Yusuf",
    avatar: image.woman1,
    text: "The premium automatic course was outstanding. The instructors were patient and supportive.",
    rating: 5,
    course: "Premium Automatic Full License",
  },
  {
    id: 2,
    name: "James Okeke",
    avatar: image.man1,
    text: "The express manual training was intense but effective. I got my license in no time!",
    rating: 4,
    course: "Express Manual Full License",
  },
  {
    id: 3,
    name: "Linda Amadi",
    avatar: image.woman2,
    text: "The refresher course helped me regain confidence after years without driving.",
    rating: 5,
    course: "Standard Automatic Refresher",
  },
  {
    id: 4,
    name: "Kwasi Ofori",
    avatar: image.man2,
    text: "The manual driving-only course was exactly what I needed. Highly recommended.",
    rating: 4,
    course: "Standard Manual Driving Only",
  },
  {
    id: 5,
    name: "Ahmed Sule",
    avatar: image.man3,
    text: "I loved the personalized coaching in the premium refresher course!",
    rating: 5,
    course: "Premium Automatic Refresher",
  },
  {
    id: 6,
    name: "Blessing Obi",
    avatar: image.woman3,
    text: "Quick, effective and worth every naira. Passed my road test with ease.",
    rating: 4,
    course: "Express Automatic Driving Only",
  },
  {
    id: 7,
    name: "Linda Agyemang",
    avatar: image.woman4,
    text: "The instructors made learning fun and stress-free. I highly recommend the standard course.",
    rating: 5,
    course: "Standard Automatic Full License",
  },
  {
    id: 8,
    name: "Samuel Ampong",
    avatar: image.man4,
    text: "The gear shifting techniques in the manual course were top notch!",
    rating: 4,
    course: "Standard Manual Driving Only",
  },
];

export const lessonProcess = [
  {
    id: 1,
    title: "Initial Assessment",
    description:
      "We evaluate your current skills and create a personalized learning plan.",
  },
  {
    id: 2,
    title: "Theory & Skills",
    description:
      "Master road rules, safety protocols, and essential driving techniques.",
  },
  {
    id: 3,
    title: "Practical Lessons",
    description:
      "Learn through hands-on driving experience with expert guidance.",
  },
  {
    id: 4,
    title: "Test Preparation",
    description:
      "Final preparations and practice to ensure you're ready to pass your test.",
  },
];

export const questions = [
  {
    id: 1,
    question: "How do I book a driving lesson?",
    answer:
      "To book a driving lesson, simply visit our website or call our customer service team. You can also use our mobile app for convenient scheduling.",
  },
  {
    id: 2,
    question: "Do you provide cars for the driving test?",
    answer:
      "Yes, you can use our dual-control vehicles for your practical driving test for an additional fee, which includes a pre-test warm-up lesson.",
  },
  {
    id: 3,
    question: "Is payment refundable?",
    answer:
      "No payment isn't refundable. However, if you cancel your lesson, we will not refund the full amount. You can contact our customer service team for more information.",
  },
];

export const Leaders = [
  {
    id: 1,
    name: "Michael Chen",
    avatar: image.founder,
    position: "Founder & CEO",
    theme:
      "Former driving instructor with 25+ years of experience and a passion for road safety.",
  },
  {
    id: 2,
    name: "Lisa Chen",
    avatar: image.founder,
    position: "Co-founder & CMO",
    theme:
      "Specializes in curriculum development and instructor training methodologies.",
  },
  {
    id: 2,
    name: "David Wilson",
    avatar: image.founder,
    position: "Head Instructor",
    theme:
      "Master instructor with expertise in defensive and advanced driving techniques.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    avatar: image.founder,
    position: "Operations Manager",
    theme:
      "Ensures all locations maintain our high standards of instruction and customer service.",
  },
];
