import sentry from '../../infrastructure/sentry';
import rabbitmq from '../../infrastructure/rabbitmq';
import handlers from './handlers';

const updateWrapper = (data) =>
  Promise.resolve(data.content)
    .then(handlers.update)
    .then(data.ack)
    .catch( (error) => {
      sentry(error);

      return setTimeout(data.reject, 5000);
    })

export default () => {
  rabbitmq.subscribe(
    'UPDATE_SITEMAP',
    updateWrapper,
    { autoAck: false }
  ).then( () => console.log('Subscribed to UPDATE_SITEMAP') )
}
