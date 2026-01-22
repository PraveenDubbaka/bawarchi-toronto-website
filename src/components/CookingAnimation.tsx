import { motion, useScroll, useTransform } from 'framer-motion';
import { Utensils, Clock, Award, Heart } from 'lucide-react';

const CookingAnimation = () => {
  const { scrollYProgress } = useScroll();
  
  // Animation values based on scroll
  const ingredient1Y = useTransform(scrollYProgress, [0.1, 0.25], [100, 0]);
  const ingredient2Y = useTransform(scrollYProgress, [0.12, 0.27], [100, 0]);
  const ingredient3Y = useTransform(scrollYProgress, [0.14, 0.29], [100, 0]);
  const bowlScale = useTransform(scrollYProgress, [0.15, 0.3], [0.8, 1]);
  const mixRotate = useTransform(scrollYProgress, [0.2, 0.35], [0, 720]);
  const dishOpacity = useTransform(scrollYProgress, [0.3, 0.4], [0, 1]);
  const steamOpacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);

  return (
    <div className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, rgba(251, 146, 60, 0.1) 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}></div>
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

        <div className="relative h-[500px] flex items-center justify-center">
          {/* Mixing Bowl */}
          <motion.div
            style={{ scale: bowlScale }}
            className="relative z-20"
          >
            <motion.div
              className="w-64 h-64 rounded-full border-8 border-primary-500/30 bg-gradient-to-br from-gray-800 to-gray-900 shadow-2xl flex items-center justify-center"
              animate={{
                boxShadow: [
                  '0 0 30px rgba(251, 146, 60, 0.3)',
                  '0 0 60px rgba(251, 146, 60, 0.5)',
                  '0 0 30px rgba(251, 146, 60, 0.3)',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div
                style={{ rotate: mixRotate }}
                className="text-6xl"
              >
                🥘
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Falling Ingredients */}
          <motion.div
            style={{ y: ingredient1Y }}
            className="absolute left-1/4 top-0 text-5xl z-10"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
            >
              🌶️
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: ingredient2Y }}
            className="absolute right-1/4 top-0 text-5xl z-10"
          >
            <motion.div
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
            >
              🧄
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: ingredient3Y }}
            className="absolute left-1/3 top-10 text-5xl z-10"
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 0.8, repeat: Infinity, ease: "linear" }}
            >
              🧅
            </motion.div>
          </motion.div>

          {/* Additional ingredients */}
          <motion.div
            style={{ y: useTransform(scrollYProgress, [0.16, 0.31], [100, 0]) }}
            className="absolute right-1/3 top-10 text-4xl z-10"
          >
            <motion.div
              animate={{ rotate: [0, -360] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            >
              🍅
            </motion.div>
          </motion.div>

          {/* Steam Effect */}
          <motion.div
            style={{ opacity: steamOpacity }}
            className="absolute top-0 left-1/2 transform -translate-x-1/2 z-30"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-4xl"
                style={{ left: `${i * 30}px` }}
                animate={{
                  y: [0, -100],
                  opacity: [0.7, 0],
                  x: [0, Math.random() * 20 - 10],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              >
                💨
              </motion.div>
            ))}
          </motion.div>

          {/* Final Dish */}
          <motion.div
            style={{ opacity: dishOpacity }}
            className="absolute inset-0 flex items-center justify-center z-25"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-8xl"
            >
              🍛
            </motion.div>
          </motion.div>
        </div>

        {/* Sparkles around the animation */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary-400 rounded-full"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CookingAnimation;
