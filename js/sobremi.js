const prototipoPDF = document.getElementById("prototipo");
const reflexionPDF = document.getElementById("reflexion");
const guiaEstiloPDF = document.getElementById("guiaEstilo");

prototipoPDF.addEventListener("click",() =>{
    window.open("../srcs/pdf/blog-prototipo.pdf", 'blank');
});

reflexionPDF.addEventListener("click",() =>{
    window.open("../srcs/pdf/Reflexion.pdf",'blank');
});

guiaEstiloPDF.addEventListener("click",() =>{
    window.open("../srcs/pdf/guia-estilos.pdf",'blank');
});