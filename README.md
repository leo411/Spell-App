# Spell App 🪄🧙

Welcome to Spell-App.

Spell App is a single page React application where you can find a list of spells that are retrieved from the public domain [Dungeons & Dragons 5th Edition API](http://www.dnd5eapi.co/).

Clicking each card gives more information about a spell such as its description, its damage, its school...
Clicking the star on the right of the card saves the spell to a list of favorites.
A list of favorites can be found by clicking the star on the nav bar at the top left corner of the web app.

## This app uses:

1. React
2. Typescript
3. React-Router
4. Tailwind

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Typescript has been added for type safety and improved developer experience.

The codebase is organized into three pages, `Home`, `Spell` and `FavoriteSpell`. `Home` displays the list of spells. `Spell` displays information about the spell and `FavoriteSpell` displays a list of spells that has been saved as favorites.
React-Router is used to navigate between the pages.

All types for the app are organized under the `types.tsx` in the `src` folder

## Get started 🚀🚀

To run this project locally:

`npm install`

`npm start`

To run the tests:

`npm test`

To run a production build:

`npm run build`
