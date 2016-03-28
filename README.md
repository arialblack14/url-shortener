## FreeCodeCamp API Basejump: URL Shortener Microservice

### User stories:

I can pass a URL as a parameter and I will receive a shortened URL in the JSON response.
When I visit that shortened URL, it will redirect me to my original link.

#### Example creation usage:

```
https://some.example-app.com/shorten/https://www.google.com
https://some.example-app.com/shorten/http://foo.com:80
```

#### Example creation output

```
{ "original_url":"http://foo.com:80", "short_url":"https://some.example-app.com/shorten/8170" }
Usage:
https://some.example-app.com/shorten/2871
Will redirect to:
https://www.google.com/
```

> FCC projects

> This is a project from the Freecodecamp curriculum.
The project is live on Heroku. (At least for a while)
