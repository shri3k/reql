const test = require('tape');
const app = require('./index');

test('merge', function(t) {
  t.deepEqual(app.merge({
    'hello': 'world'
  }, {
    'run': 'magnet'
  }), {
    'hello': 'world',
    'run': 'magnet'
  });
  t.end();
});

test('assign', function(t) {
  var k = ['hey'];
  var l = ['hey-bro'];
  t.deepEqual(app.assign(k), {
    'hey': 'hey'
  });
  t.deepEqual(app.assign(l), {
    'hey_bro': 'hey-bro'
  });
  t.end();
});

test('getopts', function(t) {
  t.deepEqual(app.getopts({
    'nuts': 'therapy',
    'junk': 'avalance',
    'white': 'teeth'
  }, ['junk']), {
    'nuts': 'therapy',
    'white': 'teeth'
  });
  t.deepEqual(app.getopts({
    'nuts': 'therapy',
    '_': ['avalance', 'needs', 'business'],
    'junk': ['avalance', 'needs', 'business'],
    'boy': 'expulsion',
    'white': 'teeth'
  }, ['junk', '_', 'boy']), {
    'nuts': 'therapy',
    'white': 'teeth'
  });
  t.end();
});
