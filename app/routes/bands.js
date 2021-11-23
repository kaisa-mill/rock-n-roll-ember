import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

import wait from 'rarwe/utils/wait';

export default class BandsRoute extends Route {
  @service catalog;

  async model() {
    return this.catalog.fetchAll('bands');
  }
}
