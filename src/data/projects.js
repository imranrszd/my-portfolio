import { text } from "framer-motion/client";

export const projects = [
  {
    id: "chest-xray-gan",
    title: "cGAN Chest X-Ray Image Enhancement",
    tech: "Python, pix2pix cGAN, PyTorch, HuggingFace",
    year: 2026,
    type: "ai",
  },
  {
    id: "minigift-by-juheraa",
    title: "minigift by Juheraa",
    link: "https://minigiftbyjuheraa.com/",
    tech: "React, Tailwind, Node.js, PostgreSQL",
    year: 2026,
    type: "development",
    image1: "images/minigift1.png",
    image2: "images/minigift2.png",

    description:
      "A custom gift e-commerce website built for minigift by Juheraa, focused on showcasing handmade gifts, product collections, cart flow, and customer order tracking through a clean and cute storefront interface.",

    text1:
      "minigift by Juheraa is a custom gift website designed to help customers browse handmade products, choose designs, and place personalized gift orders online. The site focuses on making the shopping experience feel simple, warm, and visually aligned with the brand’s soft handmade identity.",

    text2:
      "The frontend includes a landing page, product collection section, gallery, product detail pages, cart interface, and order tracking flow. The layout was designed to make products easy to explore, with clear call-to-action buttons, category filtering, product cards, and a responsive interface for both desktop and mobile users.",

    text3:
      "I developed the frontend using React and Tailwind CSS, focusing on responsive layouts, reusable UI components, product display sections, cart-related interfaces, and a clean visual structure. The system connects with backend product data so items, pricing, images, and product details can be managed more dynamically instead of being fully hardcoded.",

    text4:
      "This project improved my experience in building real client-facing e-commerce interfaces, especially in product presentation, responsive UI design, cart flow, brand-focused visuals, and creating a storefront that feels both functional and appealing to customers.",
  },
  {
    id: "qylex-solution",
    title: "Qylex Solution",
    link: "https://qylexsolution.com",
    tech: "React, Tailwind, Web3Forms",
    year: 2026,
    type: "development",
    image1: "images/qs1.png",
    image2: "images/qs2.png",

    description:
      "A modern company website built to present Qylex Solution’s services, projects, and contact channel through a clean and professional interface.",

    text1:
      "Qylex Solution was designed as a business-focused website that introduces the company’s digital services, including web development, custom systems, automation solutions, and technology consulting. The goal was to help visitors quickly understand what the company does and how it can support business operations.",

    text2:
      "The website includes service sections, project highlights, company messaging, and a contact form. The layout focuses on clear navigation, strong visual presentation, and a professional structure that makes the company look more credible to potential clients.",

    text3:
      "The project was developed using React and Tailwind CSS for a responsive frontend, with Web3Forms integrated into the contact page so users can submit enquiries without requiring a custom backend. The design also uses reusable components to keep the layout easier to maintain.",

    text4:
      "This project improved my ability to build client-facing websites that are not only visually clean, but also useful for business communication, lead generation, and presenting a company’s digital identity.",
  },
  {
    id: "sentiment-analysis",
    title: "Sentiment Analysis",
    tech: "Python, Excel, RapidMiner",
    year: 2025,
    type: "analysis",
  },
  // {
  //   id: "ga-feature-selection",
  //   title: "GA-Based Feature Selection for Heart Disease",
  //   tech: "Python, Genetic Algorithm, scikit-learn",
  //   year: 2025,
  //   type: "analysis",
  // },
  {
    id: "covid-dashboard",
    title: "COVID-19 Mortality Dashboard",
    tech: "Power BI, Excel, Data Visualization",
    year: 2025,
    type: "analysis",
  },
  {
    id: "telco-churn-dashboard",
    title: "Telco Customer Churn Dashboard",
    tech: "Tableau, Excel, Data Visualization",
    year: 2025,
    type: "analysis",
  }, {
    id: "parcel-management",
    title: "Parcel Management System",
    tech: "JavaScript, Node.js, Tailwind, PostgreSQL",
    year: 2026,
    type: "development",
    image1: "images/pms1.png",
    image2: "images/pms2.png",

    description:
      "A web-based parcel hub management system built to help staff register, organize, search, and hand out parcels more efficiently.",

    text1:
      "Parcel Management System was developed for parcel hubs that manage a high volume of parcels every day. The system helps staff record incoming parcels, assign them to racks, update parcel status, and keep the overall parcel flow more organized.",

    text2:
      "The system includes parcel registration, rack allocation, parcel search, handout tracking, customer parcel checking, reporting, and staff activity records. These features help reduce manual checking and make daily parcel handling faster and easier for both staff and customers.",

    text3:
      "The project was built using JavaScript, Node.js, Tailwind CSS, and PostgreSQL. The backend manages parcel records, staff actions, rack data, and status updates, while the frontend focuses on a simple interface that supports fast searching and smooth daily operation.",

    text4:
      "This project strengthened my experience in building real operational systems, especially in designing database-driven workflows, improving process efficiency, and creating tools that solve practical problems for parcel hub operations.",
  },
  {
    id: "evergreen-home",
    title: "Evergreen Home",
    tech: "Flutter, Dart, Arduino, IoT",
    year: 2026,
    type: "development",
    image1: "images/evghm1.png",
    image2: "images/evghm2.png",

    description:
      "A mobile-based smart watering system that connects a Flutter app with an IoT device to monitor plant conditions and control watering remotely.",

    text1:
      "Evergreen Home was created to make plant care easier by allowing users to monitor soil and environmental conditions through a mobile app. The system connects the app with an Arduino-based IoT device, giving users more control over watering without needing to check the plant manually all the time.",

    text2:
      "The app supports manual watering, automatic watering mode, soil moisture monitoring, temperature and humidity display, soil dampness status, and last-watered tracking. These features help users understand the plant’s current condition and water it more consistently.",

    text3:
      "The mobile app was built using Flutter and Dart, while the IoT side uses Arduino-based hardware and sensors to collect plant condition data. The system combines mobile interface design with hardware communication to create a simple smart-home style watering solution.",

    text4:
      "This project gave me hands-on experience with mobile-IoT integration, sensor-based logic, real-time condition monitoring, and building a user interface that connects software with physical hardware.",
  },
  {
    id: "medaltask",
    title: "MedalTask",
    tech: "Flutter, Dart, Firebase",
    year: 2025,
    type: "development",
    image1: "images/mt1.png",
    image2: "images/mt2.png",

    description:
      "A gamified mobile task management app that motivates users to complete tasks through points, streaks, medals, and personal rewards.",

    text1:
      "MedalTask was designed to help users stay consistent with their daily tasks by turning task completion into a reward-based experience. Instead of being a normal to-do list, the app encourages users to build habits through progress, points, and medals.",

    text2:
      "The app includes task creation, task completion tracking, points, streak bonuses, reward progress, and medal collection. The streak system gives extra points when users complete tasks consistently, making the app feel more motivating over time.",

    text3:
      "The project was built using Flutter and Dart, with Firebase used to store and manage task-related data. The app structure focuses on user interaction, task state updates, reward calculation, and a simple mobile interface for daily use.",

    text4:
      "This project helped me understand how gamification can be used in productivity apps, especially by combining task management with motivation systems such as streaks, points, and rewards.",
  },
  {
    id: "qylexgames",
    title: "QylexGames",
    tech: "JavaScript, React, Tailwind, PostgreSQL",
    year: 2026,
    type: "development",
    image1: "images/qg1.png",
    image2: "images/qg2.png",

    description:
      "A web-based gaming top-up platform that allows users to browse games, choose packages, and place orders for in-game currency or digital game services.",

    text1:
      "QylexGames was designed as an online platform for game top-ups and digital game services. Users can browse available games, select top-up packages, enter the required account details, and place orders through a clean and responsive interface.",

    text2:
      "The platform supports different product types, including direct top-up, login-based services, and game service packages. Each product can have its own pricing, package options, required customer details, payment method, and supplier-related setup, allowing the platform to handle different top-up workflows.",

    text3:
      "The project was built using JavaScript, React, Tailwind CSS, and PostgreSQL. The system structure supports product management, package pricing, supplier mapping, and order-related data, making it easier to maintain and expand as more games or services are added.",

    text4:
      "This project improved my experience in building e-commerce style flows, especially product listing, package selection, checkout logic, database planning, and admin-focused management features.",
  },
  {
    id: "nutriscan",
    title: "NutriScan",
    tech: "HTML, CSS, JavaScript",
    year: 2025,
    type: "development",
    image1: "images/ns1.png",
    image2: "images/ns2.png",

    description:
      "A web-based malnutrition screening tool that uses decision-tree logic to assess possible malnutrition risk for children aged 5 years and below.",

    text1:
      "NutriScan was created as an early screening tool for child malnutrition. The system collects information such as age, gender, weight, height, MUAC, and visible symptoms through a guided form, then uses the input to support a basic assessment.",

    text2:
      "The system provides a structured assessment flow, symptom selection, malnutrition classification, risk score, confidence level, and recommended action. This helps users better understand whether a child may need further checking or urgent referral.",

    text3:
      "The project was built using HTML, CSS, and JavaScript. The assessment logic uses a decision-tree style approach, where the system follows rule-based conditions to classify the possible malnutrition type based on the user’s input.",

    text4:
      "This project helped me apply decision-based logic in a real health-related use case, while also improving my understanding of form handling, conditional rules, and user-friendly result presentation.",
  },

];