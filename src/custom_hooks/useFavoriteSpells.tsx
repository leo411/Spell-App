import { useState } from "react";

export const useFavouriteSpells = (): [
  string[],
  (spellNameToToggle: string) => void
] => {
  const [favouriteSpells, setFavouriteSpells] = useState(
    JSON.parse(localStorage.getItem("mySpells") || "[]")
  );

  const toggleSpell = (spellName: string) => {
    const spellsSet = new Set(favouriteSpells);
    spellsSet.delete(spellName) || spellsSet.add(spellName);
    setFavouriteSpells(Array.from(spellsSet));
    localStorage.setItem("mySpells", JSON.stringify(Array.from(spellsSet)));
  };

  return [favouriteSpells, toggleSpell];
};

export const saveSpells = (name: string) => {
  const currentSpellList: string[] =
    JSON.parse(localStorage.getItem("mySpells") || "") || [];
  const spellsSet = new Set(currentSpellList);
  spellsSet.delete(name) || spellsSet.add(name);
  localStorage.setItem("mySpells", JSON.stringify(Array.from(spellsSet)));
};
