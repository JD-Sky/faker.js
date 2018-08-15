/**
 *
 * @namespace faker.rugbyleague
 */
var RugbyLeague = function (faker) {
    var self = this;
  
    /**
     * team
     *
     * @method faker.RugbyLeague.team
     */
    self.team = function () {
        return faker.random.arrayElement(faker.definitions.rugbyleague.team);
    };

    /**
     * venue
     *
     * @method faker.RugbyLeague.venue
     */
    self.venue = function () {
        return faker.random.arrayElement(faker.definitions.rugbyleague.venue);
    };

    /**
     * competition
     *
     * @method faker.RugbyLeague.competition
     */
    self.competition = function () {
        return faker.random.arrayElement(faker.definitions.rugbyleague.competition);
    };
    
    return self;
  
  };
  
  module['exports'] = RugbyLeague;