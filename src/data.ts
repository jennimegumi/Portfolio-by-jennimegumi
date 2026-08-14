/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { WorkItem, BlogPost, CaseStudy } from './types';

export const DESIGNER_INFO = {
  name: "Jenny Grace Apo",
  title: "Multimedia & Social Media Specialist",
  location: "Quezon City, Philippines",
  about: "I am a multi-disciplinary designer and creative strategist from the Philippines, driven by a deep passion for the fascinating connection of creativity and technology. I enjoy bringing ideas to life through engaging multimedia experiences that connect, resonate, and inspire. Beyond design, you’ll also find me streaming games and sharing gameplay highlights across various social media platforms.",
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
    { label: "Industry Experience", value: "4+" },
    { label: "Asset Delivered", value: "700+" },
    { label: "Brand and Client Collaborations", value: "25+" },
    { label: "Workflow Efficiency (Fast Turnaround)", value: "40%" }
  ],
  testimonials: [
    {
      quote: "Jenny is a true visual artist—a creative force with mastery in digital and traditional media. Her work reflects a deep understanding of visual communication in graphic design, illustration, branding, or layout. She brings a fresh, original perspective to every project, making her creative output visually compelling and strategic.",
      author: "Jasper Briones",
      role: "Marketing Manager, Havitas Developments Corporation "
    },
    {
      quote: "Jenny is a true visual artist—a creative force with mastery in digital and traditional media. Her work reflects a deep understanding of visual communication in graphic design, illustration, branding, or layout. She brings a fresh, original perspective to every project, making her creative output visually compelling and strategic.",
      author: "Jasper Briones",
      role: "Marketing Manager, Havitas Developments Corporation "
    }
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
    image: "https://instagram.fmnl44-1.fna.fbcdn.net/v/t39.30808-6/698784018_1364764012340451_7154990945565771165_n.jpg?stp=dst-jpg_e35_tt6&_nc_cat=111&_nc_map=urlgen_bucketless&ig_cache_key=MzkwODkyMzY4NjE0ODc2MzYwNw%3D%3D.3-ccb7-5&ccb=7-5&_nc_sid=58cdad&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0ueHBpZHMuMTA4MC5zZHIucmVndWxhcl9waG90by5DMyJ9&_nc_ohc=FluXqdc4N_UQ7kNvwHLKh1D&_nc_oc=AdrOuS2TJm7GJvDBW7Ppeo4yL0egVVSQhMGoo0z0qmttxiyr9nfnJEapia-BFPlSchs&_nc_ad=z-m&_nc_cid=5917&_nc_zt=23&_nc_ht=instagram.fmnl44-1.fna&_nc_gid=d4kk9p87YpiwH0ldOTNFuA&_nc_ss=7a22e&oh=00_AQG5PbtIxxXnic8T0dRNB9FeHkXhNRKLvwrp6wj2NAPzGg&oe=6A84BBD1",
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
    id: "omni-channel-growth-surge",
    title: "Kroma Energy: 4.8M Social Media Growth & Brand Playbook",
    category: "social-media",
    client: "Kroma Beverage Co.",
    year: "2026",
    description: "Comprehensive social media strategy and daily content execution across Instagram, TikTok, and LinkedIn. Implemented high-retention visual hooks, daily community engagement loops, and carousel masterclasses driving 4.8M organic impressions.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=900&q=80",
    skills: ["Social Content Strategy", "TikTok / Reels Hooks", "Analytics & Retargeting", "Community Management", "Visual Grid Planning"],
    caseStudyId: "social-growth-campaign"
  },
  {
    id: "lumina-brand-activation",
    title: "Lumina Wearables: Organic Social Launch & Creator Activation",
    category: "social-media",
    client: "Lumina Tech",
    year: "2025",
    description: "30-day social media launch rollout integrating teaser motion cutdowns, founder story threads on LinkedIn/X, interactive polls, and user-generated content curation that sold out the initial batch in 72 hours.",
    image: "https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?auto=format&fit=crop&w=900&q=80",
    skills: ["Launch Roadmaps", "Influencer Collabs", "Copywriting & Tone", "Social Growth Hacks"]
  },

  // UI/UX Design
  {
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
  },

  // Artworks
  {
    id: "chroma-waves",
    title: "Chroma Waves: Abstract 3D Sculpt Series",
    category: "artwork",
    client: "Self-initiated NFT Campaign",
    year: "2026",
    description: "A series of digital abstract models exploring ambient liquid chrome refraction, soft holographic materials, and deep light-bending shadows.",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=900&q=80",
    skills: ["Blender 3D", "Octane Render", "Holographic Shaders", "Digital Composition"]
  },
  {
    id: "cyber-distortion",
    title: "Cybernetic Distortion & Synthetic Glitch Space",
    category: "artwork",
    client: "Neo-Tkyo Exhibition",
    year: "2025",
    description: "Vector exploration of retro-futuristic circuitry grids, neon-split layouts, and generative grid particles simulating sensory cyber environments.",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=900&q=80",
    skills: ["Generative Art", "Vector Drafting", "Neon Post-processing", "Glitch Texturing"]
  },

  // Video Editing
  {
    id: "synthetic-runway",
    title: "Synthetic Runway: Fashion Film Cut",
    category: "video-edit",
    client: "Veridian Apparel",
    year: "2026",
    description: "Dynamic visual promo cut containing rhythmic editing, custom speed ramps, chromatic aberration flashes, and deep synthesis sound effects.",
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=900&q=80",
    skills: ["Premiere Pro", "Rhythmic Syncing", "Color Grading C-Log", "Kinetic Captions"],
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    id: "future-cities",
    title: "Future Cities: Cinematic Drone Retrospective",
    category: "video-edit",
    client: "Omni Media Corp",
    year: "2025",
    description: "A gorgeous 4K high-density city drone montage featuring subtle visual effects enhancements, camera stabilization mapping, and a cinematic atmospheric score.",
    image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=900&q=80",
    skills: ["After Effects", "Drone Stabilization", "Atmospheric LUTs", "VFX Compositing"],
    videoUrl: "https://www.w3schools.com/html/movie.mp4"
  },

  // Logo & Branding
  {
    id: "aura-skincare",
    title: "Aura Skincare Brand Rebrand & Guidelines",
    category: "logo-branding",
    client: "Aura Labs",
    year: "2026",
    description: "Holistic modern rebrand representing botanical cleanliness. Includes minimalist monoline logos, earth-tone color systems, customized glass jar labels, and geometric typography rules.",
    image: "https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=900&q=80",
    skills: ["Brand Guidelines", "Minimalist Logo", "Product Packaging", "Eco Stock Selector"],
    caseStudyId: "aura-skincare"
  },
  {
    id: "volt-electric",
    title: "Volt Electric Mobility Identity Systems",
    category: "logo-branding",
    client: "Volt Micro",
    year: "2025",
    description: "A hyper-dynamic identity system built on geometric angles, neon-green electric color swatches, active charging icons, and fluid responsive guidelines for hardware.",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=900&q=80",
    skills: ["Vector Branding", "Stationery Layouts", "Hardware Marking", "Symbol Synthesis"]
  }
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
  {
    id: "social-media-retention",
    title: "The 3-Second Hook: Structuring High-Converting Social Media Visuals",
    excerpt: "Analyzing the anatomy of viral design carousels, algorithmic engagement signals, and converting passive scrollers into passionate brand advocates.",
    date: "May 08, 2026",
    readTime: "5 min read",
    category: "Social Media Strategy",
    tags: ["Social Growth", "Content Strategy", "Visual Hooks", "Community Building"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=600&q=80",
    content: [
      "In social media management, the first 3 seconds of a video or the first slide of an Instagram carousel determine 90% of total engagement. Algorithms reward retention rate and shares far higher than passive likes.",
      "To build a high-performing visual hook, combine an unexpected counter-intuitive visual contrast with bold, single-line headline typography. Avoid long introductory fluff; deliver value in the first frame.",
      "A successful social media management system relies on clear pillar architectures: 40% Education & Actionable Insight, 30% Proof & Case Studies, 20% Cultural / Behind-the-Scenes Personality, and 10% Direct Conversion Offers.",
      "Pairing consistency in posting schedules with genuine community interaction in the comments section fosters loyal brand advocates who amplify organic reach with zero paid ad spend."
    ]
  },
  {
    id: "typography-grids",
    title: "The Silent Grid: How Typography Guides Eyes on Minimal Portfolios",
    excerpt: "An in-depth look at visual hierarchy, modern lettering contrast, and why intentional negative space beats visual clutter every single time.",
    date: "April 24, 2026",
    readTime: "5 min read",
    category: "Typography & Layouts",
    tags: ["Grid systems", "Minimalism", "Aesthetics", "Font pairings"],
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=600&q=80",
    content: [
      "In design, quietness is a superpower. When developers or designers attempt to build personal landing pages or GitHub portfolios, they often feel an urge to fill every pixel of empty width with animated charts or secondary buttons. Truly exceptional interfaces breathe through structural negative space.",
      "The layout grid is the skeletal framework of readability. By aligning primary headings to dynamic asymmetric columns, you form a clear scanning order for potential clients, hiring directors, and design partners.",
      "When styling headings, choose display fonts that convey your design character (like Space Grotesk) and pair them with humble, practical geometric sans-serif fonts for the text (such as Inter). Keep your font scale tightly grouped: four sizes are usually enough to cover everything from caption texts to display blocks.",
      "Readability is the perfect balance of font size, line-height, character spacing (tracking), and container margins. If a reader can scan your story without cognitive fatigue, they will absorb, register, and remember your work."
    ]
  },
  {
    id: "video-rhythm-cuts",
    title: "Pacing and Rhythm: Post-Production Secrets for Modern Video Directors",
    excerpt: "How to edit cinematic videos, master transition pacing, synchronize custom soundtracks, and maintain tension throughout a high-energy corporate showcase.",
    date: "March 18, 2026",
    readTime: "7 min read",
    category: "Video & Motion",
    tags: ["Video Editing", "Rhythm Sync", "Color Grading", "Film Pacing"],
    image: "https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=600&q=80",
    content: [
      "Most video editors approach cuts as simple logical dividers between video clips. Rich, memorable editing treats cuts as musical beats. Synchronizing timeline markers directly with audio transients sets up a rhythmic dialogue that keeps the viewer's eyes glued to the screen.",
      "To prevent your flow from becoming monotonous, practice the principle of rhythmic contrast. Group rapid, high-intensity cuts inside active transition points, then contrast them with long, steady, panoramic frames immediately following.",
      "Color grading is your emotional anchor. Applying a stylized, low-saturation LUT combined with deep, warm midtones establishes an instant cinema mood. Color is light, and light is story.",
      "Lastly, don't overlook sound effects (SFX) layering. The visual track of a subject in motion only reaches its full potential when supported by custom sub-bass risers, metallic sweeps, and ambient atmospheric textures."
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "social-growth-campaign",
    category: "social-media",
    title: "Kroma Energy: 4.8M Reach Social Media Overhaul & AI-Augmented Visual Engine",
    client: "Kroma Beverage Co.",
    timeline: "3 Months (Spring 2026)",
    role: "Head of Social Strategy & Visual Direction",
    challenge: "Kroma Beverage needed to launch their zero-sugar organic energy drink into a fiercely competitive market dominated by legacy brands with multi-million dollar ad budgets. They lacked an established social footprint and needed an authentic, high-velocity organic content strategy to build an engaged community from scratch.",
    solution: "We engineered an omni-channel social media growth engine combining Generative AI-prompted concept art with high-retention short-form video hooks on TikTok and Instagram Reels. We established a daily publishing cadence, interactive community polling, and a distinct rebellious brand voice.",
    process: [
      {
        title: "1. Audience Persona & Algorithmic Blueprinting",
        description: "Mapped Gen-Z and millennial fitness audiences. Identified top-performing content archetypes: rapid-cut recipe hacks, clean desk aesthetic routines, and relatable founder storytelling.",
      },
      {
        title: "2. Generative AI Prompting for Rapid Visual Ideation",
        description: "Built proprietary Midjourney v6 and Stable Diffusion prompt templates to generate 50+ hyper-stylized 3D can mockups in fantastical environments every week for social teaser carousels.",
      },
      {
        title: "3. Short-Form Video & Visual Hook Architecture",
        description: "Scripted and edited 45 high-tempo Reels and TikToks utilizing the '3-Second Visual Hook' formula, custom sound effects, and kinetic typography overlays.",
      },
      {
        title: "4. Community Engagement Loops & Creator Seeding",
        description: "Managed real-time comment interactions, engaged in viral brand banter, and coordinated micro-influencer product seeding that generated over 300+ organic user videos.",
      }
    ],
    results: [
      { metric: "Total Organic Impressions", value: "4.8M+", description: "Reached across TikTok, Instagram, and X without paid advertising." },
      { metric: "Follower Growth", value: "+320%", description: "Grew from 3,200 to 48,000+ highly active community members." },
      { metric: "DTC Launch Conversion", value: "3.4x", description: "First batch of 20,000 cases sold out within 14 days of campaign rollout." }
    ]
  },
  {
    id: "aura-skincare",
    category: "logo-branding",
    title: "Aura Skincare Rebrand & Botanical Visual Identity",
    client: "Aura Labs Inc.",
    timeline: "3 Months (Q1 2026)",
    role: "Lead Brand Identity Designer",
    challenge: "Aura Labs had created high-quality, scientifically proven botanical serums, but their existing plastic branding made them look like generic pharmacy items. They needed a luxury, ecological, premium brand image capable of standing out on visual social shelves and high-end organic boutique stores.",
    solution: "We designed a holistic, high-nature visual identity system focusing on tactile minimalism. Combining organic earth tones (moss green, raw clay, warm desert linen) with a clean monoline typographic mark, we custom-designed embossed label matrices, eco-responsible glass jars, and thorough brand guidelines.",
    process: [
      {
        title: "1. Brand Auditing & Vision Aligning",
        description: "Evaluated competitors in the premium skincare sphere. We established that while competitors used aggressive modern science labels, Aura could represent a harmonious 'nature-meets-laboratory' balance.",
      },
      {
        title: "2. Monoline Typography & Mark Selection",
        description: "Engineered a minimalist geometry logo featuring overlapping soft botanical leaves, aligned completely within a perfect circle. Hand-polished serif tracking for the brand lettering.",
      },
      {
        title: "3. Packaging Materials & Layout Mocking",
        description: "Sourced post-consumer recycled thick amber glass containers and textured cotton labels that feel rough and luxury to organic hands.",
      },
      {
        title: "4. Building the Digital Brand Playbook",
        description: "Constructed detailed rules for secondary fonts, strict safe-zone spacing boundaries, color contrast standards for digital screens, and creative campaign themes.",
      }
    ],
    results: [
      { metric: "Design Award Nominations", value: "3", description: "Secured nominations in global packaging categories." },
      { metric: "B2B Retail Pickups", value: "+300%", description: "Organic boutiques and hotel chains picked up Aura serums in record time." },
      { metric: "Instagram Engagement", value: "+74%", description: "Aesthetic bottle photography naturally boosted social media sharing." }
    ]
  },
  {
    id: "pulse-fintech",
    category: "ui-ux",
    title: "Pulse Crypto Dashboard Interface & Atomic Design System",
    client: "Pulse Finance Corp",
    timeline: "4 Months (Winter 2025)",
    role: "Principal Product Designer",
    challenge: "Traditional cryptocurrency dashboards are notoriously cluttered, overwhelming retail investors with flashing numbers, disconnected data columns, and visual noise. Pulse needed a highly calming, accessible, dashboard interface that keeps metrics clean and empowers users to trade with high confidence.",
    solution: "We engineered a modular widget-based dashboard layout utilizing a soothing deep-ocean color scale, high-precision typography components, and visual charts that compress data without losing detail. We bundled this into an extensible atomic design system.",
    process: [
      {
        title: "1. Persona Wireframing & Task Optimization",
        description: "Conducted user research with 20 active crypto investors. Discovered that the primary pain point was checking multi-sig transactions without visiting scanning pages.",
      },
      {
        title: "2. Setting up the Atomic Design Token System",
        description: "Built strict tokens for borders, corners, semantic error colors, and layout widths in Figma to allow engineers to build and edit code modularly.",
      },
      {
        title: "3. Chart Clutter Reduction & Refraction",
        description: "Created simplified custom canvas graphs showing candle vectors, volume trends, and moving averages on light-hovering interactions only.",
      },
      {
        title: "4. Stress-Testing in Real environments",
        description: "Tested the wireframes with light/dark contrast and rapid price changes to verify immediate readability across different viewport environments.",
      }
    ],
    results: [
      { metric: "Onboarding Fluidity", value: "+45%", description: "Users completed their first cold-wallet configuration in half the usual steps." },
      { metric: "Active Daily Session Retention", value: "82%", description: "High retention rates attributed to the clean design." },
      { metric: "Engineering Transfer Speed", value: "2x", description: "Shared Figma design tokens minimized frontend coding iterations." }
    ]
  }
];
