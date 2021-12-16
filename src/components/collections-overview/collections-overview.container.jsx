import { connect } from "react-redux";
import WithSpinner from "../with-spinner/with-spinner.component";
import { selectIsCollectionFetching } from "../../redux/shop/shop.selectors";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import collectionsOverviewComponent from "./collections-overview.component.jsx";

const mapStateToProps = createStructuredSelector({
    isLoading : selectIsCollectionFetching
})
    
const CollectionOverviewContainer=compose(connect(mapStateToProps),WithSpinner)(collectionsOverviewComponent)

export default CollectionOverviewContainer;