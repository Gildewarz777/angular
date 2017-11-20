TP Angular
============
Pré-requis : 
- Installer les dépendances
`npm install`
ou 
`yarn install`

 **Instructions:**

1 - Se rendre dans le composant pizza-form

2 - Créer un tableau d'objet pizza. 
`interface pizza{
  name: string,
  prix: number,
  ingredients:string[]
}`

> Recommencer les opérations 2 et 3 pour la pâte et les extras

 `interface extra{
  name:string,
  prix:number,
  checked:boolean
}`

`interface pate{
  name: string,
  prix : number,
  checked: boolean
}`

3 - Afficher les pizzas, les pâtes et les extras dans le template html à l'aide d'une boucle for

4 - Afficher les ingrédients des pizzas au survol de leurs noms 

5 - Afficher visuellement le nombre de parts et le nombre de pizzas approprié en dessous du champs « Nombre de parts »
Astuce: on peut variabiliser l'url d'une image....

6 - Afficher le formulaire de saisie d'adresse au clic sur le bouton "Etape suivante" puis masquer ce même bouton

8 - Au clic sur le bouton de validation, masquer tous les éléments de la page, et afficher un message de remerciement (Merci PRENOM ! Votre commande sera livrée dans 15 minutes).

9 - Actualiser le total de la commande en fonction des éléments choisis.
Conseil: 
Pour chacun des elements qui constitue le prix, faire une fonction. Faire une derniere fonction qui calcule le prix total et qui est appelé à chaque fois que le prix est modifié

----------
Bonus:
Diviser le formulaire en plus petits composants et utiliser les services pour faire communiquer les composants entre eux

----------
AIDE // Code Snippets
---------------------

Récupérer les checkbox cochées : 
**côté template:**
`<input type="checkbox" [(ngModel)]="objet.checked" (ngModelChange)="fonctionDeCalcul()" [value]="objet.name">`
**côté controller:**
	`let temptab = this.tableau.filter(item => { return item.checked; });`
	
`[(ngModel)]="objet.checked" `vient changer la valeur checked de l'objet il ne reste donc plus qu'a parcourir le tableau et filtrer en fonction de la valeur de checked. temptab ne contient que les objets ayant une valeur checked == true.

En ce qui concerne les radio button la méthode pour les checkbox fonctionne mais les attributs checked doivent être reinitialisés

`let temptab = this.tableau.filter(item => { return item.checked; });
... je fais mes traitements et je conserve l'element checked dans une variable...
... je reinitialise tout les elements de tableau à checked = false;
`
