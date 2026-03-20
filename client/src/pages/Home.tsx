import { motion } from "framer-motion";
import { EmailForm } from "@/components/EmailForm";
import { SocialLinks } from "@/components/SocialLinks";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import profileImg from "@assets/20260110_133905_1768240962293.png";

function InstagramVerifiedBadge() {
  return (
    <svg
      viewBox="0 0 40 40"
      width="20"
      height="20"
      data-testid="icon-verified"
      aria-label="Verified"
    >
      <circle cx="20" cy="20" r="20" fill="#0095F6" />
      <polyline
        points="11.5,20.5 17,26.5 28.5,14"
        fill="none"
        stroke="white"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-primary/10 flex flex-col items-center px-4 py-12 sm:py-16">
      
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full max-w-md flex flex-col items-center"
      >
        
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="relative mb-6"
        >
          <Avatar className="w-32 h-32 sm:w-36 sm:h-36 border-4 border-background relative" data-testid="img-profile-avatar">
            <AvatarImage src={profileImg} alt="Gaius Jim" className="object-cover" loading="eager" />
            <AvatarFallback className="text-2xl font-bold bg-primary/10 text-primary">GJ</AvatarFallback>
          </Avatar>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-1.5 mb-2">
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground" data-testid="text-profile-name">
              Gaius Jim
            </h1>
            <InstagramVerifiedBadge />
          </div>
          <p className="text-base sm:text-lg max-w-xs mx-auto leading-relaxed" style={{ color: "#1a2b48" }} data-testid="text-profile-bio">
            Get practical tips on managing time, energy, and making steady progress as a graduate student.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="w-full"
        >
          <div className="bg-white rounded-2xl p-5 border border-border shadow-sm">
            <EmailForm />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="w-full mt-6"
        >
          <div className="relative mb-5">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-border" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-3 text-muted-foreground">
                Connect With Me
              </span>
            </div>
          </div>

          <SocialLinks />
        </motion.div>

      </motion.div>
      
      <motion.footer 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-12 text-center text-xs text-muted-foreground"
      >
        <p>&copy; {new Date().getFullYear()} Gaiusjimedits</p>
      </motion.footer>
    </div>
  );
}
