/AUTH SERVICE IMPLEMENTATION FOR SKYWAY 
## TABLE
  -> only two model is required here (authentication,authorisation)
  ### User(Name) ->Email,Password(with validation)
  -> as we cant store password directly in our db so we hash the password using bcrypt by prehook in usermodel
  ### Roles ->(Name)
  -> one user can have multiple roles and one role can given to multiple users.(many to many association)
/