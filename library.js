'use strict';

var Topics = require.main.require('./src/topics');
var User = require.main.require('./src/user');
var meta = require.main.require('./src/meta');

var reputationPoints = 1; // Number of reputation points to award per reply

var plugin = {};

plugin.postReply = async function (payload) {
  var tid = payload.topic.tid;
  var topic = await Topics.getTopicFields(tid, ['uid']);

  await User.incrementUserReputationBy(topic.uid, reputationPoints); // Increase reputation points by the specified amount
};

module.exports = plugin;