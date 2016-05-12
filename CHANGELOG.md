##Change Log
All notable updates and changes relevant for developers will be documented here.

##1.0.0
Index.js is the entry point.
The module takes two parameters:
-An array of file names
-A callback function
  -The callback has two parameters: error (String) and data (Array)
  -Error will be null if data is returned successfully.
  -Data array will include the first byte of data from each file as a buffer.
