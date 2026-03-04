// Données des modules de cours — Version complète avec toutes les images
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
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A1a.svg.png" alt="Virage dangereux à droite" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A1a</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Virage dangereux à droite</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A1b.svg.png" alt="Virage dangereux à gauche" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A1b</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Virage dangereux à gauche</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A1c.svg.png" alt="Succession de virages (d'abord à droite)" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A1c</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Succession de virages (d'abord à droite)</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A1d.svg.png" alt="Succession de virages (d'abord à gauche)" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A1d</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Succession de virages (d'abord à gauche)</div>
            </div></div>
            <ul>
                <li><strong>Virage dangereux à droite / gauche</strong> : Un seul virage serré</li>
                <li><strong>Succession de virages</strong> : Plusieurs virages successifs en S</li>
                <li><strong>Conduite :</strong> Ralentir AVANT le virage, ne jamais freiner dans le virage</li>
            </ul>

            <h3>2. État et relief de la chaussée</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:1.5rem;margin:1.5rem 0;"><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A2a.svg.png" alt="Chaussée déformée" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A2a</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Chaussée déformée</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A2b.svg.png" alt="Dos d'âne / ralentisseur" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A2b</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Dos d'âne / ralentisseur</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A3.svg.png" alt="Chaussée rétrécie" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A3</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Chaussée rétrécie</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A3a.svg.png" alt="Chaussée rétrécie par la droite" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A3a</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Chaussée rétrécie par la droite</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A3b.svg.png" alt="Chaussée rétrécie par la gauche" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A3b</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Chaussée rétrécie par la gauche</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A4.svg.png" alt="Chaussée glissante" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A4</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Chaussée glissante</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A16.svg.png" alt="Descente dangereuse" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A16</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Descente dangereuse</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A19.svg.png" alt="Chutes de pierres" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A19</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Chutes de pierres</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A20.svg.png" alt="Quai ou berge (chute à l'eau)" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A20</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Quai ou berge (chute à l'eau)</div>
            </div></div>
            <ul>
                <li><strong>Dos d'âne (A2b)</strong> : Bosse sur la chaussée, ralentisseur naturel</li>
                <li><strong>Chaussée déformée (A2a)</strong> : Nids-de-poule, route dégradée</li>
                <li><strong>Chaussée rétrécie (A3/A3a/A3b)</strong> : La route devient plus étroite, côté précisé</li>
                <li><strong>Chaussée glissante (A4)</strong> : Route huileuse, mouillée ou sablonneuse</li>
                <li><strong>Descente dangereuse (A16)</strong> : Pente importante (pourcentage indiqué)</li>
                <li><strong>Chutes de pierres (A19)</strong> : Risque d'éboulement</li>
                <li><strong>Quai ou berge (A20)</strong> : Risque de chute dans l'eau</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ En descente :</strong> Utilisez le frein moteur (rétrograder). Ne restez JAMAIS au point mort !
            </div>

            <h3>3. Passages à niveau et ponts</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:1.5rem;margin:1.5rem 0;"><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A7.svg.png" alt="Passage à niveau avec barrières" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A7</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Passage à niveau avec barrières</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A8.svg.png" alt="Passage à niveau sans barrières" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A8</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Passage à niveau sans barrières</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_Road_Sign_A6.svg.png" alt="Pont mobile" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A6</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Pont mobile</div>
            </div></div>
            <ul>
                <li><strong>Passage à niveau avec barrières (A7)</strong> : Voie ferrée protégée — attention aux trains !</li>
                <li><strong>Passage à niveau sans barrières (A8)</strong> : Danger maximal — ralentir impérativement</li>
                <li><strong>Pont mobile (A6)</strong> : Pont pouvant être levé — risque de coupure de route</li>
            </ul>

            <h3>4. Passages et usagers vulnérables</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:1.5rem;margin:1.5rem 0;"><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A13b.svg.png" alt="Passage pour piétons" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A13b</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Passage pour piétons</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A13a.svg.png" alt="Passage d'enfants" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A13a</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Passage d'enfants</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A21.svg.png" alt="Passage de cyclistes" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A21</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Passage de cyclistes</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_Road_Sign_A9a.png" alt="Débouché de transport en commun" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A9a</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Débouché de transport en commun</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A15a.svg.png" alt="Passage d'animaux domestiques" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A15a</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Passage d'animaux domestiques</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A15b.svg.png" alt="Passage d'animaux sauvages" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A15b</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Passage d'animaux sauvages</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A15c.svg.png" alt="Passage de cavaliers" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A15c</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Passage de cavaliers</div>
            </div></div>
            <p>Zones à forte vigilance au Sénégal :</p>
            <ul>
                <li><strong>Passage piétons (A13b)</strong> : Très fréquent en ville (Dakar, Thiès, Saint-Louis)</li>
                <li><strong>Passage d'enfants (A13a)</strong> : Près des écoles — RALENTIR IMPÉRATIVEMENT</li>
                <li><strong>Passage de cyclistes (A21)</strong> : Débouché de vélos depuis une piste</li>
                <li><strong>Passage d'animaux domestiques (A15a)</strong> : Vaches, chèvres, moutons (zones rurales)</li>
                <li><strong>Passage d'animaux sauvages (A15b)</strong> : Zones forestières (Casamance, Niokolo-Koba)</li>
                <li><strong>Passage de cavaliers (A15c)</strong> : Zones rurales et périurbaines</li>
            </ul>
            <div class="success-box">
                <strong>✅ Conseil Sénégal :</strong> Sur les routes nationales (N1, N2, N3), soyez particulièrement vigilant aux animaux qui traversent, surtout tôt le matin et en fin de journée.
            </div>

            <h3>5. Autres dangers</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:1.5rem;margin:1.5rem 0;"><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A17.svg.png" alt="Feux de signalisation" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A17</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Feux de signalisation</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A18.svg.png" alt="Circulation dans les deux sens" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A18</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Circulation dans les deux sens</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A23.svg.png" alt="Survol d'avions à basse altitude" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A23</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Survol d'avions à basse altitude</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_A14.svg.png" alt="Autre danger non spécifié" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>A14</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Autre danger non spécifié</div>
            </div></div>
            <ul>
                <li><strong>Feux tricolores (A17)</strong> : Intersection avec feux à venir</li>
                <li><strong>Circulation double sens (A18)</strong> : Fin de route à sens unique</li>
                <li><strong>Avions bas (A23)</strong> : Proximité d'un aéroport (Dakar-Yoff, Ziguinchor)</li>
                <li><strong>Autre danger (A14)</strong> : Point d'exclamation = danger variable non spécifié</li>
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

            <h3>1. Priorité à droite — règle générale</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:1.5rem;margin:1.5rem 0;"><div style="text-align:center;min-width:140px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_AB1.svg.png" alt="Intersection — priorité à droite" style="width:140px;height:140px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>AB1</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Intersection — priorité à droite</div>
            </div><div style="text-align:center;min-width:140px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_AB2.svg.png" alt="Priorité sur route étroite" style="width:140px;height:140px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>AB2</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Priorité sur route étroite</div>
            </div></div>
            <p>En l'absence de signalisation, vous devez <strong>céder le passage aux véhicules venant de votre droite</strong>.</p>
            <div class="warning-box">
                <strong>⚠️ Important :</strong> Cette règle s'applique à TOUS les croisements sans signalisation, même dans les petites rues de quartier à Dakar, Rufisque, ou Mbour.
            </div>

            <h3>2. Cédez le passage et Stop</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:1.5rem;margin:1.5rem 0;"><div style="text-align:center;min-width:140px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_AB3a.svg.png" alt="Cédez le passage" style="width:140px;height:140px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>AB3a</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Cédez le passage</div>
            </div><div style="text-align:center;min-width:140px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_AB3b.svg.png" alt="Cédez le passage à 150 m" style="width:140px;height:140px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>AB3b</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Cédez le passage à 150 m</div>
            </div><div style="text-align:center;min-width:140px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_AB4.svg.png" alt="Stop — Arrêt absolu obligatoire" style="width:140px;height:140px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>AB4</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Stop — Arrêt absolu obligatoire</div>
            </div><div style="text-align:center;min-width:140px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_AB5.svg.png" alt="Stop à 150 m" style="width:140px;height:140px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>AB5</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Stop à 150 m</div>
            </div></div>
            <ul>
                <li><strong>STOP (AB4)</strong> : Arrêt TOTAL et COMPLET obligatoire, même si la voie semble libre</li>
                <li><strong>Stop à 150 m (AB5)</strong> : Panneau avancé, préparez-vous à vous arrêter</li>
                <li><strong>Cédez le passage (AB3a)</strong> : Triangle inversé — ralentir et laisser passer</li>
                <li><strong>Cédez le passage à 150 m (AB3b)</strong> : Panneau avancé du cédez le passage</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ Grillage de stop au Sénégal :</strong> Très dangereux et sanctionné ! Nombreux accidents mortels aux stops de Pikine, Guédiawaye, et sur les routes nationales.
            </div>

            <h3>3. Route prioritaire</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:1.5rem;margin:1.5rem 0;"><div style="text-align:center;min-width:140px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_AB6.svg.png" alt="Route prioritaire (losange jaune)" style="width:140px;height:140px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>AB6</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Route prioritaire (losange jaune)</div>
            </div><div style="text-align:center;min-width:140px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_AB7.svg.png" alt="Fin de route prioritaire" style="width:140px;height:140px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>AB7</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Fin de route prioritaire</div>
            </div><div style="text-align:center;min-width:140px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_Road_Sign_AB25.svg.png" alt="Carrefour giratoire (rond-point)" style="width:140px;height:140px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>AB25</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Carrefour giratoire (rond-point)</div>
            </div></div>
            <ul>
                <li><strong>Route prioritaire (AB6)</strong> : Losange jaune — vous avez la priorité sur les routes qui croisent</li>
                <li><strong>Fin de priorité (AB7)</strong> : Losange jaune barré — vous redevenez comme les autres</li>
                <li><strong>Carrefour giratoire (AB25)</strong> : Les véhicules déjà dans le rond-point sont prioritaires</li>
            </ul>

            <h3>4. Règles du rond-point</h3>
            <div class="info-box">
                <strong>🔄 Règle au Sénégal :</strong> Dans un rond-point, les véhicules DÉJÀ engagés sont prioritaires.
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
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:1.5rem;margin:1.5rem 0;"><div style="text-align:center;min-width:110px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_B0.svg.png" alt="Circulation interdite (tous véhicules)" style="width:110px;height:110px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>B0</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Circulation interdite (tous véhicules)</div>
            </div><div style="text-align:center;min-width:110px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_B1.svg.png" alt="Sens interdit" style="width:110px;height:110px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>B1</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Sens interdit</div>
            </div><div style="text-align:center;min-width:110px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_B1j.svg.png" alt="Sens interdit (zone)" style="width:110px;height:110px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>B1j</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Sens interdit (zone)</div>
            </div></div>
            <ul>
                <li><strong>Circulation interdite (B0)</strong> : Accès interdit à TOUS les véhicules</li>
                <li><strong>Sens interdit (B1)</strong> : Cercle rouge avec barre blanche — entrée interdite</li>
                <li><strong>Sens interdit zone (B1j)</strong> : Interdit en zone urbaine délimitée</li>
            </ul>

            <h3>2. Interdictions de manœuvre</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:1.5rem;margin:1.5rem 0;"><div style="text-align:center;min-width:110px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_B2a.svg.png" alt="Interdit de tourner à gauche" style="width:110px;height:110px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>B2a</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Interdit de tourner à gauche</div>
            </div><div style="text-align:center;min-width:110px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_B2b.svg.png" alt="Interdit de tourner à droite" style="width:110px;height:110px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>B2b</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Interdit de tourner à droite</div>
            </div><div style="text-align:center;min-width:110px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_B2c.svg.png" alt="Demi-tour interdit" style="width:110px;height:110px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>B2c</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Demi-tour interdit</div>
            </div></div>
            <ul>
                <li>Ces panneaux interdisent une direction précise à l'intersection suivante</li>
                <li>Flèche barrée = direction interdite</li>
            </ul>

            <h3>3. Interdiction de dépasser</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:1.5rem;margin:1.5rem 0;"><div style="text-align:center;min-width:110px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_B3.svg.png" alt="Dépassement interdit" style="width:110px;height:110px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>B3</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Dépassement interdit</div>
            </div><div style="text-align:center;min-width:110px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_B3a.svg.png" alt="Dépassement interdit aux poids lourds" style="width:110px;height:110px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>B3a</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Dépassement interdit aux poids lourds</div>
            </div></div>
            <ul>
                <li><strong>B3</strong> : Interdit de dépasser tout véhicule à moteur</li>
                <li><strong>B3a</strong> : Interdit uniquement pour camions et poids lourds</li>
            </ul>

            <h3>4. Contrôles et postes</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:1.5rem;margin:1.5rem 0;"><div style="text-align:center;min-width:110px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_B4.svg.png" alt="Douane — Arrêt obligatoire" style="width:110px;height:110px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>B4</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Douane — Arrêt obligatoire</div>
            </div><div style="text-align:center;min-width:110px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_B5a.svg.png" alt="Halte Gendarmerie" style="width:110px;height:110px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>B5a</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Halte Gendarmerie</div>
            </div></div>
            <ul>
                <li><strong>Douane (B4)</strong> : Arrêt obligatoire au poste frontière</li>
                <li><strong>Halte gendarmerie (B5a)</strong> : Contrôle obligatoire, s'arrêter impérativement</li>
            </ul>

            <h3>5. Stationnement et arrêt</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:1.5rem;margin:1.5rem 0;"><div style="text-align:center;min-width:110px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_B6a1.svg.png" alt="Stationnement interdit" style="width:110px;height:110px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>B6a1</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Stationnement interdit</div>
            </div><div style="text-align:center;min-width:110px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_B6a2.svg.png" alt="Stationnement interdit (zone)" style="width:110px;height:110px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>B6a2</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Stationnement interdit (zone)</div>
            </div><div style="text-align:center;min-width:110px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_B6a3.svg.png" alt="Stationnement interdit (période alternée)" style="width:110px;height:110px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>B6a3</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Stationnement interdit (période alternée)</div>
            </div><div style="text-align:center;min-width:110px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_B6d.svg.png" alt="Arrêt et stationnement interdits" style="width:110px;height:110px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>B6d</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Arrêt et stationnement interdits</div>
            </div></div>
            <ul>
                <li><strong>Stationnement interdit (B6a1)</strong> : 1 barre = stationnement interdit (arrêt bref OK)</li>
                <li><strong>Stationnement interdit zone (B6a2)</strong> : Zone entière concernée</li>
                <li><strong>Période alternée (B6a3)</strong> : Interdit selon les jours (1-15 / 16-31)</li>
                <li><strong>Arrêt + stationnement interdits (B6d)</strong> : 2 barres en X = TOUT interdit</li>
            </ul>
            <div class="warning-box">
                <strong>⚠️ À Dakar :</strong> Stationnement interdit = risque de mise en fourrière + amende (Corniche, Plateau, Almadies).
            </div>

            <h3>6. Limitations physiques</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:1.5rem;margin:1.5rem 0;"><div style="text-align:center;min-width:110px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_B11.svg.png" alt="Largeur max 2,5 m" style="width:110px;height:110px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>B11</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Largeur max 2,5 m</div>
            </div><div style="text-align:center;min-width:110px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_B12.svg.png" alt="Hauteur max 3,5 m" style="width:110px;height:110px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>B12</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Hauteur max 3,5 m</div>
            </div><div style="text-align:center;min-width:110px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_B13.svg.png" alt="Poids max 5,5 t" style="width:110px;height:110px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>B13</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Poids max 5,5 t</div>
            </div><div style="text-align:center;min-width:110px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_B13a.svg.png" alt="Charge par essieu max 2 t" style="width:110px;height:110px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>B13a</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Charge par essieu max 2 t</div>
            </div></div>
            <ul>
                <li>Ces panneaux protègent les tunnels, ponts et voiries fragiles</li>
                <li>Fréquents sur les ponts de Dakar et en zones urbaines</li>
            </ul>

            <h3>7. Autres interdictions</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:1.5rem;margin:1.5rem 0;"><div style="text-align:center;min-width:110px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_B14_(80).svg.png" alt="Limitation de vitesse 80 km/h" style="width:110px;height:110px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>B14</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Limitation de vitesse 80 km/h</div>
            </div><div style="text-align:center;min-width:110px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_B15.svg.png" alt="Priorité au sens inverse" style="width:110px;height:110px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>B15</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Priorité au sens inverse</div>
            </div><div style="text-align:center;min-width:110px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_B16.svg.png" alt="Klaxon interdit" style="width:110px;height:110px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>B16</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Klaxon interdit</div>
            </div><div style="text-align:center;min-width:110px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_B17.svg.png" alt="Distance minimale 70 m" style="width:110px;height:110px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>B17</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Distance minimale 70 m</div>
            </div></div>
            <div class="warning-box">
                <strong>⚠️ Vitesses légales au Sénégal :</strong>
                <ul style="margin-top:.5rem;">
                    <li><strong>En agglomération :</strong> 50 km/h</li>
                    <li><strong>Hors agglomération :</strong> 90 km/h</li>
                    <li><strong>Autoroute à péage :</strong> 110 km/h</li>
                </ul>
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
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:1.5rem;margin:1.5rem 0;"><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_B21_1.svg.png" alt="Aller à droite (obligation)" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>B21-1</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Aller à droite (obligation)</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_B21_2.svg.png" alt="Aller à gauche (obligation)" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>B21-2</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Aller à gauche (obligation)</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_B21b.svg.png" alt="Tout droit obligatoire" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>B21b</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Tout droit obligatoire</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_B21c1.svg.png" alt="Tout droit ou à droite" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>B21c1</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Tout droit ou à droite</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_B21c2.svg.png" alt="Tout droit ou à gauche" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>B21c2</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Tout droit ou à gauche</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_B21d1.svg.png" alt="Tout droit ou à droite (avant carrefour)" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>B21d1</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Tout droit ou à droite (avant carrefour)</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_B21d2.svg.png" alt="Tout droit ou à gauche (avant carrefour)" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>B21d2</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Tout droit ou à gauche (avant carrefour)</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_B21e.svg.png" alt="À droite ou à gauche" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>B21e</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">À droite ou à gauche</div>
            </div></div>
            <div class="warning-box">
                <strong>⚠️ Attention :</strong> Ces panneaux imposent une direction. Ne pas les respecter = infraction + danger !
            </div>

            <h3>2. Contournement d'obstacle</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:1.5rem;margin:1.5rem 0;"><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_B21a1.svg.png" alt="Contournement obligatoire par la droite" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>B21a1</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Contournement obligatoire par la droite</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_B21a2.svg.png" alt="Contournement obligatoire par la gauche" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>B21a2</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Contournement obligatoire par la gauche</div>
            </div></div>
            <ul>
                <li>Ces panneaux sont placés devant un obstacle (îlot, refuge) à contourner obligatoirement</li>
            </ul>

            <h3>3. Pistes et voies réservées</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:1.5rem;margin:1.5rem 0;"><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_B22a.svg.png" alt="Piste cyclable obligatoire" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>B22a</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Piste cyclable obligatoire</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_B22b.svg.png" alt="Voie piétonne obligatoire" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>B22b</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Voie piétonne obligatoire</div>
            </div></div>
            <ul>
                <li><strong>Piste cyclable (B22a)</strong> : Réservée aux vélos, accès interdit aux autres</li>
                <li><strong>Voie piétonne (B22b)</strong> : Réservée aux piétons</li>
            </ul>
            <div class="success-box">
                <strong>✅ Au Sénégal :</strong> Les pistes cyclables sont en développement à Dakar (Corniche, VDN). Respectez ces espaces !
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
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:1.5rem;margin:1.5rem 0;"><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/Autoroute_F.svg.png" alt="Début d'autoroute" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong></strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Début d'autoroute</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/Autoroute_F_(fin).svg.png" alt="Fin d'autoroute" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong></strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Fin d'autoroute</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/Voie_express_F.svg.png" alt="Début de voie express" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong></strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Début de voie express</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/Voie_express_F_(fin).svg.png" alt="Fin de voie express" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong></strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Fin de voie express</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_C18.svg.png" alt="Circulation alternée" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>C18</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Circulation alternée</div>
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
                    <div style="font-size:0.9rem;margin-top:0.5rem;">Routes locales</div>
                </div>
                <div style="background:#ffcc00;padding:1rem;border-radius:8px;">
                    <div style="font-size:1.5rem;margin-bottom:0.5rem;">🚧 JAUNE</div>
                    <strong>Temporaires</strong>
                    <div style="font-size:0.9rem;margin-top:0.5rem;">Déviations / Travaux</div>
                </div>
            </div>

            <h3>2. Stationnement et services</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:1.5rem;margin:1.5rem 0;"><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_C1a.svg.png" alt="Parking" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>C1a</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Parking</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_C1b.svg.png" alt="Parking horodateur" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>C1b</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Parking horodateur</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_C1c.svg.png" alt="Parking payant" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>C1c</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Parking payant</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_C4a_(50).svg.png" alt="Vitesse conseillée 50 km/h" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>C4a</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Vitesse conseillée 50 km/h</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_C4b_(50).svg.png" alt="Fin vitesse conseillée" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>C4b</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Fin vitesse conseillée</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_C5.svg.png" alt="Station de taxis" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>C5</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Station de taxis</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_C6.svg.png" alt="Arrêt de bus" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>C6</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Arrêt de bus</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_CE1.svg.png" alt="Poste de secours" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>CE1</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Poste de secours</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_C64a.svg.png" alt="Poste de péage" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>C64a</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Poste de péage</div>
            </div></div>
            <div class="warning-box">
                <strong>⚠️ À Dakar :</strong>
                <ul style="margin-top:.5rem;">
                    <li>Plateau : Stationnement payant obligatoire (parc mètres)</li>
                    <li>Corniche : Stationnement réglementé</li>
                    <li>Sanctions : Amende + mise en fourrière</li>
                </ul>
            </div>

            <h3>3. Circulation et directions</h3>
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(120px,1fr));gap:1.5rem;margin:1.5rem 0;"><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_C12.svg.png" alt="Sens unique" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>C12</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Sens unique</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_C8.svg.png" alt="Voie lente (véhicules lents)" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>C8</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Voie lente (véhicules lents)</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_C9.svg.png" alt="Voie de covoiturage" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>C9</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Voie de covoiturage</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_C13a.svg.png" alt="Impasse" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>C13a</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Impasse</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_C13b.svg.png" alt="Impasse — passage à droite" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>C13b</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Impasse — passage à droite</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_C13c.svg.png" alt="Impasse — passage piétons" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>C13c</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Impasse — passage piétons</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_C13d.svg.png" alt="Impasse — passage cyclistes" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>C13d</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Impasse — passage cyclistes</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_C20a.svg.png" alt="Passage piétons (indication)" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>C20a</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Passage piétons (indication)</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_C24a.svg.png" alt="Nombre de voies de circulation" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>C24a</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Nombre de voies de circulation</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_C26a.svg.png" alt="Voie de déviation à droite" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>C26a</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Voie de déviation à droite</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_C26b.svg.png" alt="Voie de déviation à gauche" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>C26b</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Voie de déviation à gauche</div>
            </div><div style="text-align:center;min-width:120px;">
                <img src="https://raw.githubusercontent.com/pratisig/Reussir-son-code-au-senegal/main/Panneaux/France_road_sign_C27.svg.png" alt="Dos d'âne (indication)" style="width:120px;height:120px;object-fit:contain;filter:drop-shadow(0 2px 4px rgba(0,0,0,0.2));">
                <div style="font-size:0.75rem;color:#94a3b8;margin-top:0.5rem;"><strong>C27</strong></div>
                <div style="font-size:0.8rem;margin-top:0.25rem;">Dos d'âne (indication)</div>
            </div></div>
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
                    <small style="margin-top:0.5rem;display:block;">Ligne discontinue<br><strong>Dépassement AUTORISÉ</strong></small>
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
            <p><strong>"Zèbres"</strong> : Bandes blanches et noires alternées — piétons prioritaires</p>
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
                    <div style="font-size:4rem;margin-bottom:0.5rem;">🔴</div>
                    <h4>FEU ROUGE</h4>
                    <strong>ARRÊT OBLIGATOIRE</strong>
                    <ul style="text-align:left;margin-top:1rem;font-size:0.9rem;">
                        <li>S'arrêter AVANT la ligne</li>
                        <li>NE PAS franchir</li>
                        <li>Attendre le vert</li>
                    </ul>
                </div>
                <div style="background:#e67e00;color:white;padding:1.5rem;border-radius:12px;text-align:center;">
                    <div style="font-size:4rem;margin-bottom:0.5rem;">🟠</div>
                    <h4>FEU ORANGE</h4>
                    <strong>RALENTIR ET S'ARRÊTER</strong>
                    <ul style="text-align:left;margin-top:1rem;font-size:0.9rem;">
                        <li>Si loin : S'arrêter</li>
                        <li>Si trop près : Continuer prudemment</li>
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
