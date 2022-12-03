# Cloudflare Pages Functions

## Endpoints

### /messages POST
/messages takes a message (a string) as a POST and returns the SHA256 hash digest of that
message (in hexadecimal format)

https://functions.pages.cloudflare.emindeniz99.com/messages

Request
```http
POST /messages/ HTTP/1.1
Content-Type: text/plain
Host: functions.pages.cloudflare.emindeniz99.com
Content-Length: 11

Hello World
```

Response
```
a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e
```



### /messages/<hash> GET
/messages/<hash> is a GET request that returns the original message. A request to a non-existent
<hash> returns a 404 error.

https://functions.pages.cloudflare.emindeniz99.com/messages/a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e

Request
```http
GET /messages/a591a6d40bf420404a011733cfb7b190d62c65bf0bcda32b57b277d9ad9f146e HTTP/1.1
Host: functions.pages.cloudflare.emindeniz99.com
```


Response
```
Hello World
```

* How can you scale your implementation?

I prefer a serverless computing platform for serving our endpoints. Cloudflare Pages Functions is a type of Cloudflare Workers that is Cloudflare's serverless computing platform. There is a lot of serverless computing platform but usually, most of them use Node.js as a runtime engine. The cold startup time of node.js functions is very long. On the other hand, Cloudflare uses a V8 engine directly so that it can run functions instantly. 
Furthermore, serverless platforms can scale down to zero, so we do not pay money when it is not working.
If we do not know the scale of the project, and it seems low, we can prefer serverless platforms in terms of pricing. On a high load, the cost of it can be high.
Also, the serverless platform can handle millions of requests, so it is an infinitely scalable system.       
https://developers.cloudflare.com/pages/platform/functions/        
https://workers.cloudflare.com/

* How did you deploy this application? How can you improve this process and make it easy to maintain?

Cloudflare Pages has Git Integration, I connected my GitHub repo to the system. It handles all the necessary parts. And gives the public endpoints. It was very easy.       
https://developers.cloudflare.com/pages/get-started/#select-your-github-repository 