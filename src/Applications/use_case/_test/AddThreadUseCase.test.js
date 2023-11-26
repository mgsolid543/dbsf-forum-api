const ThreadRepository = require('../../../Domains/threads/ThreadRepository');
const AddThreadUseCase = require('../AddThreadUseCase');
const AddedThread = require("../../../Domains/threads/entities/AddedThread");
const {use} = require("bcrypt/promises");

describe('AddThreadUseCase', () => {
  it('should orchestrating the add thread action correctly', async () => {
    /**
     * @TODO 3
     * Lengkapi pengujian `AddThreadUseCase` agar dapat memastikan
     * flow/logika yang dituliskan pada `AddThreadUseCase` benar!
     *
     * Tentunya, di sini Anda harus melakukan Test Double
     * untuk memalsukan implmentasi fungsi `threadRepository`.
     */
      const useCasePayload = {
        title: 'judul',
        body: 'body',
        owner: 'irpan',
      };

      const mockAddedThread = new AddedThread({
        id : 'thread-001',
        title: useCasePayload.title,
        owner: useCasePayload.owner,
      });

      const mockThreadRepository = new ThreadRepository();
      mockThreadRepository.addThread = jest.fn()
          .mockImplementation(() => Promise.resolve(new AddedThread(mockAddedThread)));

      const addThreadUseCase = new AddThreadUseCase({
        threadRepository: mockThreadRepository,
      });

      //const await addThreadUseCase.execute(useCasePayload);

      expect(mockThreadRepository.addThread).toBeCalledWith(mockAddedThread);
      expect(mockThreadRepository.addThread).toBeCalledWith(
          useCasePayload,
          owner,
      }))
  });
});
