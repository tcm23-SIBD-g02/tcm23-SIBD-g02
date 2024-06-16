import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'tcm23sibdg02',
  connector: 'memory',
  localStorage: '',
  file: './data/db.json'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class Tcm23Sibdg02DataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'tcm23sibdg02';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.tcm23sibdg02', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
