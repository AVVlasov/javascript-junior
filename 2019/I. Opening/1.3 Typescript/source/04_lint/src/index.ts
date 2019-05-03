import { logger } from './utils';
import { MESSAGE_TYPE } from './model';

logger('good');
logger("something is wrong", MESSAGE_TYPE.WARNING)
logger('something is very wrong', MESSAGE_TYPE.ERROR);
