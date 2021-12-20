const Song = require('./models/Song.model')


const resolvers = {

    Query: {
        hello: () => {
            return 'hello World';
        },
        getAllSongs: async () => {
            return await Song.find()
        },
        getSongById: async (parent, { id }, context, info) => {
            return await Song.findById(id);
        },
        getSongByArtistName: async (parent, { artist }, context, info) => {
            return await Song.find({artist: artist});
        },
        getSongByAlbumName: async (parent, { album }, context, info) => {
            return await Song.find({album: album});
        },
        getSongByName: async (parent, { name }, context, info) => {
            return await Song.find({name: name});
        },
        getSongByTitle: async (parent, { title }, context, info) => {
            return await Song.find({title: title});
        },
        getAllAlbum: async (parent, args , context, info) => {
            return await Song.find().distinct("album");
        },
    },

    Mutation: {
        addSong: async ( parent, args, context, info ) => {
            // console.log("PRRR", args)
            const { name, title, artist, album, year, duration_in_sec, bitrate, lyric } = args.song;
            const song = new Song({ name, title, artist, album, year, duration_in_sec, bitrate, lyric });
            await song.save();
            return song;
        },
        deleteSongById: async ( parent, args, context, info ) => {
            const { id } = args;
            await Song.findByIdAndDelete(id)
            return { message: "Ok, Song deleted" };
        },
        updateSongbyId: async ( parent, args, context, info ) => {
            const { id, name, title, artist, album, year, duration_in_sec, bitrate, lyric } = args;
            return await Song.findByIdAndUpdate(id, {
                name, title, artist, album, year, duration_in_sec, bitrate, lyric,
            }, {new: true});
        }
    }
}

module.exports = resolvers;