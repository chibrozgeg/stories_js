/**
 * @name Toast
 * @desc Affiche un toast (snackbar) "c'est un semi-popup"
 * @author Aélion
 * @version 1.0.0
 */

 class Toast {
     constructor(params){
         if (!params.hasOwnProperty('background')) {
             this.backgroundClass = 'danger';
         } else {
             this.backgroundClass = params.background;
         }

         if (!params.hasOwnProperty('duration')) {
            this.duration = 3;
        } else {
            this.duration = params.duration;
        }

        if (!params.hasOwnProperty('message')) {
            this.message = 'Default message';
        } else {
            this.message = params.message;
        }

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
            .html(this.message);

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