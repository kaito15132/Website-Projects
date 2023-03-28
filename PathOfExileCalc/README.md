**Instructions:**
1. Set the number of the currency you have by filling in the text field or using the scroll bar.
2. Select the currency you have.
3. Select any number of currencies you want to convert to.


**Case Study**

**Challenge:**

Currently there are two ways to do currency conversions in Path of Exile. You either go through the game's designated trade website and check prices on individual types of currency, or you would go through POE ninja to find current prices and do manual calculations. The problem with using the trade website is that there are times when queries can take well over 10 seconds. The goal is to develop a webpage that I can use to:
1. Reduce total amount of clicks for conversions
2. Use a familiar layout so that players can easily find desired currencies
3. Make an interactive layout that players can tailor to their own specific goals of either trading or farming.
4. Improve the amount of time that goes into a currency search.

**Process:**

The initial design for the project consists of currency buttons at the top with a full table of every currency in the game (https://bit.ly/3lajSEs) There are a couple of problems with this initial design and they are as follows:
1. Scrolling would become tedious as there is no intentionally organized elements. In other words, there is no specific order the currencies are placed in, which means that the user would be forced to ctrl + f or scroll until they see their desired currency. In a game where time efficiency is very important, this would be undesirable and inconvenient.
2. There was no calculations being made beyond finding the current price. It would show current price of a currency and only compare it to another. There's no flexibility for quantity of currencies.
3. There are no fields or interactive elements that would allow a user to manipulate quantities.  

For the second design (https://bit.ly/3JoHZaa), I used a parallax approach to keep the currency buttons fixed in place while scrolling, which allows the user to see the currency menu at all times. I've also implemented scroll functionality and a text field that allows quantity changes. 

**Results:**

In a search for 4 different currencies, I was able to reduce clicks by 50%. In terms of time, each search would take around 5 seconds through the trade website, and my website can do all 4 conversions in 5 seconds resulting in a 400% improvement. The layout was succesfully implemented and looks exactly like the in-game UI, and the table layout shows all desired currencies.
