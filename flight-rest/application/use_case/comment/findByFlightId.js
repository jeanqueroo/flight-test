class FindByFlightId {
  constructor(commentRepository) {
    this.commentRepository = commentRepository;
  }

  findByFlightId(flightId) {
    return this.commentRepository.findByFlightId(flightId);
  }
}

module.exports = FindByFlightId;