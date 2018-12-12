/**
 * @name main.js
 * @desc Point d'entrée principal dans l'application Javascript
 */
import { Login } from './../../src/user/login.class';
import { LoginController } from '../../SRC/User/login/loginController';

let title = document.getElementById('main-title');
title.innerHTML = 'Hello Javascript';



//Insance du contrôleur

const controller = new LoginController();
controller.getView();

// Créer une instance de Login
const login = new Login();