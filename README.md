# Fighting-Game-API
A database that catalogues the frame data of various fighting game characters across games. This is currently a work in progress.
![Title](https://cdn.discordapp.com/attachments/375398124820103172/1041881860919267348/Screenshot_1668.png)

# What is this?
The goal of this is to create an API where users can both extract data through queries about different fighting game characters as well as input data of their own
![SW](https://cdn.discordapp.com/attachments/375398124820103172/1041881860470489098/Screenshot_1667.png)

The information of each character is stored in an SQL database. Information is mainly composed of...

* Character: The actual name of the character. A single character can exist in multiple games and thus will have unique ID's associated with it 
* Game: The specific game they come from 
* Sepcial Attacks: The amount of specials the character has
* Normal Attacks: The amount of normals the character has
* Fastest-Slowest Attacks: These values are counted entirely in frames. These games tend to run at 60 frames per second.

# TO DO
* Database needs more data and needs to be linked to backend
* Allow for users to upload data
* Visual flair

This is made using Node.js and SQL.
