# slice.

### Description

slice. is an expense tracker that can be used to create budgets, track past/upcoming transactions, and clearly view budget status. The clean and simple design allows the user to focus on what matters the most, their budget. The awesome power of the Speechly API, which uses Machine Learning, allows the user to add/cancel transactions with their voice. The data is persistent across sessions allowing the user to keep track of transactions over a sustained period of time.  

Deployed Site: https://www.slicebudget.com/

### slice. in action
![slice.](sliceHome.png)

## Technologies Used

React (Hooks, ES6), Context API, Speechly, Material UI, Local Storage


## Demo


### speechly

The Speechly API required me to configure a model that would be deployed. Currently the model is quite simple, and can handle straightforward user speech, but the ability to expand this feature is incredible. The model is deployed, and then using the "@speechly/react-client" package, the slice. application is wrapped with the speechly container, allowing it's functionality to be used throughout the application. 
![speechly](speechlyTrain.png)


