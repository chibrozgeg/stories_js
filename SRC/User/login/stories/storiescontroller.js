/**
 * @name StoriesController
 * @desc Contrôleur pour la gestion du formulaire stories
 * @author Antoine
 * @version 1.0.0
 */
export class StoriesController {
    constructor() {
        //définit la vue pour le controleur
        this.view = './src/User/login/views/storiescontroller.html';  
    }
    //Méthode pour récup la vue à afficher
    getView() {
        //dit ou afficher la selection, app correspond à la basise app dans index
        const app = $('[app2]');
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




/** <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Titre</th>
      <th scope="col">Début</th>
      <th scope="col">Fin prévue</th>
      <th scope="col">Business Value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Titre1</td>
      <td>Début1</td>
      <td>Fin1</td>
      <td>BV1</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Titre2</td>
      <td>Début2</td>
      <td>Fin2</td>
      <td>BV2</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Titre3</td>
      <td>Début3</td>
      <td>Fin3</td>
      <td>BV3</td>
    </tr>
  </tbody>
</table>*/