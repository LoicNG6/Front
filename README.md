# Front
Let's Talk - Front 

Technologies utilisées pour le projet:
    - Front : Vuejs, + Vuetify
    - Back : Php (sous Symfony 6)

Explication structurelle du projet:
    Il important de préciser que pour les deux parties (Back et Front) de l'application, nous avons décidé de réaliser 2 projets différents sous deux répertoires GIT. Nous sommes actuellement sur la partie Front du projet.

    - Tous les dossiers seront entièrement en lettres miniscules
    - Tous les fichiers ".vue" (VueJs) du projet commenceront par une majuscule
    - L'ensemble des fonctionnalités seront dans le dossier "components"
    - Une fonctionnalité sera entièrement stockée dans un unique dossier du dossier "components"
            par exemple l'authentification aura pour chemin : src > components > authentication
    - Les images et logo de l'application seront dans le dossier "assets" de "src" (nous pouvons   reprendre le même schéma que pour les fonctionnalités s'il y a beaucoup d'assets)

    CSS:
        - Pour le projet, nous aurons un fichier app.scss qui sera le fichier de style global. Ce dernier sera importé dans le composant "main.js" qui est le point d'entrée de l'application web afin que tous les autres composants de l'application puisse avoir accès à chaque style de "app.scss" sans l'importé à nouveau.

        - Bien qu'on ait conscience que l'ensemble des styles utilisés pour l'application ne seront pas tous globaux, il est important de prioriser leur factorisation. Cela n'empeche en rien la création exceptionnelle de style dans un composant précis.

Quelques tips & commandes:
    - Démarer le projet en local = npm run serve
    - Ne pas oublier le "npm i" à l'initialisation du projet
    - Souvent lorsqu'on change de branche (feature vers develop), penser à refaire un "npm run serve" pour éviter les erreur de compilation.