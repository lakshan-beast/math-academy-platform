// import  ModulePack, TeacherProfile from '../types/index';

// export const mathTeacher: TeacherProfile = {
//   name: "Asanka Nayanajith",
//   qualifications: [
//     "B.Sc. (Hons) in Mathematics - University of Colombo",
//     "10+ Years of O/L Examination Coaching Experience"
//   ],
//   bio: "Simplifying complex mathematical theories into easy-to-remember practical steps. Helping thousands of school students achieve their 'A' pass for O/L Mathematics.",
//   introVideoUrl: "https://youtu.be/e5Hc2B50Z7c?si=zBko1aZcByQUBRGh", // Our custom video player will use this
//   avatarUrl: "https://unsplash.com"
// };

// export const mockModules: ModulePack[] = [
//   {
//     id: "g11_jan",
//     title: "Grade 11 - January Pack (Real Numbers & Sets)",
//     month: "January",
//     category: "grade_11",
//     price: 2000,
//     coverImageUrl: "https://unsplash.com",
//     description: "Comprehensive coverage of Real Numbers, Indices, and advanced Set Theory operations with past paper setups.",
//     lessons: [
//       { id: "l1", title: "Introduction to Real Numbers", videoUrl: "https://youtu.be/EngW7tLk6R8?si=eCvqYlBKKqTLX3h5", duration: "1h 45m", description: "Basics of rational and irrational numbers." }
//     ]
//   },
//   {
//     id: "paper_jan",
//     title: "O/L Paper Class - January Pack",
//     month: "January",
//     category: "paper_class",
//     price: 1500,
//     coverImageUrl: "https://unsplash.com",
//     description: "Detailed analysis and step-by-step breakdown of 2022 and 2023 O/L Mathematics Past Papers (Part I & Part II).",
//     lessons: []
//   },
//   {
//     id: "g10_jan",
//     title: "Grade 10 - January Pack (Fractions & Percentages)",
//     month: "January",
//     category: "grade_10",
//     price: 1800,
//     coverImageUrl: "https://unsplash.com",
//     description: "Mastering complex fraction simplification, word problems, and financial mathematics fundamentals.",
//     lessons: []
//   },
//   {
//     id: "g11_feb",
//     title: "Grade 11 - February Pack (Algebraic Expressions)",
//     month: "February",
//     category: "grade_11",
//     price: 2000,
//     coverImageUrl: "https://unsplash.com",
//     description: "Deep dive into quadratic equations, factorizing, and simultaneous equations configurations.",
//     lessons: []
//   }
// ];

import { type ModulePack, type TeacherProfile } from "../types/index.ts";

export const mathTeacher: TeacherProfile = {
  name: "Asanka Nayanajith",
  qualifications: [
    "B.Sc. (Hons) in Mathematics - University of Colombo",
    "10+ Years of O/L Examination Coaching Experience",
  ],
  bio: "Simplifying complex mathematical theories into easy-to-remember practical steps. Helping thousands of school students achieve their 'A' pass for O/L Mathematics.",
  introVideoUrl: "https://youtu.be/EngW7tLk6R8?si=eCvqYlBKKqTLX3h5",
  avatarUrl: "https://unsplash.com/photos/a-man-in-a-suit-standing-with-his-arms-crossed-tmwHp7-5LP4",
};

export const mockModules: ModulePack[] = [
  {
    id: "g11_jan",
    title: "Grade 11 - January Pack (Real Numbers & Sets)",
    month: "January",
    category: ["grade_11"],
    price: 2000,
    coverImageUrl: "https://unsplash.com",
    description:
      "Comprehensive coverage of Real Numbers, Indices, and advanced Set Theory operations with past paper setups.",
    lessons: [
      {
        id: "l1",
        title: "Introduction to Real Numbers",
        videoUrl: "https://youtube.com",
        duration: "1h 45m",
        description: "Basics of rational and irrational numbers.",
      },
    ],
  },
  {
    id: "paper_jan",
    title: "O/L Paper Class - January Pack",
    month: "January",
    category: ["paper_class"],
    price: 1500,
    coverImageUrl: "https://unsplash.com",
    description:
      "Detailed analysis and step-by-step breakdown of 2022 and 2023 O/L Mathematics Past Papers (Part I & Part II).",
    lessons: [],
  },
  {
    id: "g10_jan",
    title: "Grade 10 - January Pack (Fractions & Percentages)",
    month: "January",
    category: ["grade_10"],
    price: 1800,
    coverImageUrl: "https://unsplash.com",
    description:
      "Mastering complex fraction simplification, word problems, and financial mathematics fundamentals.",
    lessons: [],
  },
  {
    id: "g11_feb",
    title: "Grade 11 - February Pack (Algebraic Expressions)",
    month: "February",
    category: ["grade_11"],
    price: 2000,
    coverImageUrl: "https://unsplash.com",
    description:
      "Deep dive into quadratic equations, factorizing, and simultaneous equations configurations.",
    lessons: [],
  },
];
