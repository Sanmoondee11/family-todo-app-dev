"use client";

import type React from "react";
import { useState } from "react";
import { usePokedex } from "../context/PokedexContext";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Header from "./Header";

const PokedexPage: React.FC = () => {
  const { caughtPokemon, selectPokemon, selectedPokemon, closeDetail } =
    usePokedex();
  const [selectedPokemonId, setSelectedPokemonId] = useState<number | null>(
    null
  );

  const handlePokemonClick = async (id: number) => {
    await selectPokemon(id);
    setSelectedPokemonId(id);
  };

  const handleCloseDetail = () => {
    closeDetail();
    setSelectedPokemonId(null);
  };

  const collectionProgress = (caughtPokemon.length / 1008) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-500 to-red-700 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          {/* <h1 className="text-3xl font-bold text-white">ポケモン図鑑</h1> */}
          <div>
            <Header />
          </div>
          <Link to="/home" className="btn btn-secondary">
            ホーム
          </Link>
        </div>
        <div className="bg-white rounded-lg p-4 mb-6">
          <p className="text-center mb-2">
            コレクション進捗: {caughtPokemon.length} / 1008 (
            {collectionProgress.toFixed(1)}%)
          </p>
          <progress
            className="progress progress-primary w-full"
            value={collectionProgress}
            max="100"
          ></progress>
        </div>
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 relative">
          {Array.from({ length: 1008 }, (_, i) => i + 1).map((id) => {
            const pokemon = caughtPokemon.find((p) => p.id === id);
            return (
              <motion.div
                key={id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`bg-white p-2 rounded-md shadow text-center ${
                  pokemon ? "opacity-100 cursor-pointer" : "opacity-30"
                }`}
                onClick={() => pokemon && handlePokemonClick(id)}
              >
                {pokemon ? (
                  <>
                    <img
                      src={pokemon.image || "/placeholder.svg"}
                      alt={pokemon.name}
                      className="w-full h-auto"
                    />
                    <p className="text-xs sm:text-sm font-semibold mt-2">
                      {pokemon.name}
                    </p>
                  </>
                ) : (
                  <>
                    <div className="w-full pb-[100%] bg-gray-200 rounded-full" />
                    <p className="text-xs sm:text-sm font-semibold mt-2">???</p>
                  </>
                )}
                <p className="text-xs text-gray-500">No.{id}</p>
              </motion.div>
            );
          })}
        </div>
        <AnimatePresence>
          {selectedPokemon && selectedPokemonId && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="fixed inset-0 flex items-center justify-center p-4 bg-black bg-opacity-50"
              onClick={handleCloseDetail}
            >
              <motion.div
                className="bg-white rounded-lg p-6 max-w-sm w-full relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={handleCloseDetail}
                  className="btn btn-circle btn-sm absolute top-2 right-2"
                >
                  ✕
                </button>
                <img
                  src={selectedPokemon.image || "/placeholder.svg"}
                  alt={selectedPokemon.name}
                  className="w-48 h-48 mx-auto mb-4 object-contain"
                />
                <h2 className="text-2xl font-bold mb-2 text-center">
                  {selectedPokemon.name}
                </h2>
                <p className="text-lg mb-2 text-center">
                  {selectedPokemon.category}
                </p>
                <p className="text-lg mb-4 text-center">
                  タイプ: {selectedPokemon.types.join(", ")}
                </p>
                <p className="text-sm text-gray-600">
                  {selectedPokemon.description}
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PokedexPage;
