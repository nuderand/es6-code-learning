import logger from './logger';

logger.info('Hello world');
logger.level = 'debug';


logger.level = 'silly';

logger.info('This is an information message');
logger.info('This is danger message', { foo: 'bar' });
logger.error('error');
logger.debug('debug');
logger.warn('warn');
logger.verbose('verbose');
logger.silly('silly');

logger.error('Found %s at %s', 'error', new Date());
logger.info('Found %s at %s', 'error', new Error('chill winston'));
logger.info('Found %s at %s', 'error', /WUT/);
logger.info('Found %s at %s', 'error', true);
logger.info('Found %s at %s', 'error', 100.00);
logger.info('Found %s at %s', 'error', ['1, 2, 3']);

logger.debug('Hello world');
