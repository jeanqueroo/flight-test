const FlightComment = require('../../../src/entities/comment')

class AddComment {

  constructor(id, comment, userId, flightId, tags, createdAt, commentRepository) {
    this.id = id;
    this.comment = comment;
    this.userId = userId;
    this.flightId = flightId;
    this.tags = tags;
    this.createdAt = createdAt;
    this.commentRepository = commentRepository;
  }
  

  addComment() {
  if (!this.comment || !this.userId || !this.flightId || !this.createdAt) {
    throw new Error('comment, userId, flightId and createdAt fields cannot be empty');
  }

  const newComment = new FlightComment(this.id,this.comment, this.userId, this.flightId,this.tags, this.createdAt);

  return this.commentRepository.add(newComment);
  }
}

module.exports = AddComment;
