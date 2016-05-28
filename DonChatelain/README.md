# Parallel Data Processing 
### Using Asynchronous Node.js File System

#### Usage: 
Use the CLI and run 
`node app.js *any directory here*`

If the directory argument is omitted, the program will default to files in the *data/* folder.

The program will then target all files in target directory and print out the first byte of data from each file in the console.
In addition, each byte taken out of context will be listed in the same order of files that are targeted. 

The purpose of this program is to practice the concept of parallel data processing in an asynchronous environment.