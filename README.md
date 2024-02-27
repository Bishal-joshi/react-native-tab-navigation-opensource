
# CustomTabNavigator React Native Component

## Overview

CustomTabNavigator is a customizable and animated tab navigation component for React Native. It allows you to create a tab navigation bar with smooth sliding animation between tabs. This component is designed to be easily integrated into your React Native projects, providing a visually appealing way to navigate between different sections or functionalities.

## Installation

To use the CustomTabNavigator component in your React Native project, follow these steps:

1. Install the required dependencies:

   ```bash
   npm install react-native-tab-navigation-opensource
use the code like this 

``` javascript

 import CustomTabNavigator from ' react-native-tab-navigation-opensource';
 const  MyScreen = () => { 
 const buttons = [ 
 { name: 'Tab 1', onPress: () =>  console.log('Tab 1 Pressed') }, 
 { name: 'Tab 2', onPress: () =>  console.log('Tab 2 Pressed') }, // Add more tabs as needed 
 ]; 

return ( 
			<CustomTabNavigator buttons={buttons} /> 
		); 

};

 export  default  MyScreen;`
 
 ```
 
## Props

The `CustomTabNavigator` component accepts the following props:

-   `buttons`: An array of objects, where each object represents a tab button. Each object should have a `name` (string) and an `onPress` (function) callback.
- The name and onPress is required field

Feel free to explore and customize the component further based on your project's requirements.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://chat.openai.com/c/LICENSE.md) file for details.