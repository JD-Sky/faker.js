/**
 *
 * @namespace faker.rugbyunion
 */
var RugbyUnion = function (faker) {
    var self = this;
  
    /**
     * team
     *
     * @method faker.RugbyUnion.team
     */
    self.team = function () {
        return faker.random.arrayElement(faker.definitions.rugbyunion.team);
    };

    /**
     * venue
     *
     * @method faker.RugbyUnion.venue
     */
    self.venue = function () {
        return faker.random.arrayElement(faker.definitions.rugbyunion.venue);
    };

    /**
     * competition
     *
     * @method faker.RugbyUnion.competition
     */
    self.competition = function () {
        return faker.random.arrayElement(faker.definitions.rugbyunion.competition);
    };
    
    return self;
  
  };
  
  module['exports'] = RugbyUnion;