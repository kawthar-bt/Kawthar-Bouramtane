
function RecipeFilter(props) {
    return (
        <div className="filter">
            <input
                type="text"
                placeholder="rechercher une recette"
                value={props.recherche}
                onChange={(e) => props.setRecherche(e.target.value)}
            />

            <select
                value={props.categorie}
                onChange={(e) => props.setCategorie(e.target.value)}
            >
                <option value="toutes">toutes</option>
                <option value="entree">entree</option>
                <option value="plat">plat</option>
                <option value="dessert">dessert</option>
                <option value="boisson">boisson</option>
            </select>
        </div>
    );
}

export default RecipeFilter;
