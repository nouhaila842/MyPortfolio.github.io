const toggleBtn = document.getElementById("assistant-toggle");
const consoleBox = document.getElementById("assistant-console");
const closeBtn = document.getElementById("close-assistant");
const inputBox = document.getElementById("assistant-input");
const outputBox = document.getElementById("assistant-output");

toggleBtn.onclick = () => {
  consoleBox.classList.toggle("show");
};

closeBtn.onclick = () => {
  consoleBox.classList.remove("show");
};

const assistantData = [
  {
    trigger: /formation|[ée]tude|dipl[oô]me|universit[ée]/i,
    response: "🎓 Nouhaila est diplômée d'un Master 2 en Ingénierie Mathématique pour la Science des Données, après un diplôme d'ingénieur en Informatique et Ingénierie des Données."
  },
  {
    trigger: /exp[ée]rience|poste|entreprise|travail/i,
    response: "💼 Elle a occupé des postes chez Groupe ADP (Paris), TE Connectivity et High Speed. Elle y a mené des missions en BI, data analytics et automatisation de reportings."
  },
  {
    trigger: /comp[ée]tence|outils?|technologie|stack/i,
    response: "🛠️ Elle maîtrise Python, SQL, Power BI, Tableau, Excel, Talend, SAP BO, MongoDB, R, Looker Studio, etc."
  },
  {
    trigger: /projets?|personnels?|réalisations?/i,
    response: "📊 Nouhaila a mené plusieurs projets : NLP sur feedbacks clients, scoring crédit, scraping Amazon, suivi YouTube via API, dashboards Excel et Power BI... Découvrez-les sur son portfolio."
  },
  {
    trigger: /kpi|indicateurs?|analyses?/i,
    response: "📈 Elle a conçu des dashboards pour analyser des KPIs de production, qualité, maintenance, logistique, et parcours passagers (flux, anomalies, performance)."
  },
  {
    trigger: /langue|parle|anglais|fran[çc]ais/i,
    response: "🌍 Elle parle français (niveau C1) et anglais (niveau B2)."
  },
  {
    trigger: /disponible|disponibilit[ée]|recherche/i,
    response: "📅 Elle est actuellement disponible et ouverte à de nouvelles opportunités en data/BI, en France ou à distance."
  },
  {
    trigger: /contact|email|cv|linkedin|github/i,
    response: "📩 Contact : nouhailachergui@outlook.fr — CV et projets sur : MyPortfolio.github.io — GitHub : github.com/nouhaila842"
  },
  {
    trigger: /qualit[ée]s?|points forts|soft skill/i,
    response: "💡 Curieuse, rigoureuse, autonome, avec un bon esprit d’équipe et une capacité d’adaptation rapide."
  },
  {
    trigger: /valeurs?|personnalit[ée]|motivation/i,
    response: "🚀 Nouhaila est passionnée par les données et l’innovation. Elle aime résoudre des problématiques complexes avec rigueur et créativité."
  },
  {
    trigger: /objectifs?|ambition|avenir|plan/i,
    response: "🎯 Elle souhaite évoluer dans un environnement stimulant où elle pourra contribuer à des projets innovants en data ou BI."
  },
  {
    trigger: /environnement|pr[ée]f[ée]r[ée]|[ée]quipe/i,
    response: "👥 Elle s'épanouit dans un environnement collaboratif, agile, où l'autonomie et le partage de savoir sont valorisés."
  },
  {
    trigger: /poste id[ée]al|mission id[ée]ale|type de poste/i,
    response: "🔍 Elle recherche un poste en tant que Data Analyst ou Ingénieure BI, alliant analyse, visualisation et impact métier."
  }
];

inputBox.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const question = inputBox.value.trim();
    if (!question) return;
    outputBox.innerHTML += `\n> ${question}\n`;
    let answer = "🤖 Je n’ai pas compris. Essayez par exemple : 'Quelles sont ses compétences ?', 'Quel est son dernier projet ?', ou contactez directement Nouhaila.";
    for (let item of assistantData) {
      if (item.trigger.test(question)) {
        answer = item.response;
        break;
      }
    }
    outputBox.innerHTML += `${answer}\n`;
    inputBox.value = "";
    outputBox.scrollTop = outputBox.scrollHeight;
  }
});

// Console draggable
function dragElement(elm) {
  let pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  const header = elm.querySelector(".console-header");
  header.onmousedown = dragMouseDown;

  function dragMouseDown(e) {
    e.preventDefault();
    pos3 = e.clientX; pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e.preventDefault();
    pos1 = pos3 - e.clientX; pos2 = pos4 - e.clientY;
    pos3 = e.clientX; pos4 = e.clientY;
    elm.style.top = (elm.offsetTop - pos2) + "px";
    elm.style.left = (elm.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
dragElement(consoleBox);
