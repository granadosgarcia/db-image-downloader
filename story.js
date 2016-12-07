var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var StorySchema = new Schema({
    memories: [Schema.Types.Mixed],
    titu: String,
    adre: String
});

module.exports = mongoose.model('Story', StorySchema);
