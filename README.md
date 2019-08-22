# TG-Pre-Work

### While we do want our developers to work smarter, not harder, please refrain from plagiarizing.  It is completely fine to reword information you have gleaned from internet sources, however, please be prepared to redo the work should you submit a directly copied/pasted answer.  If you must copy/paste, cite your sources (this citation doesn't need to be fancy - just state directly where you found the information or provide a link).  Additionally, some of the questions below are tricky.  The answers were not necessarily covered in the reading we assigned.  They are not intended to be straightforward because we expect you to do some research to discover the answers to the best of your ability.  If you cannot find an answer, explain what you do know and what you are stuck on.  

## When we hit https://www.techtonic.com/ what happens? Don’t focus too much on architecture (Monolithic, SOA, Microservices, etc.). Try to focus more on how the web functions in general terms/steps.

Browser finds the address of the server from the DNS serer. Then the browser sends an HTTP request to the server for the website to be sent to the client. Data as well will be sent between the two (client and server). If the server approves and the site exists then you'll get a 200 code which just means the website and it's data will be sent to client. Then the browser puts the data packets together and the website is present on the browser.

## From start to finish, how does data reach you to be rendered in the browser?

Once the user (client) puts in a request the data comes back from the IP address in data packets (small chunks) which then the browser displays.

## What code is rendered in the browser?

HTML

## What is the server-side code’s main function?

Main function would be to process the client request and post back to the server. Example would be user validation.

## What is the client-side code’s main function?

Main function would be to change elements without reaching out to the database.

## What is runtime?

A module that provides info about the extension and environment it's running in. As well as provides messaging APIs.

## How many instances of the client-side assets (HTML, CSS, JS, Images, etc.) are created?

I'm not quite sure how to answer this question because there are many files we can add to these folders. I believe most of the assets are the one listed then we would add subfolders as we see fit. Then individual files, for example in React each component can have their own file.

## How many instances of the server-side code are available at any given time?

Again not sure how to answer this or if I'm answering it correctly but examples of server-side code are PHP and Python. It can produce a decrease in performance as well with posting and processing requests. 

## How many instances of the databases connected to the server application are created?

I'm not positive if I understand the question and how to answer it; however, I've worked with databases and have connected 2 and more databases to an application.
