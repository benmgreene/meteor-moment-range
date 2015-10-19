Package.describe({
  name: 'benmgreene:moment-range',
  version: '2.10.6',
  summary: 'Fancy date ranges for Moment.js packaged for Meteor.',
  git: 'https://github.com/benmgreene/meteor-moment-range',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@0.9.0");

  api.use(['momentjs:moment@2.10.6'], ['client', 'server']);

  api.addFiles('lib/moment-range/dist/moment-range.js');
});

Package.on_test(function (api) {
  api.use([
    'jquery@1.0.0',
    'momentjs:moment@2.10.6'
  ]);
  api.addFiles('lib/moment-range/dist/moment-range.js');
});
