import * as fromFile from '../reducers/file.reducer';
import { selectFileState } from './file.selectors';

describe('File Selectors', () => {
  it('should select the feature state', () => {
    const result = selectFileState({
      [fromFile.fileFeatureKey]: {}
    });
    expect(result).toEqual(null);
  });
});
