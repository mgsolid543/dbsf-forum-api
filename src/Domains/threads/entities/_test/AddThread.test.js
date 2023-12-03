const AddThread = require('../AddThread');

describe('AddThread entities', () => {
    it('should throw error when payload did not contain needed property', () => {
        // Arrange
        const payload = {
            id: 'thread-123',
        };

        // Action and Assert
        expect(() => new AddThread(payload))
            .toThrowError('ADD_THREAD.NOT_CONTAIN_NEEDED_PROPERTY');
    });

    it('should throw error when payload did not meet data type specification', () => {
        // Arrange
        const payload = {
            title: true,
            body: "this text",
            owner: "user-123",
        };

        // Action and Assert
        expect(() => new AddThread(payload))
            .toThrowError('ADD_THREAD.NOT_MEET_DATA_TYPE_SPECIFICATION');
    });

    it('should create addedThread object correctly', () => {
        /**
         * @TODO 2
         * Lengkapi pengujian pada skenario berhasil membuat objek addedThread.
         * Pastikan terdapat proses `assertion`
         * yang mengecek nilai-nilai properti yang berada di dalam objek `addedThread`.
         */
        const payload = {
            id: 'thread-id',
            title: 'thread-title',
            owner: 'thread-owner',
        };

        const {id, title, owner,} = new AddedThread(payload);

        expect(id).toEqual(payload.id);
        expect(title).toEqual(payload.title);
        expect(owner).toEqual(payload.owner);
    });
});
