 const FlightComment = class {
    constructor(id,comment, userId, flightId, tags, createdAt) {
      this.id = id;
      this.comment = comment;
      this.userId = userId;
      this.flightId = flightId;
      this.tags = tags;
      this.createdAt = createdAt;
    }

    getId() {
      return this.id;
    }
    getComment() {
      return this.comment;
    }
    getUserId() {
      return this.userId;
    }
    getFlightId() {
      return this.flightId;
    }
    getTags() {
      return this.tags;
    }
    getCreatedAt() {
      return this.createdAt;
    }

    
    };

    module.exports = FlightComment;
    
   
    