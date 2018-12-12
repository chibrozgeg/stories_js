/**
 * @name main.js
 * @desc Point d'entrée principal dans l'application Javascript
 */
import { Login } from './../../src/user/login.class';
import { LoginController } from '../../SRC/User/login/loginController';
import { StoriesController } from '../../SRC/User/login/stories/storiescontroller';

let title = document.getElementById('main-title');
title.innerHTML = 'Hello Javascript';



//Insance du login contrôleur

const controller = new LoginController();
controller.getView();


//Instance du stories ctrl
const control = new StoriesController();
control.getView();


// Créer une instance de Login
const login = new Login();