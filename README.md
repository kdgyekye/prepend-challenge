# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


## Technologies Used
Typescript v4.4.2
Tailwind CSS 
Axios v0.25.0
CRACO 6.4.3
React Router Dom 6.2.1


## My Approach 

I used a single page(main.tsx) in my application which mounts when the application loads. React router dom is used to route to this page. All other functionality is embedded in this page component, and it is in turn a child component of App.tsx Below is a breakdown of the main components that comprise the application.

### `main.tsx`
It is responsible for rendering the list of all the pokemons in a paginated manner. It also handles the search functionality.
This component has one child component which renders the individual pokemons. It contains the API call to fetch the data from the API. This call is fired when the component mounts and when the skip and total states are set in order to refetch the data when a pagination command happens. Also when a search term is defined, the component should refetch the data with the search term passed to the url. The data is then passed to the child component(PokemonCard) which renders the pokemons in a card UI.


### `pokemonCard.tsx`
This component is a child component of main.tsx. It is responsible for rendering an individual pokemon in a card UI. The card contains the name, image, type and a short description of the pokemon. When the user clicks on the card, a modal component(ViewPokemon) pops up which gives more details about the pokemon. The call to fetch the pokemon details is only made when the user clicks on the card.

### `viewPokemon.tsx`
This component is a child component of pokemonCard. It is responsible for rendering the modal component. It contains the pokemon details like species, types, weight, moves and stats.
A boolean state is used to show and hide the modal.

### `pagination.tsx`
This component provides the UI for the pagination functionality. It is passed a skip state from a custom usePagination hook that sets the offset for the API call. Together with a util function addPageToRoute it pushes the page number to the page url and updates the state of the application.

## Future Work
Since I could not finish the challenge entirely, There are a few features I had to add to make it complete. Also there are some ommissions and mistakes I have to fix.

 ### `Search Feature`
The search feature is not working yet. I had to add a few lines of code to the main.tsx file to make it work. But the approach I was using can be seen clearly defined in the code. Also I intend to filter the search by different parameters like type, weight, height. Instead of just searching by name.

### `Card Images and Type`
The pokemon cards do not load the image immediately. This is because the API endpoint for getting all the pokemon does not contain the image url in the response. It has to be fetched separately. However, when you click on the card the image is loaded because the endpoint for the individual pokemon does contain the image url. I will have to modify the code to find a way to fetch the image url from the API and add it to the data of the individual pokemon before rendering the list. Alternatively I could just fetch and store the details of the individual pokemon once the card is rendered instead of clicking the card first so the image from this fetch can be passed to the image prop of the card immediately. The same goes for the type property of the card.

### `UI Improvments`
The UI can be improved in order to enrich the user experience of the application.


## Refactoring
I need to change the way some of the code is structured. For example the API call to get all the pokemon was moved from 'services/api' to the main component because I realised I would have to use redux to make the skip state global in order for the api.ts file to get access to it. But I decided using redux would take more time than I had to spend on the challenge and was not worth it. Thus I have to clean up the api.ts and remove it, and also move the other api calls to the component that needs them. So effectively service/api.ts will be taken off the project.

There also some unnecessary values, imports that is not used in the application. I have to clean those up. 

The overall goal of this is to make the code more readable and maintainable, and also remove warnings.


