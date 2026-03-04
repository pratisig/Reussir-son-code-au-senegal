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
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A1b.svg.png" alt="Virage à gauche" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A1b</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Virage à gauche</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A1c.svg.png" alt="Succession de virages" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A1c</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Succession de virages</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A1d.svg.png" alt="Succession de virages 1er à droite" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A1d</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Succession de virages 1er à droite</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A13a.svg.png" alt="Débouché sur un quai ou rivière" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A13a</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Débouché sur un quai ou rivière</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A13b.svg.png" alt="Débouché sur un quai ou rivière" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A13b</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Débouché sur un quai ou rivière</div>
            </div></div>
            <p>Ces panneaux annoncent des virages qui nécessitent de réduire sa vitesse :</p>
            <ul>
                <li><strong>Virage à droite/gauche</strong> : Un seul virage serré</li>
                <li><strong>Série de virages</strong> : Plusieurs virages successifs (lacets)</li>
                <li><strong>Conduite à adopter</strong> : Ralentir AVANT le virage, ne pas freiner dans le virage</li>
            </ul>

            <h3>2. Relief de la chaussée</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:1.5rem;margin:1.5rem 0;"><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A2a.svg.png" alt="Dos d'âne ou cassis" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A2a</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Dos d'âne ou cassis</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A2b.svg.png" alt="Ralentisseur de type dos d'âne" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A2b</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Ralentisseur de type dos d'âne</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A3.svg.png" alt="Cassis ou dos d'âne" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A3</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Cassis ou dos d'âne</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A4.svg.png" alt="Descente dangereuse" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A4</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Descente dangereuse</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A16.svg.png" alt="Chaussée rétrécie par la droite" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A16</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Chaussée rétrécie par la droite</div>
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
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A7.svg.png" alt="Chaussée glissante" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A7</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Chaussée glissante</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A8.svg.png" alt="Chaussée rétrécie" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A8</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Chaussée rétrécie</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A18.svg.png" alt="Circulation dans les deux sens" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A18</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Circulation dans les deux sens</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A19a.svg.png" alt="Chaussée déformée" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A19a</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Chaussée déformée</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A19b.svg.png" alt="Pavage ou surface en mauvais état" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A19b</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Pavage ou surface en mauvais état</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A19c.svg.png" alt="Nid de poule" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A19c</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Nid de poule</div>
            </div></div>
            <ul>
                <li><strong>Chaussée glissante</strong> : Route huileuse, mouillée ou sablonneuse</li>
                <li><strong>Chutes de pierres</strong> : Risque d'éboulement (fréquent en zone rocheuse)</li>
                <li><strong>Rétrécissement</strong> : La route devient plus étroite</li>
                <li><strong>Chaussée déformée</strong> : Nids-de-poule, route en mauvais état</li>
            </ul>

            <h3>4. Passages et croisements</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:1.5rem;margin:1.5rem 0;"><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A13a.svg.png" alt="Débouché sur un quai ou rivière" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A13a</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Débouché sur un quai ou rivière</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A13b.svg.png" alt="Débouché sur un quai ou rivière" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A13b</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Débouché sur un quai ou rivière</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A14.svg.png" alt="Passerelle pour piétons" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A14</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Passerelle pour piétons</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A15a.svg.png" alt="Passage d'animaux domestiques" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A15a</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Passage d'animaux domestiques</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A15b.svg.png" alt="Passage d'animaux sauvages" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A15b</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Passage d'animaux sauvages</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A23.svg.png" alt="Autres dangers" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A23</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Autres dangers</div>
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
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A21.svg.png" alt="Débouché de cyclistes" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A21</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Débouché de cyclistes</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A22.svg.png" alt="Chutes de pierres" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A22</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Chutes de pierres</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A24a.svg.png" alt="Passage à niveau avec barrières" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A24a</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Passage à niveau avec barrières</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A24b.svg.png" alt="Passage à niveau sans barrières" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A24b</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Passage à niveau sans barrières</div>
            </div></div>
            <ul>
                <li><strong>Intersection</strong> : Croisement de routes</li>
                <li><strong>Carrefour giratoire</strong> : Rond-point à venir</li>
                <li><strong>Passages à niveau</strong> : Voie ferrée (attention trains !)</li>
            </ul>

            <h3>6. Autres dangers</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:1.5rem;margin:1.5rem 0;"><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A11b.svg.png" alt="Montée en pourcentage" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A11b</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Montée en pourcentage</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A17.svg.png" alt="Chaussée rétrécie par la gauche" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A17</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Chaussée rétrécie par la gauche</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A20.svg.png" alt="Aéronef volant à basse altitude" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A20</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Aéronef volant à basse altitude</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A25.svg.png" alt="Vent latéral" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A25</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Vent latéral</div>
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
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_AB3b.svg.png" alt="Cédez le passage" style="width:140px;height:140px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>AB3b</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Cédez le passage</div>
            </div><div style="text-align:center;min-width:140px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_AB4.svg.png" alt="Cédez le passage à l'intersection" style="width:140px;height:140px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>AB4</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Cédez le passage à l'intersection</div>
            </div><div style="text-align:center;min-width:140px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_AB5.svg.png" alt="Signal avancé de stop" style="width:140px;height:140px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>AB5</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Signal avancé de stop</div>
            </div><div style="text-align:center;min-width:140px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_AB6.svg.png" alt="Route prioritaire" style="width:140px;height:140px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>AB6</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Route prioritaire</div>
            </div><div style="text-align:center;min-width:140px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_AB7.svg.png" alt="Fin de route prioritaire" style="width:140px;height:140px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>AB7</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Fin de route prioritaire</div>
            </div><div style="text-align:center;min-width:140px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_AB25.svg.png" alt="Sens giratoire obligatoire" style="width:140px;height:140px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>AB25</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Sens giratoire obligatoire</div>
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
    }
];