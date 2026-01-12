import { motion } from "framer-motion";
import { EmailForm } from "@/components/EmailForm";
import { SocialLinks } from "@/components/SocialLinks";
import profileImg from "@assets/20260110_133905_1768240962293.png";

export default function Home() {
  return (
    <div className="min-h-screen bg-accent/30 selection:bg-primary/10 flex flex-col items-center justify-center p-4 sm:p-8 md:p-12">
      
      {/* Main Card Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-4xl bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl overflow-hidden border border-white/50"
      >
        <div className="flex flex-col md:flex-row">
          
          {/* Left Column: Image */}
          <div className="w-full md:w-5/12 bg-muted/30 relative min-h-[400px] md:min-h-[600px]">
            <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex items-center justify-center">
              <div className="relative w-full aspect-[3/4] max-w-[320px] md:max-w-none rounded-2xl overflow-hidden shadow-lg image-container bg-white">
                <img 
                  src={profileImg} 
                  alt="Gaius Jim" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-primary/5 rounded-full blur-3xl -z-10" />
          </div>

          {/* Right Column: Content */}
          <div className="w-full md:w-7/12 p-6 sm:p-8 md:p-12 flex flex-col justify-center">
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary leading-tight mb-4 sm:mb-6">
                Proven Tips Straight to Your Inbox
              </h1>
              
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-6 sm:mb-8">
                Get practical ideas on managing time and energy, handling unpredictable academic demands, building sustainable routines, and making steady progress as a graduate student.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="space-y-6 sm:space-y-8"
            >
              {/* Form Section */}
              <div className="bg-primary/5 rounded-xl p-1 sm:p-2 border border-primary/10">
                 <EmailForm />
              </div>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-white/0 px-2 text-muted-foreground backdrop-blur-md">
                    Connect With Me
                  </span>
                </div>
              </div>

              {/* Links Section */}
              <SocialLinks />
            </motion.div>

          </div>
        </div>
      </motion.div>
      
      {/* Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-12 text-center text-sm text-muted-foreground"
      >
        <p>&copy; {new Date().getFullYear()} Gaius Jim Edits. All rights reserved.</p>
      </motion.footer>
    </div>
  );
}
