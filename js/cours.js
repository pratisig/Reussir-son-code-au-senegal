// Données des modules de cours enrichis avec images réelles des panneaux
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
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:1.5rem;margin:1.5rem 0;"><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A13a.svg.png" alt="Virage à droite" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A13a</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Virage à droite</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A13b.svg.png" alt="Virage à gauche" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A13b</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Virage à gauche</div>
            </div></div>
            <p>Ces panneaux annoncent des virages qui nécessitent de réduire sa vitesse :</p>
            <ul>
                <li><strong>Virage à droite/gauche</strong> : Un seul virage serré</li>
                <li><strong>Série de virages</strong> : Plusieurs virages successifs (lacets)</li>
                <li><strong>Conduite à adopter</strong> : Ralentir AVANT le virage, ne pas freiner dans le virage</li>
            </ul>

            <h3>2. Relief de la chaussée</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:1.5rem;margin:1.5rem 0;"><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A16.svg.png" alt="Chaussée rétrécie" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A16</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Chaussée rétrécie</div>
            </div></div>
            <ul>
                <li><strong>Dos d'âne ou cassis</strong> : Bosse ou creux sur la route</li>
                <li><strong>Ralentisseur</strong> : Zone volontairement surélevée pour forcer à ralentir</li>
                <li><strong>Descente dangereuse</strong> : Pente importante (pourcentage indiqué)</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Attention :</strong> En descente, vérifiez vos freins et utilisez le frein moteur (rétrograder). Ne restez jamais au point mort !
            </div>

            <h3>3. État de la chaussée</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:1.5rem;margin:1.5rem 0;"><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A18.svg.png" alt="Passage pour piétons" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A18</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Passage pour piétons</div>
            </div></div>
            <ul>
                <li><strong>Chaussée glissante</strong> : Route huileuse, mouillée ou sablonneuse</li>
                <li><strong>Chutes de pierres</strong> : Risque d'éboulement (fréquent en zone rocheuse)</li>
                <li><strong>Rétrécissement</strong> : La route devient plus étroite</li>
                <li><strong>Chaussée déformée</strong> : Nids-de-poule, route en mauvais état</li>
            </ul>

            <h3>4. Passages et croisements</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:1.5rem;margin:1.5rem 0;"><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A13a.svg.png" alt="Virage à droite" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A13a</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Virage à droite</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A13b.svg.png" alt="Virage à gauche" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A13b</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Virage à gauche</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A14.svg.png" alt="Série de virages" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A14</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Série de virages</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A15b.svg.png" alt="Descente dangereuse" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A15b</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Descente dangereuse</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A23.svg.png" alt="Chaussée glissante" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A23</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Chaussée glissante</div>
            </div></div>
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

            <h3>5. Intersections et carrefours</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:1.5rem;margin:1.5rem 0;"><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A21.svg.png" alt="Circulation dans les deux sens" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A21</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Circulation dans les deux sens</div>
            </div></div>
            <ul>
                <li><strong>Intersection</strong> : Croisement de routes</li>
                <li><strong>Carrefour giratoire</strong> : Rond-point à venir</li>
                <li><strong>Passages à niveau</strong> : Voie ferrée (attention trains !)</li>
            </ul>

            <h3>6. Autres dangers</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:1.5rem;margin:1.5rem 0;"><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A17.svg.png" alt="Débouché de cyclistes" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A17</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Débouché de cyclistes</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A20.svg.png" alt="Autres dangers" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A20</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Autres dangers</div>
            </div></div>
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

            <h3>2. Panneaux de priorité</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(140px,1fr));gap:1.5rem;margin:1.5rem 0;"><div style="text-align:center;min-width:140px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_AB3a.svg.png" alt="Stop - Arrêt obligatoire" style="width:140px;height:140px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>AB3a</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Stop - Arrêt obligatoire</div>
            </div><div style="text-align:center;min-width:140px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_AB3b.svg.png" alt="Stop avec distance" style="width:140px;height:140px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>AB3b</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Stop avec distance</div>
            </div><div style="text-align:center;min-width:140px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_AB4.svg.png" alt="Priorité ponctuelle" style="width:140px;height:140px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>AB4</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Priorité ponctuelle</div>
            </div><div style="text-align:center;min-width:140px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_AB5.svg.png" alt="Intersection avec route prioritaire" style="width:140px;height:140px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>AB5</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Intersection avec route prioritaire</div>
            </div><div style="text-align:center;min-width:140px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_AB6.svg.png" alt="Priorité à la circulation venant en sens inverse" style="width:140px;height:140px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>AB6</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Priorité à la circulation venant en sens inverse</div>
            </div><div style="text-align:center;min-width:140px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_AB7.svg.png" alt="Route prioritaire" style="width:140px;height:140px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>AB7</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Route prioritaire</div>
            </div><div style="text-align:center;min-width:140px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_Road_Sign_AB25.svg.png" alt="Rond-point" style="width:140px;height:140px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>AB25</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Rond-point</div>
            </div></div>
            <ul>
                <li><strong>STOP (AB3a)</strong> : Arrêt TOTAL obligatoire, même si la voie semble libre</li>
                <li><strong>Cédez le passage (AB3b)</strong> : Triangle inversé - Ralentir et céder</li>
                <li><strong>Route prioritaire (AB6)</strong> : Losange jaune - Vous êtes prioritaire</li>
                <li><strong>Fin de priorité (AB7)</strong> : Losange barré</li>
                <li><strong>Carrefour giratoire (AB25)</strong> : Priorité aux véhicules déjà dans le rond-point</li>
            </ul>

            <div class="warning-box">
                <strong>⚠️ Grillage de stop au Sénégal :</strong> Très dangereux et sanctionné ! Nombreux accidents mortels aux stops de Pikine, Guédiawaye, et sur les routes nationales.
            </div>

            <h3>3. Rond-point (sens giratoire)</h3>
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
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:1.5rem;margin:1.5rem 0;"><div style="text-align:center;min-width:110px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_B21a1.svg.png" alt="Contournement obligatoire par la droite" style="width:110px;height:110px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>B21a1</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Contournement obligatoire par la droite</div>
            </div><div style="text-align:center;min-width:110px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_B21a2.svg.png" alt="Contournement obligatoire par la gauche" style="width:110px;height:110px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>B21a2</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Contournement obligatoire par la gauche</div>
            </div><div style="text-align:center;min-width:110px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_B21b.svg.png" alt="Contournement possible des deux côtés" style="width:110px;height:110px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>B21b</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Contournement possible des deux côtés</div>
            </div><div style="text-align:center;min-width:110px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_B21c1.svg.png" alt="Directions obligatoires à gauche ou tout droit" style="width:110px;height:110px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>B21c1</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Directions obligatoires à gauche ou tout droit</div>
            </div><div style="text-align:center;min-width:110px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_B21c2.svg.png" alt="Directions obligatoires à droite ou tout droit" style="width:110px;height:110px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>B21c2</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Directions obligatoires à droite ou tout droit</div>
            </div></div>
            <ul>
                <li><strong>Sens interdit (B1)</strong> : Cercle rouge avec barre horizontale blanche</li>
                <li><strong>Circulation interdite (B0)</strong> : Cercle rouge vide - Accès interdit à TOUS</li>
                <li><strong>Interdit de tourner</strong> : Flèche barrée (gauche, droite, demi-tour)</li>
                <li><strong>Accès interdit</strong> : Selon type de véhicule</li>
            </ul>

            <h3>2. Limitations de vitesse</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:1.5rem;margin:1.5rem 0;"></div>
            <div class="warning-box">
                <strong>⚠️ Vitesses légales au Sénégal :</strong>
                <ul style="margin-top:.5rem;">
                    <li><strong>En agglomération :</strong> 50 km/h (Dakar, Thiès, Ziguinchor...)</li>
                    <li><strong>Hors agglomération :</strong> 90 km/h (routes nationales)</li>
                    <li><strong>Autoroute à péage :</strong> 110 km/h (Dakar-Diamniadio, Dakar-Mbour)</li>
                </ul>
            </div>

            <h3>3. Interdiction de dépasser et stationnement</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:1.5rem;margin:1.5rem 0;"></div>
            <ul>
                <li><strong>Interdiction de dépasser (B3)</strong> : Interdit de dépasser tout véhicule à moteur</li>
                <li><strong>Stationnement interdit (B6a1)</strong> : 1 barre = stationnement interdit (arrêt OK)</li>
                <li><strong>Arrêt et stationnement interdits (B6b1)</strong> : 2 barres en X = TOUT interdit</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Sanctions :</strong> Stationnement interdit à Dakar = risque de mise en fourrière + amende (Corniche, Plateau, Almadies).
            </div>

            <h3>4. Interdictions sonores et autres</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:1.5rem;margin:1.5rem 0;"></div>
            <ul>
                <li><strong>Usage avertisseur interdit (B16)</strong> : Zones hospitalières, scolaires</li>
                <li><strong>Limitations physiques</strong> : Hauteur, largeur, poids limités</li>
            </ul>

            <h3>5. Fin d'interdiction</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:1.5rem;margin:1.5rem 0;"></div>
            <p>Panneaux avec bordure noire + barre diagonale = Fin de l'interdiction spécifiée</p>
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
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:1.5rem;margin:1.5rem 0;"><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_C12.svg.png" alt="Vitesse minimale obligatoire" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>C12</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Vitesse minimale obligatoire</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_C13a.svg.png" alt="Chaînes à neige obligatoires" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>C13a</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Chaînes à neige obligatoires</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_C13b.svg.png" alt="Pneus neige obligatoires" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>C13b</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Pneus neige obligatoires</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_C13c.svg.png" alt="Fin d'obligation des chaînes" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>C13c</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Fin d'obligation des chaînes</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_C13d.svg.png" alt="Équipements spéciaux obligatoires" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>C13d</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Équipements spéciaux obligatoires</div>
            </div></div>
            <div class="warning-box">
                <strong>⚠️ Attention :</strong> Ces panneaux sont placés AVANT l'intersection. Ne pas les respecter = infraction + danger !
            </div>

            <h3>2. Contournement d'obstacle</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:1.5rem;margin:1.5rem 0;"></div>

            <h3>3. Pistes et voies réservées</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:1.5rem;margin:1.5rem 0;"><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_C113.svg.png" alt="Parking réservé aux autocars" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>C113</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Parking réservé aux autocars</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_C114.svg.png" alt="Parking réservé aux véhicules équipés pour handicapés" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>C114</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Parking réservé aux véhicules équipés pour handicapés</div>
            </div></div>
            <div class="success-box">
                <strong>✅ Au Sénégal :</strong> Les pistes cyclables sont rares mais en développement à Dakar (Corniche, VDN). Respectez ces espaces !
            </div>

            <h3>4. Vitesse minimale obligatoire</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:1.5rem;margin:1.5rem 0;"></div>
            <p>Vous devez rouler <strong>AU MOINS</strong> à cette vitesse</p>

            <h2>✅ Fin d'obligation</h2>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:1.5rem;margin:1.5rem 0;"></div>
            <p><strong>Barre grise</strong> = Fin de l'obligation</p>
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
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:1.5rem;margin:1.5rem 0;"><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_C24a.svg.png" alt="Voie réservée aux piétons" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>C24a</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Voie réservée aux piétons</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_C111.svg.png" alt="Parc de stationnement" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>C111</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Parc de stationnement</div>
            </div></div>
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
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:1.5rem;margin:1.5rem 0;"><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_C1a.svg.png" alt="Obligation de tourner à gauche" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>C1a</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Obligation de tourner à gauche</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_C1b.svg.png" alt="Obligation de tourner à droite" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>C1b</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Obligation de tourner à droite</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_C1c.svg.png" alt="Obligation d'aller tout droit" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>C1c</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Obligation d'aller tout droit</div>
            </div></div>
            <div class="warning-box">
                <strong>⚠️ À Dakar :</strong>
                <ul style="margin-top:.5rem;">
                    <li>Plateau : Stationnement payant obligatoire (parc mètres)</li>
                    <li>Corniche : Stationnement réglementé</li>
                    <li>Sanctions : Amende + mise en fourrière</li>
                </ul>
            </div>

            <h3>3. Services disponibles</h3>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(110px,1fr));gap:1.5rem;margin:1.5rem 0;"></div>

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

            <h3>3. Passages piétons</h3>
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

            <h3>4. Cas spécial : Marquage dégradé</h3>
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

            <h3>2. Emplacements des feux à Dakar</h3>
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

            <div class="warning-box">
                <strong>⚠️ Dépassements dangereux sur N1 :</strong> La route Dakar-Saint-Louis est particulièrement accidentogène. Nombreux accidents mortels dus aux dépassements imprudents. Soyez ULTRA prudent !
            </div>

            <div class="success-box">
                <strong>✅ Conseil final :</strong> Sur les routes sénégalaises, la prudence et le respect des règles sauvent des vies. Adaptez toujours votre conduite aux conditions réelles (marquage effacé, animaux, nids-de-poule...).
            </div>
        `
    }

];
