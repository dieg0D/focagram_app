import Cable from 'actioncable';
import { cableURL } from './api';

const cable = Cable.createConsumer(cableURL + '/cable');

export default cable;
