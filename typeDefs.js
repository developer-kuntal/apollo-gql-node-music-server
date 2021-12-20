const { ApolloServer, gql } = require('apollo-server-express');

const typeDefs = gql`

    type Song {
        id: ID
        name: String
        title: String
        artist: String
        album: String
        year: String
        duration_in_sec: Int
        bitrate: Int
        lyric: String
        uploaded_at: String
    }

    type Query {
        hello: String

        getAllSongs: [Song]

        getSongById(id: ID): Song

        getSongByArtistName(artist: String): [Song]

        getSongByAlbumName(album: String): [Song]

        getSongByName(name: String): [Song]

        getSongByTitle(title: String): [Song]

        getAllAlbum: [String]
    }

    input SongInput {
        name: String
        title: String
        artist: String
        album: String
        year: String
        duration_in_sec: Int
        bitrate: Int
        lyric: String
    }

    type Status {
        message: String
    }

    type Mutation {
        addSong(song: SongInput): Song
        deleteSongById(id: ID): Status
        updateSongbyId(
            id: ID!,
            name: String,
            title: String,
            artist: String,
            album: String,
            year: String,
            duration_in_sec: Int,
            bitrate: Int,
            lyric: String
        ): Song
    }
`;

module.exports = typeDefs;