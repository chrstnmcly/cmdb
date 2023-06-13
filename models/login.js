const login = {
    'cmaclay@deloitte.com': {
      email: 'cmaclay@deloitte.com',
      password: 'password1'
    },
    'mjalmosara@deloitte.com': {
      email: 'mjalmosara@deloitte.com',
      password: 'password2'
    },
    'ccapili@deloitte.com': {
      email: 'ccapili@deloitte.com',
      password: 'password3'
    },
    'adilag@deloitte.com': {
      email: 'adilag@deloitte.com',
      password: 'password4'
    }
  };
  
  module.exports = {
    findOne: function (email) {
      return login[email];
    }
  };
  