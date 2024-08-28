# Github Profile Finder Project using react

## Description :

Github Profile Finder project used to provide a behaviour of dynamic search functionality based on user typed github username.

Here I implemented the Github Profile Finder Project using business logic of parent component `GithubProfileFinder` takses an username as a input value then fetch the necessary details from :

> ` `https://api.github.com/${username}` `

then store these values as state value then passing these user details as prop values to `User` component.

On child component {`User`} we extract the values like {`avatar_url, followers, following, public_repos, name, login, created_at`} then use this to provide required Ui page finally render it.

Whenever user types or changes username it updates the username state then if they clicks search it fetch corresponding github user with concurrent details.

## Random Github Users Profile :

![alt text](./images/image1.png)

![alt text](./images/image2.png)

![alt text](./images/image3.png)
