# foodback-server

## killing the nodemon process

```
netstat -ano | findstr :<port>
taskkill /PID <processId> /F
```