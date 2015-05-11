/*
 * Created by Lilly Sun on 10.05.15.
 */


/***************
 *** CANVAS ***
 ***************/

window.addEventListener('load',function ()
    {
        //Récupérer l'objet canvas
        var elem = document.getElementById('canvasElem');
        if (!elem || !elem.getContext)
            {
                return;
            }

        // Récupérer le context 2D
        var context = elem.getContext('2d');
        if (!context)
            {
                return;
            }
    // Le navigateur est compatible, le contexte a bien été récupéré, on peut continuer !
    }, false);


/***************
 *** JEU ***
 ***************/

// Constantes
var nbr_Lignes = 5;
var nbr_BriquesParLigne = 8;
var briqueWidth = 48;
var briqueHeigth = 15;
var briqueSpace = 2;

// variables
var tabBriques; // tableau virtuel contenant les briques

//Fonction qui crée les briques
function createBriques (ctx, nbrLignes, nbrParLigne, largeur, hauteur, espace)
{
    // Virtuel : Initialisation des lignes de briques
    tabBriques = new Array (nbrLignes);

    for (var i = 0; i < nbrLignes; i++)
    {
        //Virtuel : Initialisation des briques de la ligne
        tabBriques[i] = new Array (nbrParLigne);

        //Visuel (Affichage) : On attribue une couleur aux briques de la ligne
        ctx.fillStyle = "rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")";

        for (var j=0; j < nbrParLigne; j++)
        {
            // Visuel : Afficher une nouvelle brique
            ctx.fillRect((j*(largeur+espace)),(i*(hauteur+espace)), largeur, hauteur);

            //Virtuel : On attribue à la case actuelle la valeur 1 = la brique existe encore
            tabBriques [i][j] =1;
        }
    }

    //briques initialisées !
    return 1;
}