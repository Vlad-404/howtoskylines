import PropTypes from 'prop-types';

function Article({ children }) {
    return (
        <article className="w-screen min-h-96 pt-16">
            <div className="flex flex-row">
                { children }
            </div>
        </article>
    )
}

Card.protoTypes = {
    children: PropTypes.node.isRequired,
}

export default Article
