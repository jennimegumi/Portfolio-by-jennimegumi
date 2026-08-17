/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { WorkItem, BlogPost, CaseStudy } from './types';

export const DESIGNER_INFO = {
  name: "jennimegumi",
  title: "Multimedia & Social Media Specialist",
  location: "Quezon City, Philippines",
  about: " (Jenny Grace Apo), I am a multi-disciplinary designer and creative strategist from the Philippines, driven by a deep passion for the fascinating connection of creativity and technology. I enjoy bringing ideas to life through engaging multimedia experiences that connect, resonate, and inspire. Beyond design, you’ll also find me streaming games and sharing gameplay highlights across various social media platforms.",
  skills: [
    { 
      category: "Generative AI & Prompting", 
      items: ["AI Acumen", "AI for Brainstorming and Planning", "AI for Content Creation", "AI for Data Analysis", "AI for Research and Insights", "AI for Writing and Communicating", "Prompt Engineering"] 
    },
    { 
      category: "Social Media Management", 
      items: ["Viral Hook & Narrative Design", "Social Media Page Growth", "Audience Engagement Analytics", "Brand Voice & Community Building", "Campaign Launch Roadmaps"] 
    },
    { 
      category: "UI/UX Design", 
      items: ["Design Systems", "Figma Suite", "User Experience Design", "Interactive Prototyping", "Design Research", "Sprint Retrospectives and Planning"] 
    },
    { 
      category: "Creative Direction & Brand Identity", 
      items: ["Logo Design & Identity", "Brand Guidelines", "Typography Systems", "Marketing Collateral", "Packaging Direction"] 
    },
    { 
      category: "Video Editing & Motion Design", 
      items: ["After Effects & Premiere", "Cinematic Color Grading", "Timeline Pacing & Sync", "2D Motion Graphics", "Visual Storytelling"] 
    },
    { 
      category: "Traditional & Digital Art", 
      items: ["Realistic Portrait", "Fan Art", "Anime Style", "Twitch Emotes"] 
    }
  ],
  stats: [
    { label: "Years in Industry", value: "4+" },
    { label: "Asset Delivered", value: "700+" },
    { label: "Brand and Client Collaborations", value: "25+" },
    { label: "Workflow Efficiency (Fast Turnaround)", value: "40%" }
  ],
  testimonials: [
    {
      quote: "Jenny is a true visual artist—a creative force with mastery in digital and traditional media. Her work reflects a deep understanding of visual communication in graphic design, illustration, branding, or layout. She brings a fresh, original perspective to every project, making her creative output visually compelling and strategic.",
      author: "Jasper Briones",
      role: "Digital Marketing Team Head & Consultant, RASA Surveying"
    },
    // {
    //   quote: "Jenny is a true visual artist—a creative force with mastery in digital and traditional media. Her work reflects a deep understanding of visual communication in graphic design, illustration, branding, or layout. She brings a fresh, original perspective to every project, making her creative output visually compelling and strategic.",
    //   author: "Jasper Briones",
    //   role: "Marketing Manager, Havitas Developments Corporation "
    // }
  ]
};

export const PORTFOLIO_WORKS: WorkItem[] = [
  // Graphic Design
  {
    id: "reks-rf-klook-poster",
    title: "Roller Fever Klook Promotional Poster",
    category: "graphic-design",
    client: "REKS Amusement Com, Inc.",
    year: "2025",
    description: "A promotional poster for the launch of Klook as official ticket vendor of Roller Fever.",
    image: "https://scontent.fmnl44-1.fna.fbcdn.net/v/t39.30808-6/476806416_473696595815075_223410523812333655_n.jpg?stp=dst-jpg_tt6&cstp=mx2048x1937&ctp=s2048x1937&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH0hG4o9y5XZ18yaKLoDKPt-ekObcx9cTD56Q5tzH1xMMTpcSO6uzL3lLezjK_VtpDjkktaEpSy815hCvWmxWWd&_nc_ohc=kTKApbh3m8cQ7kNvwERuNzj&_nc_oc=AdqdfQUyY81PYHpaAk5RfjMoJvSIgmDjMcORQ7Pr0m7z-XKgVSLNBB_m5LxBLAKdF54&_nc_zt=23&_nc_ht=scontent.fmnl44-1.fna&_nc_gid=5dy8ltHLeYgGwJv8511zeg&_nc_ss=7b2a8&oh=00_AQF67_gHIoiULJpWpMQERsmKZ43AH5IBKWvn3OInK2HvDw&oe=6A847016",
    skills: ["Brand Guidelines", "Typography Systems", "Marketing Collateral", "Adobe Photoshop", "Canva"],
    link: "https://web.facebook.com/photo.php?fbid=453354657849269&type=3"
  },
  {
    id: "reks-rf-promo-poster",
    title: "Roller Fever Valentine's Day Engagement Poster",
    category: "graphic-design",
    client: "REKS Amusement Com, Inc.",
    year: "2025",
    description: "An engagement poster for the Valentine's Day event with the social media audience as the brand's potential customers.",
    image: "https://scontent.fmnl44-1.fna.fbcdn.net/v/t39.30808-6/480190328_475119922339409_8822486576770225208_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1350&ctp=s1080x1350&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEn7WreiQBhhg1xzFpR6GHEpfkTLTrXfy6l-RMtOtd_LiEBR2OG9896WrDT2MedtO1EbwREqrTzzCFqm919bo1z&_nc_ohc=OzFAoCjVzfcQ7kNvwEhL6Gz&_nc_oc=AdowroQqxgEMDY3JygP3ivFi2RgfKbdaBjmQHtHQjMCD4ij-Qku609G6zb1yV1uHMpQ&_nc_zt=23&_nc_ht=scontent.fmnl44-1.fna&_nc_gid=7CDT_rOmtAA8ca7H1QIOgA&_nc_ss=7b2a8&oh=00_AQHjwOpmESrm-GUakuRMiztxRd5q_n0OOkN01qMMkS8iCw&oe=6A847302",
    skills: ["Brand Guidelines", "Typography Systems", "Marketing Collateral", "Canva"],
    link: "https://web.facebook.com/photo.php?fbid=475119919006076&type=3"
  },
  {
    id: "reks-da-klook-poster",
    title: "Dino Adventure Klook Promotional Poster",
    category: "graphic-design",
    client: "REKS Amusement Com, Inc.",
    year: "2025",
    description: "A promotional poster for the launch of Klook as official ticket vendor of Dino Adventure.",
    image: "https://scontent.fmnl44-1.fna.fbcdn.net/v/t39.30808-6/490192770_1138729894932475_691045979955773316_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFwnWWgdOoKrmCAvtjboajL7qcttDe5bPnupy20N7ls-Qx116iwbo3DQ_8ldzH7UO1Us2GWgNhrcSXH4eOhZMfa&_nc_ohc=lSgtq2fWwycQ7kNvwHu_mTt&_nc_oc=AdqnMYIYxy9wAwovQUIujy_3n2VOVyNTblm5Id18kCgDwdl6yUpju6s6Hsbp5sUrxyM&_nc_zt=23&_nc_ht=scontent.fmnl44-1.fna&_nc_gid=Hz7HskJc2vx0aWe_aOCqyg&_nc_ss=7b2a8&oh=00_AQFJ3vyIldQbyrvxb3jNKyAeS346qaR3c_TOMFpzsgRqcQ&oe=6A849282",
    skills: ["Brand Guidelines", "Typography Systems", "Marketing Collateral", "Canva"],
    link: "https://web.facebook.com/photo.php?fbid=1070778375060961&type=3"
  },   
  {
    id: "reks-da-branch-poster",
    title: "Dino Adventure Branch Promotional Poster",
    category: "graphic-design",
    client: "REKS Amusement Com, Inc.",
    year: "2025",
    description: "A promotional poster for the accessible branch of Dino Adventure.",
    image: "https://scontent.fmnl44-1.fna.fbcdn.net/v/t39.30808-6/489670764_1138994618239336_3340707498731801696_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1350&ctp=s1080x1350&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEYSjZPjFtO1DeZvg2vAptN2pMge3CICTnakyB7cIgJOR5TiCRPfM32WT-QcaNUEv7POVnxqNzJP0D-NxtoaTp_&_nc_ohc=96xAXYNcTHEQ7kNvwE1IaHL&_nc_oc=AdqPUkNHxgmmnOiXgl1Zye5Dhh7a49nmkm6S7j_Ky2pybvc2_QRft2xWFfUYX1gArPk&_nc_zt=23&_nc_ht=scontent.fmnl44-1.fna&_nc_gid=r1YpydlcgXErNmKvzUj6Gw&_nc_ss=7b2a8&oh=00_AQEw5C3nXyRcxuJ-J6vVRNQkTCdQilWVSMbSd7lwFEqvXg&oe=6A848113",
    skills: ["Brand Guidelines", "Typography Systems", "Marketing Collateral", "Canva"],
    link: "https://web.facebook.com/photo.php?fbid=1087170090088456&type=3"
  },
  {
    id: "reks-fc-valentines-poster",
    title: "Fiesta Carnival Valentine's Day Poster",
    category: "graphic-design",
    client: "REKS Amusement Com, Inc.",
    year: "2025",
    description: "A promotional poster for the celebration of Valentine's Day at Fiesta Carnival.",
    image: "https://scontent.fmnl44-1.fna.fbcdn.net/v/t39.30808-6/479486629_122128038890402308_5531408647358600215_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1350&ctp=s1080x1350&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEoecE86xCbUeJCKKu1buqLF5kZPKrYhEkXmRk8qtiESYVijGczCgR7LFNBK9CFzHARzD_bD84fnkYwqCriZobs&_nc_ohc=lEAasyYOllsQ7kNvwFU3t39&_nc_oc=AdrrU_stui__RHnP-86OhqNTaIXGwBQr91LoegGe5UjPA-MXbJ-59hsYIF2cgIwFxmA&_nc_zt=23&_nc_ht=scontent.fmnl44-1.fna&_nc_gid=s05_2JWdMgwwTYCprQJkTA&_nc_ss=7b2a8&oh=00_AQGy3XGOAknf_kZmgYH7OvzDbHnv9UMCbwzyFKrEIMc54Q&oe=6A84799F",
    skills: ["Brand Guidelines", "Typography Systems", "Marketing Collateral", "Canva"],
    link: "https://web.facebook.com/photo.php?fbid=122128038884402308&type=3"
  },
  {
    id: "reks-csp-price-list",
    title: "Champion Sports Park Price List Poster",
    category: "graphic-design",
    client: "REKS Amusement Com, Inc.",
    year: "2025",
    description: "A promotional poster for the Champion Sports Park price list.",
    image: "https://scontent.fmnl44-1.fna.fbcdn.net/v/t39.30808-6/475518372_122116976048631565_4119890374308295186_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeH1B-5jo054sR9-4jnvdPlJ_X9mZ_GGwuf9f2Zn8YbC50uC_U6WX0KL7IxpzEn1aQztvKPA5Sm2nrwc2I1gcqNM&_nc_ohc=gyESYqco_4oQ7kNvwH4ODgN&_nc_oc=Adozh3cSnAN4L5wjYkCtNuy0THgn15IOIADBI7_lR5lVlFNom7voWnYYpzf3YyASEBc&_nc_zt=23&_nc_ht=scontent.fmnl44-1.fna&_nc_gid=qlqouao73uJKe_Zwcbdeqg&_nc_ss=7b2a8&oh=00_AQGW21gerPHzJJObMP396kopu_gj97Qkg2KR306pJdcuQA&oe=6A847995",
    skills: ["Brand Guidelines", "Typography Systems", "Marketing Collateral", "Canva"],
    link: "https://web.facebook.com/photo.php?fbid=122116976042631565&type=3"
  },
  {
    id: "reks-csp-promo-poster",
    title: "Champion Sports Park Facebook Page Promotional Poster",
    category: "graphic-design",
    client: "REKS Amusement Com, Inc.",
    year: "2025",
    description: "A promotional poster for the Champion Sports Park Facebook page.",
    image: "https://scontent.fmnl44-1.fna.fbcdn.net/v/t39.30808-6/476131106_122117394686631565_9047642522893396827_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1350&ctp=s1080x1350&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG-TQLhCSX4M-sMCe-GUqdpulBiuJ2ntS-6UGK4nae1LyRd8aCYEgau7wR6jZ4hBahcqOJzlah3zWauEOTrB8s7&_nc_ohc=BqpFeUicj0UQ7kNvwEAO7ED&_nc_oc=AdoRAeqCclGum3ZJKNEauJBYrZSGz3ASL2we9d0IY4up6myeG_AKHqTqrG2mx1rzY3E&_nc_zt=23&_nc_ht=scontent.fmnl44-1.fna&_nc_gid=qgLn6xzYujvIwnjV7kMUOQ&_nc_ss=7b2a8&oh=00_AQFfB2pOM41r2qhDY-heZGyLmT8MSMthaBS4IHVuUxx95A&oe=6A848BA0",
    skills: ["Brand Guidelines", "Typography Systems", "Marketing Collateral", "Canva"],
    link: "https://web.facebook.com/photo/?fbid=122117397542631565"
  },
  {
    id: "reks-csp-valentines-poster",
    title: "Champion Sports Park Valentine's Day Promotional Poster",
    category: "graphic-design",
    client: "REKS Amusement Com, Inc.",
    year: "2025",
    description: "A promotional poster for the Champion Sports Park Valentine's Day event.",
    image: "https://scontent.fmnl44-1.fna.fbcdn.net/v/t39.30808-6/480119918_122118738752631565_2814328587837043435_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1350&ctp=s1080x1350&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFpzS4B61tr9RHqMpOjHg33q6MP2M53uEWrow_Yzne4RTruMbH1PHjKHEZauCxxwPeQXSsAI1Pvl9vCehUj1pQI&_nc_ohc=8fCHrcXw4TYQ7kNvwFVIQyt&_nc_oc=AdrAG0qoXbYJRAMOJjVCBLoUafaYwnTHU_eJ_CJ9qLG_2_X4Qjmm0-v8Wcj39nQqcKI&_nc_zt=23&_nc_ht=scontent.fmnl44-1.fna&_nc_gid=WEWmQhhnWdQbBAJFfrw-Pg&_nc_ss=7b2a8&oh=00_AQGaRvLn3d5b3m3lgOTphWeXxcvUBQhML9HhaQrTVUzdYQ&oe=6A8464C3",
    skills: ["Brand Guidelines", "Typography Systems", "Marketing Collateral", "Canva"],
    link: "https://web.facebook.com/share/p/1Dg5F4CogN/"
  },
  {
    id: "tecphil-team-poster",
    title: "TecPhil Geosolutions Team Poster",
    category: "graphic-design",
    client: "TecPhil Geosolutions Co.",
    year: "2025",
    description: "A team poster for the TecPhil Geosolutions Co. promoting their collaborative efforts and services.",
    image: "https://scontent.fmnl44-1.fna.fbcdn.net/v/t39.30808-6/547265047_1329858889152368_5441641203975297517_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGDksVHhDnMizUxpO0tyGHRgd6qsgm3nR-B3qqyCbedH4xFU-YkLD_6Jz1XfoM5oXAr4dkTiJb-DT7wDK9bXZDj&_nc_ohc=4liv_-ZyFkEQ7kNvwENuonc&_nc_oc=AdqbQmdsd5rnkgeFQPJ_zC8C3jrGjntglfHNgOEM16qf0V5p4NlI5LxtPJfL6Xr7XD8&_nc_zt=23&_nc_ht=scontent.fmnl44-1.fna&_nc_gid=ogZajlHMDaUWQJG7LL2Fbg&_nc_ss=7b2a8&oh=00_AQG172nwCm865QI5WkpPzyVRxHVmwp5Nv3Vvpg6RPBP_CA&oe=6A84796D",
    skills: ["Brand Guidelines", "Typography Systems", "Marketing Collateral", "Canva"],
    link: "https://web.facebook.com/share/p/1CT15AMvp3/"
  },
  {
    id: "tecphil-tersus-ts-poster",
    title: "TecPhil Tersus TAS-Z1 Total Station Poster",
    category: "graphic-design",
    client: "TecPhil Geosolutions Co.",
    year: "2025",
    description: "A series of specification poster of the Tersus TAS-Z1 Total Station, distributed by TecPhil Geosolutions Co.",
    image: "https://scontent.fmnl44-1.fna.fbcdn.net/v/t39.30808-6/546779218_1330863979051859_7434316729652278405_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeF7gQl5hu7gxSJFvhMojogT_uDuK4iTtLn-4O4riJO0udYJsF3r05nmlHOfmeaYbBBkTR81cVXwNq14mBx1flx1&_nc_ohc=TpypWDnWiDEQ7kNvwGX8gBa&_nc_oc=AdrPRTbw4plsLfyd7Hh5wSS3vIk51VZEkAfU7tyTF6ROg0KHoBY-mGUbB_obQw2uT-4&_nc_zt=23&_nc_ht=scontent.fmnl44-1.fna&_nc_gid=6hns0zVO94nw9cqhnt3xGw&_nc_ss=7b2a8&oh=00_AQFdCfIDWp5NG_DUa0yKBlfA22cX7KMfYA_Z5hO_fAyGXw&oe=6A849BAA",
    skills: ["Brand Guidelines", "Typography Systems", "Marketing Collateral", "Canva"],
    link: "https://web.facebook.com/share/p/195TB5ePhF/"
  },
  {
    id: "tecphil-quote-poster",
    title: "TecPhil Surveying Quote Poster",
    category: "graphic-design",
    client: "TecPhil Geosolutions Co.",
    year: "2025",
    description: "An inspirational quote poster for TecPhil Geosolutions Co., highlighting the importance of precision and accuracy in surveying.",
    image: "https://scontent.fmnl44-1.fna.fbcdn.net/v/t39.30808-6/548799705_1332663312205259_7971953194558437404_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHyeFO3ZDbCS27xhnhsNsVeNfnFOqkvfX01-cU6qS99fW6aSEyJTNySskGTvaFsb_9zCQ2Ve9nY2nBFGGbHGf1p&_nc_ohc=FcxJRSOGDEkQ7kNvwF_LNYD&_nc_oc=Adqta-FVAv0IkR7_7qDLhpPwJHz4CSGM3_QrcVprEoWfjGGrO8OcZaQOPcPQoUM1dW4&_nc_zt=23&_nc_ht=scontent.fmnl44-1.fna&_nc_gid=dKpdLs8_GlLvwLfnqkVSDg&_nc_ss=7b2a8&oh=00_AQGFZXfJlOnH_q6LNHKBsoC6vsRjb7BnCBrJP22N8PtmPg&oe=6A849C51",
    skills: ["Brand Guidelines", "Typography Systems", "Marketing Collateral", "Canva"],
    link: "https://web.facebook.com/share/p/1QbeEuNZU5/"
  },
  {
    id: "tecphil-testimony-poster",
    title: "TecPhil Review/Testimony Poster",
    category: "graphic-design",
    client: "TecPhil Geosolutions Co.",
    year: "2025",
    description: "A testimonial poster for TecPhil Geosolutions Co., showcasing customer satisfaction and the value of their surveying services.",
    image: "https://scontent.fmnl44-1.fna.fbcdn.net/v/t39.30808-6/559647353_1355911346547122_3686629196930125243_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEz8IPhQiCOZzMZlUCf2kFHrnkowd82E7iueSjB3zYTuOosdfSF4-4dHbI-MBzShdcBgNb4ZXvbO4Dx9u1yqqIa&_nc_ohc=eUbPk8e8VQcQ7kNvwHfd-_q&_nc_oc=AdpBmtFO4k7sirMIsop1NIWz1HdZlopQ7mGrl4QRSMXleSGBd3ZmKfGjeX3I5mhimgk&_nc_zt=23&_nc_ht=scontent.fmnl44-1.fna&_nc_gid=xrKLgy8MA25iB4kDJ91mkw&_nc_ss=7b2a8&oh=00_AQF-vrZU1iQc6swdQdHXdmGVGJaZnJ7I8hj4NPVUI6kxIQ&oe=6A84934F",
    skills: ["Brand Guidelines", "Typography Systems", "Marketing Collateral", "Canva"],
    link: "https://web.facebook.com/share/p/1JLkQLmkym/"
  },
  {
    id: "tecphil-tersus-oscar-poster",
    title: "TecPhil Tersus Oscar GNSS Receiver Poster",
    category: "graphic-design",
    client: "TecPhil Geosolutions Co.",
    year: "2025",
    description: "A promotional poster of Tersus Oscar GNSS Receiver distributed by TecPhil Geosolutions Co.",
    image: "https://scontent.fmnl44-1.fna.fbcdn.net/v/t39.30808-6/586015845_1390714813066775_7449980708960073722_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeG5zneqyJYyTgkg2TMo4qlP4-jGbEqGBqvj6MZsSoYGq51b7RFiL-kfYsvmy13ud7z2qnaj-ZbQhDAEZ-RYSnCR&_nc_ohc=vCm1vmHOwP8Q7kNvwFtfbd5&_nc_oc=AdpMVDKw0u7PtpgWR7bpQrzBBK-P9yBeFhnzrstrNdzXOesV2GnFqCuGGGoOaZJ2EzE&_nc_zt=23&_nc_ht=scontent.fmnl44-1.fna&_nc_gid=pIP6iZ1Z4Mg0rK_Y0wJCzQ&_nc_ss=7b2a8&oh=00_AQGz6N3P7KpVuwPsqNlIo2WSgkVEVEbuzJukdMeqmJ1Z4A&oe=6A8496D8",
    skills: ["Brand Guidelines", "Typography Systems", "Marketing Collateral", "Canva"],
    link: "https://web.facebook.com/share/p/19RUNc14ZJ/"
  },
  {
    id: "tsms-myth-vs-fact-poster",
    title: "TSMS Myth vs. Fact Poster",
    category: "graphic-design",
    client: "TecPhil Surveying and Mapping Services",
    year: "2025",
    description: "An educational poster for TecPhil Surveying and Mapping Services, highlighting common myths and facts about surveying.",
    image: "https://scontent.fmnl44-1.fna.fbcdn.net/v/t39.30808-6/571203927_122159391615000761_307910532459524839_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_aid=0&_nc_eui2=AeFp7vo5_4J06kDdg6Yd1RRGRSPrEPUQCuRFI-sQ9RAK5EnjlZVmULBLo8AIrgaHSPU8RF8chdkSJShd48W23E7t&_nc_ohc=sHa5mAJptqEQ7kNvwEkaVNT&_nc_oc=Adpfx_PJvJoGJYSOcrQo2DGvVg0lsqiy9F84XFPq0gd4zwJx7l-f_Mqw3IAyTeiXk-M&_nc_zt=23&_nc_ht=scontent.fmnl44-1.fna&_nc_gid=GdZaIe5TBCfSOD4SW9wI9w&_nc_ss=7b2a8&oh=00_AQGIlWvp7wHGMvWhML_2NSk-AJYhddzd8D5xEPP0_dz8JQ&oe=6A8499A8",
    skills: ["Brand Guidelines", "Typography Systems", "Marketing Collateral", "Canva"],
    link: "https://web.facebook.com/share/p/1DTAPW2swm/"
  },
  {
    id: "tsms-usv-poster",
    title: "TSMS Mapping Insights Poster",
    category: "graphic-design",
    client: "TecPhil Surveying and Mapping Services",
    year: "2025",
    description: "An educational carousel for TecPhil Surveying and Mapping Services, highlighting the importance of USV for Hydrographic Surveying.",
    image: "https://scontent.fmnl44-1.fna.fbcdn.net/v/t39.30808-6/552081308_122124593271000761_5868440580365490036_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=111&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_aid=0&_nc_eui2=AeE25g0ejWMNuhiPu1PFGBKOS3aarQ_0vxZLdpqtD_S_FgfPVgIkE7IUGvcFtUYEgP9cRG48lGANn9u3WLkkRV82&_nc_ohc=3rATxOzxZMsQ7kNvwGLIk1H&_nc_oc=Adr7xvPyMEcmX2v9AwGI68fK0zMSCxgqvaCgihLlNswyhj0DFmU1IVQZqlCuXTAhXas&_nc_zt=23&_nc_ht=scontent.fmnl44-1.fna&_nc_gid=0EITIIv4v7aDQ4ruUAI_dA&_nc_ss=7b2a8&oh=00_AQGdJ24X930oj0pAExZBJRRabGewtZUFCXjEwTqjAQqmEg&oe=6A8490D0",
    skills: ["Brand Guidelines", "Typography Systems", "Marketing Collateral", "Canva"],
    link: "https://web.facebook.com/share/p/1987uBawuM/"
  },
  {
    id: "rasa-satlab-sl7-poster",
    title: "RASA Surveying SatLab SL7 GNSS RTK Poster",
    category: "graphic-design",
    client: "RASA Surveying",
    year: "2025",
    description: "A promotional poster of SatLab SL7 GNSS RTK distributed by RASA Surveying.",
    image: "https://scontent.fmnl44-1.fna.fbcdn.net/v/t39.30808-6/519507021_787333503622758_6585201968618434322_n.jpg?stp=dst-jpg_tt6&cstp=mx1000x1000&ctp=s1000x1000&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHU4r05KXwW-_b3_La13x0Twyl89U81Lj_DKXz1TzUuP3mjAgZHjlREbA36x00v3Y0bfKraY7iu4ehXB1bg9YV_&_nc_ohc=pmszxsmSmUEQ7kNvwFVmqD5&_nc_oc=AdrLeQfl4Ol_ZC77Zt2ipwKR9yFUIdPZ4Mtnwf1GYfDaQbrtS6pvFJQ1GOdS--zrpXQ&_nc_zt=23&_nc_ht=scontent.fmnl44-1.fna&_nc_gid=1P7i5vcXZK8KXlJO53Ou5w&_nc_ss=7b2a8&oh=00_AQFeYBlj34HERla_0UWASQupaIVQNZVjOIiO4DZpy574Pg&oe=6A846D5A",
    skills: ["Brand Guidelines", "Typography Systems", "Marketing Collateral", "Adobe Photoshop", "Canva"],
    link: "https://web.facebook.com/share/p/18fpp4abvp/"
  },
  {
    id: "rasa-30-years-poster",
    title: "RASA Surveying 30 Years Anniversary Poster",
    category: "graphic-design",
    client: "RASA Surveying",
    year: "2025",
    description: "A promotional poster for RASA Surveying's 30 years of excellence in surveying and mapping services.",
    image: "https://scontent.fmnl44-1.fna.fbcdn.net/v/t39.30808-6/500231460_747477697608339_6136088464709203079_n.jpg?stp=dst-jpg_tt6&cstp=mx1000x1000&ctp=s1000x1000&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGyaaoHHizCLtcAQHqxbadu8u7nS4dnMEvy7udLh2cwS2FS32HHESZ6CJ1R63pE-YTdwuC83Xy08ptBCO8CB08C&_nc_ohc=3PCtVrixkEoQ7kNvwFwpJ0x&_nc_oc=AdpK3_n9olmoAJJT9cVlHmxHuqE7WpfawgHyJrfnicNibxfKpgDn-jxJYDOIQuljVd8&_nc_zt=23&_nc_ht=scontent.fmnl44-1.fna&_nc_gid=77dKh_wRJlI_GbToL5Jowg&_nc_ss=7b2a8&oh=00_AQEcue3CVOX-8ZMxg7IS_NncYZklyXWF4OoWmHb6SOFhcg&oe=6A8486C4",
    skills: ["Brand Guidelines", "Typography Systems", "Marketing Collateral", "Adobe Photoshop", "Canva"],
    link: "https://web.facebook.com/share/p/19KAn1aEGJ/"
  },
  {
    id: "rasa-award-poster",
    title: "RASA Surveying Elite PerformanceAward Winning Poster",
    category: "graphic-design",
    client: "RASA Surveying",
    year: "2025",
    description: "A celebratory poster for RASA Surveying's winning Elite Performance Award from Hi-Target China.",
    image: "https://scontent.fmnl44-1.fna.fbcdn.net/v/t39.30808-6/487190880_704875265201916_5698880384950281951_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=102&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEPqjo1egyaSW_sHeMuBCJm7AwmQ9MohsnsDCZD0yiGych5wB2-vEc0F4XmoF0EEo-RihE531p-XhXD8C5PPbbC&_nc_ohc=nYBdjeTkBWEQ7kNvwGyEhQS&_nc_oc=AdrBJcyhlBxRehDVojuyXSfyTVfCSsNJlFHjfvXjEhLPkaibQEFiKZRCb2oW-ocuvBM&_nc_zt=23&_nc_ht=scontent.fmnl44-1.fna&_nc_gid=RG9VM5btq5e27j57NWB7hw&_nc_ss=7b2a8&oh=00_AQFvJbV1HWdqtIs9vBjrJi3imv0wzmYITHhA8w9DG6EgoQ&oe=6A849583",
    skills: ["Brand Guidelines", "Typography Systems", "Marketing Collateral", "Adobe Photoshop", "Canva"],
    link: "https://web.facebook.com/share/p/197sZ97ukS/"
  },
  {
    id: "rasa-satlab-apus-poster",
    title: "RASA Surveying Satlab Apus-MX UAV LiDAR Poster",
    category: "graphic-design",
    client: "RASA Surveying",
    year: "2025",
    description: "A promotional poster for RASA Surveying's Satlab Apus-MX UAV LiDAR technology.",
    image: "https://scontent.fmnl44-1.fna.fbcdn.net/v/t39.30808-6/487383318_707296051626504_278003261455238723_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1080&ctp=s1080x1080&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEqQB_eQysa3bRRp-o4LGRWXr1-YjmgU8levX5iOaBTydPwAjMd_1q3KJACqq1dZMj9g5MnzKpq5O-riMFMJMKQ&_nc_ohc=SUKYqNu9KGsQ7kNvwGswq0R&_nc_oc=AdqyTTUk-kHGKjhTb7SfK_JLy6_FWwjryCpGeKOkUkzpYvnuEMNdkCD3KhfBeZw9ePo&_nc_zt=23&_nc_ht=scontent.fmnl44-1.fna&_nc_gid=g8DmBnYnvGRboFK1jhn_xw&_nc_ss=7b2a8&oh=00_AQFp9pHGMRZMFBmMb6UndWrr9iEIwXglwhtvfyiBg9XdOg&oe=6A8483A7",
    skills: ["Brand Guidelines", "Typography Systems", "Marketing Collateral", "Adobe Photoshop", "Canva"],
    link: "https://web.facebook.com/rasasurvey/posts/pfbid02tEDwXf371AqjHfnJo3ydXtqn34CKbCBqbY6rHHXGNzaKULW6CRRtcXhWW92SFpLzl"
  },
  {
    id: "au-cl-packaging-poster",
    title: "C&L Packaging: Seafood Packaging Design Poster",
    category: "graphic-design",
    client: "Atomic Ube Media and Consulting Group",
    year: "2026",
    description: "A promotional poster of C&L Packaging's innovative seafood packaging.",
    image: "https://scontent.fmnl44-1.fna.fbcdn.net/v/t39.30808-6/714840149_122213718902325771_8420145131514380387_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1350&ctp=s1080x1350&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeEu33FEBeWE7Z0mNgFbCWav9Z6_xlSJgg_1nr_GVImCD9mlBZNrNCgpRtc4f0QjBueilk-wT54RK1eLMCCXSEHI&_nc_ohc=b2M65BUKE3IQ7kNvwEc4TGA&_nc_oc=AdpOjj7YqQc2sqXyvZwMENJg8DGHzEVEKZmH8ZUgIjfad4um8axZBIMmMjSQbFL2yR0&_nc_zt=23&_nc_ht=scontent.fmnl44-1.fna&_nc_gid=guZEjXxEO_cfuCcOTnCTQQ&_nc_ss=7b2a8&oh=00_AQF4XP8XIRCHTPhbrZYesc2P8gmn4QOh6z9a1XbcGX6AgQ&oe=6A849F72",
    skills: ["Brand Guidelines", "Typography Systems", "Marketing Collateral", "Adobe Photoshop", "Canva"],
    link: "https://web.facebook.com/CLInternationalPackagingCorp/posts/pfbid022pmZW4JSSVg79epcH9PBPYJ6nUpJmaNx3ifd5YygHm6zoXioDRX6fDjzUo9YiwBAl"
  },
  {
    id: "au-cl-packaging-options-poster",
    title: "C&L Packaging: Packaging Solutions Poster",
    category: "graphic-design",
    client: "Atomic Ube Media and Consulting Group",
    year: "2026",
    description: "A promotional poster of C&L Packaging's innovative packaging solutions.",
    image: "https://scontent.fmnl44-1.fna.fbcdn.net/v/t39.30808-6/710651658_122213720120325771_2861619518310646099_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1350&ctp=s1080x1350&_nc_cat=105&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHEJWdsFj5fSsZ3-2lxr2EL9GZOfys45QH0Zk5_KzjlAeeOqtChh2cX-f7vsBSc9t-pcaD2nIsI6DaE5kt0heKv&_nc_ohc=9v1dV7i7rg8Q7kNvwFFNtix&_nc_oc=Ado2Hfg18nMc5pBYhA9FjTUQVf4VRN7-Y3fq3s0EaoecveiSZrap1mjE91SZLZw5cOA&_nc_zt=23&_nc_ht=scontent.fmnl44-1.fna&_nc_gid=PGuAj3gPUJqTbNkWRfiZLQ&_nc_ss=7b2a8&oh=00_AQEi-4BqlxqeVE9-o6UUIaztJnQ0yKsGP1KQO8xOy87_sA&oe=6A8470A5",
    skills: ["Brand Guidelines", "Typography Systems", "Marketing Collateral", "Adobe Photoshop", "Canva"],
    link: "https://web.facebook.com/share/p/18xdCUhoGS/"
  },
  {
    id: "au-cl-packaging-options-carousel",
    title: "C&L Packaging: Packaging Solutions Carousel",
    category: "graphic-design",
    client: "Atomic Ube Media and Consulting Group",
    year: "2026",
    description: "An educational carousel of C&L Packaging's innovative packaging solutions.",
    image: "https://scontent.fmnl44-1.fna.fbcdn.net/v/t39.30808-6/685103572_122210131436325771_463658687805116645_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1350&ctp=s1080x1350&_nc_cat=101&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGBePR34SmO32GQ11QxTG2aK0j9YGiWvOkrSP1gaJa86aNwsojAu0cbANMI-vDWtuWLMKY45Dov9t2V7jqDGfrA&_nc_ohc=0bH1gAKgYRYQ7kNvwG53DOh&_nc_oc=AdqplMLjsfqju7TetLGYjo6dcAlfuHMOZoWvp_vRXJeTQYjwTAZUE3l5yETwq2dYris&_nc_zt=23&_nc_ht=scontent.fmnl44-1.fna&_nc_gid=4s-0T_qRzVdiLfsNALUyTw&_nc_ss=7b2a8&oh=00_AQERpS-IAT0jZLy5XTfXYMnlyQ1OTSx95xFNRd7seGOIZg&oe=6A847C31",
    skills: ["Brand Guidelines", "Typography Systems", "Marketing Collateral", "Adobe Photoshop", "Canva"],
    link: "https://web.facebook.com/share/p/1FSxpiuNra/"
  },
  {
    id: "au-ihof-brands-carousel",
    title: "Imperial House of Furniture: Featured Brands Carousel",
    category: "graphic-design",
    client: "Atomic Ube Media and Consulting Group",
    year: "2026",
    description: "A carousel of featured international brands of Imperial House of Furniture.",
    image: "https://instagram.fmnl44-1.fna.fbcdn.net/v/t39.30808-6/676653400_1446119850860159_7170257358253917909_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=104&_nc_map=urlgen_bucketless&ig_cache_key=Mzg4MDgzOTM3MTcyNDc3NjY1Ng%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=_j008n3Ja6cQ7kNvwF3XVEQ&_nc_oc=AdpgKLxiSqSBQUgvwUewa_LrgfAuC3zMrNd_4qFNMQj4cmVPXxCsZ2Gbgrzpy1NyAlY&_nc_ad=z-m&_nc_cid=5917&_nc_zt=23&_nc_ht=instagram.fmnl44-1.fna&_nc_gid=eUozFjHH204fwW8gWWdoCw&_nc_ss=7a22e&oh=00_AQFq3DN9bz5TLkW_oyqr7tQmdBlUnYkmshsJQsLVRyka2g&oe=6A84D458",
    skills: ["Brand Guidelines", "Typography Systems", "Marketing Collateral", "Adobe Photoshop", "Canva"],
    link: "https://www.instagram.com/p/DXbgt3yAa4b/?utm_source=ig_web_copy_link&igsh=NTc4MTIwNjQ2YQ=="
  },
  {
    id: "au-ihof-texture-guide-carousel",
    title: "Imperial House of Furniture: Texture Guide Carousel",
    category: "graphic-design",
    client: "Atomic Ube Media and Consulting Group",
    year: "2026",
    description: "An informative carousel showcasing the diverse texture options available for the furnitures at the Imperial House of Furniture.",
    image: "https://instagram.fmnl44-1.fna.fbcdn.net/v/t39.30808-6/746824103_1526551559483654_5883834635262538261_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&_nc_map=urlgen_bucketless&ig_cache_key=Mzk1ODM4OTY2MjE3NTMyMDcxMQ%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=cQU9XRHZ1lgQ7kNvwFji4je&_nc_oc=Adp9MIPqilSoW8nH6GpXgUDYTATOCvbBTlcsoZ-CNeTepOMwoE51KfwQRRYM71SXF44&_nc_ad=z-m&_nc_cid=5917&_nc_zt=23&_nc_ht=instagram.fmnl44-1.fna&_nc_gid=M3olqpTJmiVit3bExDzhCQ&_nc_ss=7a22e&oh=00_AQH67feniNDPkPzA25DrTROm6KUbiZebIF8wRw89UCSeug&oe=6A84C0F9",
    skills: ["Brand Guidelines", "Typography Systems", "Marketing Collateral", "Adobe Photoshop", "Canva"],
    link: "https://www.instagram.com/p/DbvBnLuCfH8/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: "au-techwiz-new-arrivals-poster",
    title: "TechWiz PH: New Arrivals Poster",
    category: "graphic-design",
    client: "Atomic Ube Media and Consulting Group",
    year: "2026",
    description: "A bento-style poster showcasing the new arrivals of TechWiz PH, highlighting the latest tech gadgets and accessories.",
    image: "https://instagram.fmnl44-1.fna.fbcdn.net/v/t39.30808-6/656558237_1480289590556677_7443039961330016170_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=103&_nc_map=urlgen_bucketless&ig_cache_key=Mzg2MjAyNDg0MzQ2NjYwNDg4Mg%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=o7_ZW-5wktgQ7kNvwEVWSi5&_nc_oc=AdpK-SU4K44ftkmsKlzDayDWLJNkGdgPAQyLiyAwCYF4ks1WKbSrVlPRMLxOOU4rBBI&_nc_ad=z-m&_nc_cid=5917&_nc_zt=23&_nc_ht=instagram.fmnl44-1.fna&_nc_gid=AmrSIlxPqdZwMIXBoO4szg&_nc_ss=7a22e&oh=00_AQGH2Z1wikE2XfJ2_FS7VU5My6GhULGbM37zeplHEFeusQ&oe=6A84CE19",
    skills: ["Brand Guidelines", "Typography Systems", "Marketing Collateral", "Adobe Photoshop", "Canva"],
    link: "https://www.instagram.com/p/DWYqyUUjyMz/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: "au-techwiz-travel-essentials-poster",
    title: "TechWiz PH: Travel Essentials Poster",
    category: "graphic-design",
    client: "Atomic Ube Media and Consulting Group",
    year: "2026",
    description: "A travel guide poster highlighting essential tech gadgets and accessories for travelers, curated by TechWiz PH.",
    image: "https://instagram.fmnl44-1.fna.fbcdn.net/v/t39.30808-6/668701132_1495446509040985_6217094720554919607_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=108&_nc_map=urlgen_bucketless&ig_cache_key=Mzg3NTA3MDU5NzEyMjU4MjU5Mw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=hazShrYwMbUQ7kNvwHKAcF6&_nc_oc=AdrDcVnFQKuvg9rT7T1J7NdjRzlPAqkuLgxfTd0oaKQ4ACJ1mkprGHS_dQ-CoVM7JmE&_nc_ad=z-m&_nc_cid=5917&_nc_zt=23&_nc_ht=instagram.fmnl44-1.fna&_nc_gid=AmrSIlxPqdZwMIXBoO4szg&_nc_ss=7a22e&oh=00_AQGm99tKRqysAY87fBFgepVnRJSV0mhums5gpnHcFQQotw&oe=6A84C4EC",
    skills: ["Brand Guidelines", "Typography Systems", "Marketing Collateral", "Adobe Photoshop", "Canva"],
    link: "https://www.instagram.com/p/DXHBC90jajd/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: "au-hiring-poster",
    title: "Atomic Ube: Hiring Poster",
    category: "graphic-design",
    client: "Atomic Ube Media and Consulting Group",
    year: "2026",
    description: "A hiring poster for Atomic Ube Media and Consulting Group, showcasing opportunities for tech professionals.",
    image: "https://scontent.fmnl44-1.fna.fbcdn.net/v/t39.30808-6/688725710_1381516337330816_7998289234611914422_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1350&ctp=s1080x1350&_nc_cat=107&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeHZTtDoXVi8nvDcUpR7vjRslwFIFtkBdkyXAUgW2QF2TA1BgVeDSEDFWY6XOp9AgLgzUpBR5Z2kvUgf7XX2t5Nf&_nc_ohc=o2aYEAr_2ccQ7kNvwFmmDRy&_nc_oc=AdoLuQL3sXeoKhpcfiz78aVyXELfvFfUeBq7rO4T63OPhvku3kLWe3rs3XvN3vHqslI&_nc_zt=23&_nc_ht=scontent.fmnl44-1.fna&_nc_gid=vZktqy0KY9gBnhkFH8SznA&_nc_ss=7b2a8&oh=00_AQHoI5kfk3BInplJrJYS9zcDiHnCH-abBUt7GpbfusMnbw&oe=6A84C505",
    skills: ["Brand Guidelines", "Typography Systems", "Marketing Collateral", "Adobe Photoshop", "Canva"],
    link: "https://web.facebook.com/share/p/1Dc2JYqoun/"
  },

  // Generative AI & Prompting
  {
    id: "au-veraco-jewelry-carousel-guide",
    title: "Veraco Jewelry: Gold Cleaning Guide",
    category: "generative-ai",
    client: "Atomic Ube Media and Consulting Group",
    year: "2026",
    description: "Hyper-realistic generative AI carousel guide for Veraco Jewelry, demonstrating the proper cleaning and maintenance of gold jewelry using Google Gemini and ChatGPT",
    image: "https://instagram.fmnl44-1.fna.fbcdn.net/v/t39.30808-6/698784018_1364764012340451_7154990945565771165_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&_nc_map=urlgen_bucketless&ig_cache_key=MzkwODkyMzY4NjE0ODc2MzYwNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=FluXqdc4N_UQ7kNvwHLKh1D&_nc_oc=AdrOuS2TJm7GJvDBW7Ppeo4yL0egVVSQhMGoo0z0qmttxiyr9nfnJEapia-BFPlSchs&_nc_ad=z-m&_nc_cid=5917&_nc_zt=23&_nc_ht=instagram.fmnl44-1.fna&_nc_gid=d4kk9p87YpiwH0ldOTNFuA&_nc_ss=7a22e&oh=00_AQG5PbtIxxXnic8T0dRNB9FeHkXhNRKLvwrp6wj2NAPzGg&oe=6A84BBD1",
    skills: ["Google Gemini", "ChatGPT", "Reference Image Integration", "Photorealistic Textures"],
    link: "https://www.instagram.com/p/DY_SWZLgSJc/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: "au-ihof-showroom-poster",
    title: "Imperial House of Furniture: Showroom Poster",
    category: "generative-ai",
    client: "Atomic Ube Media and Consulting Group",
    year: "2026",
    description: "Hyper-realistic generative AI poster for Imperial House of Furniture, showcasing the furniture's aesthetic and product features using Google Gemini",
    image: "https://instagram.fmnl44-1.fna.fbcdn.net/v/t39.30808-6/746807342_1521494979989312_86648400550246514_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=109&_nc_map=urlgen_bucketless&ig_cache_key=Mzk0MDk5NDgwMzc5NzQyNTc3NA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=DIlt2z9ZONQQ7kNvwGwd9MG&_nc_oc=AdplUGcR7fc-eBcixFee_a1KBXR_sh_PAAkqOQGgaVCXDZa_HB1B5VdGueSi6B1TX5Q&_nc_ad=z-m&_nc_cid=5917&_nc_zt=23&_nc_ht=instagram.fmnl44-1.fna&_nc_gid=IZjEHdJCZrAjS5JN8WRJPg&_nc_ss=7a22e&oh=00_AQFN7rqjihS_hEqRg8vU7yQC1A2_w3tSUiJs7jmxhMQb3w&oe=6A84DBBF",
    skills: ["Google Gemini", "Reference Image Integration", "Photorealistic Textures"],
    link: "https://www.instagram.com/p/DaxOeTOAX5u/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },
  {
    id: "au-ihof-sofa-styling-guide",
    title: "Imperial House of Furniture: Sofa Styling Guide",
    category: "generative-ai",
    client: "Atomic Ube Media and Consulting Group",
    year: "2026",
    description: "Generative AI carousel guide for Imperial House of Furniture, demonstrating various sofa styling options and interior design inspirations using Google Gemini.",
    image: "https://instagram.fmnl44-1.fna.fbcdn.net/v/t39.30808-6/749096498_1526548586150618_8166907564190312122_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=100&_nc_map=urlgen_bucketless&ig_cache_key=Mzk1MzMxNjA0MzU5MDI5MTU5OA%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=Yx1c11ZLSk0Q7kNvwGgREwS&_nc_oc=AdqBYFcUctZNR0ToGyamQez-cbLqZyyhqlW9fOqNHANNz13J8S1OE7rBfAoeVXkhpPI&_nc_ad=z-m&_nc_cid=5917&_nc_zt=23&_nc_ht=instagram.fmnl44-1.fna&_nc_gid=59B92WRAL2D0L_cV_36YXg&_nc_ss=7a22e&oh=00_AQGuaLiDUcE34HnZw-ZrU2UZu5tQM6yF0mPJJOXVzEwHug&oe=6A84BC7F",
    skills: ["Google Gemini", "Reference Image Integration", "Photorealistic Textures"],
    link: "https://www.instagram.com/p/DbdAALXDX0Z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
  },

  // Social Media Management & Content Strategy
  {
    id: "tecphil-socmed-case-study",
    title: "Tecphil: Social Media Management & Content Strategy",
    category: "social-media",
    client: "TecPhil Geosolutions Co.",
    year: "2025",
    description: "Comprehensive social media strategy and daily content execution across relevant platforms.",
    image: "https://scontent.fmnl44-1.fna.fbcdn.net/v/t39.30808-6/548405626_1328239202647670_5121934897177403968_n.jpg?stp=dst-jpg_tt6&cstp=mx851x315&ctp=s851x315&_nc_cat=103&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeFXgIDTP6PZsYgNZwJQkEESLAhLI-bX6dQsCEsj5tfp1LGd0Z3rwMxgx06UE_rWNaGpAAasm8Zxe16C7gR_a_9a&_nc_ohc=skz0ZnVJcmEQ7kNvwGxQmTZ&_nc_oc=AdrROU1cZdfAkjSbMx3oY0WLeISRoUf8YOLWHti5zAvw8RqDZIo69iPbdWWLJlJq9xE&_nc_zt=23&_nc_ht=scontent.fmnl44-1.fna&_nc_gid=n3HzQQxwaLg4bp1md6UhqA&_nc_ss=7b2a8&oh=00_AQGRP71MB3CU4pP2bsyk2ZKcPkuhoIzMuTi5E3pdBB49qg&oe=6A86BD5C",
    skills: ["Social Media Content Strategy", "Engagement Tactics", "Analytics & Retargeting", "Community Management", "Visual Grid Planning"],
    caseStudyId: "tecphil-socmed-posts"
  },

  // UI/UX Design
  /*{
    id: "pulse-fintech",
    title: "Pulse: Crypto Assets Dashboard & App",
    category: "ui-ux",
    client: "Pulse Finance",
    year: "2026",
    description: "A dark-mode high-fidelity cryptocurrency portfolio manager featuring real-time charting structures, atomic design systems, and seamless multi-sig authorization flows.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=900&q=80",
    skills: ["Figma Suite", "Dark Mode UI", "Financial Charts", "Component Architecture", "Design Tokens"],
    link: "https://figma.com",
    caseStudyId: "pulse-fintech"
  },
  {
    id: "helios-wellness",
    title: "Helios: Chronobiological Habit Tracker",
    category: "ui-ux",
    client: "Helios Wellness Co.",
    year: "2025",
    description: "Mobile user interface designed for alignment with local solar cycles. Includes animated fluid state feedback, customized ring progress metrics, and warm atmospheric gradients.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=900&q=80",
    skills: ["iOS Guidelines", "Haptic Mapping", "Neumorphism Details", "Micro-Interactions"],
    link: "https://figma.com"
  }, */ 

  // Artworks
  {
    id: "golden-lady",
    title: "Golden Lady",
    category: "artwork",
    client: "Self-initiated Artwork",
    year: "2018",
    description: "A portrait of a woman with golden halo and wings, symbolizing divinity and grace. The artwork is created using digital painting techniques and showcases a blend of realism and fantasy.",
    image: "https://i.ibb.co/N2TnwxXW/75492509-1211345135718863-7993286643001851904-n.jpg",
    skills: ["Adobe Photoshop", "Digital Composition"]
  },
  {
    id: "ben-and-ben-wallpaper-art",
    title: "Ben&Ben: Wallpaper Art",
    category: "artwork",
    client: "Self-initiated Artwork",
    year: "2020",
    description: "A digital wallpaper art of the music group Ben&Ben, featuring anime-style pen strokes and vibrant colors of the theme of their album 'Limasawa Street'.",
    image: "https://i.ibb.co/M58Qgm9s/Ben-Ben.png",
    skills: ["Adobe Photoshop", "Autodesk Sketchbook", "Digital Composition"]
  },
  {
    id: "afterglow-sky",
    title: "Afterglow Sky Digital Art",
    category: "artwork",
    client: "Self-initiated Artwork",
    year: "2022",
    description: "A 10-minute fast sketch digital artwork capturing the serene beauty of the sky during the afterglow period, showcasing a blend of warm and dreamy tones to create a tranquil atmosphere.",
    image: "https://i.ibb.co/r2MfgYRp/280459659-1896983327155037-6082691992108633879-n.jpg",
    skills: ["Clip Studio Paint", "Digital Composition"]
  },
  {
    id: "taylor-swift-lover-fan-art",
    title: "Taylor Swift Lover Fan Art",
    category: "artwork",
    client: "Self-initiated Artwork",
    year: "2020",
    description: "A fan art of Taylor Swift's 'Lover' concept photo, created using digital painting techniques.",
    image: "https://i.ibb.co/LzCLXCWc/80310940-1235887406597969-8692886826395893760-n.jpg",
    skills: ["Autodesk Sketchbook", "Digital Composition"]
  },
  {
    id: "brendon-urie-fan-art",
    title: "Brendon Urie Fan Art",
    category: "artwork",
    client: "Self-initiated Artwork",
    year: "2019",
    description: "A fan art of Brendon Urie using combined charcoal and graphite pencil.",
    image: "https://i.ibb.co/7Jqs2tgC/78661611-1231279490392094-3486424970790174720-n.jpg",
    skills: ["Portrait Sketching", "Traditional Art"]
  },
  {
    id: "leigh-and-alexa-portrait",
    title: "Leigh and Alexa Portrait",
    category: "artwork",
    client: "Self-initiated Artwork",
    year: "2019",
    description: "A portrait of Leigh and Alexa using graphite pencil on A4 vellum board.",
    image: "https://i.ibb.co/d0BDB9Rb/82081015-1253405111512865-7758955864442011648-n.jpg",
    skills: ["Portrait Sketching", "Traditional Art"]
  },

  // Video Editing
  {
    id: "au-zeo-reel-1",
    title: "Zeotimber: Material Textures & Finishes",
    category: "video-edit",
    client: "Atomic Ube Media and Consulting Group",
    year: "2026",
    description: "Explanation of Zeotimber's material textures and finishes, showcasing the unique qualities of their products through a visually engaging video reel.",
    image: "https://scontent.fmnl44-1.fna.fbcdn.net/v/t15.5256-10/679122371_1648649109707962_7828262047038811686_n.jpg?stp=c0.5000x0.5000f_dst-webp_e15_p268x490_q70_tt1_u&efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV91cmwifQ&_nc_eui2=AeHkgf1Q2AnLFNBHY5qmTH3BbxsXnaoYFdxvGxedqhgV3OCXEATr4-6ye07RPRb1W-CUsfhBbxmE9lXTKTXRwGMk&_nc_cid=5917&_nc_ad=z-m&_nc_rml=0&_nc_ht=scontent.fmnl44-1.fna&_nc_cat=106&_nc_ohc=YI0wPGm-wxAQ7kNvwGQbz2c&_nc_gid=oQO2GlxnwhSsb3IVZvK_hQ&ccb=1-7&_nc_sid=4ffc6f&oh=00_AQEbIRgvldEx1naZMYTHucQhJieU2QEH_sK2NZv6SoyJ6A&oe=6A86A92A&_nc_eh=2%2Ccd19a46e35b3f3c0c06ebefcadff41da%2CAW0SYPp-ECgyfGMf1ZXzHjOwPClRfXs814YkmYygth9R9RF70FFmUJxWLC4-8Ydq6Fc",
    skills: ["CapCut", "Engaging Video Format", "Educational Content", "Visual Storytelling"],
    videoUrl: "https://web.facebook.com/share/r/1cTXvDfnxS/"
  },
  {
    id: "au-zeo-reel-2",
    title: "Zeotimber: Outdoor WPC Advantages",
    category: "video-edit",
    client: "Atomic Ube Media and Consulting Group",
    year: "2026",
    description: "Educational video reel highlighting the advantages of Zeotimber's outdoor WPC products, emphasizing durability, aesthetics, and environmental benefits.",
    image: "https://scontent.fmnl44-1.fna.fbcdn.net/v/t15.5256-10/768999915_27691415767147242_6846533181401841647_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1920&ctp=s960x960&_nc_cat=103&ccb=1-7&_nc_sid=d2b52d&_nc_eui2=AeHdAOTavGsfpBHxE0F3AYWwpPgD2k6PxjSk-APaTo_GNBPhvSnOqP8k4ylP3Zoy1p23j3kp6ettWWzdH4PxkQAo&_nc_ohc=_22xJpyDDnoQ7kNvwHu5DBp&_nc_oc=AdrP3uf-VUacdrtFmAnLCZr-s9pO_jwQOAA4itsArjn4zgo3Z6R0ymtsGIqNxS7KxCE&_nc_zt=23&_nc_ht=scontent.fmnl44-1.fna&_nc_gid=HSngLqeJkuxOHk9YOGOJEg&_nc_ss=7b2a8&oh=00_AQEKzOMXuX6XApP62BXXQ_R5RzUmQ9pLdsYmwpBinU4E4g&oe=6A86A556",
    skills: ["CapCut", "Engaging Video Format", "Educational Content", "Visual Storytelling"],
    videoUrl: "https://web.facebook.com/reel/1290847814114238"
  },
  {
    id: "au-it-reel-1",
    title: "IT Luggage: Circulator Luggage Bag",
    category: "video-edit",
    client: "Atomic Ube Media and Consulting Group",
    year: "2026",
    description: "A fast-paced video reel showcasing the features and benefits of IT Luggage's circulator luggage bag, synchronized with a dynamic soundtrack.",
    image: "https://scontent.fmnl44-1.fna.fbcdn.net/v/t15.5256-10/715405181_1825457248828042_4512795546136913173_n.jpg?stp=c0.5000x0.5000f_dst-webp_e15_p288x530_q70_tt1_u&efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV91cmwifQ&_nc_eui2=AeE-SKoMiJYRN38ePiVNfsZgtNsgfhIXhL202yB-EheEvftxDzsf7mEJAxAftCgHA6mnO_CuFnKqbdxGhCYIpmu9&_nc_cid=5917&_nc_ad=z-m&_nc_rml=0&_nc_ht=scontent.fmnl44-1.fna&_nc_cat=104&_nc_ohc=iixDd3AwPkEQ7kNvwE4EsPk&_nc_gid=b8JMbLNriJiNAE5H-uNsDA&ccb=1-7&_nc_sid=4ffc6f&oh=00_AQHU0ps0C9tuSrDCz9DDZ-FhC4qrZoynfpS3Lv-INZJlwA&oe=6A869C27&_nc_eh=2%2Ccd19a46e35b3f3c0c06ebefcadff41da%2CAW1xuEPbmtcpIeAjOwefixy_0Au5xl4VmBULdD1Khr1DjFohxc3ETqCPSjo8mItCryQ",
    skills: ["Adobe Premiere Pro", "Fast-Paced", "Trending Music", "Product Showcase"],
    videoUrl: "https://web.facebook.com/reel/1031665752875043"
  },
  {
    id: "rasa-reel-1",
    title: "RASA Surveying: RSI at GeoConnect Asia 2025",
    category: "video-edit",
    client: "RASA Surveying",
    year: "2025",
    description: "A documentary-style video reel capturing RASA Surveying's participation at GeoConnect Asia 2025, highlighting their innovative surveying solutions and industry presence.",
    image: "https://scontent.fmnl44-1.fna.fbcdn.net/v/t15.5256-10/491680056_1980295609165096_8957058515404015560_n.jpg?stp=dst-webp_e15_q70_s890x1585_tt1_u&efg=eyJ1cmxnZW4iOiJ1cmxnZW5fZnJvbV91cmwifQ&_nc_eui2=AeGCFhn1AL5iSUfC0u3OkZpfNMaPpr0PP580xo-mvQ8_n8E0tpYyNWld5WA4oViDqb1pv5q7D6CyEW4iXhQtja45&_nc_cid=5917&_nc_ad=z-m&_nc_rml=0&_nc_ht=scontent.fmnl44-1.fna&_nc_cat=108&_nc_ohc=jpubuoTDQMsQ7kNvwHZJgcV&_nc_gid=Y59ljhASfv3ik84cAhLnQw&ccb=1-7&_nc_sid=5fad0e&oh=00_AQHeNYoEO_ZcfklUaQMzbzX7ipwk_fqzK0fgPJbsuEkK8g&oe=6A86D1D2&_nc_eh=2%2Ccd19a46e35b3f3c0c06ebefcadff41da%2CAW2YwDbOwKz7UnBdo_r1NF6GxWusNXeb44C87LiM40SAOrivOp1wqtuQ4qr4_FIZu-g",
    skills: ["Adobe Premiere Pro", "Company Profile", "Event Coverage", "Industry Showcase"],
    videoUrl: "https://www.facebook.com/share/v/1Dwgr57GBf/"
  },
  {
    id: "rasa-reel-2",
    title: "RASA Surveying: Surveying is an Art",
    category: "video-edit",
    client: "RASA Surveying",
    year: "2025",
    description: "A combined animated and live-action video showcasing the artistry and precision of surveying, emphasizing the company's expertise and innovative approach in the field.",
    image: "https://scontent.fmnl44-1.fna.fbcdn.net/v/t15.5256-10/485094878_2007036283153049_730561998846584244_n.jpg?stp=dst-jpg_tt6&cstp=mx1920x1080&ctp=s960x960&_nc_cat=106&ccb=1-7&_nc_sid=d2b52d&_nc_eui2=AeGOBWlWjpPUc2oSEzwzJPaLSqAMxGVzeuRKoAzEZXN65Jh_EVJLqB8sBinnFx1qnoaShNb1DsXbu4KOsQvFH7_V&_nc_ohc=WG8_tuFe3o0Q7kNvwEMYJOY&_nc_oc=Adqkw2NBCk8kX-2lZQqOHYrQbjghOXPpH2-OS4EWwL44oBX94R1IP8j1fZoQbx2HaCs&_nc_zt=23&_nc_ht=scontent.fmnl44-1.fna&_nc_gid=2nk4jXCy_p_LZjjh47AU6w&_nc_ss=7b2a8&oh=00_AQE7vO7LRAe8Fj0sIphCZZbCned7ZaqEIIic18iNYkiFnw&oe=6A86C7E5",
    skills: ["Adobe Premiere Pro", "Adobe After Effects", "2D Motion Graphics", "Contemporary Animation Style", "Visual Storytelling"],
    videoUrl: "https://web.facebook.com/reel/3946377522245036"
  },
  {
    id: "rasa-reel-3",
    title: "RASA Surveying: Partnership with UP Department of Geodetic Engineering",
    category: "video-edit",
    client: "RASA Surveying",
    year: "2025",
    description: "A video reel highlighting RASA Surveying's partnership with the University of the Philippines Department of Geodetic Engineering, documenting the donation of equipment for educational initiatives.",
    image: "https://scontent.fmnl44-1.fna.fbcdn.net/v/t15.5256-10/495711082_704066065537769_7723274179128526302_n.jpg?stp=dst-jpg_tt6&cstp=mx1920x1080&ctp=s960x960&_nc_cat=103&ccb=1-7&_nc_sid=5fad0e&_nc_eui2=AeGWAvKzhc_6dvOw7uSYpHmzlpmZli7313-WmZmWLvfXf1VpSdU2k8t_wUMr09PM1zB_-oPhHWn3wM8QcC0fGFh3&_nc_ohc=E_C3vB07w4oQ7kNvwH__JZn&_nc_oc=Adqq2_KeVPlFup1dRfvye7Jhcc5kL4-ILMfNH3ow8bA8yFbBB5tKPYIcsX4IDM9b1Ds&_nc_zt=23&_nc_ht=scontent.fmnl44-1.fna&_nc_gid=i8j649ZnY3lemTRhGuoAeQ&_nc_ss=7b2a8&oh=00_AQEXtnLxOg1VPE7X5VUYEQHpi_Z9wCagZu4EO8ZAngnDMQ&oe=6A86B425",
    skills: ["Adobe Premiere Pro", "2D Motion Graphics", "Contemporary Animation Style", "Visual Storytelling", "Video Production"],
    videoUrl: "https://web.facebook.com/reel/1093171262620765"
  },
  {
    id: "rasa-reel-4",
    title: "RASA Surveying: Hands-on Exposure Training of Bathymetric Surveying for the UP and SLU Interns",
    category: "video-edit",
    client: "RASA Surveying",
    year: "2025",
    description: "A video reel documenting the hands-on exposure training for bathymetric surveying conducted by RASA Surveying for interns from the University of the Philippines and Saint Louis University, showcasing practical learning experiences.",
    image: "https://scontent.fmnl44-1.fna.fbcdn.net/v/t15.5256-10/515931542_1075160551384512_5365581923802775693_n.jpg?stp=dst-jpg_tt6&cstp=mx1920x1080&ctp=s960x960&_nc_cat=101&ccb=1-7&_nc_sid=d2b52d&_nc_eui2=AeElQFVipLEbcyDKlG8WxasAmWfBbEGxlACZZ8FsQbGUAGYz0DXWmx1N-e1OtrVl57CPc-PYGS6RJ4adKib8R-u4&_nc_ohc=W3hz6SGDBM8Q7kNvwHE2eNQ&_nc_oc=Adot5j_c1biXToKxxecWKf8Q2arccDGLF3LSatG7KRljkNUvfG-8MsayuJFGMIrYzpo&_nc_zt=23&_nc_ht=scontent.fmnl44-1.fna&_nc_gid=j65ZP9XOXc072ITkTgNUsg&_nc_ss=7b2a8&oh=00_AQFNNsCkaxn5w-p-ag1oYY6LIrav_YOduL6rDK6VsufFqQ&oe=6A86B222",
    skills: ["Adobe Premiere Pro", "Short Documentary", "Interview","Event Coverage", "Visual Storytelling", "Video Production"],
    videoUrl: "https://web.facebook.com/reel/738545572198011"
  },
  {
    id: "rasa-reel-5",
    title: "RASA Surveying: Empowering the Next Generation of Surveyors through Drone Technology Training",
    category: "video-edit",
    client: "RASA Surveying",
    year: "2025",
    description: "A video reel showcasing RASA Surveying's initiative to empower the next generation of surveyors through comprehensive drone technology training, highlighting the practical applications and benefits of drone surveying in modern geospatial practices.",
    image: "https://scontent.fmnl44-1.fna.fbcdn.net/v/t15.5256-10/524792756_1539103054195213_3729413048571226642_n.jpg?stp=dst-jpg_tt6&cstp=mx1440x1080&ctp=s960x960&_nc_cat=107&ccb=1-7&_nc_sid=5fad0e&_nc_eui2=AeH62vsnjlWWyyoaYZVaynlCqQhAfDSypjepCEB8NLKmN-F8a5jhRzTWFfnBVuOipiN1Woz9Dq0zvdaZOd1DuS9_&_nc_ohc=JIYd1x67fYkQ7kNvwFEZR6Q&_nc_oc=Ado9L5wk3TRTh5q8UxFwSLk2upFj2-Vjw28YRSD6DqAEhLrPsK0BcDw1bHFddaCaYRg&_nc_zt=23&_nc_ht=scontent.fmnl44-1.fna&_nc_gid=DowjpnGanr_wXzEkIGinkg&_nc_ss=7b2a8&oh=00_AQHqgo2fdG3fLVYi0CzUdeqIkG-dyUo76Zo4vKdwcWpCWg&oe=6A86D515",
    skills: ["Adobe Premiere Pro", "Short Documentary", "Interview", "Event Coverage", "Visual Storytelling", "Video Production"],
    videoUrl: "https://web.facebook.com/reel/1451300506052807"
  },
  {
    id: "tecphil-reel-1",
    title: "TecPhil: Drone Training Program",
    category: "video-edit",
    client: "TecPhil Geosolutions Co.",
    year: "2025",
    description: "A short promo reel highlighting TecPhil's drone training program, showcasing the hands-on experience and skills development offered to participants.",
    image: "https://scontent.fmnl44-1.fna.fbcdn.net/v/t15.5256-10/641097620_1445340283701687_3596274751448065521_n.jpg?stp=dst-jpg_tt6&cstp=mx360x640&ctp=s360x640&_nc_cat=104&ccb=1-7&_nc_sid=d2b52d&_nc_eui2=AeE_-fOZij79n5a2tgFvLsR_35DMCtrq_VPfkMwK2ur9U68PeEu3KxzcJhBLAkEDIskGgMC3mk3vnz31YIW3q6pL&_nc_ohc=IwNAxWt_OJQQ7kNvwFz5LWC&_nc_oc=Adq5WCUtY8AagUeB_LTDtRLmjiUpAorlF9wKpwVY21GMumccQIGUcfYBbrGJ1ooU3GE&_nc_zt=23&_nc_ht=scontent.fmnl44-1.fna&_nc_gid=b3Yx0xtDvabI55OloN8EWA&_nc_ss=7b2a8&oh=00_AQEA8TeR8gVu8NX2Y1dvyyk8A3XLnhbBxDc9EGCBG_JICw&oe=6A86CA2E",
    skills: ["Adobe Premiere Pro", "Catchy Reel", "Service and Brand Promotion"],
    videoUrl: "https://web.facebook.com/reel/1665091061319088"
  },
  {
    id: "tecphil-reel-2",
    title: "TecPhil: Journey to ISO 9001:2015 Certification",
    category: "video-edit",
    client: "TecPhil Geosolutions Co.",
    year: "2025",
    description: "A short documentary-style reel chronicling TecPhil's journey to achieving ISO 9001:2015 certification, highlighting the company's commitment to quality management and continuous improvement.",
    image: "https://scontent.fmnl44-1.fna.fbcdn.net/v/t15.5256-10/578575425_879594884746717_178766832387331473_n.jpg?stp=dst-jpg_tt6&cstp=mx1920x1080&ctp=s960x960&_nc_cat=107&ccb=1-7&_nc_sid=5fad0e&_nc_eui2=AeHDFrIveTGuHXT6DkSdw_Pt_c31VI9AwkL9zfVUj0DCQseQVrmApmm7GEV8uCB5oXmGmMowJs2uJHLlONBr33AH&_nc_ohc=9t4aIUxoNTsQ7kNvwGQXhvT&_nc_oc=AdqQlK8nXoN03EZQM-LAI5TvIRGUopoXgt3gyLLEievYOEbMw0QVKaKzhmvQ3dMfTkg&_nc_zt=23&_nc_ht=scontent.fmnl44-1.fna&_nc_gid=_pXGapMPprZ0K55RDVQquA&_nc_ss=7b2a8&oh=00_AQF_oLQdVct-B1rKnN5Geh8nimtyTjhr908fdjHUjh9RbQ&oe=6A86AA54",
    skills: ["Canva", "Documentary Style", "Service and Brand Promotion"],
    videoUrl: "https://web.facebook.com/reel/1376158763872106"
  },
  {
    id: "tecphil-reel-3",
    title: "TecPhil: A New Engineer's First GNSS RTK",
    category: "video-edit",
    client: "TecPhil Geosolutions Co.",
    year: "2025",
    description: "An interview-style reel capturing a new engineer's winning the GNSS RTK technology from TecPhil, highlighting the importance of having a new equipment as a starting professional.",
    image: "https://scontent.fmnl44-1.fna.fbcdn.net/v/t15.5256-10/576991068_1587878692178162_1326004141209397987_n.jpg?stp=dst-jpg_tt6&cstp=mx1920x1080&ctp=s960x960&_nc_cat=105&ccb=1-7&_nc_sid=5fad0e&_nc_eui2=AeE84YULjt5JWuqDYcepah6n-kOLldW1Fnf6Q4uV1bUWdz1eX2uqHdp5ULMgYVzh0zC9tV6sJY9BjtS1HtCz_jiL&_nc_ohc=9sGmip4ctuAQ7kNvwF8zd1c&_nc_oc=AdpX-KHeotfUVuPayWwO_JOV5WlRkvF7tpmGHCm1TmH0svr23amm1V3-hxBPI7u1sUk&_nc_zt=23&_nc_ht=scontent.fmnl44-1.fna&_nc_gid=_pXGapMPprZ0K55RDVQquA&_nc_ss=7b2a8&oh=00_AQGY1YIv-LiZs2O2eO83MMk9obK2-llXtkhuK8Qz_XdkpA&oe=6A86D72B",
    skills: ["Adobe Premiere Pro", "Documentary Style", "Service and Brand Promotion"],
    videoUrl: "https://web.facebook.com/reel/2829811554076586"
  },
  {
    id: "tecphil-reel-4",
    title: "TecPhil: Tersus TheDuck USV",
    category: "video-edit",
    client: "TecPhil Geosolutions Co.",
    year: "2025",
    description: "A promotional reel showcasing TecPhil's Tersus TheDuck USV, highlighting its advanced features, capabilities, and applications in surveying and mapping.",
    image: "https://scontent.fmnl44-1.fna.fbcdn.net/v/t15.5256-10/567338939_1788293408715160_4207868186290105658_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x1920&ctp=s960x960&_nc_cat=103&ccb=1-7&_nc_sid=5fad0e&_nc_eui2=AeF9ousKwwn1RZ08jeg2jKxqPa2zEwlV0Mw9rbMTCVXQzPge-k5xIdir6IM1deIHSR1_bqmkEdDnOBDq1R47OE6l&_nc_ohc=KHgo8Vlx7V4Q7kNvwFo1fVP&_nc_oc=AdqrutCdZw9E3KgnDOw80C73TM5DcvrWPAlj_uxV0aYV-semnfWlLDspkUqcscVPJbQ&_nc_zt=23&_nc_ht=scontent.fmnl44-1.fna&_nc_gid=_pXGapMPprZ0K55RDVQquA&_nc_ss=7b2a8&oh=00_AQEECCq8Cbg4P81bHZ32JygjFnUwchFWhKBIiCYnP4d12g&oe=6A86BEBF",
    skills: ["Adobe Premiere Pro", "Documentary Style", "Service and Brand Promotion", "Video Production"],
    videoUrl: "https://web.facebook.com/reel/1886823448847690"
  },
  {
    id: "jayo-vlog-1",
    title: "Jayo's Boken: I Wanna Flex! My Grandmother is Tandang Sora!",
    category: "video-edit",
    client: "Self-initiated Vlog | Jayo the Soul Comedian",
    year: "2021",
    description: "A vlog episode where Jayo humorously explores his grandmother's connection to Tandang Sora along with his Aunt, blending personal storytelling with comedic elements.",
    image: "https://i.ytimg.com/vi/WugBXw3pcJo/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDfk4vgBGi6MtZyZ7jxL8MG7emtxA",
    skills: ["Adobe Premiere Pro", "Adobe After Effects", "Interview Style", "Influencer Content", "Video Production"],
    videoUrl: "https://youtu.be/WugBXw3pcJo?si=p3yg1YqCaQ56i1II"
  },
  {
    id: "jayo-vlog-2",
    title: "Jayo's Boken: ANG BINABAE SA BALETE DRIVE! 😱 & ASIAN COUNTRIES TOUR",
    category: "video-edit",
    client: "Self-initiated Vlog | Jayo the Soul Comedian",
    year: "2021",
    description: "A vlog episode where Jayo humorously explores the mysterious 'Binabae' in Balete Drive along with his friend Sammy who shares his experiences touring various Asian countries, and collecting antiques, while blending personal storytelling with comedic elements.",
    image: "https://i.ytimg.com/an_webp/TMawh378cCk/mqdefault_6s.webp?du=3000&sqp=CO-_g9QG&rs=AOn4CLBBcQs-ho0dvV9w3jOEAMZR-M_HEQ",
    skills: ["Adobe Premiere Pro", "Adobe After Effects", "Interview Style", "Influencer Content", "Video Production"],
    videoUrl: "https://youtu.be/TMawh378cCk?si=IBhKh9O6iVj3L5Ks"
  },
  {
    id: "jayo-vlog-3",
    title: "Jayo's Boken: Tinola Challenge",
    category: "video-edit",
    client: "Self-initiated Vlog | Jayo the Soul Comedian",
    year: "2021",
    description: "A vlog episode where Jayo humorously takes on the 'Tinola Challenge', showcasing his cooking skills and comedic storytelling, while engaging with his audience through entertaining content.",
    image: "https://i.ytimg.com/an_webp/w0poqphIsyc/mqdefault_6s.webp?du=3000&sqp=CMTKg9QG&rs=AOn4CLClzXVppqdzk1pr4uW-xBXamvMNcg",
    skills: ["Adobe Premiere Pro", "Adobe After Effects", "Interview Style", "Influencer Content", "Video Production"],
    videoUrl: "https://youtu.be/w0poqphIsyc?si=nrEwVfxNll6h0v4i"
  },

  // Logo & Branding
  {
    id: "tsms-logo-branding",
    title: "TecPhil Surveying and Mapping Services Logo & Branding",
    category: "logo-branding",
    client: "TecPhil Surveying and Mapping Services",
    year: "2025",
    description: "Logo and branding design for TecPhil Surveying and Mapping Services, focusing on creating a professional and modern visual identity that reflects the company's expertise in surveying and mapping solutions.",
    image: "https://i.ibb.co/hR7pkzmK/Screenshot-2026-08-16-072359.png",
    skills: ["Brand Guidelines", "Minimalist Logo", "Product Packaging", "Typography Design"],
    link: "https://drive.google.com/file/d/1TYoicPSbcAwT9yTpj4scIA-jGkfHrnHo/view?usp=sharing"
    // caseStudyId: "tsms-branding"
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: "prompt-engineering-mastery",
    title: "Prompt Engineering as a Visual Medium: Unlocking Latent Space Precision",
    excerpt: "Beyond basic text prompts: how token weighting, seed locking, camera parameter syntax, and ControlNet references bridge the gap between AI generation and production design.",
    date: "June 10, 2026",
    readTime: "6 min read",
    category: "Generative AI & Tech",
    tags: ["Prompt Engineering", "Midjourney", "AI Design", "Workflow Automation"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
    content: [
      "Generative AI prompting is no longer about throwing random adjectives at a chatbox and hoping for luck. In professional design workflows, prompt engineering is an exact science of linguistic syntax, latent space token weighting, and camera parameter control.",
      "By structuring prompts into strict hierarchical tiers—Subject, Context, Medium, Lighting Physics, Camera Optics, and Parameter Flags (--ar, --stylize, --no, --cw)—designers can achieve pixel-perfect visual consistency across entire product campaigns.",
      "Combining text prompts with image-to-image ControlNet depth maps and LoRA fine-tuning enables brand characters, product silhouettes, and proprietary color palettes to remain faithfully rendered in any imagined environment.",
      "The highest form of modern creative direction is human-AI symbiosis: using generative prompt suites for rapid 100x concept ideation, and human craftsmanship for final typographic hierarchy, spatial balancing, and emotional resonance."
    ]
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "tecphil-socmed-posts",
    category: "social-media",
    title: "TecPhil Geosolutions Co. Building a More Strategic Social Media Presence for a Geospatial Technology Brand",
    client: "TecPhil Geosolutions Co.",
    timeline: "August - December 2025",
    role: "Multimedia Designer & Social Media Designer / Social Media Manager",
    challenge: `TecPhil Geosolutions Co. operates in a highly technical industry, providing GNSS receivers, surveying instruments, LiDAR scanners, UAV solutions, mobile mapping technologies, and other geospatial equipment for professionals in surveying, engineering, construction, mining, architecture, and land development. 
              
    The challenge was to translate highly technical products and services into social media content that was informative, visually engaging, and commercially relevant without making the brand feel overly technical or repetitive. 
              
    The social media presence needed to do more than showcase products. It needed to: 
              
    • Educate audiences about surveying and geospatial technology.
    • Communicate complex product features in an accessible way.
    • Establish TecPhil as a knowledgeable and reliable industry resource.
    • Promote products and services without relying exclusively on sales-oriented posts.
    • Support events, product demonstrations, client activities, and industry campaigns.
    • Create a recognizable and consistent content direction across social platforms.
    • Maintain audience interest through recurring and recognizable content formats.`,
    solution: `I developed a content-driven social media strategy built around four core content pillars:
    
                01 — Education
                Transform technical knowledge into accessible and useful content.
                Examples included surveying tips, technology explainers, product feature breakdowns, “Did You Know?” posts, and educational content about GNSS, LiDAR, mapping, and surveying workflows.

                02 — Promotion
                Position TecPhil's products and services as practical solutions rather than simply products for sale.
                Product highlights, feature-focused graphics, product demonstrations, delivery announcements, and promotional campaigns were designed to communicate what the technology does, why it matters, and who can benefit from it.

                03 — Entertainment
                Introduce lighter and more approachable formats to prevent the social feed from becoming entirely technical.
                This included interactive concepts, relatable surveying content, industry-oriented social posts, and visually engaging formats designed to make technical subjects easier to consume.

                04 — Inspiration
                Strengthen the brand's connection with professionals in the surveying, engineering, construction, and geospatial industries through industry insights, success-oriented messaging, events, and technology-focused storytelling.`,
    process: [
      {
        title: "1. Understanding the Brand & Audience",
        description: `I first examined TecPhil's position within the geospatial technology industry and identified the audiences most relevant to its products and services.
                      
        The content direction was developed around professionals such as Geodetic Engineers, surveyors, engineers, contractors, construction professionals, and organizations involved in land development and mapping.
                      
        This allowed the content to move beyond generic promotional graphics and become more relevant to the actual problems and workflows of the target audience`,
      },
      {
        title: "2. Building the Content Architecture",
        description: `Rather than creating isolated posts, I organized content into repeatable themes and content pillars.

                      This resulted in a structured system that balanced:

                      Education → Engagement → Product Awareness → Conversion

                      Recurring content concepts included:

                      • Mapping Insights
                      • Mapping Mastery Series
                      • GeoWise Wednesday
                      • Tool Highlight Thursday
                      • Feature Friday
                      • The Precision Playbook
                      • Survey Facts Uncovered
                      • The Precision Series

                      These recurring formats created a framework for producing consistent content while allowing individual products, technologies, and industry topics to be incorporated naturally.`,
      },
      {
        title: "3. Translating Technical Information into Visual Content",
        description: `One of the key responsibilities was turning product specifications and technical information into content that could be understood quickly on social media.

                      Instead of presenting specifications as dense technical documentation, I translated them into:

                      • Feature-focused graphics
                      • Infographics
                      • Product highlight cards
                      • Comparison posts
                      • Educational slides
                      • Promotional posters
                      • Product demonstration content
                      • Social media captions and CTAs

                      The objective was to make the technical value of the product visually understandable within a few seconds.`,
      },
      {
        title: "4. Product Storytelling",
        description: `Product content was structured around the relationship between feature, function, and application.

                      For example, instead of simply stating a product's specifications, the content could communicate:

                      What is it? → What can it do? → Where is it useful? → Why does it matter to the user?

                      This approach was applied to products and technologies including Tersus GNSS receivers, LiDAR solutions, surveying instruments, UAV photogrammetry, mobile mapping, and other geospatial equipment.

                      The strategy helped shift product communication from “Here is our product” toward “Here is the problem this technology can help solve.”`,
      },
      {
        title: "5. Campaign & Event Support",
        description: `Social media was also used as an extension of TecPhil's offline marketing activities.

                      I developed creative concepts and promotional materials for:

                      • Industry events
                      • Exhibitions
                      • Seminars
                      • Product demonstrations
                      • Product launches and highlights
                      • Client activities
                      • Geodetic Engineer-related campaigns
                      • Industry conferences and sponsorships

                      A key example was supporting communication around industry events such as the 5th Philippine Roads, Bridges and Tunnels Summit, where social content helped reinforce TecPhil's participation and industry presence.`,
      },
      {
        title: "6. Visual Consistency & Brand Communication",
        description: `I maintained a consistent visual language across social media while adapting creative formats according to the content type.

                      The goal was to make TecPhil's posts recognizable while ensuring that technical information remained visually organized.

                      Design decisions considered:

                      • Typography hierarchy
                      • Product photography
                      • Technical diagrams
                      • Information hierarchy
                      • Brand colors
                      • CTA placement
                      • Platform-specific dimensions
                      • Readability on mobile devices

                      The overall creative direction positioned TecPhil as a professional, technical, and modern geospatial technology brand.`,
      },
      {
        title: "7. Content Planning & Publishing Strategy",
        description: `Content was planned around a mixture of educational, promotional, industry, and engagement-focused topics rather than relying on a single type of post.

                      This created a more balanced social media ecosystem:

                      Educate → Engage → Demonstrate → Promote → Reinforce Brand Authority

                      Content calendars were developed to maintain consistency and coordinate product promotions, educational campaigns, events, and industry-related opportunities.`,
      },
    ],
    results: [
      { metric: "Core Content Pillars", value: "4", description: "Established Education, Promotion, Entertainment, and Inspiration as the foundation of the social media strategy, creating a more diverse content mix." },
      { metric: "Recurring Content Concepts", value: "8+", description: "Developed recurring series such as Mapping Insights, Mapping Mastery Series, GeoWise Wednesday, Tool Highlight Thursday, Feature Friday, The Precision Playbook, and Survey Facts Uncovered to create consistency and recognizable content formats." },
      { metric: "Key Audience Objectives", value: "4", description: "Education → Engagement → Awareness → Conversion | Content was designed to educate audiences, encourage interaction, build awareness of TecPhil's solutions, and ultimately support inquiries and sales conversations." }
    ]
  },
  
];
