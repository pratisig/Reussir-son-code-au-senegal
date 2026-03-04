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
            </div></div>
            <p>Ces panneaux annoncent des virages qui nécessitent de réduire sa vitesse.</p>
        `
    }
];