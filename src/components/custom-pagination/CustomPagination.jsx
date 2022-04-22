import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    ul: {
        "& .MuiPaginationItem-root": {
            color: "#fff",
        },
    },
}));

const CustomPagination = ({ setPage, totalPage }) => {
    const handlePageChange = (page) => {
        setPage(page);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const classes = useStyles();

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                padding: 30,
                color: "white",
            }}
            className="custom_pagination"
        >
            <Pagination
                classes={{ ul: classes.ul }}
                count={totalPage}
                color="secondary"
                onChange={(e) => handlePageChange(e.target.textContent)}
            />
        </div>
    );
};

export default CustomPagination;
