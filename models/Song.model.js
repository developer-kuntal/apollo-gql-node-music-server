const mongoose = require('mongoose')

const SongSchema = new mongoose.Schema({ 

    name: {
        type: String,
        required: true
    },
    title: {
        type: String
    },
    artist: {
        type: String
    },
    album: {
        type: String
    },
    year: {
        type: String
    },
    duration_in_sec: {
        type: Number
    },
    bitrate: {
        type: Number
    },
    lyric: {
        type: String
    },
    uploaded_at: {
        type: Date,
        default: Date.now
    }

});

const Song = mongoose.model('song', SongSchema);
module.exports = Song;