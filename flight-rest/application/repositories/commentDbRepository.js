class CommentRepository {
  constructor(repository) {
    this.repository = repository;
  }

  findByFlightId = (flightId) => this.repository.findByFlightId(flightId);
  countAll = (params) => this.repository.countAll(params);
  add = (comment) => this.repository.add(comment);

} 

module.exports = CommentRepository;