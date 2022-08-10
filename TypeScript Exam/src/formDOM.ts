import { User } from "./user"

export function signInStateDOM() {
    return `
    <h1 class="header center orange-text">Login</h1>
        <div class="container">
          <label for="username"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="username" required>
      
          <label for="psw"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" required>
        </div>
      `
}

export function registrationStateDom() {
    return `
    <h1 class="header center orange-text">Registration</h1>
        <div class="container">
          <label for="firstName"><b>First Name</b></label>
          <input type="text" placeholder="Enter first name" name="firstName" required>
          <label for="lastName"><b>Last Name</b></label>
          <input type="text" placeholder="Enter last name" name="lastName" required>
          <label for="gender"><b>Gender</b></label>
          <input type="text" placeholder="Enter gender" name="gender" required>
          <label for="username"><b>Username</b></label>
          <input type="text" placeholder="Enter Username" name="username" required>
          <label for="password"><b>Password</b></label>
          <input type="password" placeholder="Enter Password" name="password" required>
          <label for="userPicture"><b>Picture</b></label>
          <input type="text" placeholder="imageURL" name="userPicture" required>
          <label for="description"><b>Description</b></label>
          <input type="text" placeholder="Enter your description" name="description">
        </div>
      `
}

export function loggedInStateDOM(user: User) {
    return `<h1>Congrats ${user.firstName} - ${user.userRole} You successfully logged in!</h1>`
}