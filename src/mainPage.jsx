
import { useState } from "react";
import RecipeList from "./RecipeList";
import RecipeForm from "./RecipeForm";
import "./style.css";

function MainPage() {
      const [modal, setModal] = useState(false);
    return (
        <div>
            <h1> Recipes </h1>
            <button onClick={() => setModal(true)}>
                creer une nouvelle recette
            </button>
            <RecipeList />
            {modal && (
                <div className="modal">
                    <div className="modal-content">
                        <button onClick={() => setModal(false)}>fermer </button>
                        <RecipeForm />

                    </div>
                </div>
            )}

        </div>
    );
}


export default MainPage;
