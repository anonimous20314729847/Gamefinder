const games = [
{ id: 1, title: "GTA V", genre: "Ação", platform: "PC/Console", desc: "Mundo aberto criminal" },
{ id: 2, title: "Red Dead Redemption 2", genre: "Ação", platform: "PC/Console", desc: "Velho oeste realista" },
{ id: 3, title: "God of War", genre: "Ação", platform: "PC/Console", desc: "Mitologia nórdica" },
{ id: 4, title: "Spider-Man", genre: "Ação", platform: "PC/Console", desc: "Herói em Nova York" },
{ id: 5, title: "The Last of Us", genre: "Ação", platform: "Console/PC", desc: "Sobrevivência emocional" },

{ id: 6, title: "Elden Ring", genre: "RPG", platform: "PC/Console", desc: "Mundo souls aberto" },
{ id: 7, title: "The Witcher 3", genre: "RPG", platform: "PC/Console", desc: "Caçador de monstros" },
{ id: 8, title: "Skyrim", genre: "RPG", platform: "PC/Console", desc: "Exploração livre" },
{ id: 9, title: "Baldur's Gate 3", genre: "RPG", platform: "PC", desc: "RPG tático profundo" },
{ id: 10, title: "Cyberpunk 2077", genre: "RPG", platform: "PC/Console", desc: "Futuro distópico" },

{ id: 11, title: "Valorant", genre: "FPS", platform: "PC", desc: "Tiro tático" },
{ id: 12, title: "CS2", genre: "FPS", platform: "PC", desc: "Competitivo clássico" },
{ id: 13, title: "Apex Legends", genre: "FPS", platform: "PC/Console", desc: "Battle royale rápido" },
{ id: 14, title: "Warzone", genre: "FPS", platform: "PC/Console", desc: "BR militar" },
{ id: 15, title: "Rainbow Six Siege", genre: "FPS", platform: "PC/Console", desc: "Estratégia tática" },

{ id: 16, title: "Forza Horizon 5", genre: "Corrida", platform: "PC/Console", desc: "Open world corrida" },
{ id: 17, title: "Gran Turismo 7", genre: "Corrida", platform: "Console", desc: "Simulação realista" },
{ id: 18, title: "Need for Speed Heat", genre: "Corrida", platform: "PC/Console", desc: "Corrida arcade" },
{ id: 19, title: "F1 23", genre: "Corrida", platform: "PC/Console", desc: "Fórmula 1" },
{ id: 20, title: "Assetto Corsa", genre: "Corrida", platform: "PC", desc: "Simulação avançada" },

{ id: 21, title: "EA FC 24", genre: "Esporte", platform: "PC/Console", desc: "Futebol moderno" },
{ id: 22, title: "FIFA 23", genre: "Esporte", platform: "PC/Console", desc: "Futebol clássico" },
{ id: 23, title: "NBA 2K24", genre: "Esporte", platform: "PC/Console", desc: "Basquete realista" },
{ id: 24, title: "Rocket League", genre: "Esporte", platform: "PC/Console", desc: "Carros e futebol" },
{ id: 25, title: "Tony Hawk", genre: "Esporte", platform: "PC/Console", desc: "Skate arcade" },

{ id: 26, title: "Minecraft", genre: "Sandbox", platform: "PC/Mobile", desc: "Construção livre" },
{ id: 27, title: "Terraria", genre: "Sandbox", platform: "PC", desc: "Aventura 2D" },
{ id: 28, title: "Roblox", genre: "Sandbox", platform: "PC/Mobile", desc: "Plataforma de jogos" },
{ id: 29, title: "Garry's Mod", genre: "Sandbox", platform: "PC", desc: "Criação livre" },
{ id: 30, title: "The Sims 4", genre: "Sandbox", platform: "PC/Console", desc: "Simulação de vida" },

{ id: 31, title: "Resident Evil 4 Remake", genre: "Terror", platform: "PC/Console", desc: "Horror ação" },
{ id: 32, title: "Resident Evil Village", genre: "Terror", platform: "PC/Console", desc: "Terror moderno" },
{ id: 33, title: "Outlast", genre: "Terror", platform: "PC", desc: "Terror psicológico" },
{ id: 34, title: "Silent Hill 2", genre: "Terror", platform: "PC/Console", desc: "Clássico psicológico" },
{ id: 35, title: "Amnesia", genre: "Terror", platform: "PC", desc: "Escuridão e medo" },

{ id: 36, title: "Hades", genre: "RPG", platform: "PC/Console", desc: "Roguelike mitológico" },
{ id: 37, title: "Hollow Knight", genre: "Ação", platform: "PC/Console", desc: "Metroidvania" },
{ id: 38, title: "Sekiro", genre: "Ação", platform: "PC/Console", desc: "Souls difícil" },
{ id: 39, title: "Bloodborne", genre: "RPG", platform: "Console", desc: "Sombrio soulslike" },
{ id: 40, title: "Dark Souls III", genre: "RPG", platform: "PC/Console", desc: "Desafio extremo" },

{ id: 75, title: "Dragon's Dogma 2", genre: "RPG", platform: "PC/Console", desc: "Fantasia aberta" }];


const genres = ["Todos", "Favoritos", "Ação", "RPG", "FPS", "Corrida", "Esporte", "Sandbox", "Terror"];

function App() {
  const [search, setSearch] = React.useState("");
  const [fav, setFav] = React.useState([]);
  const [category, setCategory] = React.useState("Todos");
  const [view, setView] = React.useState("list");
  const [selected, setSelected] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  const filtered = games.filter(g => {
    const matchSearch = g.title.toLowerCase().includes(search.toLowerCase());
    const matchCat =
    category === "Todos" ?
    true :
    category === "Favoritos" ?
    fav.includes(g.id) :
    g.genre === category;

    return matchSearch && matchCat;
  });

  function openDetails(game) {
    setLoading(true);
    setTimeout(() => {
      setSelected(game);
      setView("details");
      setLoading(false);
    }, 5000);
  }

  function back() {
    setView("list");
    setSelected(null);
  }

  function toggleFav(id) {
    setFav(fav.includes(id) ? fav.filter(f => f !== id) : [...fav, id]);
  }

  if (loading) {
    return /*#__PURE__*/React.createElement("h2", { style: { padding: 20 } }, "Carregando...");
  }

  if (view === "details") {
    return /*#__PURE__*/(
      React.createElement("div", { className: "container" }, /*#__PURE__*/
      React.createElement("button", { onClick: back, className: "back" }, "Voltar"), /*#__PURE__*/
      React.createElement("div", { className: "page" }, /*#__PURE__*/
      React.createElement("h1", null, selected.title), /*#__PURE__*/
      React.createElement("p", null, selected.genre), /*#__PURE__*/
      React.createElement("p", null, selected.platform), /*#__PURE__*/
      React.createElement("p", null, selected.desc))));



  }

  return /*#__PURE__*/(
    React.createElement("div", { className: "container" }, /*#__PURE__*/
    React.createElement("h1", { className: "title" }, "GameFinder"), /*#__PURE__*/

    React.createElement("div", { className: "topbar" }, /*#__PURE__*/
    React.createElement("input", { className: "search", value: search, onChange: e => setSearch(e.target.value) }), /*#__PURE__*/

    React.createElement("select", { className: "menu", value: category, onChange: e => setCategory(e.target.value) },
    genres.map(g => /*#__PURE__*/React.createElement("option", { key: g }, g)))), /*#__PURE__*/



    React.createElement("div", { className: "games" },
    filtered.map((g) => /*#__PURE__*/
    React.createElement("div", { className: "card", key: g.id }, /*#__PURE__*/
    React.createElement("h3", null, g.title), /*#__PURE__*/
    React.createElement("p", null, g.genre), /*#__PURE__*/

    React.createElement("button", { className: "btn", onClick: () => openDetails(g) }, "Detalhes"), /*#__PURE__*/



    React.createElement("button", { className: "btn", onClick: () => toggleFav(g.id) },
    fav.includes(g.id) ? "Remover favorito" : "Favoritar"))))));






}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render( /*#__PURE__*/React.createElement(App, null));