TexasPoker
==========
Texas Hold'em is one of the world's most popular poker games. The game requires 5 community cards and 2 pocket cards for each player which comes from the same set of 52 cards. We found it encredibly annoying to shuffle the cards after each roll, so I spent an afternoon to write a web app to do the shuffle work and simulate the experience of playing the game in reality.

It is very easy to use. Just download the folder and run main.py. You need python environment of course.

python main.py 80

Your pc runs as the game server now. Here 80 is the port you set for your server, you can change whichever you like as long as it is available, but remember to add to your url later if it is not 80.

If you are using Win8, simply double click the .bat file and it will establish a local wlan network for you as well as run the web app. The Wi-fi name is "TexasHold'em" and the password is 1234567890.

Then open your favourite web browser (Google Chrome recommanded). Open "localhost/table" to see the community cards and your screen is the gaming table now. Use your cell phone web browser and open "[serverIp]/player/1" to get your pocket cards. Other players can get theirs by different number specified at the url path. Refresh the page by the "player x"  button to get new pocket cards when you start a new round.

Have fun with your friends!
