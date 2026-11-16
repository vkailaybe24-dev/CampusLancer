Passlib and Bcrypt Compatibility Issue

Root Cause: The authentication module used the Passlib library for password hashing. However, newer versions of the Bcrypt package introduced changes to internal attributes, causing compatibility issues with Passlib during initialization.

Technical Impact: The application encountered an AttributeError while initializing password hashing functionality. This prevented users from registering new accounts and logging into existing accounts through the authentication endpoints.

Detailed Resolution: Replaced the Passlib CryptContext implementation with the native Bcrypt library. Password salts are generated using bcrypt.gensalt(), and passwords are hashed using bcrypt.hashpw(). During login, bcrypt.checkpw() is used to verify the entered password against the stored password hash.