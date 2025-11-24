import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NimSections from "./compounds/NimSections";
import CoursesSection from "./compounds/CoursesSection";
import CoursesPage from "./compounds/CoursesPage";
import InternshipIndustries from "./compounds/InternshipIndustries";
import PlacementCollaborations from "./compounds/PlacementCollaborations";
import Partnerships from "./compounds/Partnerships";
import Footer from "./compounds/Footer";
import PlacementCircle from "./compounds/PlacementCircle";

import WhyCreatedProgram from "./Program/WhyCreatedProgram";
import HeroSection from "./compounds/HeroSection";
import LearningModel from "./Program/LearningModel";
import PowerPrograms from "./Program/PowerPrograms";
import ProgramHero from "./Program/HeroSection";

import GallerySection from "./Gallery/GallerySection";
import Moments from "./Gallery/Moments";
import GrowthMoments from "./Gallery/GrowthMoments";
import CelebrateSection from "./Gallery/CelebrateSection";
import MoUCombined from "./Gallery/MoUSection";
import GalleryHeroSection from "./Gallery/GalleryHeroSection";

import ContactSection from "./Contact/ContactSection";
import ContactHero from "./Contact/ContactHero";

import Navbar from "./compounds/Navbar";
import FullStackPage from "./courseDh/course";
import ProgramHeroo from "./courseDh/coursehero";
import JourneySectio from "./courseDh/coursejourney";
import LearningModes from "./courseDh/courseonofline"
import  JourneyCTA from "./courseDh/coursetextjourney"

import EmpoweringCampuses from "./courseDh/collabhero"
import PartnerBenefits from "./courseDh/collegebenefit"
import FutureTogether from "./courseDh/collegefuture"
import PartnerSection from "./courseDh/collegepartner"

import KnowledgeBanner from "./courseDh/knowledgehero"
import Timeline from "./courseDh/knowledgetimeline"
import  WhyChooseNIM from "./courseDh/knowledgechoseus"
import CategoryDescriptions from "./courseDh/knowledgecategory"
import PythonCourses from "./courseDh/knowledgecard"
import FutureSection from "./courseDh/knowledgebuildskill"


// import InternshipDomains from "./Internshippage/intern";
import InternshipTopCards from "./Internshippage/interncards";
import InternshipSection from "./Internshippage/internhero";
// import InternshipDetails from "./Internshippage/internpro";
import CollaborationSection from "./Internshippage/internship";
import DomainsSection from "./Internshippage/interntool";
import HeroSlider from "./compounds/heroslider";
function App() {
  return (
    <BrowserRouter>
      <Navbar /> {/* 👉 GLOBAL NAVBAR - appears on all pages */}

      <Routes>
        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              
              <HeroSlider/>
              <NimSections />
              <CoursesSection />
              <CoursesPage />
              <InternshipIndustries />
              <PlacementCircle/>
              <PlacementCollaborations />
              <Partnerships />
              <Footer />
            </>
          }
        />

        {/* PROGRAM PAGE */}
        <Route
          path="/Program"
          element={
            <>
              <ProgramHero />
              <WhyCreatedProgram />
              <PowerPrograms />
              <LearningModel />
              <Footer />
            </>
          }
        />

        {/* GALLERY PAGE */}
        <Route
          path="/Gallery"
          element={
            <>
              <GalleryHeroSection />
              <GallerySection />
              <Moments />
              <GrowthMoments />
              <CelebrateSection />
              <MoUCombined />
              <Footer />
            </>
          }
        />

        {/* CONTACT PAGE */}
        <Route
          path="/Contact"
          element={
            <>
              <ContactHero />
              <ContactSection />
              <Footer />
            </>
          }
        />


         <Route
          path="/course"
          element={
            <>
            <ProgramHeroo/>
              <FullStackPage />
             <JourneySectio />
             <JourneyCTA/>
             <LearningModes/>
             
              <Footer />
            </>
          }
        />


        
         <Route
          path="/college"
          element={
            <>
            <EmpoweringCampuses/>
              <PartnerSection/>
            <PartnerBenefits/>
            <FutureTogether/>
          
              <Footer />
            </>
          }
        />


          <Route
          path="/Blog"
          element={
            <>
            <KnowledgeBanner/>
            <PythonCourses/>
            <FutureSection/>
            <Timeline/>
            <CategoryDescriptions/>
            <WhyChooseNIM/>
              <Footer />
            </>
          }
        />



               <Route
          path="/Intership"
          element={
            <>
            <InternshipSection />
               <DomainsSection />
            <InternshipTopCards /> 
               <CollaborationSection />
              <Footer />
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
