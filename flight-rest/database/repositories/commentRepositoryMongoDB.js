const Comment = require('../../database/models/comment')

const FlightComment = require('../../src/entities/comment')



class CommentRepositoryMongoDB { 

  add = (commentEntity) => {
    const newComment = new Comment({
        id: commentEntity.getId(),
        comment: commentEntity.getComment(),
        userId: commentEntity.getUserId(),
        flightId: commentEntity.getFlightId(),
        tags: commentEntity.getTags(),
        createdAt:  commentEntity.getCreatedAt()
    });

    return newComment.save();
  };

  findByFlightId = (flightId) => Comment.find({flightId: flightId});

  countAll = () => Comment.countDocuments();
}
  
module.exports = CommentRepositoryMongoDB;

 /* const countAll = (params) => CommentModel.countDocuments();

  const findByFlightId = (flightId) => UserModel.find({flightId: flightId});
  comment, userId, flightId,tags, createdAt
  const 

  return {
    findByFlightId,
    countAll,
    add
  };
}*/