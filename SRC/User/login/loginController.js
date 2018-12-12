/**
 * @name LoginController
 * @desc Contrôleur pour la gestion du formulaire de login
 * @author Antoine
 * @version 1.0.0
 */
export class LoginController {
    constructor() {
        //définit la vue pour le controleur
        this.view = './views/loginform.view.html';
    }
    //Méthode pour récup la vue à afficher
    getView() {
        $.get(
            //il va cherhé la donnée view et le stock dans la nouvelle variable viewContent
            this.view,
            function(viewContent) {
                console.log(viewContent);
            }
        )
    }
}