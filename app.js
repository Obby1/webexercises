/*
HTTP is a protocol for transfering data securely across different devices. It stands for hyper text transfer protocol

URL is text the specifies the hostname which will be used to retrieve data

DNS (domain name system) converts the hostname into a server IP address, which is 4 numbers separated with a .

A query string typically starts with a q or query and specifies some sort of data to search for. It is a series
of key value pairs. 

Get and Set are the two most common http verbs. Get retrieves data from a server to be displayed and can be
accompanied by a query string. Set will manipulate some data on the server.

An HTTP request is sent from a client asking for information from a server. Typically in the form of a URL,
the request is sent by one computer to retreive data from a specific server. 

An HTTP response is the answer of a server to the HTTP requesting client. It is separated by different headers such as 
Accept-Language which specifies the language the HTTP request wants to view the information in. 

When you type a URL into a browser, the browser will attempt to send an HTTP request to the hostname and port based
on the URL. The data is typically transmitted through a series of routers until finally landing on the correct
hostname as specified by the URL. The HTTP requests including headers are responded to and eventually packaged by the requestors
browser into a DOM from the HTML. Additional resources are also requested to complete the request.
If the server does not have the requested information an error code
is returned typically a 404 or 4xx error stating the reason. A separate request is made for each resource. 


curl https://icanhazdadjoke.com/search?term=pirate

What does a pirate pay for his corn? A buccaneer!
What did the pirate say on his 80th birthday? Aye Matey!
Why couldn't the kid see the pirate movie? Because it was rated arrr!
Why are pirates called pirates? Because they arrr!
Why do pirates not know the alphabet? They always get stuck at "C".

dig https://icanhazdadjoke.com

dig icanhazdadjoke.com +short

172.67.198.173
104.21.66.15

When changing the field from GET to POST, i received the following error:
Error code: 501

Message: Unsupported method ('POST').

I no longer see the query string with POST, only with GET

*/