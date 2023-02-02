//recuper les pieces depuis le ficher json//
const reponse = await fetch ('pieces-autos.json');
const pieces = await reponse.json();
//balise//

for (let i in pieces){
    const article = pieces[i];

    const imageElement = document.createElement("img");
    imageElement.src = article.image;

    const nomElement = document.createElement("h2");
    nomElement.innerText = article.nom;

    const prixElement = document.createElement("p");
    // ? indique que si le prix inferieur de 35 affiche € si superieur €€€
    prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;

    const categorieElement = document.createElement("p");
    // on utilise ?? si un varible n'existe pas
    categorieElement.innerText = article.categorie ?? "(aucune catégorie)";

    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = article.description;

    const disponibiliteElement = document.createElement("p");
    disponibiliteElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock" ;
    //rattachement balise html parent a DOM
    const sectionFiches = document.querySelector(".fiches");
    sectionFiches.appendChild(imageElement);
    sectionFiches.appendChild(nomElement);
    sectionFiches.appendChild(prixElement);
    sectionFiches.appendChild(categorieElement);
    sectionFiches.appendChild(descriptionElement);
    sectionFiches.appendChild(disponibiliteElement);
}