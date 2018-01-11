{
  'variables': {
    'zmq_external%': 'false',
  },
  'targets': [
    {
      'target_name': 'zmq',
      'sources': ['binding.cc'],
      'include_dirs' : ["<!(node -e \"require('nan')\")"],
      'cflags!': ['-fno-exceptions'],
      'cflags_cc!': ['-fno-exceptions'],
      'conditions': [
        ["zmq_external == 'true'", {
          'link_settings': {
            'libraries': ['-lzmq'],
          },
        }],
      ],
    }
  ]
}
