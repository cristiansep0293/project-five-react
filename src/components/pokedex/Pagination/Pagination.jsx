import Proptypes from "prop-types";
import "./Pagination.css";

const Pagination = ({
  totalPages,
  onChangePage,
  onBackPage,
  onNextPage,
  quantityPagination,
  onShowAmount,
  currentPage,
}) => {
  const pagesArray = Array(totalPages)
    .fill()
    .map((_, i) => i + 1);

  return (
    <div className="dvPagination">
      <select
        className="dvPagination__select"
        value={quantityPagination}
        onChange={(e) => onShowAmount(Number(e.target.value))}
      >
        <option className="dvPagination__option" value="25">
          25
        </option>
        <option className="dvPagination__option" value="50">
          50
        </option>
        <option className="dvPagination__option" value="75">
          75
        </option>
        <option className="dvPagination__option" value="100">
          100
        </option>
      </select>
      <button className="dvPagination__button" onClick={() => onBackPage()}>
        Back
      </button>
      {pagesArray.map((page) => (
        <button
          className="dvPagination__button"
          key={page}
          onClick={() => onChangePage(page)}
          style={{
            background: currentPage == page ? "#d85d5d" : undefined,
            color: currentPage == page ? "white" : undefined,
          }}
        >
          {page}
        </button>
      ))}
      <button className="dvPagination__button" onClick={() => onNextPage()}>
        Next
      </button>
    </div>
  );
};

Pagination.propTypes = {
  totalPages: Proptypes.number.isRequired,
  onChangePage: Proptypes.func.isRequired,
  onBackPage: Proptypes.func.isRequired,
  onNextPage: Proptypes.func.isRequired,
  quantityPagination: Proptypes.number.isRequired,
  onShowAmount: Proptypes.func.isRequired,
  currentPage: Proptypes.number.isRequired,
};

export default Pagination;
