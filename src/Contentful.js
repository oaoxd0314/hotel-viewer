import {createClient} from 'contentful'
import { FaEnvelope } from 'react-icons/fa';

export default createClient ({
    space:process.env.REACT_APP_API_SPACE,
    accessToken:process.env.REACT_APP_ACCESS_TOKEN
});