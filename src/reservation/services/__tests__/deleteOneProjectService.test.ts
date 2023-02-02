import { deleteOneProjectService } from '../deleteOneCanchaService';
import { deleteOneResourceById } from '../../../shared/factory';

import { mockData } from '../../../shared/testUtils/fixtures';

const { projectId, userId } = mockData;

jest.mock('../../../shared/factory/deleteOneResourceById');

const deleteOneResourceByIdMock = deleteOneResourceById as jest.MockedFunction<
  typeof deleteOneResourceById
>;

describe('deleteOneProjectService', () => {
  it('should return an error when projectId is undefined', async () => {
    try {
      await deleteOneProjectService('', '');
    } catch (error: any) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).not.toBeUndefined();
      expect(error.message).toEqual(
        `Error deleting project: invalid project id`
      );
    }
  });
  it('should return an error when userId is undefined', async () => {
    try {
      await deleteOneProjectService('123', '');
    } catch (error: any) {
      expect(error).toBeInstanceOf(Error);
      expect(error.message).not.toBeUndefined();
      expect(error.message).toEqual(`Error deleting project: invalid user id`);
    }
  });
  it("should return false if the project doesn't exist ", async () => {
    const internal = jest.fn().mockImplementation(() => Promise.resolve(null));
    deleteOneResourceByIdMock.mockImplementation(() => internal);
    const result = await deleteOneProjectService(projectId, userId);
    expect(result).toEqual(false);
  });
  it('should return true if the project was deleted ', async () => {
    const internal = jest
      .fn()
      .mockImplementation(() => Promise.resolve({ deletedCount: 1 }));
    deleteOneResourceByIdMock.mockImplementation(() => internal);
    const result = await deleteOneProjectService(projectId, userId);
    expect(result).toEqual(true);
  });
});
