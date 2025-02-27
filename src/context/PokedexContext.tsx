"use client";

import type React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import type { Pokemon, PokemonDetail } from "../../types";

interface PokedexContextType {
  caughtPokemon: Pokemon[];
  addPokemon: (pokemon: Pokemon) => void;
  selectedPokemon: PokemonDetail | null;
  selectPokemon: (id: number) => Promise<void>;
  closeDetail: () => void;
}

const PokedexContext = createContext<PokedexContextType | undefined>(undefined);

export const usePokedex = (): PokedexContextType => {
  const context = useContext(PokedexContext);
  if (!context) {
    throw new Error("usePokedex must be used within a PokedexProvider");
  }
  return context;
};

export const PokedexProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [caughtPokemon, setCaughtPokemon] = useState<Pokemon[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetail | null>(
    null
  );

  useEffect(() => {
    const savedPokemon = localStorage.getItem("caughtPokemon");
    if (savedPokemon) {
      setCaughtPokemon(JSON.parse(savedPokemon));
    }
  }, []);

  const addPokemon = (pokemon: Pokemon) => {
    setCaughtPokemon((prev) => {
      const updated = [...prev, pokemon].sort((a, b) => a.id - b.id);
      const uniquePokemon = updated.filter(
        (pokemon, index, self) =>
          index === self.findIndex((t) => t.id === pokemon.id)
      );
      localStorage.setItem("caughtPokemon", JSON.stringify(uniquePokemon));
      return uniquePokemon;
    });
  };

  const selectPokemon = async (id: number) => {
    const pokemon = caughtPokemon.find((p) => p.id === id);
    if (pokemon) {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${id}`
      );
      const data = await response.json();
      const description =
        data.flavor_text_entries.find(
          (entry: { language: { name: string } }) =>
            entry.language.name === "ja"
        )?.flavor_text || "説明が見つかりません。";
      setSelectedPokemon({ ...pokemon, description });
    }
  };

  const closeDetail = () => {
    setSelectedPokemon(null);
  };

  return (
    <PokedexContext.Provider
      value={{
        caughtPokemon,
        addPokemon,
        selectedPokemon,
        selectPokemon,
        closeDetail,
      }}
    >
      {children}
    </PokedexContext.Provider>
  );
};
