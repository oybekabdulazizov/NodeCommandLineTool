# NodeCommandLineTool

Greetings! 

In this project, I tried creating a node js terminal command similar to 'ls' command used in WinPowershell or MAC OS terminal. 

At this moment, it only runs okay in git bash terminal, but an error is being throw when used in Powershell or Windows CMD tool. 

So, before running the 'nsl' (that's the name of the command) in git bash, first run 'export FORCE_COLOR=true'.
I used chalk.js to print the the files and directories in different colours. So, this export command should be run first. 
Then, run nls in git bash with or without path as an argument, and it should work fine. 
