# Dashboard




## Typography


Lato is Tillhub’s primary typeface for the web. Using consistent typefaces and sizes helps maintain a coherent product experience.


 (typography table)


## Color Palette

(color swatch component)

(With names: 
Orbital Blue #232E3D
Galactic Blue #279FF6
Magnetic Grey #A7ABB1
lunar Grey #E9EAEB
Meteor Grey #595959
Velocity Green #32B5A5
Solaris Yellow #FCF5E8
Cosmic Red #FF3B30
Zenith Black #000000
Flux White #FFFFFF
Celestial Orange #F0A964)


#### Code Snippet


```js css html here is a code snippet for the code will add it later ```         


### Usage

We use [Dark Blue - maybe we can make a name for this] on main navigation backgrounds, primary text, and logos. When you need a single color to represent Tillhub use [Dark Blue].
When applying colors to the interface stick with these rules:
* Use [lighter blue] for primary CTA and secondary headers
* Use red for “Danger” actions like deleting or signifying low stock levels.
* Use yellow for signifying medium stock levels.
* Use green for tertiary buttons, good stock levels, and positive feedback.



## Buttons

Buttons are used to communicate importance, each variation has an intention and can be applied to a variety of HTML nodes.

### Primary
(button component)

### Secondary
(button component)

### Tertiary 
(button component)

#### Code Snippet

```js css html here is a code snippet for the code will add it later ```         


### Dos + Don'ts

###### Spacing

![](assets/bttndo.png)

**Do:** When a primary and secondary button is needed in a modal, place them side by side. 


![](assets/bttndont.png)

**Don't:** Place primary and secondary buttons on opposite sides of modals or screens 

###### Hierarchy

![](assets/bttndohierarchy.png)
**Do:** In modals with three button options, keep the primary and secondary buttons together and negating button separate. 

![](assets/bttndonthierarchy.png)
**Don't:** Break up primary and secondary buttons with negating buttons. 


### Pagination
We Use pagination to indicate a series of related content across multiple pages. 

![](assets/pagination.png)

### Dropdown Search

Tillhub dropdown search component enables the user to find words, sentences, dates, numbers in a collection of products, staff, customers, analytics and other sources. 

###### Large
![](assets/combolarge.png)

###### Small
![](assets/combosmall.png)

### Button Tab 
The button tab component is built upon navs and cards internally. It allows the user to quickly navigate between categorical information. 

![](assets/header.png)

### Icons in Buttons

![](assets/sidemenu.png)

### Dos + Don'ts

![](assets/icondo.png)

**Do:** Use sufficient space between icons when they are next to each other to avoid cognitive overload. Enough space allows the user to know where they can and cannot click. 



![](assets/icondont.png)
**Don't:** Place icons too close together, it reduces the accuracy of the click. 

## Illustrations
Tillhub uses illustration to tell our brand story while encouraging response, explaining complex ideas, provoke delight, or read and learn about the dashboard. An Illustration can easily distract or overwhelm the viewer when used decorative instead it can become distracting hindering usability of the product. 

_Common Places to Use Illustration:_
 - Empty states: error messages or a page has no results
 - Onboarding: explaining the use of a new feature or product

_Signs that you should Use Illustration:_
- Use if the user is frustrated and doesn’t know what to do next
- Features are being bypassed, used incorrectly, or not used at all 
- Text-heavy areas that aren’t being read or understood
- To  congratulate the user or celebrate 
- To speak directly to the user in a more personal way

### Empty Spaces
When no content is available or an error message occurs filling the space with a visual representation, short descriptive text, and a button to create new or redirect our shop keepers. Using illustration in empty spaces helps communicate, inform or direct our shop keepers to make the next decision.

![](assets/noresults.png)
![](assets/404.png)
![](assets/error.png)

## Onboarding
When new features or products are launched it’s important to educate our users so that they can be successful.

### Illustrations
When creating an onboarding experience, include an illustration that is explanatory of the action that needs to be taken while keeping the look and feel of the Tillhub brand.  

![](assets/onboarding.png)

### Tone
Use a friendly casual tone that feels relatable and speaks directly to the experience the user will have when configuring or using the feature/product. It’s important to speak directly without overwhelming the user with too much text. Break up text with bold call-outs in black to focus on the direct actions in each section. 

![](assets/tone.png)

### Flow
To design a full onboarding experience create a step by step flow explaining the order in which the user will configure the new feature or product. Use a checklist to give the tour, refrain from placing it over actionable items.

![](assets/flow.png)

Moving from one checklist item to the next in the flow use “Learn More” to show the user there is more to the tour and giving them the choice to continue or come back to it later.


## Form Elements
Buttons are used to communicate the importance, each variation has an intention and can be applied to a variety of HTML nodes. 

### Input States

(input component)

### Sizing

![](assets/inputsize.png)

### Do's + Don'ts

###### Alignment
![](assets/doinputalign.png)
**Do:** Input Title should align with Input Field


![](assets/dontinputalign.png)
![](assets/dontinputalign2.png)
**Don't:**  Input Title not aligned with Input Field or Too much space between Input Title and Input Field  

###### Spacing + Titles

![](assets/dospacinginput.png)

![](assets/dontspacinginput.png)


### Checkboxes

Check Boxes can be used singularly or in bulk action, below is the styling for both instances.  

![](assets/checkbox.png)

### Usage

- To select multiple options

### Radio Buttons

![](assets/radiobutton.png)

### Usage
- Only use to select between two options
- Used in filter modals to conserve space


### Toggle

![](assets/toggle.png)

### Usage

![](assets/usagetoggle.png)
- Use a toggle to choose between two or 3 buttons 

![](assets/usageswitch.png)
- Use a switch style toggle to turn action on or off


### Chips

![](assets/chip.png)

###### Sizing

![](assets/chipsize.png)

### Date Picker

![](assets/datepicker.png)

### Drop Zone
Tillhub's ID Generators use a drag and drop component allowing users to create, move around, and customize complex identification numbers for their products,customers, and staff.

![](assets/dropzone.png)

![](assets/dropzone1.png)

## Filters

### Do's + Don'ts


## Modals

### Behaviors 
Use a center modal when there is only one input or one element in focus.
![](assets/modalcenter.png)

Use a side modal when there is more than one input. The side modal can contain up to one column of content.
![](assets/modalside.png)


Use a full-screen modal when there are two columns of content.


## Notifications 

### Popover
Popovers are used when an explanation is needed about a page, button, or feature. 

### Alerts
Alerts are visual feedback for our users to know that they have done something successfully, missing some information, or something went wrong with the server. The duration of the alert should span 5 seconds allowing the user to be able to read the notifications. 

###### Success


###### Warning


###### Error 

## Tables

### Columns 
Adding and removing columns is a behavior that customizes table view for our shopkeepers. The dropdown button on the side of the table opens up a drawer of checkboxes. Each checkbox adds or removes specified columns. 

![](assets/columnadder.gif)

### Rows
The collapsing feature in rows allows users to reveal more information in a table view. 

![](assets/rowcollapse.gif)

## Layout 

The following layout patterns are common ways Tillhub arranges the content of the screen. 

### Structure

The dashboard consists of layers of page components and layout components within the app frame. The layout holds cards, components, and banners in a way that responds to different screen sizes. 

###### App Frame
![](assets/layoutopen.jpg)

![](assets/layoutclosed.jpg)

The outer UI is the app frame of the application. It holds global features like top-level navigation and search and is also collapsible. 

###### Page Component

![](assets/pagecomponent1.jpg)

The page component: 
- Container for the content of each specific page 
- Controls the horizontal margins of the content area 

![](assets/pagecomponent2.jpg)

![](assets/pagecomponent3.jpg)


## Margin + Padding

Tillhub’s 5 grid system is the standard for spacing between components, component heights, tables spacing, icons, margins, and padding. By using multiples of 5 it makes it easier to make design and development decisions while keeping a cohesive aesthetic. 


### Tables

Each cell on a standard view of a table has 10px spacing above and below.

![](assets/tablelayout.png)

On a dropdown  view, cells alternate between 15px and 10px between cells. 

![](assets/dropdownlayout.png)

### Do's + Don'ts
Reviewing the following guidelines will help make quick decisions when designing or developing tables and their behaviors. 

###### Alignment
![](assets/aligndo.png)
**Do:** Align all buttons and search fields with tables

![](assets/aligndont.png)
**Don't:** Place buttons and search fields not aligned with tables 


###### Row Spacing 

![](assets/rowdo.png)
**Do:** Have sufficient padding in rows 

![](assets/rowdont.png)
**Don't:** Missing padding in rows making the text illegible 



###### Contrast 

![](assets/contrastdo.png)
**Do:** Sufficiently contrast collapsible rows to differentiate the dropdown from the table 

![](assets/contrastdont.png)
**Don't:** Insufficient contrast on collapsible rows makes it difficult for the user to differentiate the collapsible rows from the table 

### Components

The height and indent of a group of inputs is 20px. 

![](assets/componentspace.png)

### Group Toggle
Maintain 15px between toggle group components.

![](assets/componentspace.png)




## Actionable Language

### Sentences 
Use direct language to tell the user what to do, start with a verb. Keep copy short, direct, instructive, and not too creative straight. Be straight to the point and avoid saying "you can."



![](assets/do.png)
Add your first product and see how it looks in your store


![](assets/dont.png)

- Products appear in your store after you add them.
- Add your first product so you can see how it looks in your store. 
- Use the [verb + noun] pattern, such as "Learn more"
- Not use punctuation, with the excpetion of question marks when needed 



### Buttons

Dashboard: Export, Save, +new, cancel, delete, create. 

### Apply vs. Save

Use "Apply" as an option for shop owners to add from the date picker.

Use "Save" for the web as the default for any action that saves immediately to the database. 

![](assets/do.png)
For web, use the verb "Apply for the date picker filter"

![](assets/datepicker.png)

![](assets/dont.png)
- Save
- Done
- Save Filter 

![](assets/do.png)
For web, use "Save" for immediate changes to the database

(picture of edit product)

[](assets/dont.png)
- Done
- Finished
- Close
- Apply


## Dark Mode 

The magic of Dark Mode is:
- A balance of darkness + contrasting colors
- Mastering the color scheme
- Mastering typography
- A focus on the content standing out against a darker background

Ensure sufficient color contrast with ratio no lower than 4.5:1

On dark Tillhub blue #232E3D, balancing: White, light grey, Tillhub light blue #279FF6, Red for alerts and green for success. 

###### Dark cards on light 
![](assets/dark1.png)


###### Light cards on dark 
![](assets/light1.png)

- Widgets/ Card UI style:
Invert contrast (lighter card on darker background like example 1 or darker card on lighter background like example 2). Remove borders and shadows.

- Icons: 
On side navigation are white. Others, less used are light grey like notifications and help (think of hierarchy to make some icons brighter).

- Menu selected: 
Light blue to offer contrast

- CTAs:
Primary: same as light mode
Secondary: remove borders




![](assets/dark.png)

![](assets/light.png)





