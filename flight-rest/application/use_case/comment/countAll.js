class CountAll{

  constructor(commentRepository) {
    this.commentRepository = commentRepository;
  }

  countAll() {
    return this.commentRepository.countAll();
  }


  }

  module.exports = CountAll;