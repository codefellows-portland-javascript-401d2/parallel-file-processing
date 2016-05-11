![CF](http://i.imgur.com/7v5ASc8.png) Parallel File Processing
===

##To Submit this Assignment
  * fork this repository
  * do your work against your repository
  * when done submit a pull request to this repository/yourname branch
  * submit a link to your PR in canvas
  * write a question and observation on canvas

## Resources
* [Node fs docs](https://nodejs.org/api/fs.html)

##Description:
This assignment will have you create a Javascript module that takes a
list of filenames and retrieves the first byte of each file
_in parallel_, but returning the results as an array in the same order
as the list of files that were provided. 

Make sure you test with larger files later in the order to force the
order issue.

You need to have tests that verify the results.  

Use package.json. Lint, include your .eslint

Your submission should be a link to your pull request.  

##Bonus:
For one extra point, create a command line utility that will be 
run using node and can accept a directory and output the filename 
and first byte results to the screen using the module you created 
in the main part of the assignment.

```sh
> node index.js ./files
file-01 4e3rek22
file-02 0dj4nsnc
file-03 999fdke3
```

##Rubric:

  * Proper Styling: 2pts
  * Proper Submission: 2pts
  * Files in parallel: 2pts
  * Preserve order: 2pts
  * Tests: 2pts
