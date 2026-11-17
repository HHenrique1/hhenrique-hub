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
