Package.describe({
  name: 'benmgreene:moment-range',
  version: '1.0.7',
  summary: 'Fancy date ranges for Moment.js packaged for Meteor.',
  git: 'https://github.com/benmgreene/meteor-moment-range',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.2.1');
  api.addFiles('lib/moment-range/lib/moment-range.js');
});
