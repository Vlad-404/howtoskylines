import PropTypes from 'prop-types';
import Sidenav from "../components/layout/Sidenav";

function Article({ children }) {
    return (
        <article className="w-screen min-h-96 pt-16">
            <div className="flex flex-row">
                <Sidenav />
                { children }
            </div>
        </article>
    )
}

Card.protoTypes = {
    children: PropTypes.node.isRequired,
}

export default Article
