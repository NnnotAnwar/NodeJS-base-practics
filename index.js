const http = require('http')
const path = require('path')
const fs = require('fs')
const os = require('os')
const EventEmitter = require('events')
const emitter = new EventEmitter()
const myModule = require('./modules/myCustomModule')
const { myModuleVal: myModuleTwo } = require('./modules/myCustomModuleTwo') // Module value - { myModuleVal: 'myCustomModuleTwo.js' }, 
const { stringify } = require('querystring')

// destructure it like 'myModuleVal as myModuleTwo'
myModule(myModuleTwo) // "myCustomModule.js myCustomModuleTwo.js"

__dirname  // String, returns a directory path where the file is located 'D:\Projects\NodeJS-base-practics'
__filename // String, returns a full path to the file 'D:\Projects\NodeJS-base-practics\index.js'
module // Object, returns information about file
exports // Object, returns exported entities
process // Object, contains information about node process, methods that can operate other and node process, information about system
// NodeJS start

const hostname = '127.0.0.1'
const port = 3000

const server = http.createServer((req, res) => {
   // res.statusCode = 200
   res.writeHead(200, 'Content-type', 'text/plain')
   res.write(req.url)
   res.end('\nThis is NodeJS http')
})

server.listen(port, hostname, () => {
   console.log(`Server running on ${hostname}:${port}`)
})

// Path Module

/**
   function returns join path, returned value can be different depends on system, 
   in Google Chrome debugger it is 'first\\second\\third', in windows shell 'first/second' 
*/
path.join('first', 'second') // 'first/second'

/*
   function accepts path as parametr, returns last name of the path
*/
path.basename('D:\NodeJS application\Projectsf Folder\1\NodeJS-base-practics\index.js') // 'index.js'

/*
   fucntion returns full path to the directory of the file, mostly __dirname
   if you put any parametr, that will be joined to the path
*/
path.resolve('first') // 'D:\NodeJS application\Projectsf Folder\1\NodeJS-base-practics\first'

/*
   function returns system's seperate symbol
   for nodejs chrome debug it is '\\', for windows shell '\'
*/
path.sep // *depends on system*

/*
   function returns extensions of the file in path
*/
path.extname(
   path.resolve('index.js')
) // '.js'

/*
   function returns a comlex Object of path information: root, dirname, basename, extname, name 
*/
path.parse(__filename)
/*
   result:
   {
      "root": "D:\\",
      "dir": "D:\\NodeJS application\\Projectsf Folder\\1\\NodeJS-base-practics",
      "base": "index.js",
      "ext": ".js",
      "name": "index"
   }
*/

// URL

let exampleURL = 'https://github.com/NnnotAnwar/NodeJS-base-practics'
let url = new URL(exampleURL)
/*
   URL {                                                        
      href: 'https://github.com/NnnotAnwar/NodeJS-base-practics',
      origin: 'https://github.com',                              
      protocol: 'https:',                                        
      username: '',                                              
      password: '',                                              
      host: 'github.com',                                        
      hostname: 'github.com',                                    
      port: '',                                                  
      pathname: '/NnnotAnwar/NodeJS-base-practics',              
      search: '',                                                
      searchParams: URLSearchParams {},                          
      hash: ''                                                   
   }                                                            
*/

// FileSystem

// functions to create/remove a directory/folder

let directory = path.resolve('newDirectory');
let callback = error => {
   if (error) return 1
}

fs.mkdir(directory, callback)
/* fs.rmdir(directory, callback) */

// function create and write a file

let writeFileDirectory = path.join(directory, 'writeFile.txt')
fs.writeFile(writeFileDirectory, 'Some sort of text', callback)

// if we use writeFile method twice or more, it will rewrite existing file
fs.writeFile(writeFileDirectory, 'Rewiten Text', callback)

// then if we want to add new text into the file, option is appendFile method
fs.appendFile(writeFileDirectory, '\nNew Text appended', callback)

// function that reads file and takes Buffer of content of the file, if we put encoding option, we can automaticly parse Buffer
fs.readFile(writeFileDirectory, { encoding: 'utf-8' }, (error, data) => {
   if (error) throw error
   return data
})

// Operating System

os.arch() // string, OS architecture
os.version() // string, OS version
os.cpus() // array, OS CPU information, every element is presentation of CPU Core 
os.homedir() // string, 'C:/Users/*Username*'
os.hostname() // string, computer name
os.userInfo() // Object, user information

