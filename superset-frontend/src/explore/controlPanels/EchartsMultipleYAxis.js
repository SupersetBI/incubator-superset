import { t } from '@superset-ui/translation';

export default {
  label: t('Echarts Multiple Y Axis Chart'),
  controlPanelSections: [
    {
      label: t('Query'),
      expanded: true,
      controlSetRows: [
        ['metrics'],
        ['adhoc_filters'],
        ['groupby'],
        ['columns'],
        ['row_limit'],
        ['contribution'],
      ],
    },
    {
      label: t('Chart Options'),
      expanded: true,
      controlSetRows: [
        ['color_scheme', 'label_colors'],
      ],
    },
  ],
  controlOverrides: {
    groupby: {
      label: t('Series'),
    },
    columns: {
      label: t('Breakdowns'),
      description: t('Defines how each series is broken down'),
    },
  },
};