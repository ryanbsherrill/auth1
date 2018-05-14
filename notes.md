- express middleware - global vs local
- mongoose middleware - lifecycle hooks
- extending mongoose models w/ custom methods
- hashing user pass for db storage

- persisting state across requests using sessions - in-mem and persisted in mongo
- auth users using cookies/sessions
- protecting resources from unauthenticated users

- authenticating users using JSON web tokens JWT
- persisting tokens on the front-end to keep users authenticated across sessions

- good security practices

client > req > [ (middleware) api (mongoose) ] > db

## Proper AuthN (authentication)
- password storage
- brute-force attack mitigation
- password strength

## Hashtag vs Encryption

##### encryption is a two way process
- plain text pass + private key => encrypted pass
- encrypted pass + private key => original plain text pass

##### hashing is a one way process
