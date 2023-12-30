/AUTH SERVICE IMPLEMENTATION FOR SKYWAY 
## TABLE
  -> only user model is required here 
  ### User(Name) ->Email,Password(with validation)
  -> as we cant store password directly in our db so we hash the password using bcrypt by prehook in usermodel
/