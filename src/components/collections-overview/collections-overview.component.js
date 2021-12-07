import './collections-overview.styles.scss'

import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectShopCollectionsForPreview } from '../../redux/shop/shop.selectors'
import CollectionPreview from '../collection-preview/collection-preview.component'

const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
        {
            collections.map( ({id, ...otherCollectionsProp}) => (
                <CollectionPreview key={id} {...otherCollectionsProp}></CollectionPreview>
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections : selectShopCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview)