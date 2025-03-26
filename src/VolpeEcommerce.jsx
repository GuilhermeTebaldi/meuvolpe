import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import LojaVolpe from "./LojaVolpe";

export default function VolpeEcommerce() {
  const [mostrarLoja, setMostrarLoja] = useState(false);

  return (
    <div className="flex items-center justify-center py-10">
      {!mostrarLoja && (
        <motion.button
          onClick={() => setMostrarLoja(true)}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="rounded-full bg-yellow-400 px-8 py-4 text-lg font-bold text-black shadow-lg transition hover:scale-105"
        >
          Acessar Loja VOLPE
        </motion.button>
      )}

      <AnimatePresence>
        {mostrarLoja && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <LojaVolpe />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
