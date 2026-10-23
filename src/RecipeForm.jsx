import { useState } from "react";

function RecipeForm() {

    const [nom, setNom] = useState("");
    const [categorie, setCategorie] = useState("entree");
    const [ingredients, setIngredients] = useState([""]);
    const [difficulte, setDifficulte] = useState(1);
    const [description, setDescription] = useState("");
    function ajouterIngredient() {
        setIngredients([...ingredients, ""]);
    }
    function modifierIngredient(index, valeur) {
        const nouvelleListe = [...ingredients];

        nouvelleListe[index] = valeur;

        setIngredients(nouvelleListe);
    }
    function supprimerIngredient(index) {
        const nouvelleListe = [...ingredients];

        nouvelleListe.splice(index, 1);

        setIngredients(nouvelleListe);
    }
    function envoyerFormulaire(e) {
        e.preventDefault();

        console.log(nom);
        console.log(categorie);
        console.log(ingredients);
        console.log(difficulte);
        console.log(description);
    }
    return (
        <div className="form-container">

            <h2>ajouter une recette</h2>

            <form onSubmit={envoyerFormulaire}>

                <label>nom :</label>
                <input  type="text"  value={nom}
                    onChange={(e) => setNom(e.target.value)}  />

                <label>categorie :</label>
                <select
                    value={categorie}
                    onChange={(e) => setCategorie(e.target.value)}  >
                    <option>entree</option>
                    <option>plat</option>
                    <option>dessert</option>
                    <option>boisson</option>
                </select>

                <label>ingredients :</label>

                {ingredients.map((ingredient, index) => (

                    <div key={index}>

                        <input type="text" value={ingredient}  onChange={(e) =>
                                modifierIngredient(index, e.target.value) } />
                        <button type="button" onClick={() => supprimerIngredient(index)}>  supprimer </button>
                    </div>
                ))}
                <button type="button" onClick={ajouterIngredient} > ajouter un ingredient</button>
                <label>difficulte :</label>
                <input type="number" min="1" max="5" value={difficulte}
                    onChange={(e) => setDifficulte(e.target.value)}/>

                <label>description :</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
                <label>image :</label>
                <input type="file" />
                <button type="submit"> ajouter</button>
            </form>
        </div>
    );
}

export default RecipeForm;