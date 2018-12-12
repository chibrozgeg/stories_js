/**
 * @name LoginController
 * @desc Contrôleur pour la gestion du formulaire de login
 * @author Antoine
 * @version 1.0.0
 */
export class LoginController {
    constructor() {
        //définit la vue pour le controleur
        this.view = './src/User/login/views/loginform.view.html';
    }
    //Méthode pour récup la vue à afficher
    getView() {
        //dit ou afficher la selection, app correspond à la basise app dans index
        const app = $('[app]');
        $.get(
            //il va cherhé la donnée view et le stock dans la nouvelle variable viewContent
            this.view,
            function(viewContent) {
                app.empty(); //vicde le contenu le cas échéant
                app.html(viewContent);
            }
        );
        
    }
}