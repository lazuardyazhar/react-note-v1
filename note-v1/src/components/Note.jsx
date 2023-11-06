import PropTypes from 'prop-types'
function Note({title, createdAt, body}) {
    return(
        <div className="bg-white p-4 rounded-md shadow-md animate-fade-in hover:bg-gray-100 hover:shadow-lg">
            <h1 className="text-lg font-semibold">{title}</h1>
            <p className="text-gray-500">{createdAt}</p>
            <p className="mt-2">{body}</p>
        </div>
    )
}
Note.propTypes = {
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired, 
    body: PropTypes.string.isRequired
  };
export default Note