// Données des modules de cours — mapping images corrigé
const BASE = 'https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/';

function img(fichier, alt) {
    return `<div style="text-align:center;min-width:110px;">
        <img src="${BASE}${fichier}" alt="${alt}" style="width:110px;height:110px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
        <div style="font-size:0.8rem;margin-top:0.5rem;">${alt}</div>
    </div>`;
}

function grille(...items) {
    return `<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:1.5rem;margin:1.5rem 0;">${items.join('')}</div>`;
}

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
                <strong>💡 À retenir :</strong> Les panneaux de danger sont TOUJOURS de forme <strong>triangulaire ▲</strong> avec <strong>bordure rouge</strong> et fond blanc. Ils vous obligent à <strong>ralentir et être attentif</strong>.
            </div>

            <h3>1. Virages et courbes</h3>
            ${grille(
                img('France_road_sign_A1a.svg.png', 'Virage dangereux à droite'),
                img('France_road_sign_A1b.svg.png', 'Virage dangereux à gauche'),
                img('France_road_sign_A1c.svg.png', 'Succession de virages — premier à droite'),
                img('France_road_sign_A1d.svg.png', 'Succession de virages — premier à gauche')
            )}
            <ul>
                <li><strong>Virage simple :</strong> Un seul virage serré — ralentir AVANT</li>
                <li><strong>Virages successifs :</strong> Plusieurs virages en S</li>
                <li><strong>Conduite :</strong> Freiner avant le virage, jamais dedans</li>
            </ul>

            <h3>2. État et relief de la chaussée</h3>
            ${grille(
                img('France_road_sign_A2a.svg.png', 'Chaussée déformée'),
                img('France_road_sign_A2b.svg.png', 'Dos d\'âne'),
                img('France_road_sign_A3.svg.png', 'Chaussée rétrécie'),
                img('France_road_sign_A3a.svg.png', 'Rétrécissement par la droite'),
                img('France_road_sign_A3b.svg.png', 'Rétrécissement par la gauche'),
                img('France_road_sign_A4.svg.png', 'Chaussée glissante'),
                img('France_road_sign_A16.svg.png', 'Descente dangereuse'),
                img('France_road_sign_A19.svg.png', 'Chute de pierres'),
                img('France_road_sign_A20.svg.png', 'Quai ou berge')
            )}
            <ul>
                <li><strong>Dos d'âne :</strong> Ralentir fortement</li>
                <li><strong>Chaussée rétrécie :</strong> Route plus étroite, côté précisé par le panneau</li>
                <li><strong>Chaussée glissante :</strong> Route huileuse, mouillée ou sablonneuse</li>
                <li><strong>Descente dangereuse :</strong> Utiliser le frein moteur, jamais au point mort</li>
                <li><strong>Chute de pierres :</strong> Risque d'éboulement (zones rocheuses)</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ En descente :</strong> Rétrograder et utiliser le frein moteur. Ne JAMAIS rester au point mort !
            </div>

            <h3>3. Passages à niveau et ponts</h3>
            ${grille(
                img('France_road_sign_A7.svg.png', 'Passage à niveau avec barrières'),
                img('France_road_sign_A8.svg.png', 'Passage d\'un train'),
                img('France_Road_Sign_A9a.png', 'Passage d\'un tramway'),
                img('France_Road_Sign_A6.svg.png', 'Pont mobile')
            )}
            <ul>
                <li><strong>Passage à niveau avec barrières :</strong> Voie ferrée protégée — attention aux trains !</li>
                <li><strong>Passage d'un train :</strong> Danger maximal — ralentir impérativement, regarder des deux côtés</li>
                <li><strong>Passage d'un tramway :</strong> Voie de tramway traversant la route</li>
                <li><strong>Pont mobile :</strong> Pont pouvant être levé — possible coupure de route</li>
            </ul>

            <h3>4. Usagers vulnérables</h3>
            ${grille(
                img('France_road_sign_A13b.svg.png', 'Passage pour piétons'),
                img('France_road_sign_A13a.svg.png', 'Passage d\'enfants'),
                img('France_road_sign_A21.svg.png', 'Passage de cyclistes'),
                img('France_road_sign_A15a1.svg.png', 'Animaux domestiques'),
                img('France_road_sign_A15b.svg.png', 'Animaux sauvages'),
                img('France_road_sign_A15c.svg.png', 'Passage de cavaliers')
            )}
            <ul>
                <li><strong>Passage piétons :</strong> Très fréquent en ville (Dakar, Thiès, Saint-Louis)</li>
                <li><strong>Passage d'enfants :</strong> RALENTIR IMPÉRATIVEMENT près des écoles</li>
                <li><strong>Animaux domestiques :</strong> Vaches, chèvres, moutons (zones rurales sénégalaises)</li>
                <li><strong>Animaux sauvages :</strong> Présents en Casamance, Niokolo-Koba</li>
            </ul>
            <div class="success-box">
                <strong>✅ Conseil Sénégal :</strong> Sur les N1, N2, N3, soyez particulièrement vigilant aux animaux, surtout tôt le matin et en fin de journée.
            </div>

            <h3>5. Autres dangers</h3>
            ${grille(
                img('France_road_sign_A17.svg.png', 'Feux tricolores'),
                img('France_road_sign_A18.svg.png', 'Circulation en double sens'),
                img('France_road_sign_A23.svg.png', 'Avions à basse altitude'),
                img('France_road_sign_A24.svg.png', 'Vent latéral'),
                img('France_road_sign_A14.svg.png', 'Autres dangers')
            )}
            <ul>
                <li><strong>Feux tricolores :</strong> Carrefour à feux à venir</li>
                <li><strong>Circulation en double sens :</strong> Fin de route à sens unique</li>
                <li><strong>Avions à basse altitude :</strong> Proximité d'un aéroport (Dakar-Yoff, Ziguinchor)</li>
                <li><strong>Vent latéral :</strong> Risque de déport du véhicule</li>
                <li><strong>Autres dangers :</strong> Point d'exclamation = danger variable non spécifié</li>
            </ul>

            <h2>🚦 Conduite à adopter face à un panneau de danger</h2>
            <ol>
                <li><strong>RALENTIR</strong> dès que vous voyez le panneau</li>
                <li><strong>SCANNER</strong> la zone : regardez loin devant</li>
                <li><strong>ANTICIPER</strong> : préparez-vous à freiner ou éviter</li>
                <li><strong>ADAPTER</strong> votre vitesse aux conditions (pluie, nuit, saison sèche)</li>
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

            <h3>1. Intersections</h3>
            ${grille(
                img('France_road_sign_AB1.svg.png', 'Intersection — priorité à droite'),
                img('France_road_sign_AB2.svg.png', 'Intersection — route prioritaire')
            )}
            <p>En l'absence de signalisation, vous devez <strong>céder le passage aux véhicules venant de votre droite</strong>.</p>
            <div class="warning-box">
                <strong>⚠️ Important :</strong> Cette règle s'applique à TOUS les croisements sans signalisation, même dans les petites rues de Dakar, Rufisque ou Mbour.
            </div>

            <h3>2. Cédez le passage et Stop</h3>
            ${grille(
                img('France_road_sign_AB3a.svg.png', 'Cédez le passage'),
                img('France_road_sign_AB3b.svg.png', 'Cédez le passage à 150 m'),
                img('France_road_sign_AB4.svg.png', 'Stop'),
                img('France_road_sign_AB5.svg.png', 'Stop à 150 m')
            )}
            <ul>
                <li><strong>Stop :</strong> Arrêt TOTAL et COMPLET obligatoire, même si la voie semble libre</li>
                <li><strong>Stop à 150 m :</strong> Panneau avancé — préparez-vous à vous arrêter</li>
                <li><strong>Cédez le passage :</strong> Triangle inversé — ralentir et laisser passer</li>
                <li><strong>Cédez à 150 m :</strong> Panneau avancé du cédez le passage</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Grillage de stop au Sénégal :</strong> Infraction très grave ! Nombreux accidents mortels aux stops de Pikine, Guédiawaye et sur les routes nationales.
            </div>

            <h3>3. Route prioritaire</h3>
            ${grille(
                img('France_road_sign_AB6.svg.png', 'Route prioritaire'),
                img('France_road_sign_AB7.svg.png', 'Fin de route prioritaire'),
                img('France_Road_Sign_AB25.svg.png', 'Carrefour à sens giratoire')
            )}
            <ul>
                <li><strong>Route prioritaire :</strong> Losange jaune — vous êtes prioritaire sur les routes qui croisent</li>
                <li><strong>Fin de route prioritaire :</strong> Losange barré — vous redevenez comme les autres</li>
                <li><strong>Carrefour giratoire :</strong> Les véhicules déjà dans le rond-point sont prioritaires</li>
            </ul>

            <h3>4. Règles du rond-point</h3>
            <div class="info-box">
                <strong>🔄 Règle au Sénégal :</strong> Dans un rond-point, les véhicules DÉJÀ engagés sont prioritaires. Vous devez céder le passage avant d'entrer.
            </div>
            <ul>
                <li><strong>Avant d'entrer :</strong> Ralentir, regarder à gauche, céder le passage</li>
                <li><strong>Dans le rond-point :</strong> Rester sur votre voie, ne pas s'arrêter</li>
                <li><strong>Pour sortir :</strong> Mettre le clignotant à droite AVANT votre sortie</li>
            </ul>

            <h2>🚦 Véhicules prioritaires</h2>
            <p>Ces véhicules ont TOUJOURS la priorité, vous devez vous ranger sur le côté :</p>
            <div style="display:flex;gap:1rem;flex-wrap:wrap;margin:1rem 0;">
                <div style="text-align:center;"><div style="font-size:3rem;">🚑</div><small>Ambulances</small></div>
                <div style="text-align:center;"><div style="font-size:3rem;">🚒</div><small>Pompiers</small></div>
                <div style="text-align:center;"><div style="font-size:3rem;">🚓</div><small>Police/Gendarmerie</small></div>
                <div style="text-align:center;"><div style="font-size:3rem;">🏛️</div><small>Convois officiels</small></div>
            </div>
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
                <strong>💡 Reconnaissance :</strong> Les panneaux d'interdiction sont <strong>CIRCULAIRES ⭕</strong> avec <strong>bordure ROUGE</strong>. Ils interdisent une action ou l'accès à certains véhicules.
            </div>

            <h3>1. Interdictions d'accès</h3>
            ${grille(
                img('France_road_sign_B0.svg.png', 'Circulation interdite'),
                img('France_road_sign_B1.svg.png', 'Sens interdit'),
                img('France_road_sign_B1j.svg.png', 'Zone sens interdit')
            )}
            <ul>
                <li><strong>Circulation interdite :</strong> Accès interdit à TOUS les véhicules</li>
                <li><strong>Sens interdit :</strong> Cercle rouge avec barre blanche — entrée absolument interdite</li>
                <li><strong>Zone sens interdit :</strong> Interdit en zone urbaine délimitée</li>
            </ul>

            <h3>2. Interdictions par catégorie de véhicules</h3>
            ${grille(
                img('France_road_sign_B7a.svg.png', 'Interdit aux motos et voitures'),
                img('France_road_sign_B7b.svg.png', 'Interdit aux motos'),
                img('France_road_sign_B8.svg.png', 'Interdit aux camions'),
                img('France_road_sign_B9a.svg.png', 'Interdit aux piétons'),
                img('France_road_sign_B9b.svg.png', 'Interdit aux vélos'),
                img('France_road_sign_B9d.svg.png', 'Interdit aux tracteurs'),
                img('France_road_sign_B9f.svg.png', 'Interdit aux bus'),
                img('France_road_sign_B9g.svg.png', 'Interdit aux motos (autre)'),
                img('France_road_sign_B9h.svg.png', 'Interdit aux vélomoteurs')
            )}

            <h3>3. Interdictions de manœuvre</h3>
            ${grille(
                img('France_road_sign_B2a.svg.png', 'Interdit de tourner à gauche'),
                img('France_road_sign_B2b.svg.png', 'Interdit de tourner à droite'),
                img('France_road_sign_B2c.svg.png', 'Demi-tour interdit')
            )}
            <ul>
                <li>Ces panneaux interdisent une direction précise à l'intersection</li>
                <li>Flèche barrée = direction interdite</li>
            </ul>

            <h3>4. Interdiction de dépasser</h3>
            ${grille(
                img('France_road_sign_B3.svg.png', 'Dépassement interdit'),
                img('France_road_sign_B3a.svg.png', 'Dépassement interdit aux poids lourds')
            )}
            <ul>
                <li><strong>Dépassement interdit :</strong> Interdit de dépasser tout véhicule à moteur</li>
                <li><strong>Interdit aux poids lourds :</strong> Interdit uniquement pour camions et poids lourds</li>
            </ul>

            <h3>5. Contrôles obligatoires</h3>
            ${grille(
                img('France_road_sign_B4.svg.png', 'Douane'),
                img('France_road_sign_B5.svg.png', 'Halte gendarmerie')
            )}
            <ul>
                <li><strong>Douane :</strong> Arrêt obligatoire au poste frontière (Sénégal–Gambie, Sénégal–Mali...)</li>
                <li><strong>Halte gendarmerie :</strong> Contrôle — s'arrêter impérativement</li>
            </ul>

            <h3>6. Stationnement et arrêt</h3>
            ${grille(
                img('France_road_sign_B6a1.svg.png', 'Stationnement interdit'),
                img('France_road_sign_B6a2.svg.png', 'Stationnement interdit en alternance'),
                img('France_road_sign_B6a3.svg.png', 'Stationnement interdit du 1 au 15'),
                img('France_road_sign_B6d.svg.png', 'Arrêt et stationnement interdits')
            )}
            <ul>
                <li><strong>1 barre :</strong> Stationnement interdit (arrêt bref OK)</li>
                <li><strong>Alternance :</strong> Interdit selon les côtés en alternance</li>
                <li><strong>1 au 15 :</strong> Interdit du 1er au 15 du mois</li>
                <li><strong>2 barres en X :</strong> Arrêt ET stationnement totalement interdits</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ À Dakar :</strong> Stationnement interdit = risque de mise en fourrière + amende (Corniche, Plateau, Almadies).
            </div>

            <h3>7. Limitations physiques</h3>
            ${grille(
                img('France_road_sign_B11.svg.png', 'Largeur maximale'),
                img('France_road_sign_B12.svg.png', 'Hauteur maximale'),
                img('France_road_sign_B13.svg.png', 'Poids total autorisé'),
                img('France_road_sign_B13a.svg.png', 'Poids par essieu')
            )}
            <ul>
                <li>Ces panneaux protègent tunnels, ponts et voiries fragiles</li>
                <li>Fréquents sur les ponts de Dakar et en zones urbaines</li>
            </ul>

            <h3>8. Vitesse, distance et klaxon</h3>
            ${grille(
                img('France_road_sign_B14_(80).svg.png', 'Limitation de vitesse 80 km/h'),
                img('France_road_sign_B15.svg.png', 'Priorité au sens inverse'),
                img('France_road_sign_B16.svg.png', 'Klaxon interdit'),
                img('France_road_sign_B17.svg.png', 'Distance de sécurité'),
                img('France_road_sign_B10a.svg.png', 'Distance minimale')
            )}
            <div class="warning-box">
                <strong>⚠️ Vitesses légales au Sénégal :</strong>
                <ul style="margin-top:.5rem;">
                    <li><strong>En agglomération :</strong> 50 km/h</li>
                    <li><strong>Hors agglomération :</strong> 90 km/h</li>
                    <li><strong>Autoroute à péage :</strong> 110 km/h</li>
                </ul>
            </div>

            <h3>9. Fins d'interdiction</h3>
            ${grille(
                img('France_road_sign_B18b.svg.png', 'Interdiction de transport de marchandises'),
                img('France_road_sign_B18c.svg.png', 'Interdiction transport de matières dangereuses'),
                img('France_road_sign_B19.svg.png', 'Interdit aux motocyclistes'),
                img('France_road_sign_B31.svg.png', 'Fin d\'interdiction'),
                img('France_road_sign_B34.svg.png', 'Fin d\'interdiction de dépassement'),
                img('France_road_sign_B34a.svg.png', 'Fin d\'interdiction de dépassement pour camions'),
                img('France_road_sign_B35.svg.png', 'Fin d\'interdiction de klaxonner')
            )}

            <h3>10. Zones réglementées</h3>
            ${grille(
                img('France_road_sign_B25_(30).svg.png', 'Vitesse minimale 30 km/h'),
                img('France_road_sign_B27a.svg.png', 'Voie bus'),
                img('France_road_sign_B29.svg.png', 'Allumez les feux'),
                img('France_road_sign_B33_(50).svg.png', 'Fin de limitation 50 km/h'),
                img('France_road_sign_B40.svg.png', 'Fin de piste cyclable'),
                img('France_road_sign_B41.svg.png', 'Fin de voie piétonne'),
                img('France_road_sign_B42.svg.png', 'Fin de voie cavaliers'),
                img('France_road_sign_B43_(30).svg.png', 'Fin de vitesse minimale 30'),
                img('France_road_sign_B45a.svg.png', 'Fin de voie bus'),
                img('France_road_sign_B51_(30).svg.png', 'Fin de zone 30'),
                img('France_road_sign_B53.svg.png', 'Fin de zone 20'),
                img('France_road_sign_B55.svg.png', 'Fin de zone piétonne'),
                img('France_road_sign_B57.svg.png', 'Fin de zone restriction')
            )}
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
                <strong>💡 Reconnaissance :</strong> Les panneaux d'obligation sont <strong>CIRCULAIRES ⭕</strong> avec <strong>fond BLEU</strong>. Ils imposent une direction ou une action obligatoire.
            </div>

            <h3>1. Directions obligatoires</h3>
            ${grille(
                img('France_road_sign_B21-1.svg.png', 'Direction obligatoire à droite'),
                img('France_road_sign_B21-2.svg.png', 'Direction obligatoire à gauche'),
                img('France_road_sign_B21b.svg.png', 'Tout droit obligatoire'),
                img('France_road_sign_B21c1.svg.png', 'Tout droit ou à droite'),
                img('France_road_sign_B21c2.svg.png', 'Tout droit ou à gauche'),
                img('France_road_sign_B21d1.svg.png', 'Gauche ou droite'),
                img('France_road_sign_B21d2.svg.png', 'Tout droit ou gauche'),
                img('France_road_sign_B21e.svg.png', 'Double sens obligatoire')
            )}
            <div class="warning-box">
                <strong>⚠️ Attention :</strong> Ces panneaux imposent une direction. Ne pas les respecter = infraction + danger !
            </div>

            <h3>2. Contournement obligatoire d'obstacle</h3>
            ${grille(
                img('France_road_sign_B21a1.svg.png', 'Contournement par la droite'),
                img('France_road_sign_B21a2.svg.png', 'Contournement par la gauche')
            )}
            <ul>
                <li>Placés devant un îlot ou refuge à contourner obligatoirement</li>
            </ul>

            <h3>3. Pistes et voies réservées</h3>
            ${grille(
                img('France_road_sign_B22a.svg.png', 'Piste cyclable'),
                img('France_road_sign_B22b.svg.png', 'Voie piétonne'),
                img('France_road_sign_B22c.svg.png', 'Voie cavaliers')
            )}
            <ul>
                <li><strong>Piste cyclable :</strong> Réservée aux vélos — les autres véhicules interdits</li>
                <li><strong>Voie piétonne :</strong> Réservée aux piétons</li>
                <li><strong>Voie cavaliers :</strong> Réservée aux chevaux</li>
            </ul>
            <div class="success-box">
                <strong>✅ Au Sénégal :</strong> Les pistes cyclables sont en développement à Dakar (Corniche, VDN). Respectez ces espaces réservés !
            </div>
        `
    },
    {
        id: 'panneaux-information',
        icon: 'ℹ️',
        title: 'Panneaux d\'information',
        desc: 'Panneaux de direction, services et informations routières',
        lessons: 7,
        duration: '14 min',
        content: `
            <h2>ℹ️ Panneaux d'information et d'indication</h2>
            <div class="info-box">
                <strong>💡 Reconnaissance :</strong> Les panneaux d'information sont <strong>RECTANGULAIRES ▭</strong> ou <strong>CARRÉS ◻️</strong> avec fond BLEU, VERT, ou BLANC.
            </div>

            <h3>1. Types de voies</h3>
            ${grille(
                img('Autoroute_F.svg.png', 'Autoroute'),
                img('Autoroute_F_(fin).svg.png', 'Fin d\'autoroute'),
                img('Voie_express_F.svg.png', 'Voie express'),
                img('Voie_express_F_(fin).svg.png', 'Fin de voie express'),
                img('C18.svg.png', 'Circulation en double sens')
            )}
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;margin:1rem 0;">
                <div style="background:#00aa00;color:white;padding:1rem;border-radius:8px;">
                    <div style="font-size:1.5rem;">🛣️ VERT</div>
                    <strong>Autoroutes</strong><br>Dakar-Diamniadio — 110 km/h max
                </div>
                <div style="background:#0066cc;color:white;padding:1rem;border-radius:8px;">
                    <div style="font-size:1.5rem;">🛤️ BLEU</div>
                    <strong>Routes principales</strong><br>N1, N2, N3... — 90 km/h
                </div>
                <div style="background:white;border:2px solid #333;padding:1rem;border-radius:8px;">
                    <div style="font-size:1.5rem;">🛣️ BLANC</div>
                    <strong>Routes secondaires</strong><br>Routes locales
                </div>
                <div style="background:#ffcc00;padding:1rem;border-radius:8px;">
                    <div style="font-size:1.5rem;">🚧 JAUNE</div>
                    <strong>Temporaires</strong><br>Déviations / Travaux
                </div>
            </div>

            <h3>2. Stationnement et services</h3>
            ${grille(
                img('France_road_sign_C1a.svg.png', 'Parking'),
                img('France_road_sign_C1b.svg.png', 'Parking payant'),
                img('France_road_sign_C1c.svg.png', 'Parking horodateur'),
                img('France_road_sign_C4a_(50).svg.png', 'Vitesse recommandée 50 km/h'),
                img('France_road_sign_C4b_(50).svg.png', 'Fin de vitesse recommandée'),
                img('France_road_sign_C5.svg.png', 'Station de taxi'),
                img('France_road_sign_C6.svg.png', 'Arrêt de bus'),
                img('France_road_sign_CE1.svg.png', 'Hôpital'),
                img('France_road_sign_C62.svg.png', 'Péage'),
                img('France_road_sign_C64a.svg.png', 'Contrôle de police'),
                img('France_road_sign_C64d2.svg.png', 'Télépéage')
            )}
            <div class="warning-box">
                <strong>⚠️ À Dakar :</strong> Stationnement payant obligatoire au Plateau, Corniche. Sanctions : amende + mise en fourrière.
            </div>

            <h3>3. Circulation et voies</h3>
            ${grille(
                img('France_road_sign_C12.svg.png', 'Sens unique'),
                img('France_road_sign_C8.svg.png', 'Voie d\'évitement'),
                img('France_road_sign_C9.svg.png', 'Covoiturage'),
                img('France_road_sign_C13a.svg.png', 'Impasse'),
                img('France_road_sign_C13b.svg.png', 'Impasse — sortie à droite'),
                img('France_road_sign_C13c.svg.png', 'Impasse — passage piétons'),
                img('France_road_sign_C13d.svg.png', 'Impasse — passage vélos'),
                img('France_road_sign_C20a.svg.png', 'Passage piéton'),
                img('France_Road_Sign_C20b.png', 'Passage bus'),
                img('France_road_sign_C24a.svg.png', 'Voie affectée'),
                img('France_road_sign_C24a-1.svg.png', 'Voie affectée avec interdiction'),
                img('France_road_sign_C24a-2.svg.png', 'Voie vélos'),
                img('France_road_sign_C24a-3.svg.png', 'Voie bus'),
                img('France_road_sign_C24a-4.svg.png', 'Voie motos'),
                img('France_road_sign_C24b.svg.png', 'Voie directionnelle'),
                img('France_road_sign_C24b-2.svg.png', 'Voie directionnelle multiple'),
                img('France_road_sign_C24c.svg.png', 'Obstacle à droite'),
                img('France_road_sign_C26a.svg.png', 'Balise obstacle à droite'),
                img('France_road_sign_C26b.svg.png', 'Balise obstacle à gauche'),
                img('France_road_sign_C27.svg.png', 'Ralentisseur'),
                img('France_road_sign_C28-3.svg.png', 'Voie d\'insertion'),
                img('France_road_sign_C111.svg.png', 'Tunnel'),
                img('France_road_sign_C112.svg.png', 'Fin de tunnel'),
                img('France_road_sign_C113.svg.png', 'Piste cyclable'),
                img('France_road_sign_C114.svg.png', 'Fin de piste cyclable'),
                img('France_road_sign_C117-B21b.svg.png', 'Direction obligatoire'),
                img('France_road_sign_D52a.svg.png', 'Direction autoroute'),
                img('France_road_sign_M1.svg.png', 'Distance 50 m'),
                img('Signal_B29_VL.svg.png', 'Véhicules lents')
            )}
            <div class="success-box">
                <strong>✅ Péage au Sénégal :</strong> Tarifs selon la distance et le type de véhicule. Paiement en espèces ou badge. Postes principaux : Diamniadio, Sindia, Thiès.
            </div>
        `
    },
    {
        id: 'marquage-sol',
        icon: '━',
        title: 'Marquage au sol',
        desc: 'Comprendre les lignes blanches, jaunes et les flèches',
        lessons: 6,
        duration: '12 min',
        content: `
            <h2>━ Marquage horizontal (au sol)</h2>
            <div class="info-box">
                <strong>💡 Principe :</strong> Le marquage au sol complète la signalisation verticale. Il a la même valeur réglementaire.
            </div>

            <h3>1. Lignes continues</h3>
            <div style="display:flex;gap:2rem;flex-wrap:wrap;margin:1rem 0;align-items:center;">
                <div style="text-align:center;">
                    <div style="width:200px;height:4px;background:#000;margin-bottom:0.5rem;"></div>
                    <small>Ligne continue<br><strong>INTERDICTION de franchir</strong></small>
                </div>
                <div style="text-align:center;">
                    <div style="display:flex;flex-direction:column;gap:4px;">
                        <div style="width:200px;height:3px;background:#000;"></div>
                        <div style="width:200px;height:3px;background:#000;"></div>
                    </div>
                    <small style="margin-top:0.5rem;display:block;">Double ligne continue<br><strong>Interdiction ABSOLUE des deux côtés</strong></small>
                </div>
            </div>
            <div class="warning-box">
                <strong>⚠️ Danger :</strong> Franchir une ligne continue = risque d'accident frontal (très fréquent sur N1, N2, N3). Sanction : amende + retrait de points.
            </div>

            <h3>2. Lignes discontinues</h3>
            <div style="display:flex;gap:2rem;flex-wrap:wrap;margin:1rem 0;align-items:center;">
                <div style="text-align:center;">
                    <div style="display:flex;gap:10px;">
                        <div style="width:30px;height:4px;background:#000;"></div>
                        <div style="width:30px;height:4px;background:#000;"></div>
                        <div style="width:30px;height:4px;background:#000;"></div>
                        <div style="width:30px;height:4px;background:#000;"></div>
                    </div>
                    <small style="margin-top:0.5rem;display:block;">Ligne discontinue<br><strong>Dépassement AUTORISÉ (si voie libre)</strong></small>
                </div>
            </div>

            <h3>3. Passages piétons</h3>
            <div style="display:flex;gap:8px;width:300px;margin:1rem 0;">
                <div style="flex:1;height:80px;background:#fff;border:2px solid #ccc;"></div>
                <div style="flex:1;height:80px;background:#333;"></div>
                <div style="flex:1;height:80px;background:#fff;border:2px solid #ccc;"></div>
                <div style="flex:1;height:80px;background:#333;"></div>
                <div style="flex:1;height:80px;background:#fff;border:2px solid #ccc;"></div>
                <div style="flex:1;height:80px;background:#333;"></div>
            </div>
            <p><strong>"Zèbres"</strong> : Bandes blanches et noires alternées — piétons PRIORITAIRES</p>
            <div class="warning-box">
                <strong>⚠️ Important :</strong> À Dakar, Thiès, Saint-Louis : les piétons sont prioritaires sur les passages cloutés. Ralentissez et arrêtez-vous systématiquement.
            </div>

            <h3>4. Réalité au Sénégal</h3>
            <div class="info-box">
                <strong>🇸🇳 Marquage dégradé :</strong> Beaucoup de routes ont un marquage effacé (pluie, poussière, usure). Dans ce cas :
                <ul style="margin-top:.5rem;">
                    <li>Redoublez de prudence</li>
                    <li>Basez-vous sur les panneaux verticaux</li>
                    <li>Respectez la priorité à droite par défaut</li>
                    <li>Adaptez votre vitesse aux conditions</li>
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
                <strong>💡 Au Sénégal :</strong> Les feux tricolores sont principalement à Dakar et dans les grandes villes. En zone rurale, ils sont rares.
            </div>

            <h3>1. Les trois couleurs</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;margin:1rem 0;">
                <div style="background:#dc143c;color:white;padding:1.5rem;border-radius:12px;text-align:center;">
                    <div style="font-size:4rem;">🔴</div>
                    <h4>FEU ROUGE</h4>
                    <strong>ARRÊT OBLIGATOIRE</strong>
                    <ul style="text-align:left;margin-top:1rem;font-size:0.9rem;">
                        <li>S'arrêter AVANT la ligne</li>
                        <li>NE PAS franchir</li>
                        <li>Attendre le vert</li>
                    </ul>
                </div>
                <div style="background:#e67e00;color:white;padding:1.5rem;border-radius:12px;text-align:center;">
                    <div style="font-size:4rem;">🟠</div>
                    <h4>FEU ORANGE</h4>
                    <strong>RALENTIR ET S'ARRÊTER</strong>
                    <ul style="text-align:left;margin-top:1rem;font-size:0.9rem;">
                        <li>Si loin : S'arrêter</li>
                        <li>Si trop près : Continuer prudemment</li>
                        <li>Durée : ~3 secondes</li>
                    </ul>
                </div>
                <div style="background:#228b22;color:white;padding:1.5rem;border-radius:12px;text-align:center;">
                    <div style="font-size:4rem;">🟢</div>
                    <h4>FEU VERT</h4>
                    <strong>PASSAGE AUTORISÉ</strong>
                    <ul style="text-align:left;margin-top:1rem;font-size:0.9rem;">
                        <li>Vérifier avant d'avancer</li>
                        <li>Regarder les côtés</li>
                        <li>Attention aux piétons</li>
                    </ul>
                </div>
            </div>
            <div class="warning-box">
                <strong>⚠️ Grillage de feu rouge :</strong> Infraction GRAVE. Sanctions : amende lourde + retrait de points + suspension possible. Cause principale d'accidents mortels à Dakar.
            </div>

            <h3>2. Principaux carrefours à feux à Dakar</h3>
            <div style="background:#f0f8ff;padding:1rem;border-radius:8px;border-left:4px solid #0066cc;">
                <ul style="margin-top:0.5rem;">
                    <li>🏛️ Place de l'Obélisque</li>
                    <li>⛲ Rond-point Jet d'Eau (Almadies)</li>
                    <li>🏙️ Carrefour Centenaire</li>
                    <li>📍 Avenue Malick Sy / Blaise Diagne</li>
                    <li>🛣️ VDN (Voie de Dégagement Nord)</li>
                    <li>💰 Autoroute à péage (sorties)</li>
                </ul>
            </div>
        `
    },
    {
        id: 'regles-circulation',
        icon: '🚗',
        title: 'Règles de circulation',
        desc: 'Distances de sécurité, vitesses, dépassements',
        lessons: 9,
        duration: '20 min',
        content: `
            <h2>🚗 Règles générales de circulation</h2>

            <h3>1. Vitesses légales au Sénégal</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;margin:1rem 0;">
                <div style="background:#ff6b6b;color:white;padding:1.5rem;border-radius:12px;text-align:center;">
                    <div style="font-size:3rem;font-weight:bold;">50</div>
                    <div style="font-size:1.2rem;">km/h</div>
                    <p style="margin-top:0.5rem;font-size:0.9rem;">EN AGGLOMÉRATION<br>Dakar, Thiès, Saint-Louis...</p>
                </div>
                <div style="background:#4ecdc4;color:white;padding:1.5rem;border-radius:12px;text-align:center;">
                    <div style="font-size:3rem;font-weight:bold;">90</div>
                    <div style="font-size:1.2rem;">km/h</div>
                    <p style="margin-top:0.5rem;font-size:0.9rem;">HORS AGGLOMÉRATION<br>Routes nationales N1, N2, N3...</p>
                </div>
                <div style="background:#45b7d1;color:white;padding:1.5rem;border-radius:12px;text-align:center;">
                    <div style="font-size:3rem;font-weight:bold;">110</div>
                    <div style="font-size:1.2rem;">km/h</div>
                    <p style="margin-top:0.5rem;font-size:0.9rem;">AUTOROUTE À PÉAGE<br>Dakar-Diamniadio, Thiès-Mbour</p>
                </div>
            </div>

            <h3>2. Distance de sécurité</h3>
            <div style="background:#fff3cd;padding:1.5rem;border-radius:12px;border-left:4px solid #ffc107;">
                <h4>⏱️ Règle des 2 secondes</h4>
                <p>Quand le véhicule devant passe un repère (arbre, poteau), comptez :</p>
                <div style="font-size:1.5rem;font-weight:bold;color:#d97706;margin:1rem 0;">"UN CROCODILE, DEUX CROCODILES"</div>
                <p>avant de passer vous-même ce repère.</p>
                <p style="margin-top:1rem;"><strong>Par temps de pluie :</strong> Doubler la distance (4 secondes) 🌧️</p>
            </div>

            <h3>3. Dépassement</h3>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1rem 0;">
                <div style="background:#d4edda;padding:1rem;border-radius:8px;border-left:4px solid #28a745;">
                    <strong>✅ CONDITIONS POUR DÉPASSER</strong>
                    <ul style="margin-top:0.5rem;font-size:0.9rem;">
                        <li>✓ Ligne discontinue</li>
                        <li>✓ Visibilité 200 m+</li>
                        <li>✓ Pas de véhicule en face</li>
                        <li>✓ Voie opposée libre</li>
                        <li>✓ Vitesse légale respectée</li>
                    </ul>
                </div>
                <div style="background:#f8d7da;padding:1rem;border-radius:8px;border-left:4px solid #dc3545;">
                    <strong>❌ DÉPASSEMENT INTERDIT</strong>
                    <ul style="margin-top:0.5rem;font-size:0.9rem;">
                        <li>✗ Ligne continue</li>
                        <li>✗ Sommet de côte</li>
                        <li>✗ Virage</li>
                        <li>✗ Intersection</li>
                        <li>✗ Passage piéton</li>
                    </ul>
                </div>
            </div>
            <div class="warning-box">
                <strong>⚠️ Route Dakar–Saint-Louis (N2) :</strong> Nombreux accidents mortels dus aux dépassements imprudents. Soyez ULTRA prudent sur les routes nationales !
            </div>

            <div class="success-box">
                <strong>✅ Conseil final :</strong> Sur les routes sénégalaises, adaptez toujours votre conduite aux conditions réelles : marquage effacé, animaux sur la route, nids-de-poule, pluie soudaine...
            </div>
        `
    }
];
