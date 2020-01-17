module.exports = {
  'extends': 'stylelint-config-standard',
  'plugins': ['stylelint-order'],
  'rules': {
    'order/order': [
      'custom-properties',
      'dollar-variables',
      'at-variables',
      'declarations',
      'rules',
      'at-rules'
    ],
    'order/properties-order': [[
      'position',
      'z-index',
      'top',
      'right',
      'bottom',
      'left',
      'display',
      'overflow',
      'box-sizing',
      'width',
      'height',
      'padding',
      'border',
      'margin',
      'background',
      'color',
      'font-family',
      'font-size',
      'text-align'
    ], { 'unspecified': 'bottom' }]
  }
};
