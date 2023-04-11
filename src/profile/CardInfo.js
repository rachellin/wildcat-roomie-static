const loremIpsum = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

let profile1 = {
    firstName: "Rachel",
    lastName: "Lin",
    about: {
      bio: loremIpsum,
      looking: loremIpsum
    },
    basics: {
      location: "New York",
      major: "computer science",
      mbti: "infj",
      pronouns: "she/her"
    },
    filters: ["2025", "female-identifying", "early bird", "Weinberg", "INFJ", "Mid-Atlantic", "south campus"],
    social: {
      instagram: "",
      phone: "9173921992", // or int? 
      snapchat: ""
    },
    isPosted: true,
    roommate: true,
    year: 2025
}

let profile2 = {
  firstName: "Jane",
  lastName: "Doe",
  about: {
    bio: loremIpsum,
    looking: loremIpsum
  },
  basics: {
    location: "New York",
    major: "computer science",
    mbti: "infj",
    pronouns: "she/her"
  },
  filters: [
    "Weinberg",
    "Elder",
    "Allison",
    "Willard",
    "Shepard",
    "1838 Chicago",
    "2026",
    "female-identifying",
    "night owl",
    "ISTJ",
    "West",
    "south campus"
  ],
  social: {
    instagram: "",
    phone: "9173921992", // or int? 
    snapchat: ""
  },
  isPosted: true,
  roommate: true,
  year: 2026
}

let profile3 = {
  firstName: "John",
  lastName: "Doe",
  about: {
    bio: loremIpsum,
    looking: loremIpsum
  },
  basics: {
    location: "Singapore",
    major: "computer science",
    mbti: "intp",
    pronouns: "he/him"
  },
  filters: [
    "McCormick",
    "Lincoln",
    "Slivka",
    "Shepard",
    "Willard",
    "Ayers",
    "2026",
    "male-identifying",
    "night owl",
    "ENTJ",
    "International",
    "north campus"
  ],
  social: {
    instagram: "",
    phone: "9173921992", // or int? 
    snapchat: ""
  },
  isPosted: true,
  roommate: false,
  year: 2026
}

let profile4 = {
  firstName: "Inej",
  lastName: "Ghafa",
  about: {
    bio: loremIpsum,
    looking: loremIpsum
  },
  basics: {
    location: "Ravka",
    major: "Social Policy",
    mbti: "infj",
    pronouns: "she/her"
  },
  filters: [
    "SESP",
    "Hobart House",
    "Shepard",
    "Willard",
    "2025",
    "female-identifying",
    "night owl",
    "INFJ",
    "International",
    "south campus"
  ],
  social: {
    instagram: "",
    phone: "9173921992", // or int? 
    snapchat: ""
  },
  isPosted: true,
  roommate: true,
  year: 2025
}

let profile5 = {
  firstName: "Kaz",
  lastName: "Brekker",
  about: {
    bio: loremIpsum,
    looking: loremIpsum
  },
  basics: {
    location: "Ketterdam",
    major: "Social Policy",
    mbti: "intj",
    pronouns: "he/him"
  },
  filters: [
    "SESP",
    "Lincoln",
    "Shepard",
    "Willard",
    "2025",
    "male-identifying",
    "early bird",
    "INTJ",
    "International",
    "south campus",
    "north campus"
  ],
  social: {
    instagram: "",
    phone: "9173921992", // or int? 
    snapchat: ""
  },
  isPosted: true,
  roommate: true,
  year: 2025
}

let profile6 = {
  firstName: "Jesper",
  lastName: "Fahey",
  about: {
    bio: loremIpsum,
    looking: loremIpsum
  },
  basics: {
    location: "Ketterdam",
    major: "Chemistry, Theatre",
    mbti: "esfp",
    pronouns: "he/him"
  },
  filters: [
    "Weinberg",
    "School of Communication",
    "Lincoln",
    "Shepard",
    "Slivka",
    "Willard",
    "2026",
    "male-identifying",
    "night owl",
    "ESFP",
    "south campus",
    "north campus"
  ],
  social: {
    instagram: "",
    phone: "9173921992", // or int? 
    snapchat: ""
  },
  isPosted: true,
  roommate: false,
  year: 2026
}

// let profile2 = {
//     firstName: "Jane",
//     lastName: "Doe",
//     about: {
//       bio: loremIpsum,
//       looking: loremIpsum
//     },
//     basics: {
//       location: "Michigan",
//       major: "environmental science",
//       mbti: "entp",
//       pronouns: "they/them"
//     },
//     filters: ["2025"],
//     social: {
//       instagram: "",
//       phone: "", // or int? 
//       snapchat: ""
//     },
//     isPosted: true,
//     roommate: true,
//     year: 2025
// }

// let profile3 = {
//     firstName: "John",
//     lastName: "Doe",
//     about: {
//       bio: loremIpsum,
//       looking: loremIpsum
//     },
//     basics: {
//       location: "Taiwan",
//       major: "economics",
//       mbti: "",
//       pronouns: "he/him"
//     },
//     filters: ["2026"],
//     social: {
//       instagram: "",
//       phone: "", // or int? 
//       snapchat: ""
//     },
//     isPosted: true,
//     roommate: true,
//     year: 2026
// }



export const cardData = [profile1, profile2, profile3, profile4, profile5, profile6]