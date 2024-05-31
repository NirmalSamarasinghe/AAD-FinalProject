import {UserModel} from "./model/UserModel.js";
import {UserAPI} from "./api/UserAPI.js";
import {LoginUser} from "./model/LoginUser.js";
// import {CustomerAPI} from "./api/CustomerAPI.js";
// import {EmployeeAPI} from "./api/EmployeeAPI.js";
// import jwt_decode from '../../assets/jquery/jwt-decode.min.js';




const userAPI = new UserAPI();
const userModel = new UserModel();
const loginUser = new LoginUser();
// const customerAPI = new CustomerAPI();
// const employeeAPI = new EmployeeAPI();



const role = document.getElementById('signup-role');
const email = document.getElementById('signup-email');
const password = document.getElementById('signup-password');
const signup_button = document.getElementById('signUpButton');

const Login_Email = document.getElementById('Login-Form-Input-UserEmail')
const Login_Password = document.getElementById('Login-Form-Input-Password')
const login_button = document.getElementById('signInButton');


signup_button.addEventListener('click', () => {
    userModel.role = role.value;
    userModel.email = email.value;
    userModel.password =  password.value;
    clearInputField();
    console.log(userModel)

    userAPI.signup(userModel)
        .then(response => {
            alert(`Success: ${response}`);
            clearInputField()
        })
        .catch(error => {
            alert(`Error: ${error.message}`);
            clearInputField()
        });
})

function clearInputField() {
    role.value = '';
    email.value = '';
    password.value = '';
}

login_button.addEventListener('click', (event) => {
    event.preventDefault();
    console.log('login')
    loginUser.email = Login_Email.value;
    loginUser.password =  Login_Password.value;
    console.log(loginUser)
    // clearInputField();


    userAPI.login(loginUser)
       .then(response => {
            alert(`Success: ${response}`);
             const token = JSON.parse(response);
//            const trimmedToken = response.split(' : ')[0];
//            const decodedToken = jwt_decode(token);
//            const username = decodedToken.username; // Adjust the key names based on your token structure
//            const role = decodedToken.role;         // Adjust the key names based on your token structure
//
//            // Set the username and role in the profile card
//            document.querySelector('.dashboard-dp-label').textContent = username;
//            document.querySelector('.dashboard-role').textContent = role;
            $('.sign-in-form').css('display', 'none');
            $('.sign-up-form').css('display', 'none');
            $('#form-main').css('display', 'none');
            $('#section').css('display', 'block');
            $('.form-customer').css('display', 'none');
            $('.form-dashboard').css('display', 'block');
            $('#dash-nav-item').addClass('active');
            $('#logout-nav-item').removeClass('active');
        })
       .catch(error => {
            alert(`Error: ${error.message}`);
            clearInputField()
        });
})