import { jsonToFormFields } from '../../src/helpers/Form/jsonToFormFields';
import { assert } from 'vitest';

describe('jsonToFormFields function', () => {
  it('should return an empty object when fieldName is not provided', () => {
    const data = {
      // Your JSON data structure here
    };

    const fieldName = '';

    const result = jsonToFormFields(data, fieldName);

    assert.isObject(result);
    assert.equal(Object.keys(result).length, 0);
  });

  it('should transform JSON data into form fields when fieldName is provided', () => {
    const data = {
      fieldName: {
        key1: 'value1',
        key2: 'value2',
      },
    };

    const fieldName = 'fieldName';

    const result = jsonToFormFields(data, fieldName);

    assert.isObject(result);
    assert.equal(Object.keys(result).length, 2);

    assert.equal(result.key1.key, 'key1');
    assert.equal(result.key1.label, 'key1');
    assert.equal(result.key1.name, 'key1');
    assert.equal(result.key1.rules.required, true);
    assert.equal(result.key1.type, 'text');
    assert.equal(result.key1.value, 'value1');

    assert.equal(result.key2.key, 'key2');
    assert.equal(result.key2.label, 'key2');
    assert.equal(result.key2.name, 'key2');
    assert.equal(result.key2.rules.required, true);
    assert.equal(result.key2.type, 'text');
    assert.equal(result.key2.value, 'value2');
  });
});
