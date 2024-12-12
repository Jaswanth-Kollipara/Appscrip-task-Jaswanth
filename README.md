As part of the Appscrip recruitment test I have done this front end project in a span of 2 days. 

Download the zip file from the "https://github.com/Jaswanth-Kollipara/Appscrip-task-Jaswanth.git" repository. Unpack the file. Move the folder to D:\ReactProjects, run "npm install" in the terminal to install all the packages. run "npm start" in the terminal to start the program.

After the application has begun it will move to the Home page. Where I have divided into 4 segments namely headder, footer, home headder and main containers. The headder, footer didn't contain any actions or functions in them. But I have made them responsive so that they will look different in different screen sizes. I have made them responsive for only two types of views namely desktop view and mobile view.

Headder part is from top to the second horizontal line in the web page. The code for it is there in the Headder component. Footer part is in the bottom of the web page. The part where the backgrond is black is the footer. The code for it is there in the Footer component

The home headder container is the part from second horizontal line to second horizontal line in the web page. In the desktop view you will get access to customizations by clicking on the show filter and hide them by clicking on hide filter. Both show filter and hide filter will toggle them selves means only one of them will be visible. In the mobile view you won't be able to use customizatins because you won't get access to both show filter and hide filter. It also consist of dropdown bar which I have integrated into seperate module named SelectCard. You can get access to that part of code in that component. The dropdown doesn't have any functionality other than for display or visual purposes.

The main container is again divided into two parts namely left and product container. Left conatiner is used for customizations and can be seen only after clicking on the show filter in the home headder container. You can also hide it by clicking on the hide filter. The customizations are also added for visual feature only. Eventhough you click on check box or do any thing they don't perform any operations since I didn't added any functionalities to them. The only operation they can do are by clicking on the down arrow on the ideal for it will open some more customizations and by clicking on the up arrow they will hide. Up arrow and Dowm arrow will toggle each other means only one of the can be visible at a time. It is present below the home headder container and to the left of the screen. The code for this part is there in the LeftCard component.

The products container as the name implies displays all the products. When the component is mounted it will call the getData() method to retrive the data using fetch command. When the fetching is in progress it will invoke renderLoadingView method to display a loader. When the fetching has failed it will invoke renderFailureView method to display the failure. When the fetching is succeded it will invoke renderProductDetailsView metod to display all the fetched data. Here the data has fetched using the mock api provided by the company. To diaplay every product I have used unorded list and used ProductCard component to make the data of each product to list elements by passing data using props. 

If you enter a invalid url in the browser or having any issues with the component switching it will navigate to the NotFound component and display an error message.

The main purpose of this project is to understand state management, page navigation, media queries, flex box.

I have used state for state management. I used React Router for navigating within the application.

To ensure the responsive design, I used media queries and flexbox for layouting. To make the html components display and disapper I have used dispay: flex and display: none.

The git repository of this project is: https://github.com/Jaswanth-Kollipara/Appscrip-task-Jaswanth.git

I have used gh-pages to deploy the application The deployed link is: https://jaswanth-kollipara.github.io/Appscrip-task-Jaswanth/

All the code required to run this project is uploaded to the above mentioned git repository. There you can get access to all the HTML, CSS, JS code files. please go through it.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
