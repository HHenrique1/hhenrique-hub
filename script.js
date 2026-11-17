// ===== RELÓGIO =====
function atualizarHorario(){
    const el = document.getElementById("clock");
    if(!el) return;

    const agora = new Date();
    el.textContent = agora.toLocaleString("pt-BR", {
        dateStyle: "full",
        timeStyle: "medium"
    });
}
atualizarHorario();
setInterval(atualizarHorario, 1000);

// ===== FRASE DO DIA =====
// AS FRASES FICAM AQUI: para adicionar, é só incluir uma linha nova.
// Todas terminam com vírgula, menos a última.
const quotes = [
    "Disciplina constrói o que a motivação só promete.",
    "Quem estuda hoje manda no amanhã.",
    "Planeje hoje, conquiste amanhã.",
    "Um passo por dia ainda é progresso.",
    "Descanso também faz parte do treino.",
    "Evoluir é testar o que ninguém testou.",
    "Nem todo fim é uma derrota; às vezes é o início de uma nova versão.",
    "Não carregue o ontem a ponto de perder o amanhã.",
    "Deus conhece o caminho, mesmo quando você não entende a direção.",
    "Seja melhor do que ontem, não melhor do que alguém.",
    "O passado ensina, mas não precisa definir seu futuro.",
    "Recomeçar também é uma demonstração de coragem.",
    "A paz que você procura começa nas escolhas que você faz.",
    "Não tenha pressa, grandes construções exigem tempo.",
    "Transforme suas dificuldades em combustível para evoluir.",
    "Você não precisa ter todas as respostas para continuar.",
    "A disciplina mantém você de pé quando a motivação desaparece.",
    "O homem que você deseja ser depende das atitudes de hoje.",
    "Não confunda um dia difícil com uma vida sem propósito.",
    "Cuide da sua mente, fortaleça sua fé e siga seu caminho.",
    "O silêncio também ensina aquilo que a pressa não permite ouvir.",
    "Errar faz parte, reconhecer e mudar é evolução.",
    "Não permita que a culpa impeça o seu crescimento.",
    "Grandes conquistas começam com pequenas decisões.",
    "Tenha fé no processo, mesmo quando os resultados demoram.",
    "Construa uma vida da qual você tenha orgulho.",
    "Sua história não termina no capítulo mais difícil.",
    "Seja paciente com o processo e exigente com suas atitudes.",
    "A verdadeira evolução começa quando você assume suas responsabilidades.",
    "Não espere estar pronto para começar a mudar.",
    "Trabalhe em silêncio e deixe sua evolução falar.",
    "O que hoje exige esforço amanhã será parte de você.",
    "Não perca sua essência tentando provar seu valor.",
    "Aprenda a se perdoar sem deixar de aprender com seus erros.",
    "A fé não elimina os desafios, mas fortalece seus passos.",
    "Um futuro diferente exige atitudes diferentes.",
    "Não desista de si mesmo nos dias em que tudo parecer difícil.",
    "A constância transforma sonhos em realidade.",
    "Seja forte o suficiente para mudar e humilde o suficiente para aprender.",
    "Você ainda pode construir tudo aquilo que deseja viver.",
    "O melhor investimento continua sendo aquele que você faz em si mesmo."
];

(function(){
    const now = new Date();
    const dayOfYear = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
    const frase = quotes[dayOfYear % quotes.length];
    document.getElementById("quoteText").textContent = `"${frase}"`;
})();

// ===== BUSCA =====
const BASE = "https://hhqueiroz.sharepoint.com/sites/HHENRIQUE";
const SP_SEARCH_URL = `${BASE}/_layouts/15/search.aspx`;

const scopes = {
    all:      "",
    docs:     `${BASE}/Documentos Compartilhados/Documentos Pessoais`,
    estudos:  `${BASE}/Documentos Compartilhados/Estudos`,
    financas: `${BASE}/Documentos Compartilhados/Finanças`,
    trabalho: `${BASE}/Documentos Compartilhados/Arquivos de Trabalho`,
    hobbies:  `${BASE}/Documentos Compartilhados/Hobbies`,
    ia:       `${BASE}/Documentos Compartilhados/IA Lab`
};

document.getElementById("searchForm").addEventListener("submit", e => {
    e.preventDefault();

    const termo  = document.getElementById("searchInput").value.trim();
    const escopo = document.getElementById("searchScope").value;
    if(!termo) return;

    let query = termo;
    if(scopes[escopo]){
        query = `${termo} path:"${scopes[escopo]}"`;
    }

    window.open(`${SP_SEARCH_URL}?q=${encodeURIComponent(query)}`, "_blank");
});

// atalho: "/" foca na busca
document.addEventListener("keydown", e => {
    if(e.key === "/" && document.activeElement.tagName !== "INPUT"){
        e.preventDefault();
        document.getElementById("searchInput").focus();
    }
});
