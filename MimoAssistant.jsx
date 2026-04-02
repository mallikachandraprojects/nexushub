import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function MimoAssistant() {
  const [message, setMessage] = useState("Hi, I’m MIMO. Need help finding smart deals?");
  const [isWaving, setIsWaving] = useState(true);

  // Rotate messages (AI-like behavior)
  useEffect(() => {
    const messages = [
      "This one is a smart pick.",
      "Optimized for your needs.",
      "You might like this deal.",
      "High value for price.",
    ];

    const interval = setInterval(() => {
      const random = messages[Math.floor(Math.random() * messages.length)];
      setMessage(random);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Stop waving after first animation
  useEffect(() => {
    setTimeout(() => setIsWaving(false), 3000);
  }, []);

  return (
    <div style={styles.container}>
      
      {/* MIMO BODY */}
      <motion.div
        style={styles.robot}
        animate={{
          y: [0, -10, 0], // floating effect
        }}
        transition={{
          repeat: Infinity,
          duration: 3,
          ease: "easeInOut",
        }}
      >
        
        {/* HEAD */}
        <motion.div
          style={styles.head}
          animate={isWaving ? { rotate: [0, 15, -15, 0] } : {}}
          transition={{ duration: 1, repeat: isWaving ? 2 : 0 }}
        >
          {/* EYES */}
          <div style={styles.eyes}>
            <motion.div
              style={styles.eye}
              animate={{ scaleY: [1, 0.2, 1] }} // blinking
              transition={{ repeat: Infinity, duration: 2 }}
            />
            <motion.div
              style={styles.eye}
              animate={{ scaleY: [1, 0.2, 1] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          </div>
        </motion.div>

        {/* WAVE HAND */}
        {isWaving && (
          <motion.div
            style={styles.hand}
            animate={{ rotate: [0, 40, -20, 40, 0] }}
            transition={{ duration: 1 }}
          />
        )}
      </motion.div>

      {/* MESSAGE BOX */}
      <motion.div
        style={styles.messageBox}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {message}
      </motion.div>
    </div>
  );
}

const styles = {
  container: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    zIndex: 9999,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },

  robot: {
    width: "80px",
    height: "100px",
    borderRadius: "40px",
    background: "linear-gradient(145deg, #ffffff, #e6e6e6)",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
  },

  head: {
    width: "60px",
    height: "40px",
    background: "#111",
    borderRadius: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  eyes: {
    display: "flex",
    gap: "10px",
  },

  eye: {
    width: "10px",
    height: "10px",
    background: "#00eaff",
    borderRadius: "50%",
  },

  hand: {
    width: "10px",
    height: "40px",
    background: "#ccc",
    position: "absolute",
    right: "-10px",
    top: "30px",
    borderRadius: "5px",
    transformOrigin: "top",
  },

  messageBox: {
    marginTop: "10px",
    padding: "10px 14px",
    background: "#111",
    color: "#fff",
    borderRadius: "20px",
    fontSize: "12px",
    maxWidth: "160px",
    textAlign: "center",
  },
};
