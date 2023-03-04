Personal case study

Challenge:
Currently there are two ways to do currency conversions in Path of Exile. You either go through the website and check prices on individual types of currency, or you would go through POE ninja to find current prices and do manual calculations. The goal is to develop a webpage that I can use to:
    1. Reduce total amount of clicks for conversions
    2. Use a familiar layout so that players can easily find desired currencies
    3. Make an interactive layout that players can tailor to their own specific goals of either trading or farming. 

Process:
The initial design for the project consists of currency buttons at the top with a full table of every currency in the game (see image 1). There are a couple of problems with this initial design and they are as follows:
    1. Scrolling would become tedious as there is no intentionally organized elements. In other words, there is no specific order the currencies are placed in, which means that the user would be forced to ctrl + f or scroll until they see their desired currency. In a game where time efficiency is very important, this would be very undesirable and inconvenient. 
    2. There was no calculations being made beyond finding the current price. It would show current price of a currency and only compare it to another. There's no flexibility for quantity of currencies.
    3. There are no fields or interactive elements that would allow a user to manipulate quantities.  

For the second design, I'm planning to use a parallax approach to keep the currency buttons fixed in place while scrolling. This accompanied with a table that reactively loads new rows of currencies makes for a much better UX. 

Obstacles or Problems: