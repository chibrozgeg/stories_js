class Login {
    constructor() {
        //$ est le raccourcis jquery et document est le selecteur, attr (attribute) est la méthode (de jquery) et on définir l'attribue entre (). 
        //dans l'idex c'est le mot entre les balises titre. le identifiez vous sera la nouvelle valeur du titre.
        $(document).attr('title', 'Identifiez-vous');

        //modif le titre de la page
        $('#main-title').html('Identifiez-vous');

        //Définition du listener sur le formulaire, le listener a été défini juste en dessous (ce qu'in fait) et est appelé ds le constructor pour être exécuté par défault.
        this.formListener();
    }
    /**
    * Gestionnaire d'événement sur le formulaire login
    * @param void
    * @return void
    */
    formListener() {
        $('#loginForm').on(
            'keyup',
            //CallBack : intervient ssi l'événement défini survient (ici c'est un changement que l'on a defini par change)
            function(event) {
                //verif le contenu des champs
                const login = $('[name="loginField"]');
                const password = $('[name="passwordField"]');

                // Est-ce que les 2 champs sont remplis le bouton est actif, sinon on lui précise de le désavtiver
                if (password.val() !== '' && login.val().length >= 5 ) {
                    $('#btnLogin').removeAttr('disabled');
                } else {
                    $('#btnLogin').attr('disabled', 'disabled');
                }

                console.log('Login : ' + login.val() + password.val());
            }
        );
    }
}