"use client"

import Action from "@/components/Action";
import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Platform from "@/components/Platform";
import Promo from "@/components/Promo";
import Apps from "@/components/services";
import TabNav from "@/components/TabNav";
import HotmailTransition from "@/components/Transition";
import Updates from "@/components/Updats";
import { motion } from "framer-motion";

const App = () => {
  return (
    <main 
    className="h-screen w-full bg-gradient-to-bl from-teal-400 backdrop-blur-2xl via-red-300 to-purple-500 "
       
       >
      <motion.div

            >
              <section id="overview">

              <Header />
              <Hero />
              <Promo />
              </section>
              <TabNav />
                 <Action />

        
              <Platform />


              <Apps />
            

              <Updates />
             
              <Faq />
              <HotmailTransition />
             <Footer />
      </motion.div>
    </main>
  );
};

export default App;
