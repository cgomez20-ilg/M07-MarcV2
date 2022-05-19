'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
      
     
     
      await queryInterface.bulkInsert('users', [{
        username: 'Christian',
        password: "chris",
        email: "chris@gmil.com"
        
      }], {});
    
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
