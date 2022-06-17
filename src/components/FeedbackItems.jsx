import {FaEdit, FaTimes} from 'react-icons/fa'
import Card from "./shared/Card.jsx"
import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext.js'


function FeedbackItems({ item }) {
  const {deleteFeedback, editFeedback } = useContext(FeedbackContext)

  return (
    <Card>
        <div className="num-display">{item.rating}</div>
        <button className="close" onClick={() => deleteFeedback(item.id)}>
            <FaTimes color='purple' />
        </button>
        <button onClick={() => editFeedback(item)} className="edit">
          <FaEdit color='purple' />
        </button>
        <div className="text-display">{item.text}</div>
    </Card>
  )
}

FeedbackItems.propTypes = {
    item: PropTypes.object.isRequired
}



export default FeedbackItems