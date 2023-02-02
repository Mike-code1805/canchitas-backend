import { ProjectModel } from '../../entity/models/projectModel';
import { Project } from '../../entity/types/Project';
import { getAllProjectsService } from '../getAllCanchasService';

const ProjectModelMock = ProjectModel as jest.MockedClass<typeof ProjectModel>;

// const mockAdd = ProjectModel as jest.MockedFunction<typeof ProjectModel>;

const mockProject = {
  _id: '6210db4f6f144372bf0a2f18',
  title: 'my project',
  createdAt: '2022-02-19T11:56:26.444Z',
  owner: '6210d026e7d2fa722757a409',
  __v: 0,
  tasks: [],
  id: '6210db4f6f144372bf0a2f18',
};

describe('getAllProjectsService', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return an error when the user id is not provided', async () => {
    try {
      await getAllProjectsService('');
    } catch (error: any) {
      expect(error.message).toEqual(
        'Error getting all the projects: invalid user id'
      );
    }
  });

  it('should return an error when the user id is not valid', async () => {
    try {
      await getAllProjectsService('123');
    } catch (error: any) {
      expect(error.message).toBeDefined();
      expect(error).toBeInstanceOf(Error);
    }
  });

  it('should call Model.find when the user id is valid', async () => {
    ProjectModelMock.find = jest.fn();
    const id = '6210d026e7d2fa722757a409';
    await getAllProjectsService(id);
    expect(ProjectModelMock.find).toHaveBeenCalledTimes(1);
    expect(ProjectModelMock.find).toHaveBeenCalledWith({ owner: id });
  });

  it('should return an array of projects when the user id is valid', async () => {
    ProjectModelMock.find = jest
      .fn()
      .mockImplementation(() => Promise.resolve([mockProject]));
    const id = '6210d026e7d2fa722757a409';
    const result: Project[] = await getAllProjectsService(id);
    expect(result).toEqual([mockProject]);
  });
});
