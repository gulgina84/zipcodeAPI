### Software Engineer Candidate Coding Challenge

##### This is a remotely callable web-based API which can can be used to manage a list of 5 digit zip codes. The API supports the following operations:

##### Insert - Add a new zip code to the list.

GET /insert/

Example: http://localhost:3000/insert/91030

Parameters:

Parameter | Type | Description
-|-|-
zip code |5 digit integer|zip code to be inserted.

Response

```
{
  'Zip code 91030 inserted.'
}
```

**Status: 200 OK**

##### Delete - Remove a zip code from the list.

GET /delete/

Example: http://localhost:3000/delete/91030

Parameters:

Parameter | Type | Description
-|-|-
zip code |5 digit integer|zip code to be deleted.

Response

```
{
  'Zip code 91030 deleted.'
}
```

**Status: 200 OK**

##### Has - Determines if a zip code exists in the list.

GET /has/

Example: http://localhost:3000/has/91030

Parameters:

Parameter | Type | Description
-|-|-
zip code |5 digit integer|zip code to be checked.

Response

```
{
  'true'
}
```

**Status: 200 OK**


#### Display - Shows the full list of zip codes with contiguous ranges grouped in a shortened form

GET /display

Response

```
  10223-10225, 39211, 30106-30107

```


### Step one

To install all the dependencies, run  the following command

```npm install```

### Step two
To start the server, run the following terminal command from the root directory
```npm start```

By default, the server will be serving at http://localhost:3000/

To terminate the server, press Ctrl + C in your server terminal.
