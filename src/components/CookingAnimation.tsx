import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Flame, Sparkles } from 'lucide-react';

const CookingAnimation = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  // Smooth animation values
  const potScale = useTransform(scrollYProgress, [0, 0.3], [0.5, 1]);
  const potY = useTransform(scrollYProgress, [0, 0.3], [100, 0]);
  const potOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);
  
  const ingredientsY = useTransform(scrollYProgress, [0.2, 0.5], [-300, 0]);
  const ingredientsOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.6], [0, 1, 0]);
  
  const flameOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const mixRotate = useTransform(scrollYProgress, [0.4, 0.7], [0, 1080]);
  
  const steamOpacity = useTransform(scrollYProgress, [0.5, 0.7], [0, 1]);
  const bubbleOpacity = useTransform(scrollYProgress, [0.45, 0.65], [0, 1]);
  
  const dishScale = useTransform(scrollYProgress, [0.7, 0.95], [0, 1]);
  const dishOpacity = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);
  
  const ingredients = [
    { name: 'Spices', color: 'from-red-500 to-orange-500' },
    { name: 'Herbs', color: 'from-green-500 to-emerald-500' },
    { name: 'Onion', color: 'from-purple-400 to-pink-400' },
    { name: 'Tomato', color: 'from-red-600 to-red-400' },
    { name: 'Garlic', color: 'from-yellow-200 to-white' },
    { name: 'Ginger', color: 'from-amber-400 to-yellow-500' },
  ];

  return (
    <div ref={containerRef} className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black py-20">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="cooking-pattern absolute inset-0"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <h2 className="text-5xl md:text-7xl font-display font-bold mb-6">
            The Art of <span className="text-gradient">Cooking</span>
          </h2>
          <p className="text-white/60 text-xl md:text-2xl">Scroll to watch the magic happen</p>
        </motion.div>

        {/* Main Animation Area */}
        <div className="relative h-[700px] flex items-center justify-center">
          
          {/* Cooking Pot */}
          <motion.div
            style={{ scale: potScale, y: potY, opacity: potOpacity }}
            className="relative z-20"
          >
            {/* Pot Body */}
            <motion.div
              className="w-96 h-96 rounded-full border-[16px] border-gray-700 bg-gradient-to-br from-gray-800 via-gray-900 to-black shadow-2xl flex items-center justify-center relative overflow-visible"
              animate={{
                boxShadow: [
                  '0 0 60px rgba(251, 146, 60, 0.3)',
                  '0 0 100px rgba(251, 146, 60, 0.5)',
                  '0 0 60px rgba(251, 146, 60, 0.3)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {/* Pot rim highlight */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-[90%] h-8 bg-gray-600 rounded-full"></div>
              
              {/* Mixing spoon */}
              <motion.div
                style={{ rotate: mixRotate }}
                className="absolute w-32 h-32 flex items-center justify-center"
              >
                <div className="w-24 h-6 bg-gradient-to-r from-amber-700 to-amber-900 rounded-full transform rotate-45 shadow-lg"></div>
                <div className="absolute w-12 h-12 bg-gradient-to-br from-gray-400 to-gray-600 rounded-full"></div>
              </motion.div>
              
              {/* Bubbles */}
              <motion.div
                style={{ opacity: bubbleOpacity }}
                className="absolute inset-0"
              >
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-6 h-6 bg-primary-400/40 rounded-full border-2 border-primary-300/60"
                    style={{
                      left: `${20 + (i * 6)}%`,
                      bottom: '15%',
                    }}
                    animate={{
                      y: [0, -60, -120],
                      scale: [0.3, 0.8, 0],
                      opacity: [0.8, 0.4, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.2,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </motion.div>

              {/* Cooking contents glow */}
              <motion.div
                style={{ opacity: bubbleOpacity }}
                className="absolute inset-0 bg-gradient-to-t from-primary-500/20 via-accent-500/10 to-transparent rounded-full"
                animate={{
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
              />
            </motion.div>
            
            {/* Pot handles */}
            <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 w-16 h-20 border-[12px] border-gray-700 rounded-l-full bg-gray-800/50"></div>
            <div className="absolute -right-12 top-1/2 transform -translate-y-1/2 w-16 h-20 border-[12px] border-gray-700 rounded-r-full bg-gray-800/50"></div>
          </motion.div>

          {/* Flames */}
          <motion.div
            style={{ opacity: flameOpacity }}
            className="absolute bottom-16 left-1/2 transform -translate-x-1/2 z-10 flex gap-2"
          >
            {[...Array(7)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  y: [0, -15, 0],
                  scale: [1, 1.3, 1],
                }}
                transition={{
                  duration: 0.6 + (i * 0.1),
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut"
                }}
              >
                <Flame 
                  className="w-12 h-12 text-orange-500 fill-orange-500" 
                  style={{
                    filter: 'drop-shadow(0 0 10px rgba(249, 115, 22, 0.8))'
                  }}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Falling Ingredients */}
          <motion.div
            style={{ y: ingredientsY, opacity: ingredientsOpacity }}
            className="absolute top-0 w-full flex justify-around items-start z-30 px-20"
          >
            {ingredients.map((ingredient, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: -100 }}
                animate={{ 
                  rotate: [0, 360],
                  y: [0, 10, 0],
                }}
                transition={{
                  rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                  y: { duration: 1.5, repeat: Infinity, delay: i * 0.2 }
                }}
                className="flex flex-col items-center"
              >
                <motion.div 
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${ingredient.color} flex items-center justify-center text-2xl font-bold text-white shadow-2xl`}
                  whileHover={{ scale: 1.2 }}
                  style={{
                    boxShadow: '0 0 20px rgba(251, 146, 60, 0.5)'
                  }}
                >
                  <div className="w-8 h-8 bg-white/30 rounded-full"></div>
                </motion.div>
                <span className="text-white/60 text-xs mt-2 font-semibold">{ingredient.name}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Steam */}
          <motion.div
            style={{ opacity: steamOpacity }}
            className="absolute top-8 left-1/2 transform -translate-x-1/2 z-40 w-full flex justify-center"
          >
            {[...Array(10)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{ left: `${(i - 5) * 40}px` }}
                animate={{
                  y: [0, -200],
                  opacity: [0.8, 0],
                  x: [(i % 2) * 20, (i % 2) * -20],
                  scale: [0.5, 1.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeOut"
                }}
              >
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm"></div>
              </motion.div>
            ))}
          </motion.div>

          {/* Final Dish */}
          <motion.div
            style={{ opacity: dishOpacity, scale: dishScale }}
            className="absolute inset-0 flex flex-col items-center justify-center z-50"
          >
            <motion.div
              animate={{ 
                scale: [1, 1.05, 1],
                y: [0, -10, 0],
              }}
              transition={{ 
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="relative"
            >
              {/* Dish plate */}
              <div className="w-56 h-56 bg-gradient-to-br from-white via-gray-100 to-gray-200 rounded-full shadow-2xl flex items-center justify-center border-8 border-gray-300">
                <div className="w-44 h-44 bg-gradient-to-br from-orange-600 via-red-600 to-amber-700 rounded-full flex items-center justify-center shadow-inner">
                  <div className="w-36 h-36 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-full opacity-60"></div>
                </div>
              </div>
              
              {/* Sparkles around dish */}
              {[...Array(16)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${Math.cos((i * 22.5 * Math.PI) / 180) * 140 + 110}px`,
                    top: `${Math.sin((i * 22.5 * Math.PI) / 180) * 140 + 110}px`,
                  }}
                  animate={{
                    scale: [0, 1.5, 0],
                    rotate: [0, 180, 360],
                    opacity: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.125,
                  }}
                >
                  <Sparkles className="w-6 h-6 text-yellow-400 fill-yellow-400" />
                </motion.div>
              ))}
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-2xl font-bold text-gradient mt-8"
            >
              Delicious Meal Ready!
            </motion.p>
          </motion.div>
        </div>

        {/* Ambient Particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400 rounded-full"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
            }}
            animate={{
              scale: [0, 1.5, 0],
              opacity: [0, 0.8, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CookingAnimation;
