
import { useState } from "react";
import RecipeItem from "./RecipeItem";
import RecipeFilter from "./RecipeFilter";
import Pagination from "./Pagination";

function RecipeList() {
    const [recipes, setRecipes] = useState([
        {
            nom: "crepe",
            categorie: "dessert",
            image: "/pexels-strannik-sk-35487016.jpg",
            ingredients: ["farine", "lait", "oeufs", "sucre", "beurre"],
            difficulte: 2,
            description: "une crepe simple et moelleuse."
        },
        {
            nom: "briouate au fromage",
            categorie: "entree",
            image: "/pexels-hashtag-melvin-1163687-29037270.jpg",
            ingredients: ["feuilles de brick", "fromage", "oeuf", "persil", "huile"],
            difficulte: 3,
            description: "des briouates croustillantes au fromage."
        },
        {
            nom: "chawarma",
            categorie: "plat",
            image: "/pexels-peyman-hamsayeh-7161623-11286814.jpg",
            ingredients: ["poulet", "pain chawarma", "tomate", "salade", "sauce"],
            difficulte: 3,
            description: "un chawarma au poulet avec des legumes frais."
        },
        {
            nom: "jus d'avocat",
            categorie: "boisson",
            image: "/pexels-jx588-14537765.jpg",
            ingredients: ["avocat", "lait", "sucre", "amandes"],
            difficulte: 1,
            description: "une boisson cremeuse a base d'avocat."
        }
    ]);

    const [recherche, setRecherche] = useState("");
    const [categorie, setCategorie] = useState("toutes");
    const [page, setPage] = useState(1);
    const [recetteModifiee, setRecetteModifiee] = useState(null);

    function supprimerRecette(recette) {
        setRecipes(recipes.filter((r) => r !== recette));
    }

    function dupliquerRecette(recette) {
        setRecipes([...recipes, { ...recette }]);
    }

    function modifierRecette(recette) {
        setRecetteModifiee(recette);
    }

    const recettesFiltrees = recipes.filter((recipe) => {
        return recipe.nom.toLowerCase().includes(recherche.toLowerCase())
            && (categorie === "toutes" || recipe.categorie === categorie);
    });

    let nombrePages = 1;

    if (recettesFiltrees.length > 2) {
        nombrePages = 2;
    }

    return (
        <div className="recipe-list">
            <h1>liste des recettes</h1>

            <RecipeFilter
                recherche={recherche}
                setRecherche={setRecherche}
                categorie={categorie}
                setCategorie={setCategorie}
            />

            {recettesFiltrees.map((recipe, index) => {
                if (
                    (page === 1 && index < 2) ||
                    (page === 2 && index >= 2)
                ) {
                    return (
                        <RecipeItem
                            key={index}
                            nom={recipe.nom}
                            categorie={recipe.categorie}
                            image={recipe.image}
                            ingredients={recipe.ingredients}
                            difficulte={recipe.difficulte}
                            description={recipe.description}
                            supprimer={() => supprimerRecette(recipe)}
                            dupliquer={() => dupliquerRecette(recipe)}
                            modifier={() => modifierRecette(recipe)}
                        />
                    );
                }

                return null;
            })}

            {recetteModifiee && (
                <div className="modal">
                    <div className="modal-content">
                        <button onClick={() => setRecetteModifiee(null)}>
                            fermer
                        </button>
                        <h2>Modifier la recette</h2>
                        <p>{recetteModifiee.nom}</p>
                    </div>
                </div>
            )}

            <Pagination
                page={page}
                nombrePages={nombrePages}
                precedent={() => setPage(page - 1)}
                suivant={() => setPage(page + 1)}
            />
        </div>
    );
}

export default RecipeList;
