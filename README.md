# reql | [![Build Status](https://travis-ci.org/shri3k/reql.svg?branch=master)](https://travis-ci.org/shri3k/reql)

## Description:- 
repl but you require modules before entering repl  
_Primarily made this because I'm too lazy to create a new file just to test out a package_  
_Also, not to be confused with [ReQL](https://rethinkdb.com/docs/introduction-to-reql/)_

## Syntax:- 
`reql [-h] || [--<variable_name> || -<variable_name>]=<package_name> || <package_name>  [--install]`

### `-h`
Displays the content of this file and exits

### `<package_name>:`
Makes the package available in the repl with variable name as it's own name.  
Package name with containing `-` on their name is converted to `_` since `-` is not a proper identifier in JavaScript variables.

### `--<variable_name> || -<variable_name>`:-
Same as `<package_name>` but you get to specify your own variable name.
One exception: `_` variable name is unavailable and if done the package will be available with it's original name

### `--install`:
By default this tool expects the package to already be installed but if you specify this flag
then it'll install it for you locally, meaning it follows the same installation path as npm 
when you install packages locally. 

## Install:- 
`npm install reql -g // can only be installed globally`

## Usage:- 
`reql -h`
`reql -base=base64-url -min=minimist --install lodash`

## Demo:-
[![asciicast](https://asciinema.org/a/b8liwdvefkww370i275kmtlbu.png)](https://asciinema.org/a/b8liwdvefkww370i275kmtlbu)
