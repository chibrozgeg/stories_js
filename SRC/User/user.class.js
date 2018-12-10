/**
 * @name User
 * @desc Service de gestion des utilisateurs
 * @author Aélion
 * @version 1.0.0
 */

 class User {
     constructor() {}
        /** Définit le username de l'utilisateur 
         * @param {*} userName
        */
       setUserName(userName) {
           this.userName = userName;
       }
        setPassword(password) {
           this.password = password;
       }
       authenticate() {
           if (this.userName === 'Antoine' && this.password === 'password') {
               this.group = 'Administrateur';
            return true;
            }return false;   
           }
        
       
     }
 