
function Pagination(props) {
    return (
        <div className="pagination">
            <button
                onClick={props.precedent}
                disabled={props.page === 1}
            >
                precedent
            </button>

            <span>
                page {props.page} sur {props.nombrePages}
            </span>

            <button
                onClick={props.suivant}
                disabled={props.page === props.nombrePages}
            >
                suivant
            </button>
        </div>
    );
}

export default Pagination;
