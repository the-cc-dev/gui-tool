
<a href="#"><img src="https://raw.githubusercontent.com/vartomi/gui-tool/master/gui_tool_logo.png" height="40"></a>**GUI-TOOL**
----------------------

[![npm version](https://badge.fury.io/js/gui-tool.svg)](http://badge.fury.io/js/gui-tool)
[![Build Status](https://travis-ci.org/vartomi/gui-tool.svg?branch=master)](https://travis-ci.org/vartomi/gui-tool)

[![](https://img.shields.io/npm/dm/gui-tool.svg)](https://www.npmjs.com/package/gui-tool)

####Create ExtJS prototype applications easier and faster.
#####[ Interactive prototype | Prepared Siesta tests | Screenshots in Full HD ]

Do you need a skeleton application or a prototype written in ExtJS? Just create it with easily understandable specification.
  > Supported ExtJS versions:
 - <b>4.x</b> (built in 4.2.1)
 - <b>5.x</b> (built in 5.1.0)

[Getting Started](#getting-started)<br/>
[How to specify?](#specification)<br/>
[Development](#development)<br/>
[Testing](#testing)<br/>
[Requirements](#requirements)

####Detailed documentation in [gui-tool wiki](https://github.com/vartomi/gui-tool/wiki)
[ [User manual](https://github.com/vartomi/gui-tool/wiki/User-manual) | [Specification schema](https://github.com/vartomi/gui-tool/wiki/Specification-schema)]

##**Getting Started**

Before you start it, please check the [requirements](#requirements)!

 1.  Install gui-tool with npm in console.
      
      `$ npm install gui-tool -g`
 
 
 2. Create a new gui-tool project. If you use the `name` optional variable, the root directory will be also created with the given name. Otherwise you need to create a directory and run the command inside. The tool will download the ExtJS framework (4.2.1 gpl or 5.1.0 gpl) into the `<project_name>/webui` directory. 
 
     `$ gui-tool init [name]`
    > With `-x` or `--extjsversion` option you can decide which ExtJS version should be downloaded and used, default is <b>5.1.0</b>:
      <br/> `$ gui-tool init -x 4` in this case gui-tool will use <b>4.2.1</b> version of ExtJS.
    > If you would like to use own ExtJS SDK or Siesta version, you can give the folder path of them with optional flags:
      <br/>`--siesta <siesta_path> --extjs <extjs_path>`
    

 
 3. If everything is created successfully, you need to see the following hierarchy.
    ```python
     <project_name>
     |- specification
        |- gui.yml # example specification file
     |- test
        |- siesta # downloaded and extracted Siesta
     |- webui
        |- app
        |- ... # generated Sencha project for ExtJS application
    ```
    
 4. Now you can generate your first ExtJS application generated by gui-tool. Run the following command in project folder:
    
    `$ gui-tool generate -f`

    > The `-f` or `--force` flag is used for overwriting the existed files in `webui/app`

    If you didn't get any error after generation, you can check the hierarchy looks like the command written in the console. For example the `<project_name>/test` directory should contain new files:
    ```python
     test
     |- gui # new folder
     |- siesta
     |- index.html # new file
  ```
 5. Finally you can open the generated ExtJS application just run the following command:
 
    `$ gui-tool run -w`

   > The -w or --watch option is just a help for you. In this case you will see in the console `watching...` and when you change the example `gui.yml` specification file the application will be regenerated and refreshed in the opened browser automatically.

   > If you wouldn't like to open the application in browser in one step, you can use `-q` or `--quiet` option.
   
   > Not only the development version of the application can be started, but the builded version too. With `-p` or `--prod` flags the tool will start the production server as well. In this case the development and the production version of the application will be opened in two different tabs.
   
 6. Every application should be tested, therefore gui-tool prepares the environment to test the newly generated ExtJS application with Siesta. The skeleton for the ExtJS components' test is generated with the `generate` command also, we just need to open the test page to check them:

    `$ gui-tool test`
    
    > With option `-r` or `--run`, the tests can be run in console mode and afterthat a report file will be generated with test results. **Bryntum Siesta Standard required!**
   
<a name="specification"></a>
##**How to specify?**
Gui-tool use an own specifcation schema to describe how the application should look like and what kind of models it has. In `specification` directory the `gui.yml` file is an example specification file. It's used by the application without given other specification file.

Details about the specification schema can be found in [gui-tool Wiki](https://github.com/vartomi/gui-tool/wiki/Specification-schema)

<a name="development"></a>
##**Development**
If you need to improve or develop specific functionalitites, UI elements for the generated ExtJS application, you can extend the auto-generated code. It's already a well-formatted and readable source under `webui/app` directory.

See [more](http://docs.sencha.com/extjs/4.2.1/) in ExtJS API document

<a name="testing"></a>
##**Testing**

Front-end applicaions can not exist without tests. They ensure that the application is working well in most cases. Gui-tool use Bryntum Siesta testing framework, because it's designed and based on ExtJS. With help of it the testing of ExtJS UI elements is very easy.

See [more](http://www.bryntum.com/docs/siesta/#!/api) in Siesta API document

<a name="requirements"></a>
##**Requirements**

 - unix based commandline tool, e.g. on Windows a [Git Bash](http://git-scm.com/downloads)
 - [node.js with npm](http://nodejs.org/download/) (**> v0.10.28**)
 - [Sencha Cmd](http://www.sencha.com/products/sencha-cmd/download) (**> v5.1.0.26**)

##**License**
[![](https://img.shields.io/npm/l/gui-tool.svg)](http://opensource.org/licenses/MIT)
