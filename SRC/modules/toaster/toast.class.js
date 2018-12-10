/**
 * @name Toast
 * @desc Affiche un toast (snackbar) "c'est un semi-popup"
 * @author Aélion
 * @version 1.0.0
 */

 class Toast {
     constructor(){
         //Paramètre de définition de la couleur de fond du toast
         this.backgroundClass = 'danger';

         //Durée d'affichage du toast en secondes
         this.duration = 3;
     }

     setBackground(cssClass) {
         this.backgroundClass = cssClass;
     }

     setDuration(duration) {
         this.duration = duration;
     }
        //On crée un objet nommé div en mémoire du pgm
     toastIt() {
         const toaster = $('<div>');
         //On lui ajoute les classes
         toaster
            .addClass(this.backgroundClass)
            .addClass('toast')
            .html('Hello toaster');

        //ajoute le toaster au document lui-même au niveau du body
        toaster.appendTo($('body'));
        
            //affiche pdt un certain temps
        setTimeout(
            function() {
                //ici, qd on arrive au bout de l'intervale de temps
                toaster.remove();
            },
            this.duration*1000
        )
     }
 }