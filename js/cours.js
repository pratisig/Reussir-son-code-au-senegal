// Données des modules de cours
const modules = [
    {
        id: 'panneaux-danger',
        icon: '⚠️',
        title: 'Panneaux de danger',
        desc: 'Reconnaître et comprendre les panneaux triangulaires qui annoncent un danger',
        lessons: 8,
        duration: '15 min',
        content: `
            <h2>🔺 Panneaux triangulaires de danger</h2>
            <div class="info-box">
                <strong>💡 À retenir :</strong> Les panneaux de danger sont TOUJOURS de forme triangulaire avec bordure rouge. Ils vous obligent à <strong>ralentir et être attentif</strong>.
            </div>

            <h3>1. Virages et courbes</h3>
            <p>Ces panneaux annoncent des virages qui nécessitent de réduire sa vitesse :</p>
            <ul>
                <li><strong>Virage à droite/gauche</strong> : Un seul virage serré</li>
                <li><strong>Série de virages</strong> : Plusieurs virages successifs (lacets)</li>
                <li><strong>Conduite à adopter</strong> : Ralentir AVANT le virage, ne pas freiner dans le virage</li>
            </ul>

            <h3>2. Relief de la chaussée</h3>
            <ul>
                <li><strong>Dos d'âne ou cassis</strong> : Bosse ou creux sur la route</li>
                <li><strong>Ralentisseur</strong> : Zone volontairement surélevée pour forcer à ralentir</li>
                <li><strong>Descente dangereuse</strong> : Pente importante (pourcentage indiqué)</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Attention :</strong> En descente, vérifiez vos freins et utilisez le frein moteur (rétrograder). Ne restez jamais au point mort !
            </div>

            <h3>3. État de la chaussée</h3>
            <ul>
                <li><strong>Chaussée glissante</strong> : Route huileuse, mouillée ou sablonneuse</li>
                <li><strong>Chutes de pierres</strong> : Risque d'éboulement (fréquent en zone rocheuse)</li>
                <li><strong>Rétrécissement</strong> : La route devient plus étroite</li>
            </ul>

            <h3>4. Passages et croisements</h3>
            <p>Zones à forte vigilance au Sénégal :</p>
            <ul>
                <li><strong>Passage piétons</strong> : Très fréquent en ville (Dakar, Thiès, Saint-Louis)</li>
                <li><strong>Passage d'enfants</strong> : Près des écoles - RALENTIR IMPÉRATIVEMENT</li>
                <li><strong>Passage d'animaux domestiques</strong> : Vaches, chèvres, moutons (zones rurales)</li>
                <li><strong>Passage d'animaux sauvages</strong> : Zones forestières (Casamance, Niokolo-Koba)</li>
                <li><strong>Circulation dans les deux sens</strong> : Fin de route à sens unique</li>
            </ul>
            <div class="success-box">
                <strong>✅ Conseil spécial Sénégal :</strong> Sur les routes nationales (N1, N2, N3), soyez particulièrement vigilant aux animaux qui traversent, surtout tôt le matin et en fin de journée.
            </div>

            <h3>5. Autres dangers</h3>
            <ul>
                <li><strong>Débouché de cyclistes</strong> : Zone fréquentée par les vélos</li>
                <li><strong>Feux tricolores</strong> : Intersection avec feux (rares hors grandes villes)</li>
                <li><strong>Vent latéral</strong> : Risque de déport (zones côtières, ponts)</li>
                <li><strong>Danger non spécifié</strong> : Point d'exclamation = danger variable</li>
            </ul>

            <h2>🚦 Conduite à adopter</h2>
            <ol>
                <li><strong>RALENTIR</strong> dès que vous voyez le panneau</li>
                <li><strong>SCANNER</strong> la zone : regardez loin devant</li>
                <li><strong>ANTICIPER</strong> : préparez-vous à freiner ou éviter</li>
                <li><strong>ADAPTER</strong> votre vitesse aux conditions (pluie, nuit)</li>
            </ol>
        `
    },
    {
        id: 'panneaux-priorite',
        icon: '🔺',
        title: 'Panneaux de priorité',
        desc: 'Maîtriser les règles de priorité aux intersections',
        lessons: 6,
        duration: '12 min',
        content: `
            <h2>🛑 Les règles de priorité</h2>
            <div class="info-box">
                <strong>💡 Principe clé :</strong> La priorité est LA règle la plus importante pour éviter les accidents aux intersections. Au Sénégal, le non-respect de la priorité est une cause majeure d'accidents.
            </div>

            <h3>1. Priorité à droite (règle générale)</h3>
            <p>En l'absence de signalisation, vous devez <strong>céder le passage aux véhicules venant de votre droite</strong>.</p>
            <div class="warning-box">
                <strong>⚠️ Important :</strong> Cette règle s'applique à TOUS les croisements sans signalisation, même dans les petites rues de quartier à Dakar, Rufisque, ou Mbour.
            </div>

            <h3>2. Cédez le passage</h3>
            <p><strong>Panneau triangulaire pointé vers le bas</strong> avec bordure rouge et fond blanc.</p>
            <ul>
                <li>Vous devez <strong>ralentir</strong> et céder le passage</li>
                <li>Arrêt OBLIGATOIRE si un véhicule arrive</li>
                <li>Ne bloquez JAMAIS l'intersection</li>
            </ul>

            <h3>3. Stop - Arrêt obligatoire</h3>
            <p><strong>Panneau octogonal ROUGE</strong> avec inscription "STOP".</p>
            <ul>
                <li><strong>Arrêt TOTAL et OBLIGATOIRE</strong>, même si la voie semble libre</li>
                <li>Marquez l'arrêt à la ligne blanche</li>
                <li>Vérifiez à gauche, à droite, puis à gauche encore</li>
                <li>Redez-vous seulement quand la voie est COMPLÈTEMENT libre</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Grillage de stop au Sénégal :</strong> Très dangereux et sanctionné ! Nombreux accidents mortels aux stops de Pikine, Guédiawaye, et sur les routes nationales.
            </div>

            <h3>4. Route prioritaire</h3>
            <p><strong>Panneau losange jaune</strong> avec bordure blanche.</p>
            <ul>
                <li>Vous êtes sur une route prioritaire</li>
                <li>Les véhicules des routes latérales doivent vous céder le passage</li>
                <li><strong>ATTENTION :</strong> Restez vigilant, certains conducteurs ne respectent pas toujours cette règle</li>
            </ul>

            <h3>5. Fin de priorité</h3>
            <p><strong>Losange jaune barré</strong> : Vous n'êtes plus prioritaire, revenez à la règle de priorité à droite.</p>

            <h3>6. Rond-point (sens giratoire)</h3>
            <div class="info-box">
                <strong>🔄 Règle au Sénégal :</strong> Dans un rond-point, les véhicules DÉJÀ engagés dans le rond-point sont prioritaires. Vous devez céder le passage avant d'entrer.
            </div>
            <ul>
                <li><strong>Avant d'entrer :</strong> Ralentir, regarder à gauche, céder le passage</li>
                <li><strong>Dans le rond-point :</strong> Rester sur votre voie, ne pas s'arrêter</li>
                <li><strong>Pour sortir :</strong> Mettre le clignotant à droite AVANT votre sortie</li>
            </ul>

            <h2>🚦 Priorités spéciales</h2>
            <h3>Véhicules prioritaires</h3>
            <p>Ces véhicules ont TOUJOURS la priorité, vous devez vous ranger sur le côté :</p>
            <ul>
                <li>🚑 <strong>Ambulances</strong> (gyroph are bleu + sirène)</li>
                <li>🚒 <strong>Pompiers</strong> (gyroph are rouge + sirène)</li>
                <li>🚓 <strong>Police/Gendarmerie</strong> (gyroph are bleu + sirène)</li>
                <li>🚌 <strong>Convois officiels</strong> (Présidence, ministres)</li>
            </ul>
            <div class="success-box">
                <strong>✅ Bon réflexe :</strong> Dès que vous entendez une sirène, ralentissez, regardez dans vos rétroviseurs et rangez-vous sur le côté droit.
            </div>
        `
    },
    {
        id: 'panneaux-interdiction',
        icon: '🚫',
        title: 'Panneaux d\'interdiction',
        desc: 'Comprendre les interdictions de circulation et de stationnement',
        lessons: 10,
        duration: '18 min',
        content: `
            <h2>🚫 Panneaux circulaires d'interdiction</h2>
            <div class="info-box">
                <strong>💡 Reconnaissance :</strong> Les panneaux d'interdiction sont CIRCULAIRES avec bordure ROUGE. Ils interdisent une action ou l'accès à certains véhicules.
            </div>

            <h3>1. Interdictions de circulation</h3>
            <ul>
                <li><strong>Sens interdit</strong> : Cercle rouge avec barre horizontale blanche - Accès interdit dans ce sens</li>
                <li><strong>Circulation interdite</strong> : Cercle rouge vide - Accès interdit à TOUS les véhicules</li>
                <li><strong>Interdit de tourner à gauche/droite</strong> : Flèche barrée dans le sens interdit</li>
                <li><strong>Demi-tour interdit</strong> : Demi-cercle avec flèche barrée</li>
            </ul>

            <h3>2. Limitations de vitesse</h3>
            <p><strong>Cercle rouge avec chiffre noir sur fond blanc</strong></p>
            <div class="warning-box">
                <strong>⚠️ Vitesses légales au Sénégal :</strong>
                <ul style="margin-top:.5rem;">
                    <li><strong>En agglomération :</strong> 50 km/h (Dakar, Thiès, Ziguinchor...)</li>
                    <li><strong>Hors agglomération :</strong> 90 km/h (routes nationales)</li>
                    <li><strong>Autoroute à péage :</strong> 110 km/h (Dakar-Diamniadio, Dakar-Mbour)</li>
                </ul>
            </div>
            <p><strong>Sanctions :</strong> Les excès de vitesse sont sanctionnés par des amendes et retrait de points.</p>

            <h3>3. Interdiction de dépasser</h3>
            <ul>
                <li><strong>Panneau :</strong> Deux voitures côte à côte (rouge et noire) barrées</li>
                <li><strong>Signification :</strong> Interdit de dépasser tout véhicule à moteur</li>
                <li><strong>Exception :</strong> Vous pouvez dépasser les deux-roues (vélos, motos sans side-car)</li>
            </ul>

            <h3>4. Interdictions sonores</h3>
            <p><strong>Klaxon barré</strong> : Usage de l'avertisseur sonore interdit</p>
            <ul>
                <li>Zones hospitalières (Hôpital Principal Dakar, Hôpital de Fann...)</li>
                <li>Zones scolaires</li>
                <li>Certains quartiers résidentiels</li>
            </ul>
            <div class="success-box">
                <strong>✅ Bon à savoir :</strong> À Dakar, l'usage abusif du klaxon est une nuisance fréquente. Respectez ces zones de silence !
            </div>

            <h3>5. Arrêt et stationnement</h3>
            <h4>Stationnement interdit</h4>
            <ul>
                <li><strong>Panneau :</strong> Cercle rouge avec barre diagonale bleue</li>
                <li><strong>Signification :</strong> Vous ne pouvez PAS vous garer, mais pouvez vous arrêter momentanément (déposer quelqu'un)</li>
            </ul>

            <h4>Arrêt interdit</h4>
            <ul>
                <li><strong>Panneau :</strong> Cercle rouge avec deux barres diagonales bleues (X)</li>
                <li><strong>Signification :</strong> Vous ne pouvez NI vous arrêter NI stationner (même pour 30 secondes)</li>
                <li><strong>Zones concernées :</strong> Arrêts de bus, passages piétons, sorties d'urgence</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Sanctions :</strong> Stationnement interdit à Dakar = risque de mise en fourrière + amende importante (notamment sur la Corniche, Plateau, Alm adies).
            </div>

            <h3>6. Accès interdit à certains véhicules</h3>
            <p>Panneaux avec pictogrammes de véhicules barrés :</p>
            <ul>
                <li><strong>Accès interdit aux véhicules à moteur</strong> : Voiture barrée</li>
                <li><strong>Interdit aux poids lourds</strong> : Camion barré (> 3,5 tonnes)</li>
                <li><strong>Interdit aux piétons</strong> : Silhouette barrée (autoroutes)</li>
                <li><strong>Interdit aux cycles</strong> : Vélo barré</li>
                <li><strong>Interdit aux animaux</strong> : Utilisé en zones urbaines</li>
            </ul>

            <h3>7. Limitations physiques</h3>
            <ul>
                <li><strong>Hauteur limitée :</strong> Tunnels, ponts (ex: 3,5m)</li>
                <li><strong>Largeur limitée :</strong> Routes étroites</li>
                <li><strong>Poids limité :</strong> Ponts fragiles</li>
            </ul>

            <h2>🚫 Fin d'interdiction</h2>
            <p><strong>Panneau similaire mais avec bordure noire fine et barre diagonale</strong></p>
            <ul>
                <li>Fin de limitation de vitesse</li>
                <li>Fin d'interdiction de dépasser</li>
                <li>Fin de toutes les interdictions</li>
            </ul>
        `
    },
    {
        id: 'panneaux-obligation',
        icon: '➡️',
        title: 'Panneaux d\'obligation',
        desc: 'Connaître les directions et actions obligatoires',
        lessons: 5,
        duration: '10 min',
        content: `
            <h2>➡️ Panneaux circulaires bleus d'obligation</h2>
            <div class="info-box">
                <strong>💡 Reconnaissance :</strong> Les panneaux d'obligation sont CIRCULAIRES avec fond BLEU. Ils imposent une direction ou une action obligatoire.
            </div>

            <h3>1. Directions obligatoires</h3>
            <p>Flèches blanches sur fond bleu :</p>
            <ul>
                <li><strong>Tout droit obligatoire</strong> : Flèche vers le haut</li>
                <li><strong>Tourner à droite obligatoire</strong> : Flèche vers la droite</li>
                <li><strong>Tourner à gauche obligatoire</strong> : Flèche vers la gauche</li>
                <li><strong>Tout droit ou à droite</strong> : Deux flèches (haut + droite)</li>
                <li><strong>Tout droit ou à gauche</strong> : Deux flèches (haut + gauche)</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Attention :</strong> Ces panneaux sont placés AVANT l'intersection. Ne pas les respecter = infraction + danger !
            </div>

            <h3>2. Contournement d'obstacle</h3>
            <ul>
                <li><strong>Contourner par la droite</strong> : Flèche courbe vers la droite</li>
                <li><strong>Contourner par la gauche</strong> : Flèche courbe vers la gauche</li>
            </ul>
            <p>Utilisés pour contourner des îlots, travaux, ou obstacles sur la chaussée.</p>

            <h3>3. Pistes et voies réservées</h3>
            <h4>Piste cyclable obligatoire</h4>
            <ul>
                <li><strong>Panneau :</strong> Vélo blanc sur fond bleu</li>
                <li><strong>Pour les cyclistes :</strong> Obligation d'emprunter cette piste</li>
                <li><strong>Pour les automobilistes :</strong> INTERDIT de rouler ou stationner sur cette piste</li>
            </ul>

            <h4>Chemin piétons obligatoire</h4>
            <ul>
                <li><strong>Panneau :</strong> Silhouette de piéton blanche sur fond bleu</li>
                <li>Les piétons doivent emprunter ce chemin</li>
            </ul>
            <div class="success-box">
                <strong>✅ Au Sénégal :</strong> Les pistes cyclables sont rares mais en développement à Dakar (Corniche, VDN). Respectez ces espaces pour la sécurité des cyclistes !
            </div>

            <h3>4. Vitesse minimale obligatoire</h3>
            <ul>
                <li><strong>Panneau :</strong> Chiffre blanc sur fond bleu (ex: 50)</li>
                <li><strong>Signification :</strong> Vous devez rouler AU MOINS à cette vitesse</li>
                <li><strong>Utilisé :</strong> Sur certaines voies rapides, tunnels, autoroutes</li>
                <li><strong>Exception :</strong> Sauf si conditions le permettent (trafic, météo)</li>
            </ul>

            <h3>5. Chaînes à neige obligatoires</h3>
            <p><strong>Non applicable au Sénégal</strong> (climat tropical). Information donnée pour culture générale.</p>

            <h3>6. Voies réservées aux transports en commun</h3>
            <ul>
                <li><strong>Panneau :</strong> Bus blanc sur fond bleu</li>
                <li><strong>Signification :</strong> Voie réservée aux bus DDD, Tata, et transports publics</li>
                <li><strong>Sanctions :</strong> Circuler sur ces voies = amende</li>
            </ul>
            <div class="info-box">
                <strong>🚌 Dakar :</strong> Voies de bus présentes sur la VDN (Voie de Dégagement Nord) et certains axes majeurs. Elles sont matérialisées par un marquage au sol spécifique.
            </div>

            <h2>✅ Fin d'obligation</h2>
            <p>Panneaux similaires mais avec barre diagonale grise :</p>
            <ul>
                <li>Fin de piste cyclable obligatoire</li>
                <li>Fin de vitesse minimale</li>
                <li>Fin de voie réservée</li>
            </ul>
        `
    },
    {
        id: 'panneaux-information',
        icon: 'ℹ️',
        title: 'Panneaux d\'information',
        desc: 'Panneaux de direction, services et informations touristiques',
        lessons: 7,
        duration: '14 min',
        content: `
            <h2>ℹ️ Panneaux rectangulaires d'information</h2>
            <div class="info-box">
                <strong>💡 Reconnaissance :</strong> Les panneaux d'information sont généralement RECTANGULAIRES ou CARRÉS avec fond BLEU, VERT, ou BLANC. Ils donnent des informations utiles sans obligation.
            </div>

            <h3>1. Panneaux de direction</h3>
            <p>La couleur du fond indique le type de route :</p>
            <h4>🟢 Fond vert : Autoroutes</h4>
            <ul>
                <li>Autoroute à péage Dakar-Diamniadio</li>
                <li>Autoroute Dakar-Mbour-Thiès</li>
                <li>Vitesse : 110 km/h maximum</li>
            </ul>

            <h4>🟦 Fond bleu : Routes principales</h4>
            <ul>
                <li>Routes nationales (N1, N2, N3...)</li>
                <li>Routes inter-villes importantes</li>
            </ul>

            <h4>⬜ Fond blanc : Routes secondaires</h4>
            <ul>
                <li>Routes départementales</li>
                <li>Routes locales et communales</li>
            </ul>

            <h4>🟨 Fond jaune : Panneaux temporaires</h4>
            <ul>
                <li>Déviations</li>
                <li>Travaux en cours</li>
                <li>Modifications temporaires</li>
            </ul>

            <h3>2. Stationnement</h3>
            <h4>Zone de stationnement autorisé</h4>
            <ul>
                <li><strong>P</strong> blanc sur fond bleu : Parking public</li>
                <li><strong>P + pièce</strong> : Stationnement payant (parc mètres à Dakar)</li>
                <li><strong>P + disque</strong> : Stationnement à durée limitée (zone bleue)</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ À Dakar :</strong>
                <ul style="margin-top:.5rem;">
                    <li>Plateau : Stationnement payant obligatoire (zones parc mètres)</li>
                    <li>Corniche : Stationnement réglementé, surveillez les panneaux</li>
                    <li>Sanctions : Amende + risque de mise en fourrière</li>
                </ul>
            </div>

            <h3>3. Informations de circulation</h3>
            <ul>
                <li><strong>Sens unique</strong> : Flèche indiquant le sens de circulation</li>
                <li><strong>Impasse</strong> : Rue sans issue (sauf piétons/vélos selon variante)</li>
                <li><strong>Passage piétons</strong> : Zone de traversée sécurisée (bandes blanches)</li>
                <li><strong>Nombre de voies</strong> : Indique les voies disponibles et leur affectation</li>
            </ul>

            <h3>4. Services disponibles</h3>
            <p>Panneaux carrés blancs avec pictogramme et bordure bleue :</p>

            <h4>⛽ Stations-service</h4>
            <ul>
                <li>Pictogramme de pompe à essence</li>
                <li>Distance indiquée en km</li>
                <li>Marques : Total, Shell, Elton, Oilibya...</li>
            </ul>

            <h4>🏥 Hôpitaux et cliniques</h4>
            <ul>
                <li><strong>H blanc sur fond bleu</strong> : Hôpital général</li>
                <li><strong>Urgences</strong> : Hôpital Principal Dakar, Hôpital Aristide Le Dantec...</li>
            </ul>

            <h4>📞 Téléphone</h4>
            <ul>
                <li>Cabine téléphonique publique</li>
                <li>Poste d'appel d'urgence (autoroutes)</li>
            </ul>

            <h4>🏚️ Services touristiques</h4>
            <ul>
                <li><strong>Hôtel</strong> : Lit sur fond blanc</li>
                <li><strong>Restaurant</strong> : Fourchette + couteau</li>
                <li><strong>Camping</strong> : Tente (peu fréquent au Sénégal)</li>
                <li><strong>Point de vue</strong> : Jumelles (Lac Rose, Phare des Mamelles...)</li>
                <li><strong>Site historique</strong> : Île de Gorée, Saint-Louis, Joal-Fadiouth</li>
            </ul>

            <h4>🚌 Transports</h4>
            <ul>
                <li><strong>Gare routière</strong> : Bus (Pompiers Dakar, Gare Petersen...)</li>
                <li><strong>Gare ferroviaire</strong> : Train (TER Dakar-Diamniadio)</li>
                <li><strong>Aéroport</strong> : Avion (AIBD, ancien LSS)</li>
            </ul>

            <h3>5. Informations spécifiques</h3>
            <h4>Radio trafic</h4>
            <ul>
                <li>Pictogramme radio avec fréquence FM</li>
                <li>Informations sur l'état du trafic en temps réel</li>
            </ul>

            <h4>Equipements de sécurité</h4>
            <ul>
                <li><strong>Poste de secours</strong> : Croix rouge/verte</li>
                <li><strong>Extincteur</strong> : Pictogramme rouge (tunnels)</li>
                <li><strong>Issue de secours</strong> : Flèche vers sortie (tunnels)</li>
            </ul>

            <h3>6. Autoroute</h3>
            <h4>Entrée d'autoroute</h4>
            <ul>
                <li>Panneau rectangulaire bleu avec pictogramme de pont</li>
                <li>Inscription "AUTOROUTE"</li>
            </ul>

            <h4>Fin d'autoroute</h4>
            <ul>
                <li>Même panneau barré de rouge</li>
                <li>Retour aux limitations normales (90 km/h)</li>
            </ul>
            <div class="success-box">
                <strong>✅ Péage au Sénégal :</strong>
                <ul style="margin-top:.5rem;">
                    <li>Tarifs variables selon distance et type de véhicule</li>
                    <li>Paiement : Espèces ou badge télépéage</li>
                    <li>Principaux postes : Diamniadio, Sindia, Thiès</li>
                </ul>
            </div>
        `
    },
    {
        id: 'marquage-sol',
        icon: '🚬',
        title: 'Marquage au sol',
        desc: 'Comprendre les lignes blanches, jaunes et les flèches',
        lessons: 6,
        duration: '12 min',
        content: `
            <h2>🚬 Marquage horizontal (au sol)</h2>
            <div class="info-box">
                <strong>💡 Principe :</strong> Le marquage au sol complète la signalisation verticale (panneaux). Il a la même valeur réglementaire. Au Sénégal, le marquage est souvent moins visible à cause de l'usure et de la poussière.
            </div>

            <h3>1. Lignes continues</h3>
            <h4>Ligne blanche continue</h4>
            <ul>
                <li><strong>Signification :</strong> INTERDICTION ABSOLUE de franchir</li>
                <li><strong>Utilisation :</strong> Sépare les voies de sens opposés</li>
                <li><strong>Interdictions :</strong>
                    <ul>
                        <li>Dépasser</li>
                        <li>Changer de voie</li>
                        <li>Faire demi-tour</li>
                    </ul>
                </li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Danger :</strong> Franchir une ligne continue = risque majeur d'accident frontal (très fréquent sur N1, N2, N3). Sanction : amende + retrait de points.
            </div>

            <h4>Double ligne continue</h4>
            <ul>
                <li>Renforce l'interdiction</li>
                <li>Utilisée dans les zones à forte circulation ou dangereuses</li>
                <li><strong>JAMAIS</strong> franchissable, même pour éviter un obstacle</li>
            </ul>

            <h3>2. Lignes discontinues</h3>
            <h4>Ligne blanche discontinue (pointillés)</h4>
            <ul>
                <li><strong>Signification :</strong> Dépassement AUTORISÉ si sécurisé</li>
                <li><strong>Conditions :</strong>
                    <ul>
                        <li>Visibilité suffisante (200m minimum)</li>
                        <li>Pas de véhicule en face</li>
                        <li>Vitesse adaptée</li>
                    </ul>
                </li>
            </ul>

            <h4>Ligne mixte (continue + discontinue)</h4>
            <ul>
                <li><strong>Côté continue :</strong> Interdiction de franchir</li>
                <li><strong>Côté discontinue :</strong> Franchissement autorisé</li>
                <li>Utilisée avant un virage ou une zone dangereuse</li>
            </ul>
            <div class="success-box">
                <strong>✅ Astuce :</strong> Sur la N1 (route nationale Dakar-Saint-Louis), respectez SCRUPULEUSEMENT les lignes continues. Nombreux accidents dus aux dépassements dangereux.
            </div>

            <h3>3. Lignes de rive</h3>
            <ul>
                <li><strong>Ligne blanche continue sur le bord</strong> : Délimite la chaussée</li>
                <li>Indique la limite de la voie circulable</li>
                <li>Ne pas rouler sur l'accotement (sauf urgence)</li>
            </ul>

            <h3>4. Passages piétons</h3>
            <ul>
                <li><strong>Bandes blanches parallèles</strong> : "Zèbres"</li>
                <li><strong>Obligation :</strong> Céder le passage aux piétons engagés</li>
                <li><strong>Interdiction :</strong> Stationner à moins de 5m avant le passage</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Important :</strong> À Dakar, Thiès, Saint-Louis : les piétons sont prioritaires sur les passages cloutés. Ralentissez et arrêtez-vous systématiquement.
            </div>

            <h3>5. Lignes d'arrêt</h3>
            <h4>Ligne d'arrêt épaisse</h4>
            <ul>
                <li><strong>Ligne blanche épaisse et continue</strong></li>
                <li>Marque l'endroit précis où s'arrêter :</li>
                <li>Au feu rouge</li>
                <li>Au panneau STOP</li>
                <li>Au Cédez le passage</li>
            </ul>

            <h4>Ligne STOP au sol</h4>
            <ul>
                <li>Inscription "STOP" sur la chaussée</li>
                <li>Renforce le panneau STOP vertical</li>
            </ul>

            <h3>6. Flèches directionnelles</h3>
            <ul>
                <li><strong>Flèches blanches</strong> : Indiquent la direction obligatoire de la voie</li>
                <li><strong>Flèche tout droit</strong> : Voie pour continuer</li>
                <li><strong>Flèche tourn ante</strong> : Voie pour tourner (gauche/droite)</li>
                <li><strong>Flèche double</strong> : Voie partagée (ex: tout droit + droite)</li>
            </ul>

            <h3>7. Lignes jaunes</h3>
            <p>Peu utilisées au Sénégal, mais à connaître :</p>
            <h4>Ligne jaune discontinue</h4>
            <ul>
                <li>Stationnement interdit du côté de la ligne</li>
                <li>Ou zone à circulation réglementée</li>
            </ul>

            <h4>Ligne jaune en zigzag</h4>
            <ul>
                <li>Arrêt d'urgence uniquement</li>
                <li>Stationnement strictement interdit</li>
            </ul>

            <h3>8. Marquages spéciaux</h3>
            <h4>Voie de bus</h4>
            <ul>
                <li>Inscription "BUS" répétée sur la voie</li>
                <li>Pictogramme de bus</li>
                <li>Ligne discontinue de séparation</li>
            </ul>

            <h4>Piste cyclable</h4>
            <ul>
                <li>Pictogramme de vélo répété</li>
                <li>Bande verte ou blanche</li>
            </ul>

            <h4>Places handicapés</h4>
            <ul>
                <li>Pictogramme fauteuil roulant au sol</li>
                <li>Panneau vertical obligatoire</li>
                <li><strong>Réservé UNIQUEMENT</strong> aux détenteurs de carte handicapé</li>
            </ul>

            <h3>9. Cas spécial : Marquage dégradé</h3>
            <div class="info-box">
                <strong>🇸🇳 Réalité sénégalaise :</strong> Beaucoup de routes ont un marquage effacé ou peu visible (pluie, poussière, usure). Dans ce cas :
                <ul style="margin-top:.5rem;">
                    <li>Redoublez de prudence</li>
                    <li>Basez-vous sur les panneaux verticaux</li>
                    <li>Respectez la priorité à droite par défaut</li>
                    <li>Adaptez votre vitesse</li>
                </ul>
            </div>
        `
    },
    {
        id: 'feux-tricolores',
        icon: '🚦',
        title: 'Feux tricolores',
        desc: 'Fonctionnement des feux de signalisation et priorités',
        lessons: 4,
        duration: '8 min',
        content: `
            <h2>🚦 Feux de signalisation tricolores</h2>
            <div class="info-box">
                <strong>💡 Au Sénégal :</strong> Les feux tricolores sont principalement présents à Dakar et dans les grandes villes (Thiès, Saint-Louis, Mbour, Ziguinchor). En zone rurale, ils sont rares.
            </div>

            <h3>1. Feu ROUGE 🔴</h3>
            <ul>
                <li><strong>Signification :</strong> ARRÊT OBLIGATOIRE</li>
                <li><strong>Action :</strong> S'arrêter AVANT la ligne blanche</li>
                <li><strong>Interdictions :</strong>
                    <ul>
                        <li>Franchir le feu</li>
                        <li>S'engager dans l'intersection</li>
                        <li>Avancer même si la voie semble libre</li>
                    </ul>
                </li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Grillage de feu rouge :</strong> Infraction GRAVE au Sénégal. Sanctions : amende lourde + retrait de points + risque de suspension du permis. Cause fréquente d'accidents mortels à Dakar.
            </div>

            <h3>2. Feu ORANGE 🟠</h3>
            <ul>
                <li><strong>Signification :</strong> ARRÊT si possible en sécurité</li>
                <li><strong>Si vous êtes loin :</strong> Ralentir et s'arrêter</li>
                <li><strong>Si vous êtes près :</strong> Continuer sans accélérer (freinage brusque dangereux)</li>
                <li><strong>Durée :</strong> Généralement 3 secondes</li>
            </ul>
            <div class="info-box">
                <strong>💡 Règle pratique :</strong> Si vous pouvez vous arrêter CONFORTABLEMENT, arrêtez-vous. Sinon, poursuivez à vitesse constante.
            </div>

            <h3>3. Feu VERT 🟢</h3>
            <ul>
                <li><strong>Signification :</strong> Passage autorisé</li>
                <li><strong>Attention :</strong> Vérifiez quand même avant de démarrer
                    <ul>
                        <li>Véhicule d'urgence (ambulance, police)</li>
                        <li>Piéton attardé sur le passage</li>
                        <li>Véhicule qui grille le feu rouge</li>
                    </ul>
                </li>
            </ul>

            <h3>4. Flèche verte directionnelle ➡️</h3>
            <ul>
                <li><strong>Flèche verte à droite</strong> : Vous pouvez tourner à droite même si le feu principal est rouge</li>
                <li><strong>Flèche verte à gauche</strong> : Vous pouvez tourner à gauche (rare au Sénégal)</li>
                <li><strong>Obligation :</strong> Cédez le passage aux piétons et véhicules prioritaires</li>
            </ul>

            <h3>5. Feu clignotant</h3>
            <h4>Feu orange clignotant 🟠</h4>
            <ul>
                <li><strong>Signification :</strong> Prudence - traverser avec précaution</li>
                <li>Généralement la nuit ou en période de faible trafic</li>
                <li>Priorité à droite s'applique</li>
            </ul>

            <h4>Feu rouge clignotant 🔴</h4>
            <ul>
                <li>Rare au Sénégal</li>
                <li>Équivalent à un panneau STOP</li>
                <li>Arrêt obligatoire puis céder le passage</li>
            </ul>

            <h3>6. Situations spéciales</h3>
            <h4>Feu en panne</h4>
            <ul>
                <li><strong>Conduite :</strong> Considérer l'intersection comme NON régulée</li>
                <li><strong>Priorité à droite</strong> s'applique</li>
                <li>Redoubler de prudence</li>
            </ul>

            <h4>Agent de circulation présent</h4>
            <ul>
                <li><strong>Priorité ABSOLUE</strong> aux indications de l'agent</li>
                <li>Les gestes de l'agent prévalent sur les feux</li>
                <li>Obéissez sans hésitation</li>
            </ul>

            <h3>7. Feux spécifiques</h3>
            <h4>Feux piétons</h4>
            <ul>
                <li><strong>Bonhomme vert</strong> : Piétons peuvent traverser</li>
                <li><strong>Bonhomme rouge</strong> : Piétons doivent attendre</li>
                <li><strong>Bonhomme rouge clignotant</strong> : Terminer rapidement la traversée</li>
            </ul>

            <h4>Feux de bus/tram</h4>
            <ul>
                <li>Feux spécifiques pour transports en commun</li>
                <li>Barre blanche horizontale = arrêt pour bus</li>
                <li>Ne concernent PAS les voitures</li>
            </ul>

            <h3>8. Comportement aux feux</h3>
            <div class="success-box">
                <strong>✅ Bonnes pratiques :</strong>
                <ul style="margin-top:.5rem;">
                    <li><strong>Anticipation :</strong> Regardez le feu dès que vous l'apercevez</li>
                    <li><strong>Distance de sécurité :</strong> Gardez 2 secondes avec le véhicule devant</li>
                    <li><strong>Arrêt progressif :</strong> Ralentissez doucement à l'orange</li>
                    <li><strong>Démarrage :</strong> Vérifiez avant d'avancer au vert</li>
                    <li><strong>Patience :</strong> Attendez le vert même si ça tarde</li>
                </ul>
            </div>

            <h3>9. Emplacements des feux à Dakar</h3>
            <p>Principaux carrefours à feux :</p>
            <ul>
                <li>Place de l'Obélisque</li>
                <li>Rond-point Jet d'Eau (Almadies)</li>
                <li>Carrefour Centenaire</li>
                <li>Avenue Malick Sy / Blaise Diagne</li>
                <li>VDN (Voie de Dégagement Nord)</li>
                <li>Autoroute à péage (sorties)</li>
            </ul>
        `
    },
    {
        id: 'regles-priorite',
        icon: '🔀',
        title: 'Règles de circulation',
        desc: 'Distances de sécurité, vitesses, dépassements',
        lessons: 9,
        duration: '20 min',
        content: `
            <h2>🚗 Règles générales de circulation</h2>

            <h3>1. Vitesses légales au Sénégal</h3>
            <div class="info-box">
                <strong>📍 Limitations officielles :</strong>
                <ul style="margin-top:.5rem;">
                    <li><strong>En agglomération :</strong> 50 km/h (Dakar, Thiès, Saint-Louis, Mbour, Ziguinchor...)</li>
                    <li><strong>Hors agglomération :</strong> 90 km/h (routes nationales N1, N2, N3, N4...)</li>
                    <li><strong>Autoroute à péage :</strong> 110 km/h (Dakar-Diamniadio, Thiès-Mbour)</li>
                </ul>
            </div>
            <div class="warning-box">
                <strong>⚠️ Excès de vitesse :</strong> Sanction progressive selon le dépassement :
                <ul style="margin-top:.5rem;">
                    <li>Jusqu'à 20 km/h : Amende moyenne</li>
                    <li>20-40 km/h : Amende importante + retrait de points</li>
                    <li>Plus de 40 km/h : Amende lourde + suspension possible</li>
                    <li>Plus de 50 km/h : Délit, comparution devant tribunal</li>
                </ul>
            </div>

            <h3>2. Distance de sécurité</h3>
            <h4>Règle des 2 secondes</h4>
            <ul>
                <li>Gardez une distance équivalente à <strong>2 secondes de trajet</strong></li>
                <li><strong>Calcul :</strong> Quand le véhicule devant passe un repère (arbre, poteau), comptez "un crocodile, deux crocodiles" avant de passer vous-même</li>
                <li><strong>Par temps de pluie :</strong> Doubler la distance (4 secondes)</li>
            </ul>

            <h4>Distance en mètres</h4>
            <ul>
                <li><strong>50 km/h :</strong> 28 mètres minimum</li>
                <li><strong>90 km/h :</strong> 50 mètres minimum</li>
                <li><strong>110 km/h :</strong> 62 mètres minimum</li>
            </ul>

            <h3>3. Dépassement</h3>
            <h4>Conditions pour dépasser</h4>
            <ul>
                <li>✅ Ligne discontinue (pointillés blancs)</li>
                <li>✅ Visibilité suffisante (200m minimum)</li>
                <li>✅ Pas de véhicule en face</li>
                <li>✅ Voie opposée libre sur toute la distance</li>
                <li>✅ Vitesse légale respectée</li>
            </ul>

            <h4>Interdictions de dépasser</h4>
            <ul>
                <li>❌ Ligne continue</li>
                <li>❌ Sommet de côte (manque de visibilité)</li>
                <li>❌ Virage (visibilité réduite)</li>
                <li>❌ Intersection</li>
                <li>❌ Passage piéton</li>
                <li>❌ Panneau "interdiction de dépasser"</li>
            </ul>

            <h4>Technique de dépassement</h4>
            <ol>
                <li><strong>Vérifier :</strong> Rétroviseur intérieur + angle mort gauche</li>
                <li><strong>Signaler :</strong> Clignotant gauche</li>
                <li><strong>Accélérer :</strong> Dépasser rapidement mais dans la limite légale</li>
                <li><strong>Revenir :</strong> Clignotant droite + reprendre sa voie sans gêner</li>
            </ol>
            <div class="warning-box">
                <strong>⚠️ Dépassements dangereux sur N1 :</strong> La route Dakar-Saint-Louis est particulièrement accidentogène. De nombreux accidents mortels sont causés par des dépassements imprudents. Soyez ULTRA prudent !
            </div>

            <h3>4. Croisement</h3>
            <ul>
                <li><strong>Routes étroites :</strong> Ralentir et serrer à droite</li>
                <li><strong>Véhicule large :</strong> Céder le passage si nécessaire</li>
                <li><strong>Nuit :</strong> Passer en feux de croisement (codes)</li>
                <li><strong>Animaux :</strong> Ralentir fortement (vaches, chèvres, moutons sur routes rurales)</li>
            </ul>

            <h3>5. Changement de voie</h3>
            <ol>
                <li><strong>Rétroviseurs :</strong> Vérifier intérieur + latéral côté du changement</li>
                <li><strong>Angle mort :</strong> Tourner légèrement la tête pour vérifier</li>
                <li><strong>Clignotant :</strong> Signaler 3 secondes avant</li>
                <li><strong>Changer :</strong> Manœuvre progressive et fluide</li>
            </ol>

            <h3>6. Utilisation des voies</h3>
            <h4>Route à 2 voies</h4>
            <ul>
                <li>Rouler sur la voie de DROITE (sauf pour dépasser)</li>
                <li>Voie de gauche = voie de dépassement uniquement</li>
            </ul>

            <h4>Route à 3 voies ou plus</h4>
            <ul>
                <li><strong>Voie de droite :</strong> Véhicules lents, accès/sorties</li>
                <li><strong>Voie(s) centrale(s) :</strong> Circulation normale</li>
                <li><strong>Voie de gauche :</strong> Dépassement rapide</li>
            </ul>

            <h3>7. Arrêt et stationnement</h3>
            <h4>Stationnement interdit</h4>
            <ul>
                <li>Passages piétons (± 5m)</li>
                <li>Intersections</li>
                <li>Virages sans visibilité</li>
                <li>Arrêts de bus</li>
                <li>Bouches d'incendie</li>
                <li>Entrées de propriétés</li>
                <li>Trottoirs (sauf autorisation)</li>
            </ul>

            <h4>Stationnement en ville (Dakar)</h4>
            <ul>
                <li><strong>Zones payantes :</strong> Plateau, Corniche, Almadies</li>
                <li><strong>Parc mètres :</strong> Ticket obligatoire, durée limitée</li>
                <li><strong>Zones bleues :</strong> Disque de stationnement</li>
                <li><strong>Sanction :</strong> Mise en fourrière + amende</li>
            </ul>

            <h3>8. Priorités aux intersections</h3>
            <h4>Ordre de priorité (du plus au moins prioritaire)</h4>
            <ol>
                <li>🚑 <strong>Véhicules d'urgence</strong> (ambulance, pompiers, police avec sirène)</li>
                <li>🚦 <strong>Feu vert</strong></li>
                <li>🛑 <strong>Route prioritaire</strong> (losange jaune)</li>
                <li>🔺 <strong>Panneau STOP</strong> pour les autres</li>
                <li>➡️ <strong>Priorité à droite</strong> (par défaut)</li>
            </ol>

            <h3>9. Circulation spéciale</h3>
            <h4>Convoi exceptionnel</h4>
            <ul>
                <li>Véhicule très large ou long</li>
                <li>Gyrophare orange/jaune</li>
                <li>Pancarte "CONVOI EXCEPTIONNEL"</li>
                <li><strong>Conduite :</strong> Céder le passage, ne pas dépasser</li>
            </ul>

            <h4>Cortège officiel</h4>
            <ul>
                <li>Présidence, ministres, diplomates</li>
                <li>Escorte policière</li>
                <li><strong>Conduite :</strong> Se ranger immédiatement sur le côté</li>
            </ul>

            <h4>Troupeau d'animaux</h4>
            <div class="success-box">
                <strong>🐄 Spécificité Sénégal :</strong> Sur les routes rurales, respectez le passage des troupeaux (vaches, moutons, chèvres). Ralentissez, klaxonnez doucement, attendez qu'ils traversent. Le berger vous fera signe.
            </div>
        `
    }
];

// État
let currentModule = null;
let completedLessons = JSON.parse(localStorage.getItem('completedLessons') || '[]');

// Init
window.addEventListener('load', () => {
    if (typeof firebase !== 'undefined' && typeof auth !== 'undefined') {
        auth.onAuthStateChanged(user => {
            if (user && user.emailVerified) {
                document.getElementById('headerUser').style.display = 'flex';
                document.getElementById('userEmailDisplay').textContent = user.email;
                loadUserProgress(user.uid);
            }
            renderModules();
        });
    } else {
        renderModules();
    }
});

async function loadUserProgress(uid) {
    try {
        const doc = await db.collection('users').doc(uid).get();
        if (doc.exists && doc.data().completedLessons) {
            completedLessons = doc.data().completedLessons;
            localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
        }
    } catch (e) {
        console.warn('Load progress error:', e);
    }
}

function saveProgress() {
    localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
    if (typeof auth !== 'undefined' && auth.currentUser) {
        db.collection('users').doc(auth.currentUser.uid)
            .set({ completedLessons }, { merge: true })
            .catch(e => console.warn('Save progress error:', e));
    }
}

function renderModules() {
    const grid = document.getElementById('modulesGrid');
    grid.innerHTML = '';

    modules.forEach(module => {
        const completed = completedLessons.includes(module.id);
        const card = document.createElement('div');
        card.className = 'module-card';
        card.onclick = () => openLesson(module.id);

        card.innerHTML = `
            <div class="module-icon">${module.icon}</div>
            <div class="module-title">${module.title} ${completed ? '✅' : ''}</div>
            <div class="module-desc">${module.desc}</div>
            <div class="module-meta">
                <span>📚 ${module.lessons} leçons</span>
                <span>⏱️ ${module.duration}</span>
            </div>
        `;
        grid.appendChild(card);
    });
}

function openLesson(moduleId) {
    currentModule = modules.find(m => m.id === moduleId);
    if (!currentModule) return;

    document.getElementById('modules-view').style.display = 'none';
    document.getElementById('lesson-view').classList.add('active');

    document.getElementById('lessonTitle').textContent = currentModule.icon + ' ' + currentModule.title;
    document.getElementById('lessonSubtitle').textContent = `${currentModule.lessons} leçons • ${currentModule.duration}`;
    document.getElementById('lessonContent').innerHTML = currentModule.content;

    const isCompleted = completedLessons.includes(moduleId);
    const progress = isCompleted ? 100 : 0;
    document.getElementById('lessonProgress').style.width = progress + '%';

    window.scrollTo(0, 0);
}

function showModules() {
    document.getElementById('lesson-view').classList.remove('active');
    document.getElementById('modules-view').style.display = 'block';
    currentModule = null;
    window.scrollTo(0, 0);
}

function completeLesson() {
    if (!currentModule) return;

    if (!completedLessons.includes(currentModule.id)) {
        completedLessons.push(currentModule.id);
        saveProgress();
    }

    document.getElementById('lessonProgress').style.width = '100%';
    alert('✅ Leçon terminée ! Continuez votre progression.');
    showModules();
    renderModules();
}

function handleLogout() {
    if (typeof auth !== 'undefined') {
        auth.signOut().then(() => window.location.href = 'login.html');
    }
}
