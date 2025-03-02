"use client";

import type React from "react";
import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { getRandomPokemon } from "../utils/pokemonUtils";
import { usePokedex } from "../context/PokedexContext";
import type { Pokemon } from "../../types";
import Header from "./Header";

const PokemonGacha: React.FC = () => {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [revealProgress, setRevealProgress] = useState(0);
  const { addPokemon } = usePokedex();

  const handleGacha = useCallback(async () => {
    setIsRevealed(false);
    setIsAnimating(true);
    setRevealProgress(0);
    setPokemon(null);

    const randomPokemon = await getRandomPokemon();

    setPokemon(randomPokemon);
    setIsRevealed(true);

    const revealDuration = 2000;
    const intervalTime = 50;
    const steps = revealDuration / intervalTime;
    let currentStep = 0;

    const revealInterval = setInterval(() => {
      currentStep++;
      setRevealProgress(currentStep / steps);

      if (currentStep >= steps) {
        clearInterval(revealInterval);
        setIsAnimating(false);
        addPokemon(randomPokemon);
      }
    }, intervalTime);
  }, [addPokemon]);

  useEffect(() => {
    if (pokemon) {
      const img = new Image();
      img.src = pokemon.image;
    }
  }, [pokemon]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-sky-300 to-sky-500 overflow-hidden p-4">
      {/* <h1 className="text-3xl sm:text-4xl font-bold mb-6 text-white drop-shadow-lg">
        ポケモンガチャ
      </h1> */}
      <div>
        <Header />
      </div>
      <div className="w-full max-w-sm bg-white/10 backdrop-blur-md rounded-xl p-4 sm:p-6 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-sky-200 via-sky-300 to-sky-400 opacity-30 animate-gradient-x"></div>
        <div className="pokemon-display-area h-64 sm:h-80">
          <AnimatePresence mode="wait">
            {pokemon && isRevealed && (
              <motion.div
                key={pokemon.id}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ duration: 0.5 }}
                className="relative z-10 flex flex-col items-center justify-center h-full"
              >
                <div className="flex-1 flex items-center justify-center">
                  <motion.img
                    src={pokemon.image || "/placeholder.svg"}
                    alt={pokemon.name}
                    className="w-48 h-48 sm:w-64 sm:h-64 object-contain transition-all duration-500 pokemon-image"
                    initial={{
                      filter: "brightness(0) contrast(1)",
                      opacity: 0.5,
                    }}
                    animate={{
                      filter: `brightness(${revealProgress}) contrast(${
                        0.5 + revealProgress * 0.5
                      })`,
                      opacity: 0.5 + revealProgress * 0.5,
                    }}
                    transition={{ duration: 2 }}
                  />
                </div>
                <AnimatePresence>
                  {revealProgress > 0.7 && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className="text-center mt-2 absolute bottom-0 left-0 right-0"
                    >
                      <h2 className="text-xl sm:text-2xl font-bold mb-1 text-white drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]">
                        {pokemon.name}
                      </h2>
                      <p className="text-sm sm:text-base text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
                        {pokemon.category}
                      </p>
                      <p className="text-sm sm:text-base text-white drop-shadow-[0_1px_1px_rgba(0,0,0,0.3)]">
                        タイプ: {pokemon.types.join(", ")}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
        <button
          onClick={handleGacha}
          disabled={isAnimating}
          className="btn btn-primary px-6 py-3 text-lg font-bold"
        >
          ポケモンを引く
        </button>
        <Link
          to="/pokedex"
          className="btn btn-secondary px-6 py-3 text-lg font-bold"
        >
          図鑑
        </Link>
      </div>
    </div>
  );
};
export default PokemonGacha;
