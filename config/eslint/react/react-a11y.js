const OFF = 0
const WARNING = 1
const ERROR = 2

module.exports = {
  rules: {
    'jsx-a11y/anchor-has-content': [ERROR, {components: []}],
    'jsx-a11y/aria-role': [ERROR, {ignoreNonDom: false}],
    'jsx-a11y/aria-props': ERROR,
    'jsx-a11y/aria-proptypes': ERROR,
    'jsx-a11y/aria-unsupported-elements': ERROR,
    'jsx-a11y/alt-text': [ERROR, {
      elements: ['img', 'object', 'area', 'input[type="image"]'],
      img: [],
      object: [],
      area: [],
      'input[type="image"]': []
    }],
    'jsx-a11y/img-redundant-alt': ERROR,
    'jsx-a11y/label-has-for': [OFF, {
      components: [],
      required: {
        every: ['nesting', 'id']
      },
      allowChildren: false
    }],
    'jsx-a11y/label-has-associated-control': [ERROR, {
      labelComponents: [],
      labelAttributes: [],
      controlComponents: [],
      assert: 'both',
      depth: 25
    }],
    'jsx-a11y/control-has-associated-label': [ERROR, {
      labelAttributes: ['label'],
      controlComponents: [],
      ignoreElements: [
        'audio',
        'canvas',
        'embed',
        'input',
        'textarea',
        'tr',
        'video'
      ],
      ignoreRoles: [],
      depth: 1
    }],
    'jsx-a11y/mouse-events-have-key-events': ERROR,
    'jsx-a11y/no-access-key': ERROR,
    'jsx-a11y/no-onchange': OFF,
    'jsx-a11y/interactive-supports-focus': ERROR,
    'jsx-a11y/role-has-required-aria-props': ERROR,
    'jsx-a11y/role-supports-aria-props': ERROR,
    'jsx-a11y/tabindex-no-positive': ERROR,
    'jsx-a11y/heading-has-content': [ERROR, {components: ['']}],
    'jsx-a11y/html-has-lang': ERROR,
    'jsx-a11y/lang': ERROR,
    'jsx-a11y/no-distracting-elements': [ERROR, {
      elements: []
    }],
    'jsx-a11y/scope': ERROR,
    'jsx-a11y/click-events-have-key-events': ERROR,
    'jsx-a11y/no-static-element-interactions': [ERROR, {
      handlers: [
        'onClick',
        'onMouseDown',
        'onMouseUp',
        'onKeyPress',
        'onKeyDown',
        'onKeyUp'
      ]
    }],
    'jsx-a11y/no-noninteractive-element-interactions': [ERROR, {
      handlers: [
        'onClick',
        'onMouseDown',
        'onMouseUp',
        'onKeyPress',
        'onKeyDown',
        'onKeyUp'
      ]
    }],
    'jsx-a11y/accessible-emoji': ERROR,
    'jsx-a11y/aria-activedescendant-has-tabindex': ERROR,
    'jsx-a11y/iframe-has-title': ERROR,
    'jsx-a11y/no-autofocus': [ERROR, {ignoreNonDOM: true}],
    'jsx-a11y/no-redundant-roles': ERROR,
    'jsx-a11y/media-has-caption': [ERROR, {
      audio: [],
      video: [],
      track: []
    }],
    'jsx-a11y/no-interactive-element-to-noninteractive-role': [ERROR, {
      tr: ['none', 'presentation']
    }],
    'jsx-a11y/no-noninteractive-element-to-interactive-role': [ERROR, {
      ul: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
      ol: ['listbox', 'menu', 'menubar', 'radiogroup', 'tablist', 'tree', 'treegrid'],
      li: ['menuitem', 'option', 'row', 'tab', 'treeitem'],
      table: ['grid'],
      td: ['gridcell']
    }],
    'jsx-a11y/no-noninteractive-tabindex': [ERROR, {
      tags: [],
      roles: ['tabpanel']
    }],
    'jsx-a11y/anchor-is-valid': [ERROR, {
      components: ['Link'],
      specialLink: ['to'],
      aspects: ['noHref', 'invalidHref', 'preferButton']
    }]
  }
}
