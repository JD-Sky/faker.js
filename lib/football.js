/**
 *
 * @namespace faker.football
 */
var Football = function (faker) {
    var self = this;
  
    /**
     * team
     *
     * @method faker.Football.team
     */
    self.team = function () {
        return faker.random.arrayElement(faker.definitions.football.team);
    };

    /**
     * venue
     *
     * @method faker.Football.venue
     */
    self.venue = function () {
        return faker.random.arrayElement(faker.definitions.football.venue);
    };

    /**
     * competition
     *
     * @method faker.Football.competition
     */
    self.competition = function () {
        return faker.random.arrayElement(faker.definitions.football.competition);
    };
    
    return self;
  
  };
  
  module['exports'] = Football;