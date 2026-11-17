function atualizarHorario(){

    const agora = new Date();

    const options = {
        dateStyle:'full',
        timeStyle:'medium'
    };

    document.getElementById("clock").innerHTML =
        agora.toLocaleString("pt-BR",options);
}

setInterval(atualizarHorario,1000);

atualizarHorario();

<script>
// Troque pela URL do SEU site no SharePoint
const SP_SEARCH_URL = "https://hhqueiroz.sharepoint.com/sites/HHENRIQUE/SitePages/Home.aspx";

document.getElementById("searchForm").addEventListener("submit", e => {
    e.preventDefault();
    const q = document.getElementById("searchInput").value.trim();
    if(!q) return;
    window.open(`${SP_SEARCH_URL}?q=${encodeURIComponent(q)}`, "_blank");
});

// atalho: apertar "/" foca na busca
document.addEventListener("keydown", e => {
    if(e.key === "/" && document.activeElement.tagName !== "INPUT"){
        e.preventDefault();
        document.getElementById("searchInput").focus();
    }
});
</script>
