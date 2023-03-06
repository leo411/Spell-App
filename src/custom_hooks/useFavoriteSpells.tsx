import { useState } from "react"

export const useFavouriteSpells = (): [
	string[],
	(spellNameToToggle: string) => void
] => {
	const [favouriteSpells, setFavouriteSpells] = useState(
		JSON.parse(localStorage.getItem("mySpells") || "[]")
	)

	const toggleSpell = (spellName: string) => {
		const spellsSet = new Set(favouriteSpells)
		spellsSet.delete(spellName) || spellsSet.add(spellName)
		setFavouriteSpells(Array.from(spellsSet))
		localStorage.setItem("mySpells", JSON.stringify(Array.from(spellsSet)))
	}

	return [favouriteSpells, toggleSpell]
}
