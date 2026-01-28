import { motion, useScroll, useTransform } from 'framer-motion';

const CookingAnimation = () => {
  const { scrollYProgress } = useScroll();
  
  // Enhanced animation values for a complete cooking sequence
  const ingredient1Y = useTransform(scrollYProgress, [0.1, 0.22], [-200, 0]);
  const ingredient2Y = useTransform(scrollYProgress, [0.12, 0.24], [-200, 0]);
  const ingredient3Y = useTransform(scrollYProgress, [0.14, 0.26], [-200, 0]);
  const ingredient4Y = useTransform(scrollYProgress, [0.16, 0.28], [-200, 0]);
  const ingredient5Y = useTransform(scrollYProgress, [0.18, 0.30], [-200, 0]);
  const ingredient6Y = useTransform(scrollYProgress, [0.20, 0.32], [-200, 0]);
  
  const potScale = useTransform(scrollYProgress, [0.08, 0.15], [0, 1]);
  const flameScale = useTransform(scrollYProgress, [0.15, 0.25], [0, 1]);
  
  const mixRotate = useTransform(scrollYProgress, [0.22, 0.4], [0, 1080]);
  const bubbleOpacity = useTransform(scrollYProgress, [0.28, 0.35], [0, 1]);
  const steamOpacity = useTransform(scrollYProgress, [0.32, 0.42], [0, 1]);
  const dishOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const sparkleOpacity = useTransform(scrollYProgress, [0.45, 0.55], [0, 1]);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 cooking-pattern"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-display font-bold mb-4">
            The Art of <span className="text-gradient">Cooking</span>
          </h2>
          <p className="text-white/60 text-xl">Watch the magic happen as we prepare your meal</p>
        </motion.div>

        <div className="relative h-[600px] flex items-center justify-center">
          
          {/* Cooking Pot */}
          <motion.div
            style={{ scale: potScale }}
            className="relative z-20"
          >
            <motion.div
              className="w-80 h-80 rounded-full border-[12px] border-gray-700 bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-2xl flex items-center justify-center relative overflow-hidden"
              animate={{
                boxShadow: [
                  '0 0 40px rgba(251, 146, 60, 0.4)',
                  '0 0 80px rgba(251, 146, 60, 0.6)',
                  '0 0 40px rgba(251, 146, 60, 0.4)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {/* Mixing spoon animation */}
              <motion.div
                style={{ rotate: mixRotate }}
                className="text-7xl absolute"
              >
                �
              </motion.div>
              
              {/* Bubbling effect inside pot */}
              <motion.div
                style={{ opacity: bubbleOpacity }}
                className="absolute inset-0 flex items-center justify-center"
              >
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4 bg-primary-400/60 rounded-full"
                    style={{
                      left: `${30 + (i * 8)}%`,
                      bottom: '20%',
                    }}
                    animate={{
                      y: [0, -40, -80],
                      scale: [0.5, 1, 0],
                      opacity: [0.8, 0.6, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </motion.div>
            </motion.div>
            
            {/* Pot handles */}
            <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 w-12 h-16 border-8 border-gray-700 rounded-l-full"></div>
            <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 w-12 h-16 border-8 border-gray-700 rounded-r-full"></div>
          </motion.div>

          {/* Fire/Flames under the pot */}
          <motion.div
            style={{ scale: flameScale }}
            className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-10"
          >
            {[0, 1, 2, 3, 4].map((i) => (
              <motion.div
                key={i}
                className="absolute text-6xl"
                style={{ left: `${i * 40 - 80}px`, bottom: 0 }}
                animate={{
                  y: [0, -10, 0],
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut"
                }}
              >
                🔥
              </motion.div>
            ))}
          </motion.div>

          {/* Falling Ingredients - More variety */}
          <motion.div
            style={{ y: ingredient1Y, opacity: useTransform(scrollYProgress, [0.1, 0.22, 0.35], [0, 1, 0]) }}
            className="absolute left-[15%] top-0 text-6xl z-30"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 1, ease: "linear" }}
            >
              🌶️
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: ingredient2Y, opacity: useTransform(scrollYProgress, [0.12, 0.24, 0.35], [0, 1, 0]) }}
            className="absolute right-[15%] top-0 text-6xl z-30"
          >
            <motion.div
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 1.2, ease: "linear" }}
            >
              🧄
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: ingredient3Y, opacity: useTransform(scrollYProgress, [0.14, 0.26, 0.35], [0, 1, 0]) }}
            className="absolute left-[25%] top-0 text-6xl z-30"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 0.9, ease: "linear" }}
            >
              🧅
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: ingredient4Y, opacity: useTransform(scrollYProgress, [0.16, 0.28, 0.35], [0, 1, 0]) }}
            className="absolute right-[25%] top-0 text-5xl z-30"
          >
            <motion.div
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 1.3, ease: "linear" }}
            >
              🍅
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: ingredient5Y, opacity: useTransform(scrollYProgress, [0.18, 0.30, 0.35], [0, 1, 0]) }}
            className="absolute left-[35%] top-10 text-5xl z-30"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 1.1, ease: "linear" }}
            >
              🥬
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: ingredient6Y, opacity: useTransform(scrollYProgress, [0.20, 0.32, 0.35], [0, 1, 0]) }}
            className="absolute right-[35%] top-10 text-5xl z-30"
          >
            <motion.div
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 0.85, ease: "linear" }}
            >
              🫚
            </motion.div>
          </motion.div>

          {/* Rising Steam */}
          <motion.div
            style={{ opacity: steamOpacity }}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 z-40"
          >
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-5xl"
                style={{ left: `${(i - 4) * 40}px` }}
                animate={{
                  y: [0, -150],
                  opacity: [0.9, 0],
                  x: [(i % 2) * 10, (i % 2) * -10],
                  scale: [0.8, 1.2],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  delay: i * 0.25,
                  ease: "easeOut"
                }}
              >
                💨
              </motion.div>
            ))}
          </motion.div>

          {/* Final Delicious Dish with Sparkle Effect */}
          <motion.div
            style={{ opacity: dishOpacity }}
            className="absolute inset-0 flex items-center justify-center z-50"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-9xl relative"
            >
              🍛
              {/* Sparkles around the finished dish */}
              <motion.div style={{ opacity: sparkleOpacity }}>
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-3xl"
                    style={{
                      left: `${Math.cos((i * 30 * Math.PI) / 180) * 100}px`,
                      top: `${Math.sin((i * 30 * Math.PI) / 180) * 100}px`,
                    }}
                    animate={{
                      scale: [0, 1.5, 0],
                      rotate: [0, 180],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.1,
                    }}
                  >
                    ✨
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Ambient Sparkles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400 rounded-full"
            style={{
              left: `${15 + Math.random() * 70}%`,
              top: `${15 + Math.random() * 70}%`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random(),
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
        
        {/* Progress indicator text */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-white/40 text-sm"
            style={{ 
              opacity: useTransform(scrollYProgress, [0.1, 0.2], [0, 1])
            }}
          >
            Scroll to cook...
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default CookingAnimation;
