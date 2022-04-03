# Pokedut
> hari sabtu pergi ke mall
> gotta catch em all

## Hosting
- Netlify https://pokedut.netlify.app/

## Tools
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- Apollo GraphQL (InMemoryCache, useQuery)
- Emotion (CSS-in-JS, using `css` prop)
- Jest
- React Router

## Persisting my pokemon data
- stringify then save to `localStorage`
- rehydrate using parse and create new Map
- set the map as Context value to be provided to all child
### Why Map
- useful methods: `.has` (unique nickname checking), `.set` (add new pokemon)
- nickname won't collide with inherited prototype properties (no restrictions on key name, such as `toString` or `constructor` in Object prototype)

## Hooks used
- `useState`
- `useEffect`
- `useContext`
- `useParams`

## ETC
- React Sound (to play Pokemon Gen IV music. Diamond & Pearl FTW)
- React Fade In (list fade in effect) 
 
