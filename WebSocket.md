WebSocket Service Documentation
-------------------------------
The ChatService handles real-time messaging (or mock message broadcasting). It supports:
-Sending messages to individuals
-Broadcasting group messages
-Managing message list (observable)


Features
-Send message to group or individual
-Subscribe to live message stream
-Maintain a local list of messages

Methods

sendMessage()
  -description: Sends a message (broadcasts or directs based on isGroup flag).

getMessages()
  -Description: Returns the current list of messages stored locally.