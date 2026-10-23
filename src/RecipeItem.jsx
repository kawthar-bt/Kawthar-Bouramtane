
function RecipeItem(props) {
    return (
        <div className="recipe">
            <img src={props.image} alt={props.nom} />

            <h2>{props.nom}</h2>

            <p>Categorie : {props.categorie}</p>

            <p>Ingredients :</p>

            <ul>
                {props.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>

            <p>Difficulte : {props.difficulte}/5</p>
            <p>{props.description}</p>
            <button onClick={props.modifier}>Modifier</button>
            <button onClick={props.dupliquer}>Dupliquer</button>
            <button onClick={props.supprimer}>Supprimer</button>
            
         </div>
    );
}

export default RecipeItem;
