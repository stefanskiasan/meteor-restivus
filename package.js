Package.describe({
  name: 'stefanskia:restivus',
  summary: 'Create authenticated REST APIs in Meteor via HTTP/HTTPS. Setup CRUD endpoints for Collections.',
  version: '1.1.2',
  git: 'https://github.com/stefanskiasan/meteor-restivus'
});

Package.onUse(function (api) {
  api.versionsFrom('1.12');

  // Meteor dependencies
  api.use('ecmascript');
  api.use('check');
  api.use('underscore');
  api.use('accounts-password@2.0.0');
  api.use('simple:json-routes@2.1.0');
  api.use('alanning:roles@1.2.19', 'server', {weak: true});

  api.addFiles([
    'lib/auth.js',
    'lib/route.js',
    'lib/restivus.js'
  ], 'server');
  api.mainModule('index.js', 'server');
  api.export('Restivus', 'server')
});

Package.onTest(function (api) {
  // Meteor dependencies
  api.use('ecmascript');
  api.use('mongo');
  api.use('http');
  api.use('underscore');
  api.use('practicalmeteor:munit');
  api.use('test-helpers');

  api.addFiles([
      'test/api_tests.js',
      'test/authentication_tests.js',
      'test/route_unit_tests.js',
      'test/user_hook_tests.js'
  ], 'server');
});
