import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'Tcm23SibdG02',
  connector: 'memory',
  localStorage: '',
  file: './data/db.json'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class Tcm23SibdG02DataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'Tcm23SibdG02';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.Tcm23SibdG02', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
