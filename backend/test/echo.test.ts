import assert from 'assert';
import echo from '../src/echo';

suite('echo', function() {
  test('The message will echo back.', function() {
    const message = 'Hello Gas!!';
    assert.equal(echo(message), message);
  });
});
