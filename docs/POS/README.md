# IOS Resolution Specifications 

## Device Asset Resolution (table) 



## Typography

iOS uses two typfaces, Marr Sans and Lato. Marr Sans is our display typeface and is used for titles and headers. Lato is for body copy, button copy and any other content that is longer than a couple of words. 

#### Display (table)


### Body Copy (table)


## Buttons


### 35px
#

###### Tileset
![](assets/35px.png)
![](assets/35px1.png)

###### Cart
![](assets/carts.png)

### 45px
#

###### Cart
![](assets/cart1.png)
![](assets/cart2.png)


###### Close Register 

![](assets/submit.png)
![](assets/xreport.png)


###### End Sale
![](assets/emailenabled.png)
![](assets/emaildisabled.png)


###### History
![](assets/refund.png)
![](assets/book.png)
![](assets/refundwhite.png)
![](assets/refundblue.png)


###### Login
![](assets/signin.png)


###### Filters
![](assets/showresults.png)
![](assets/cancelsale.png)


###### Product Sets
![](assets/abbrechen.png)
![](assets/speichern.png)


###### Checkout
![](assets/split.png)


### 50px
#

###### Cash Payment 
![](assets/cashpayment.png)
![](assets/cashpayment1.png)


### 100px
#

###### Variants
![](assets/none.png)
![](assets/black.png)
![](assets/blue.png)



## Icons 

### Navigation Menu

![](assets/navicons.png)

### Tab Bar

![](assets/tabicons.png)


### Cart

![](assets/carticons.png)


### History

![](assets/historyicons.png)


### Library 

![](assets/libraryicons.png)


### Control

![](assets/controlicons.png)


### Settings

![](assets/settingsicons.png)


## UI Popovers

### Accessibility 

![](assets/accessibility.png)


### Cart Actions

![](assets/cartactions.jpg)


## Slider

### Saved Carts + Delivery Notes 

![](assets/slider.png)


## Stepper 

### Accessibility 

![](assets/stepper.png)


## Segmented Controls

### Expenses + Deposits 

![](assets/segmented.png)


### Tips

![](assets/tips.png)


## Layout

### App Frame 

![](assets/appframe1.png)

![](assets/appframe2.png)


### Tiles 

![](assets/tiles.png)


## Page Components


### Cart

![](assets/cart.png)


### Workspace

![](assets/workspace.png)

### Library

![](assets/library.png)


### History

![](assets/history.png)


### Arranging Content

![](assets/content.png)


### Single Content

![](assets/singlecolumn.png)


## Behaviors 

### Long Press to Organize Tiles

Replicating the iOS press and hold interaction, the POS uses it in edit mode to organize and delete product tiles. 

![](assets/tiles.gif)



## Multi-Directional Swipe

Different swiping is done for different actions, in particular, contradictory actions work best using opposite sides of the screen. For example, edit on the left and delete on the right. 

![](assets/shortswipe.gif)

### Long Swipe
The long swipe is a feature Tillhub uses to make deleting a table element faster. With a short swipe, it must be clicked again to make the choice to delete. A long swipe can remove the step of the click, instantly deleting the table item. 

![](assets/longswipe.gif)



## Pull to Refresh 

Pull to refresh is used to retrieve the latest data from the server. This functionality can be added to a screen that doesn't automatically retrieve data. 

![](assets/refresh.gif)


## Drilling in

Drilling in is a standard navigation presentations on iOS. It's used for moving down the app's navigation hierarchy, for example, moving from a customer list to a detail screen. Remember to reverse the navigation when moving back up the hierarchy. 

![](assets/drillingin.gif)


## Alerts

Alerts are visual feedback for our users to know that they have done something successfully, they've forgotten to input information, or something went wrong with the server. The duration of the alert should psan 5 seconds allowing the user to be able to read the notification. 

###### Success
![](assets/success.jpg)

###### Warning
![](assets/warning.jpg)

###### Error 
![](assets/alert.jpg)


## Modals 

Modals present from the bottom to the center. 

Modals are used for:
- Saving and discarding changes
- Providing detailed information and help on how to continue
- Creating or editing a resource (product, function, customer, etc.)


![](assets/modal.gif)



## Table View

### Scan

![](assets/scan.png)


### Cart

![](assets/carttableview.png)

### Library

![](assets/librarytableview.png)


### Saved Carts 

![](assets/savedcarts.png)


### Balance

![](assets/tableviewbalance.png)


### Payment Methods

![](assets/paymenttable.png)


### Customer History

![](assets/customertable.png)


## Stack View

### Customers 

![](assets/customer.jpg)

### Discounts 

![](assets/discounts.jpg)


### Dos and Don'ts 

![](assets/docustomer.png)

**Do:** Align text vertically in line with icon, when there are 1 to 4 lines the same vertical center alignment stays the same.  


![](assets/dontcustomer.png)
**Don't:** Give a specific placement for titles and body copy, this throws off the vertical alignment. 


![](assets/docart.png)
**Do:** Align text vertically in each cell no matter if it's 1 line or 4 lines. 

![](assets/dontcart.png)
**Don't:** Format text line placement the same in each cell, it leaves to much white space when there is only one line present 


![])(assets/dodiscount.png)
**Do:** Align text vertically in line with icon, when there are two lines the same vertical center alignment stays the same.  


![](assets/dontdiscount.png)
**Don’t:** Give a specific placement for titles and body copy, this throws off the vertical alignment. 


## Collection View 

### Tiles

![](assets/collectiontiles.png)


### Tabs

![](assets/tabs.png)


### Counting Helper

![](assets/countinghelper.png)

### Balance Counter

![](assets/balancecounter.png)

### Switch User

![](assets/switchuser.png)


## Split View

### Library 

![](assets/librarysplitview.png)


### History

![](assets/historysplitview.png)


### Expenses + Deposits

![](assets/expensedeposit.png)


### Saved Carts + Delivery Notes 

![](assets/savedcartsandnotes.png)

### Settings

![](assets/settings.png)


## Titles 

### Formatting 

Having image and text formatting guidelines decreases the cognitive load of the user looking at their sale's screen. Images and text show be aligned between the different types of tiles. 

###### Discounts

![](assets/discounttile.png)  ![](assets/discounttile1.png )


When formatting a discount tile, the image should be placed slightly above the halfway mark, this way the text will not fall to the bottom of the tile letting it align properly with the other types of tiles. 



###### Functions

![](assets/function.png) ![](assets/functionempty.png)


Function tiles are identified with a colored strip on the bottom half of the tile. The text header is fixed to the top third of the section, and the second line is fixed to the bottom third of the section. When an image is uploaded it will sit behind the text block centered. 


###### Product + Variant

![](assets/productvariant.png) ![](assets/productvariantempty.png) ![](assets/voucherempty.png)

Product tiles let the cashier know at a glance the type of product they are selling. The tile is 50% text, 50% empty space or image. When an image is uploaded the text space is 905 opaque and the image fills up the whole space. 

## Images

### Add Product

![](assets/addproduct.jpg)

### Add Customer

![](assets/addcustomer.jpg)


## Pickers

### Country

### Birthday

### Date 


##Avatars

A placeholder image for customers and users: cashiers and salespeople. 

![](assets/unisex.png)
![](assets/woman.png)
![](assets/man.png)
![](assets/picture.png)


## Switches / Toggles

Use Tillhub blue to be consistent with the brand identity, instead of th iOS default color. 

###### On
![](assets/switchon.png)


###### Off
![](assets/switchoff.png)


## Illustrations

![](assets/illustrations.png)


## Numpads

###### Quantity 

![](assets/quantity.png)


###### Scan Item

![](assets/scanitem.png)


###### Book Expense

![](assets/bookexpense.png)

###### Close Register

![](assets/closeregister.png)



## Receipt

![](assets/receipt.png)


## Information Grouping

On long form if input doesn't require large amounts of text, place inline instead of listing to avoid endless scrolling. Grouping information helps break up information creating sections. 

![](assets/groupdo.png)
**Do:** Use short input fields when a form is extensive. Shortening the input fields makes the form shorter creates less scrolling for the user.


![](assets/groupdont.png)
**Don’t:** Use short input fields when the form is short it creates a better experience for the user by creating a more aesthetically pleasing form with less clutter. 