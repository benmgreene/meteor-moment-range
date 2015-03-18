Package.describe({
  name: 'benmgreene:moment-range',
  version: '1.0.7',
  summary: 'Fancy date ranges for Moment.js packaged for Meteor.',
  git: 'https://github.com/benmgreene/meteor-moment-range',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@0.9.0");

  api.use(['momentjs:moment@2.9.0'], ['client', 'server']);

  api.addFiles('lib/moment-range/lib/moment-range.bare.js');
});

Package.on_test(function (api) {
  api.use([
    'jquery@1.0.0',
    'momentjs:moment@2.9.0'
  ]);
  api.addFiles('lib/moment-range/lib/moment-range.bare.js');
});