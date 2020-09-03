import { t } from '@superset-ui/translation';
import { ChartMetadata, ChartPlugin } from '@superset-ui/chart';
import transformProps from './transformProps';
import thumbnail from './images/thumbnail.png';

const metadata = new ChartMetadata({
  credits: ['https://echarts.apache.org'],
  description: '',
  name: t('Echarts Multiple Y Axis'),
  thumbnail,
  useLegacyApi: true,
});

export default class EchartsMultipleYAxisPlugin extends ChartPlugin {
  constructor() {
    super({
      metadata,
      transformProps,
      loadChart: () => import('./EchartsMultipleYAxisPlugin'),
    });
  }
}
