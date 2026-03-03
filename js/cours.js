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
                <strong>💡 À retenir :</strong> Les panneaux de danger sont TOUJOURS de forme <strong>triangulaire ▲</strong> avec <strong>bordure rouge</strong> et fond blanc. Ils vous obligent à <strong>ralentir et être attentif</strong>.
            </div>

            <h3>1. Virages et courbes</h3>
            <div style="display:flex;gap:1rem;flex-wrap:wrap;margin:1rem 0;">
                <div style="text-align:center;">
                    <div style="font-size:3rem;">↪️</div>
                    <small>Virage à droite</small>
                </div>
                <div style="text-align:center;">
                    <div style="font-size:3rem;">↩️</div>
                    <small>Virage à gauche</small>
                </div>
                <div style="text-align:center;">
                    <div style="font-size:3rem;">🌀</div>
                    <small>Série de virages</small>
                </div>
            </div>
            <p>Ces panneaux annoncent des virages qui nécessitent de réduire sa vitesse :</p>
            <ul>
                <li><strong>Virage à droite/gauche</strong> : Un seul virage serré</li>
                <li><strong>Série de virages</strong> : Plusieurs virages successifs (lacets)</li>
                <li><strong>Conduite à adopter</strong> : Ralentir AVANT le virage, ne pas freiner dans le virage</li>
            </ul>

            <h3>2. Relief de la chaussée</h3>
            <div style="display:flex;gap:1rem;flex-wrap:wrap;margin:1rem 0;">
                <div style="text-align:center;">
                    <div style="font-size:3rem;">⛰️</div>
                    <small>Dos d'âne</small>
                </div>
                <div style="text-align:center;">
                    <div style="font-size:3rem;">📉</div>
                    <small>Descente</small>
                </div>
            </div>
            <ul>
                <li><strong>Dos d'âne ou cassis</strong> : Bosse ou creux sur la route</li>
                <li><strong>Ralentisseur</strong> : Zone volontairement surélevée pour forcer à ralentir</li>
                <li><strong>Descente dangereuse</strong> : Pente importante (pourcentage indiqué)</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Attention :</strong> En descente, vérifiez vos freins et utilisez le frein moteur (rétrograder). Ne restez jamais au point mort !
            </div>

            <h3>3. État de la chaussée</h3>
            <div style="display:flex;gap:1rem;flex-wrap:wrap;margin:1rem 0;">
                <div style="text-align:center;">
                    <div style="font-size:3rem;">💧</div>
                    <small>Chaussée glissante</small>
                </div>
                <div style="text-align:center;">
                    <div style="font-size:3rem;">🪨</div>
                    <small>Chutes de pierres</small>
                </div>
                <div style="text-align:center;">
                    <div style="font-size:3rem;">↔️</div>
                    <small>Rétrécissement</small>
                </div>
            </div>
            <ul>
                <li><strong>Chaussée glissante</strong> : Route huileuse, mouillée ou sablonneuse</li>
                <li><strong>Chutes de pierres</strong> : Risque d'éboulement (fréquent en zone rocheuse)</li>
                <li><strong>Rétrécissement</strong> : La route devient plus étroite</li>
            </ul>

            <h3>4. Passages et croisements</h3>
            <div style="display:flex;gap:1rem;flex-wrap:wrap;margin:1rem 0;">
                <div style="text-align:center;">
                    <div style="font-size:3rem;">🚶</div>
                    <small>Passage piétons</small>
                </div>
                <div style="text-align:center;">
                    <div style="font-size:3rem;">👶</div>
                    <small>Passage d'enfants</small>
                </div>
                <div style="text-align:center;">
                    <div style="font-size:3rem;">🐄</div>
                    <small>Animaux domestiques</small>
                </div>
                <div style="text-align:center;">
                    <div style="font-size:3rem;">🦁</div>
                    <small>Animaux sauvages</small>
                </div>
            </div>
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
            <div style="display:flex;gap:1rem;flex-wrap:wrap;margin:1rem 0;">
                <div style="text-align:center;">
                    <div style="font-size:3rem;">🚴</div>
                    <small>Débouché cyclistes</small>
                </div>
                <div style="text-align:center;">
                    <div style="font-size:3rem;">🚦</div>
                    <small>Feux tricolores</small>
                </div>
                <div style="text-align:center;">
                    <div style="font-size:3rem;">💨</div>
                    <small>Vent latéral</small>
                </div>
                <div style="text-align:center;">
                    <div style="font-size:3rem;">❗</div>
                    <small>Danger non spécifié</small>
                </div>
            </div>
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
            <div style="display:flex;gap:1rem;align-items:center;margin:1rem 0;">
                <div style="font-size:4rem;">➡️</div>
                <div>
                    <strong>Sans signalisation = céder à droite</strong>
                </div>
            </div>
            <p>En l'absence de signalisation, vous devez <strong>céder le passage aux véhicules venant de votre droite</strong>.</p>
            <div class="warning-box">
                <strong>⚠️ Important :</strong> Cette règle s'applique à TOUS les croisements sans signalisation, même dans les petites rues de quartier à Dakar, Rufisque, ou Mbour.
            </div>

            <h3>2. Cédez le passage</h3>
            <div style="display:flex;gap:1rem;align-items:center;margin:1rem 0;">
                <div style="font-size:5rem;">🔻</div>
                <div>
                    <p><strong>Triangle pointé vers le bas</strong> avec bordure rouge</p>
                </div>
            </div>
            <ul>
                <li>Vous devez <strong>ralentir</strong> et céder le passage</li>
                <li>Arrêt OBLIGATOIRE si un véhicule arrive</li>
                <li>Ne bloquez JAMAIS l'intersection</li>
            </ul>

            <h3>3. Stop - Arrêt obligatoire</h3>
            <div style="display:flex;gap:1rem;align-items:center;margin:1rem 0;">
                <div style="font-size:5rem;">🛑</div>
                <div>
                    <p><strong>Panneau octogonal ROUGE</strong> avec inscription "STOP"</p>
                </div>
            </div>
            <ul>
                <li><strong>Arrêt TOTAL et OBLIGATOIRE</strong>, même si la voie semble libre</li>
                <li>Marquez l'arrêt à la ligne blanche</li>
                <li>Vérifiez à gauche, à droite, puis à gauche encore</li>
                <li>Redémarrez seulement quand la voie est COMPLÈTEMENT libre</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Grillage de stop au Sénégal :</strong> Très dangereux et sanctionné ! Nombreux accidents mortels aux stops de Pikine, Guédiawaye, et sur les routes nationales.
            </div>

            <h3>4. Route prioritaire</h3>
            <div style="display:flex;gap:1rem;align-items:center;margin:1rem 0;">
                <div style="font-size:5rem;">🔶</div>
                <div>
                    <p><strong>Losange jaune</strong> avec bordure blanche</p>
                </div>
            </div>
            <ul>
                <li>Vous êtes sur une route prioritaire</li>
                <li>Les véhicules des routes latérales doivent vous céder le passage</li>
                <li><strong>ATTENTION :</strong> Restez vigilant, certains conducteurs ne respectent pas toujours cette règle</li>
            </ul>

            <h3>5. Fin de priorité</h3>
            <div style="display:flex;gap:1rem;align-items:center;margin:1rem 0;">
                <div style="font-size:5rem;">⬛</div>
                <div>
                    <p><strong>Losange jaune barré</strong> : fin de priorité</p>
                </div>
            </div>

            <h3>6. Rond-point (sens giratoire)</h3>
            <div style="display:flex;gap:1rem;align-items:center;margin:1rem 0;">
                <div style="font-size:5rem;">🔄</div>
                <div>
                    <p><strong>Flèches circulaires</strong> sur fond bleu</p>
                </div>
            </div>
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
            <div style="display:flex;gap:1rem;flex-wrap:wrap;margin:1rem 0;">
                <div style="text-align:center;">
                    <div style="font-size:3rem;">🚑</div>
                    <small>Ambulances</small>
                </div>
                <div style="text-align:center;">
                    <div style="font-size:3rem;">🚒</div>
                    <small>Pompiers</small>
                </div>
                <div style="text-align:center;">
                    <div style="font-size:3rem;">🚓</div>
                    <small>Police/Gendarmerie</small>
                </div>
                <div style="text-align:center;">
                    <div style="font-size:3rem;">🏛️</div>
                    <small>Convois officiels</small>
                </div>
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

            <h3>1. Interdictions de circulation</h3>
            <div style="display:flex;gap:1rem;flex-wrap:wrap;margin:1rem 0;">
                <div style="text-align:center;">
                    <div style="font-size:3rem;">⛔</div>
                    <small>Sens interdit</small>
                </div>
                <div style="text-align:center;">
                    <div style="font-size:3rem;">🚫</div>
                    <small>Circulation interdite</small>
                </div>
                <div style="text-align:center;">
                    <div style="font-size:3rem;">↩️❌</div>
                    <small>Interdit tourner à gauche</small>
                </div>
                <div style="text-align:center;">
                    <div style="font-size:3rem;">↪️❌</div>
                    <small>Interdit tourner à droite</small>
                </div>
            </div>
            <ul>
                <li><strong>Sens interdit</strong> : Cercle rouge avec barre horizontale blanche</li>
                <li><strong>Circulation interdite</strong> : Cercle rouge vide - Accès interdit à TOUS</li>
                <li><strong>Interdit de tourner à gauche/droite</strong> : Flèche barrée</li>
                <li><strong>Demi-tour interdit</strong> : Demi-cercle avec flèche barrée</li>
            </ul>

            <h3>2. Limitations de vitesse</h3>
            <div style="display:flex;gap:1rem;flex-wrap:wrap;margin:1rem 0;">
                <div style="text-align:center;border:3px solid red;border-radius:50%;padding:1rem;width:80px;height:80px;display:flex;align-items:center;justify-content:center;">
                    <div style="font-size:2rem;font-weight:bold;">30</div>
                </div>
                <div style="text-align:center;border:3px solid red;border-radius:50%;padding:1rem;width:80px;height:80px;display:flex;align-items:center;justify-content:center;">
                    <div style="font-size:2rem;font-weight:bold;">50</div>
                </div>
                <div style="text-align:center;border:3px solid red;border-radius:50%;padding:1rem;width:80px;height:80px;display:flex;align-items:center;justify-content:center;">
                    <div style="font-size:2rem;font-weight:bold;">90</div>
                </div>
                <div style="text-align:center;border:3px solid red;border-radius:50%;padding:1rem;width:80px;height:80px;display:flex;align-items:center;justify-content:center;">
                    <div style="font-size:2rem;font-weight:bold;">110</div>
                </div>
            </div>
            <div class="warning-box">
                <strong>⚠️ Vitesses légales au Sénégal :</strong>
                <ul style="margin-top:.5rem;">
                    <li><strong>En agglomération :</strong> 50 km/h (Dakar, Thiès, Ziguinchor...)</li>
                    <li><strong>Hors agglomération :</strong> 90 km/h (routes nationales)</li>
                    <li><strong>Autoroute à péage :</strong> 110 km/h (Dakar-Diamniadio, Dakar-Mbour)</li>
                </ul>
            </div>

            <h3>3. Interdiction de dépasser</h3>
            <div style="display:flex;gap:1rem;align-items:center;margin:1rem 0;">
                <div style="font-size:4rem;">🚗🚙❌</div>
                <div>
                    <p><strong>Deux voitures côte à côte barrées</strong></p>
                </div>
            </div>
            <ul>
                <li>Interdit de dépasser tout véhicule à moteur</li>
                <li><strong>Exception :</strong> Vous pouvez dépasser les deux-roues (vélos, motos)</li>
            </ul>

            <h3>4. Interdictions sonores</h3>
            <div style="display:flex;gap:1rem;align-items:center;margin:1rem 0;">
                <div style="font-size:4rem;">📢❌</div>
                <div>
                    <p><strong>Klaxon barré</strong> : Usage avertisseur interdit</p>
                </div>
            </div>
            <ul>
                <li>Zones hospitalières (Hôpital Principal Dakar, Fann...)</li>
                <li>Zones scolaires</li>
                <li>Quartiers résidentiels</li>
            </ul>

            <h3>5. Arrêt et stationnement</h3>
            <div style="display:flex;gap:2rem;flex-wrap:wrap;margin:1rem 0;">
                <div style="text-align:center;">
                    <div style="border:3px solid red;border-radius:50%;width:80px;height:80px;display:flex;align-items:center;justify-content:center;background:blue;color:white;font-size:3rem;position:relative;">
                        <div style="position:absolute;width:60px;height:4px;background:red;transform:rotate(45deg);"></div>
                    </div>
                    <small>Stationnement interdit</small>
                </div>
                <div style="text-align:center;">
                    <div style="border:3px solid red;border-radius:50%;width:80px;height:80px;display:flex;align-items:center;justify-content:center;background:blue;color:white;font-size:2rem;position:relative;">
                        <div style="position:absolute;width:60px;height:4px;background:red;transform:rotate(45deg);"></div>
                        <div style="position:absolute;width:60px;height:4px;background:red;transform:rotate(-45deg);"></div>
                    </div>
                    <small>Arrêt interdit</small>
                </div>
            </div>
            <ul>
                <li><strong>1 barre diagonale :</strong> Stationnement interdit (arrêt momentané OK)</li>
                <li><strong>2 barres en X :</strong> Arrêt ET stationnement interdits</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Sanctions :</strong> Stationnement interdit à Dakar = risque de mise en fourrière + amende (Corniche, Plateau, Almadies).
            </div>

            <h3>6. Accès interdit à certains véhicules</h3>
            <div style="display:flex;gap:1rem;flex-wrap:wrap;margin:1rem 0;">
                <div style="text-align:center;">
                    <div style="font-size:3rem;">🚗❌</div>
                    <small>Véhicules à moteur</small>
                </div>
                <div style="text-align:center;">
                    <div style="font-size:3rem;">🚚❌</div>
                    <small>Poids lourds</small>
                </div>
                <div style="text-align:center;">
                    <div style="font-size:3rem;">🚶❌</div>
                    <small>Piétons</small>
                </div>
                <div style="text-align:center;">
                    <div style="font-size:3rem;">🚴❌</div>
                    <small>Cycles</small>
                </div>
            </div>

            <h3>7. Limitations physiques</h3>
            <div style="display:flex;gap:1rem;flex-wrap:wrap;margin:1rem 0;">
                <div style="text-align:center;">
                    <div style="font-size:2rem;border:3px solid red;border-radius:50%;padding:1rem;">⬆️ 3.5m</div>
                    <small>Hauteur limitée</small>
                </div>
                <div style="text-align:center;">
                    <div style="font-size:2rem;border:3px solid red;border-radius:50%;padding:1rem;">↔️ 2m</div>
                    <small>Largeur limitée</small>
                </div>
                <div style="text-align:center;">
                    <div style="font-size:2rem;border:3px solid red;border-radius:50%;padding:1rem;">⚖️ 10t</div>
                    <small>Poids limité</small>
                </div>
            </div>

            <h2>✅ Fin d'interdiction</h2>
            <div style="display:flex;gap:1rem;align-items:center;margin:1rem 0;">
                <div style="border:2px solid black;border-radius:50%;width:80px;height:80px;display:flex;align-items:center;justify-content:center;position:relative;">
                    <div style="font-size:2rem;">50</div>
                    <div style="position:absolute;width:70px;height:3px;background:black;transform:rotate(-45deg);"></div>
                </div>
                <div>
                    <p><strong>Bordure noire fine + barre</strong> = Fin d'interdiction</p>
                </div>
            </div>
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
            <div style="display:flex;gap:1rem;flex-wrap:wrap;margin:1rem 0;">
                <div style="text-align:center;background:#0066cc;border-radius:50%;width:80px;height:80px;display:flex;align-items:center;justify-content:center;color:white;font-size:2.5rem;">
                    ⬆️
                    <div style="position:absolute;margin-top:120px;color:black;font-size:0.8rem;">Tout droit</div>
                </div>
                <div style="text-align:center;background:#0066cc;border-radius:50%;width:80px;height:80px;display:flex;align-items:center;justify-content:center;color:white;font-size:2.5rem;">
                    ➡️
                    <div style="position:absolute;margin-top:120px;color:black;font-size:0.8rem;">À droite</div>
                </div>
                <div style="text-align:center;background:#0066cc;border-radius:50%;width:80px;height:80px;display:flex;align-items:center;justify-content:center;color:white;font-size:2.5rem;">
                    ⬅️
                    <div style="position:absolute;margin-top:120px;color:black;font-size:0.8rem;">À gauche</div>
                </div>
                <div style="text-align:center;background:#0066cc;border-radius:50%;width:80px;height:80px;display:flex;align-items:center;justify-content:center;color:white;font-size:1.5rem;">
                    ⬆️➡️
                    <div style="position:absolute;margin-top:120px;color:black;font-size:0.8rem;">Droit ou droite</div>
                </div>
            </div>
            <div class="warning-box">
                <strong>⚠️ Attention :</strong> Ces panneaux sont placés AVANT l'intersection. Ne pas les respecter = infraction + danger !
            </div>

            <h3>2. Contournement d'obstacle</h3>
            <div style="display:flex;gap:1rem;flex-wrap:wrap;margin:1rem 0;">
                <div style="text-align:center;background:#0066cc;border-radius:50%;width:80px;height:80px;display:flex;align-items:center;justify-content:center;color:white;font-size:2.5rem;">
                    ↪️
                    <div style="position:absolute;margin-top:120px;color:black;font-size:0.8rem;">Par la droite</div>
                </div>
                <div style="text-align:center;background:#0066cc;border-radius:50%;width:80px;height:80px;display:flex;align-items:center;justify-content:center;color:white;font-size:2.5rem;">
                    ↩️
                    <div style="position:absolute;margin-top:120px;color:black;font-size:0.8rem;">Par la gauche</div>
                </div>
            </div>

            <h3>3. Pistes et voies réservées</h3>
            <div style="display:flex;gap:1rem;flex-wrap:wrap;margin:1rem 0;">
                <div style="text-align:center;background:#0066cc;border-radius:50%;width:80px;height:80px;display:flex;align-items:center;justify-content:center;color:white;font-size:2.5rem;">
                    🚴
                    <div style="position:absolute;margin-top:120px;color:black;font-size:0.8rem;">Piste cyclable</div>
                </div>
                <div style="text-align:center;background:#0066cc;border-radius:50%;width:80px;height:80px;display:flex;align-items:center;justify-content:center;color:white;font-size:2.5rem;">
                    🚶
                    <div style="position:absolute;margin-top:120px;color:black;font-size:0.8rem;">Chemin piétons</div>
                </div>
                <div style="text-align:center;background:#0066cc;border-radius:50%;width:80px;height:80px;display:flex;align-items:center;justify-content:center;color:white;font-size:2.5rem;">
                    🚌
                    <div style="position:absolute;margin-top:120px;color:black;font-size:0.8rem;">Voie bus</div>
                </div>
            </div>
            <div class="success-box">
                <strong>✅ Au Sénégal :</strong> Les pistes cyclables sont rares mais en développement à Dakar (Corniche, VDN). Respectez ces espaces !
            </div>

            <h3>4. Vitesse minimale obligatoire</h3>
            <div style="display:flex;gap:1rem;align-items:center;margin:1rem 0;">
                <div style="background:#0066cc;border-radius:50%;width:80px;height:80px;display:flex;align-items:center;justify-content:center;color:white;font-size:2rem;font-weight:bold;">
                    50
                </div>
                <div>
                    <p>Vous devez rouler <strong>AU MOINS</strong> à cette vitesse</p>
                </div>
            </div>

            <h3>5. Voies réservées aux transports en commun</h3>
            <div class="info-box">
                <strong>🚌 Dakar :</strong> Voies de bus présentes sur la VDN (Voie de Dégagement Nord) et axes majeurs. Circuler dessus = amende.
            </div>

            <h2>✅ Fin d'obligation</h2>
            <div style="display:flex;gap:1rem;align-items:center;margin:1rem 0;">
                <div style="background:#0066cc;border-radius:50%;width:80px;height:80px;display:flex;align-items:center;justify-content:center;color:white;font-size:2rem;position:relative;">
                    🚴
                    <div style="position:absolute;width:70px;height:3px;background:#999;transform:rotate(-45deg);"></div>
                </div>
                <div>
                    <p><strong>Barre grise</strong> = Fin de l'obligation</p>
                </div>
            </div>
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
                <strong>💡 Reconnaissance :</strong> Les panneaux d'information sont <strong>RECTANGULAIRES ▭</strong> ou <strong>CARRÉS ◻️</strong> avec fond BLEU, VERT, ou BLANC.
            </div>

            <h3>1. Panneaux de direction - Couleurs</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;margin:1rem 0;">
                <div style="background:#00aa00;color:white;padding:1rem;border-radius:8px;">
                    <div style="font-size:1.5rem;margin-bottom:0.5rem;">🛣️ VERT</div>
                    <strong>Autoroutes</strong>
                    <div style="font-size:0.9rem;margin-top:0.5rem;">Dakar-Diamniadio<br>110 km/h max</div>
                </div>
                <div style="background:#0066cc;color:white;padding:1rem;border-radius:8px;">
                    <div style="font-size:1.5rem;margin-bottom:0.5rem;">🛤️ BLEU</div>
                    <strong>Routes principales</strong>
                    <div style="font-size:0.9rem;margin-top:0.5rem;">N1, N2, N3...<br>Routes nationales</div>
                </div>
                <div style="background:white;border:2px solid #333;padding:1rem;border-radius:8px;">
                    <div style="font-size:1.5rem;margin-bottom:0.5rem;">🛣️ BLANC</div>
                    <strong>Routes secondaires</strong>
                    <div style="font-size:0.9rem;margin-top:0.5rem;">Routes départementales<br>Routes locales</div>
                </div>
                <div style="background:#ffcc00;padding:1rem;border-radius:8px;">
                    <div style="font-size:1.5rem;margin-bottom:0.5rem;">🚧 JAUNE</div>
                    <strong>Temporaires</strong>
                    <div style="font-size:0.9rem;margin-top:0.5rem;">Déviations<br>Travaux en cours</div>
                </div>
            </div>

            <h3>2. Stationnement</h3>
            <div style="display:flex;gap:1rem;flex-wrap:wrap;margin:1rem 0;">
                <div style="text-align:center;background:#0066cc;padding:1.5rem;border-radius:8px;color:white;">
                    <div style="font-size:3rem;">🅿️</div>
                    <small>Parking public</small>
                </div>
                <div style="text-align:center;background:#0066cc;padding:1.5rem;border-radius:8px;color:white;">
                    <div style="font-size:3rem;">🅿️💰</div>
                    <small>Parking payant</small>
                </div>
                <div style="text-align:center;background:#0066cc;padding:1.5rem;border-radius:8px;color:white;">
                    <div style="font-size:3rem;">🅿️⏱️</div>
                    <small>Durée limitée</small>
                </div>
            </div>
            <div class="warning-box">
                <strong>⚠️ À Dakar :</strong>
                <ul style="margin-top:.5rem;">
                    <li>Plateau : Stationnement payant obligatoire (parc mètres)</li>
                    <li>Corniche : Stationnement réglementé</li>
                    <li>Sanctions : Amende + mise en fourrière</li>
                </ul>
            </div>

            <h3>3. Informations de circulation</h3>
            <div style="display:flex;gap:1rem;flex-wrap:wrap;margin:1rem 0;">
                <div style="text-align:center;background:#0066cc;padding:1rem;border-radius:8px;color:white;">
                    <div style="font-size:3rem;">➡️</div>
                    <small>Sens unique</small>
                </div>
                <div style="text-align:center;background:#0066cc;padding:1rem;border-radius:8px;color:white;">
                    <div style="font-size:3rem;">⛔</div>
                    <small>Impasse</small>
                </div>
                <div style="text-align:center;background:#0066cc;padding:1rem;border-radius:8px;color:white;">
                    <div style="font-size:3rem;">🚶</div>
                    <small>Passage piétons</small>
                </div>
            </div>

            <h3>4. Services disponibles</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(120px,1fr));gap:1rem;margin:1rem 0;">
                <div style="text-align:center;border:3px solid #0066cc;padding:1rem;border-radius:8px;">
                    <div style="font-size:3rem;">⛽</div>
                    <small>Station-service</small>
                </div>
                <div style="text-align:center;border:3px solid #0066cc;padding:1rem;border-radius:8px;">
                    <div style="font-size:3rem;">🏥</div>
                    <small>Hôpital</small>
                </div>
                <div style="text-align:center;border:3px solid #0066cc;padding:1rem;border-radius:8px;">
                    <div style="font-size:3rem;">📞</div>
                    <small>Téléphone</small>
                </div>
                <div style="text-align:center;border:3px solid #0066cc;padding:1rem;border-radius:8px;">
                    <div style="font-size:3rem;">🍽️</div>
                    <small>Restaurant</small>
                </div>
                <div style="text-align:center;border:3px solid #0066cc;padding:1rem;border-radius:8px;">
                    <div style="font-size:3rem;">🏨</div>
                    <small>Hôtel</small>
                </div>
                <div style="text-align:center;border:3px solid #0066cc;padding:1rem;border-radius:8px;">
                    <div style="font-size:3rem;">🏛️</div>
                    <small>Site historique</small>
                </div>
                <div style="text-align:center;border:3px solid #0066cc;padding:1rem;border-radius:8px;">
                    <div style="font-size:3rem;">🚌</div>
                    <small>Gare routière</small>
                </div>
                <div style="text-align:center;border:3px solid #0066cc;padding:1rem;border-radius:8px;">
                    <div style="font-size:3rem;">✈️</div>
                    <small>Aéroport</small>
                </div>
            </div>

            <h3>5. Autoroute</h3>
            <div style="display:flex;gap:1rem;align-items:center;margin:1rem 0;">
                <div style="background:#0066cc;color:white;padding:1.5rem;border-radius:8px;font-size:2rem;">
                    🛣️ AUTOROUTE
                </div>
                <div>
                    <p><strong>Entrée d'autoroute</strong></p>
                    <p style="font-size:0.9rem;">Vitesse : 110 km/h</p>
                </div>
            </div>
            <div class="success-box">
                <strong>✅ Péage au Sénégal :</strong>
                <ul style="margin-top:.5rem;">
                    <li>Tarifs selon distance et véhicule</li>
                    <li>Paiement : Espèces ou badge</li>
                    <li>Postes : Diamniadio, Sindia, Thiès</li>
                </ul>
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
                    <small style="margin-top:0.5rem;display:block;">Double ligne<br><strong>Interdiction ABSOLUE</strong></small>
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
                    <small style="margin-top:0.5rem;display:block;">Ligne discontinue<br><strong>Dépassement AUTORISÉ</strong></small>
                </div>
            </div>

            <h3>3. Ligne mixte</h3>
            <div style="margin:1rem 0;">
                <div style="display:flex;flex-direction:column;gap:4px;max-width:300px;">
                    <div style="width:100%;height:3px;background:#000;"></div>
                    <div style="display:flex;gap:10px;">
                        <div style="width:30px;height:3px;background:#000;"></div>
                        <div style="width:30px;height:3px;background:#000;"></div>
                        <div style="width:30px;height:3px;background:#000;"></div>
                        <div style="width:30px;height:3px;background:#000;"></div>
                    </div>
                </div>
                <p style="margin-top:0.5rem;"><strong>Côté continue :</strong> Interdiction ❌ | <strong>Côté discontinue :</strong> Autorisé ✅</p>
            </div>

            <h3>4. Passages piétons</h3>
            <div style="margin:1rem 0;">
                <div style="display:flex;gap:8px;width:300px;">
                    <div style="flex:1;height:100px;background:#fff;border:2px solid #000;"></div>
                    <div style="flex:1;height:100px;background:#000;"></div>
                    <div style="flex:1;height:100px;background:#fff;border:2px solid #000;"></div>
                    <div style="flex:1;height:100px;background:#000;"></div>
                    <div style="flex:1;height:100px;background:#fff;border:2px solid #000;"></div>
                    <div style="flex:1;height:100px;background:#000;"></div>
                </div>
                <p style="margin-top:0.5rem;"><strong>"Zèbres"</strong> : Bandes blanches parallèles</p>
            </div>
            <div class="warning-box">
                <strong>⚠️ Important :</strong> À Dakar, Thiès, Saint-Louis : les piétons sont prioritaires sur les passages cloutés. Ralentissez et arrêtez-vous systématiquement.
            </div>

            <h3>5. Lignes d'arrêt</h3>
            <div style="margin:1rem 0;">
                <div style="width:300px;height:12px;background:#000;margin-bottom:0.5rem;"></div>
                <p><strong>Ligne épaisse continue</strong> : Marque l'endroit où s'arrêter (feu, STOP, cédez le passage)</p>
            </div>

            <h3>6. Flèches directionnelles</h3>
            <div style="display:flex;gap:1rem;flex-wrap:wrap;margin:1rem 0;">
                <div style="text-align:center;border:2px solid #ccc;padding:1rem;border-radius:8px;">
                    <div style="font-size:3rem;">⬆️</div>
                    <small>Tout droit</small>
                </div>
                <div style="text-align:center;border:2px solid #ccc;padding:1rem;border-radius:8px;">
                    <div style="font-size:3rem;">↪️</div>
                    <small>Tourner à droite</small>
                </div>
                <div style="text-align:center;border:2px solid #ccc;padding:1rem;border-radius:8px;">
                    <div style="font-size:3rem;">↩️</div>
                    <small>Tourner à gauche</small>
                </div>
                <div style="text-align:center;border:2px solid #ccc;padding:1rem;border-radius:8px;">
                    <div style="font-size:2rem;">⬆️↪️</div>
                    <small>Droit ou droite</small>
                </div>
            </div>

            <h3>7. Marquages spéciaux</h3>
            <div style="display:flex;gap:1rem;flex-wrap:wrap;margin:1rem 0;">
                <div style="text-align:center;border:2px solid #ccc;padding:1rem;border-radius:8px;min-width:100px;">
                    <div style="font-size:2rem;font-weight:bold;">BUS</div>
                    <small>Voie de bus</small>
                </div>
                <div style="text-align:center;border:2px solid #ccc;padding:1rem;border-radius:8px;min-width:100px;">
                    <div style="font-size:2rem;">🚴</div>
                    <small>Piste cyclable</small>
                </div>
                <div style="text-align:center;border:2px solid #ccc;padding:1rem;border-radius:8px;min-width:100px;">
                    <div style="font-size:2rem;">♿</div>
                    <small>Place handicapé</small>
                </div>
            </div>

            <h3>8. Cas spécial : Marquage dégradé</h3>
            <div class="info-box">
                <strong>🇸🇳 Réalité sénégalaise :</strong> Beaucoup de routes ont un marquage effacé (pluie, poussière). Dans ce cas :
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
                <strong>💡 Au Sénégal :</strong> Les feux tricolores sont principalement à Dakar et grandes villes. En zone rurale, ils sont rares.
            </div>

            <h3>1. Les trois couleurs</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1rem;margin:1rem 0;">
                <div style="background:#dc143c;color:white;padding:1.5rem;border-radius:12px;text-align:center;">
                    <div style="font-size:4rem;margin-bottom:0.5rem;">🔴</div>
                    <h4>FEU ROUGE</h4>
                    <strong>ARRÊT OBLIGATOIRE</strong>
                    <ul style="text-align:left;margin-top:1rem;font-size:0.9rem;">
                        <li>S'arrêter AVANT la ligne</li>
                        <li>NE PAS franchir</li>
                        <li>Attendre le vert</li>
                    </ul>
                </div>
                <div style="background:#ffa500;color:white;padding:1.5rem;border-radius:12px;text-align:center;">
                    <div style="font-size:4rem;margin-bottom:0.5rem;">🟠</div>
                    <h4>FEU ORANGE</h4>
                    <strong>RALENTIR ET S'ARRÊTER</strong>
                    <ul style="text-align:left;margin-top:1rem;font-size:0.9rem;">
                        <li>Si loin : S'arrêter</li>
                        <li>Si près : Continuer</li>
                        <li>Durée : ~3 secondes</li>
                    </ul>
                </div>
                <div style="background:#228b22;color:white;padding:1.5rem;border-radius:12px;text-align:center;">
                    <div style="font-size:4rem;margin-bottom:0.5rem;">🟢</div>
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
                <strong>⚠️ Grillage de feu rouge :</strong> Infraction GRAVE au Sénégal. Sanctions : amende lourde + retrait de points + suspension possible. Cause d'accidents mortels à Dakar.
            </div>

            <h3>2. Flèches directionnelles</h3>
            <div style="display:flex;gap:1rem;flex-wrap:wrap;margin:1rem 0;">
                <div style="text-align:center;background:#228b22;color:white;padding:1rem;border-radius:8px;min-width:100px;">
                    <div style="font-size:3rem;">➡️</div>
                    <small>Tourner à droite<br>même si feu rouge</small>
                </div>
                <div style="text-align:center;background:#228b22;color:white;padding:1rem;border-radius:8px;min-width:100px;">
                    <div style="font-size:3rem;">⬅️</div>
                    <small>Tourner à gauche<br>(rare au Sénégal)</small>
                </div>
            </div>

            <h3>3. Feux clignotants</h3>
            <div style="display:flex;gap:1rem;flex-wrap:wrap;margin:1rem 0;">
                <div style="text-align:center;border:3px solid #ffa500;padding:1rem;border-radius:8px;min-width:150px;">
                    <div style="font-size:3rem;">🟠💫</div>
                    <strong>Orange clignotant</strong>
                    <p style="font-size:0.9rem;margin-top:0.5rem;">Prudence<br>Priorité à droite</p>
                </div>
                <div style="text-align:center;border:3px solid #dc143c;padding:1rem;border-radius:8px;min-width:150px;">
                    <div style="font-size:3rem;">🔴💫</div>
                    <strong>Rouge clignotant</strong>
                    <p style="font-size:0.9rem;margin-top:0.5rem;">= STOP<br>Arrêt obligatoire</p>
                </div>
            </div>

            <h3>4. Situations spéciales</h3>
            <div class="info-box">
                <strong>Feu en panne :</strong> Considérer l'intersection comme NON régulée → Priorité à droite s'applique
            </div>
            <div class="success-box">
                <strong>Agent de circulation présent :</strong> Les gestes de l'agent prévalent TOUJOURS sur les feux. Obéissez sans hésitation.
            </div>

            <h3>5. Emplacements des feux à Dakar</h3>
            <div style="background:#f0f8ff;padding:1rem;border-radius:8px;border-left:4px solid #0066cc;">
                <strong>Principaux carrefours à feux :</strong>
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
                <div style="background:#95e1d3;color:#333;padding:1.5rem;border-radius:12px;text-align:center;">
                    <div style="font-size:3rem;font-weight:bold;">110</div>
                    <div style="font-size:1.2rem;">km/h</div>
                    <p style="margin-top:0.5rem;font-size:0.9rem;">AUTOROUTE À PÉAGE<br>Dakar-Diamniadio, Thiès-Mbour</p>
                </div>
            </div>

            <h3>2. Distance de sécurité</h3>
            <div style="background:#fff3cd;padding:1.5rem;border-radius:12px;border-left:4px solid #ffc107;">
                <h4>⏱️ Règle des 2 secondes</h4>
                <p>Quand le véhicule devant passe un repère (arbre, poteau), comptez :</p>
                <div style="font-size:1.5rem;font-weight:bold;color:#d97706;margin:1rem 0;">
                    "UN CROCODILE, DEUX CROCODILES"
                </div>
                <p>avant de passer vous-même ce repère.</p>
                <p style="margin-top:1rem;"><strong>Par temps de pluie :</strong> Doubler la distance (4 secondes) 🌧️</p>
            </div>

            <h3>3. Dépassement</h3>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin:1rem 0;">
                <div style="background:#d4edda;padding:1rem;border-radius:8px;border-left:4px solid #28a745;">
                    <strong>✅ CONDITIONS POUR DÉPASSER</strong>
                    <ul style="margin-top:0.5rem;font-size:0.9rem;">
                        <li>✓ Ligne discontinue</li>
                        <li>✓ Visibilité 200m+</li>
                        <li>✓ Pas de véhicule en face</li>
                        <li>✓ Voie opposée libre</li>
                        <li>✓ Vitesse légale respectée</li>
                    </ul>
                </div>
                <div style="background:#f8d7da;padding:1rem;border-radius:8px;border-left:4px solid #dc3545;">
                    <strong>❌ INTERDICTIONS</strong>
                    <ul style="margin-top:0.5rem;font-size:0.9rem;">
                        <li>✗ Ligne continue</li>
                        <li>✗ Sommet de côte</li>
                        <li>✗ Virage</li>
                        <li>✗ Intersection</li>
                        <li>✗ Passage piéton</li>
                    </ul>
                </div>
            </div>

            <h4>Technique de dépassement en 4 étapes</h4>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(150px,1fr));gap:1rem;margin:1rem 0;">
                <div style="text-align:center;background:#e3f2fd;padding:1rem;border-radius:8px;">
                    <div style="font-size:2rem;margin-bottom:0.5rem;">👀</div>
                    <strong>1. VÉRIFIER</strong>
                    <p style="font-size:0.85rem;">Rétros + angle mort</p>
                </div>
                <div style="text-align:center;background:#e3f2fd;padding:1rem;border-radius:8px;">
                    <div style="font-size:2rem;margin-bottom:0.5rem;">◀️</div>
                    <strong>2. SIGNALER</strong>
                    <p style="font-size:0.85rem;">Clignotant gauche</p>
                </div>
                <div style="text-align:center;background:#e3f2fd;padding:1rem;border-radius:8px;">
                    <div style="font-size:2rem;margin-bottom:0.5rem;">⚡</div>
                    <strong>3. ACCÉLÉRER</strong>
                    <p style="font-size:0.85rem;">Dépasser rapidement</p>
                </div>
                <div style="text-align:center;background:#e3f2fd;padding:1rem;border-radius:8px;">
                    <div style="font-size:2rem;margin-bottom:0.5rem;">▶️</div>
                    <strong>4. REVENIR</strong>
                    <p style="font-size:0.85rem;">Clignotant droite</p>
                </div>
            </div>

            <div class="warning-box">
                <strong>⚠️ Dépassements dangereux sur N1 :</strong> La route Dakar-Saint-Louis est particulièrement accidentogène. Nombreux accidents mortels dus aux dépassements imprudents. Soyez ULTRA prudent !
            </div>

            <h3>4. Stationnement en ville (Dakar)</h3>
            <div style="background:#fff3cd;padding:1rem;border-radius:8px;margin:1rem 0;">
                <strong>🅿️ Zones payantes :</strong>
                <ul style="margin-top:0.5rem;">
                    <li><strong>Plateau :</strong> Parc mètres obligatoires</li>
                    <li><strong>Corniche :</strong> Stationnement réglementé</li>
                    <li><strong>Almadies :</strong> Zones à durée limitée</li>
                </ul>
                <p style="margin-top:1rem;color:#856404;"><strong>⚠️ Sanction :</strong> Mise en fourrière + amende importante</p>
            </div>

            <h3>5. Priorités aux intersections</h3>
            <div style="background:#f0f8ff;padding:1.5rem;border-radius:12px;border-left:4px solid #0066cc;">
                <strong>📋 Ordre de priorité (du plus au moins prioritaire) :</strong>
                <ol style="margin-top:1rem;font-size:1.1rem;line-height:2;">
                    <li>🚑 <strong>Véhicules d'urgence</strong> (avec sirène)</li>
                    <li>🚦 <strong>Feu vert</strong></li>
                    <li>🔶 <strong>Route prioritaire</strong> (losange jaune)</li>
                    <li>🛑 <strong>Panneau STOP</strong> pour les autres</li>
                    <li>➡️ <strong>Priorité à droite</strong> (par défaut)</li>
                </ol>
            </div>

            <h3>6. Circulation spéciale au Sénégal</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:1rem;margin:1rem 0;">
                <div style="background:#fef3c7;padding:1rem;border-radius:8px;">
                    <div style="font-size:2rem;margin-bottom:0.5rem;">🐄</div>
                    <strong>Troupeaux d'animaux</strong>
                    <p style="font-size:0.9rem;margin-top:0.5rem;">Sur routes rurales : ralentir, klaxonner doucement, attendre qu'ils traversent. Le berger vous fera signe.</p>
                </div>
                <div style="background:#fef3c7;padding:1rem;border-radius:8px;">
                    <div style="font-size:2rem;margin-bottom:0.5rem;">🚧</div>
                    <strong>Convoi exceptionnel</strong>
                    <p style="font-size:0.9rem;margin-top:0.5rem;">Gyrophare orange, pancarte "CONVOI". Céder le passage, ne pas dépasser.</p>
                </div>
                <div style="background:#fef3c7;padding:1rem;border-radius:8px;">
                    <div style="font-size:2rem;margin-bottom:0.5rem;">🏛️</div>
                    <strong>Cortège officiel</strong>
                    <p style="font-size:0.9rem;margin-top:0.5rem;">Présidence, ministres. Escorte police. Se ranger IMMÉDIATEMENT sur le côté.</p>
                </div>
            </div>

            <div class="success-box">
                <strong>✅ Conseil final :</strong> Sur les routes sénégalaises, la prudence et le respect des règles sauvent des vies. Adaptez toujours votre conduite aux conditions réelles (marquage effacé, animaux, nids-de-poule...).
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
